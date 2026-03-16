const S3_BASE = "https://hardware-website-images.s3.us-east-1.amazonaws.com";
const S3_HOSTNAME = "hardware-website-images.s3.us-east-1.amazonaws.com";

// Matches /storage/{id}/{filename} on any non-S3 host
const STORAGE_PATTERN = /https?:\/\/(?!hardware-website-images\.s3)[^/]+\/storage\/(\d+)\/([^?#]+)/;

/**
 * @param {string} url
 * @param {'product'|'other'} type - 'product' stores under /products/, 'other' keeps /{id}/
 */
export const sanitizeUrl = (data, type = 'other') => {
    // Handle if data is an array (sometimes relationships returned as arrays)
    const item = Array.isArray(data) ? data[0] : data;

    // Extract URL from object or use as string
    let url = (item && typeof item === 'object') ? (item.asset_url || item.original_url || item.url) : item;

    // If no valid string URL found, return null (to trigger fallback)
    if (!url || typeof url !== 'string' || !url.includes('/')) return null;

    // Already an S3 URL — pass through untouched but clean escaped slashes
    if (url.includes(S3_HOSTNAME)) {
        return url.replace(/\\/g, '/').replace(/([^:]\/)\/+/g, "$1");
    }

    // Rewrite /storage/{id}/{filename} or absolute storage URLs to S3
    const match = url.match(STORAGE_PATTERN) || url.match(/\/storage\/(\d+)\/([^?#]+)/);
    if (match) {
        const id = match[match.length - 2];
        const filename = match[match.length - 1];

        // Only force /products/ prefix if we are sure it belongs there (legacy)
        // For new products, we should keep the ID-based path
        if (type === 'product' && !url.includes(`/${id}/`)) {
            return `${S3_BASE}/products/${filename}`;
        }
        return `${S3_BASE}/${id}/${filename}`;
    }

    // Fallback for relative paths starting with /
    if (url.startsWith('/storage/')) {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        const id = parts[parts.length - 2];
        if (type === 'product' && !url.includes(`/${id}/`)) return `${S3_BASE}/products/${filename}`;
        return `${S3_BASE}/${id}/${filename}`;
    }

    // Replace double slashes except after colon (http://)
    return url.replace(/\\/g, '/').replace(/([^:]\/)\/+/g, "$1");
};
