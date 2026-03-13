const S3_BASE = "https://hardware-website-images.s3.us-east-1.amazonaws.com";
const S3_HOSTNAME = "hardware-website-images.s3.us-east-1.amazonaws.com";

// Matches /storage/{id}/{filename} on any non-S3 host
const STORAGE_PATTERN = /https?:\/\/(?!hardware-website-images\.s3)[^/]+\/storage\/(\d+)\/([^?#]+)/;

/**
 * @param {string} url
 * @param {'product'|'other'} type - 'product' stores under /products/, 'other' keeps /{id}/
 */
export const sanitizeUrl = (data, type = 'other') => {
    const url = (data && typeof data === 'object') ? (data.asset_url || data.original_url) : data;
    if (!url || typeof url !== 'string') return url;

    // Already an S3 URL — pass through untouched
    if (url.includes(S3_HOSTNAME)) return url;

    // Rewrite /storage/{id}/{filename} or absolute storage URLs to S3
    const match = url.match(STORAGE_PATTERN) || url.match(/\/storage\/(\d+)\/([^?#]+)/);
    if (match) {
        const id = match[match.length - 2];
        const filename = match[match.length - 1];
        if (type === 'product') {
            return `${S3_BASE}/products/${filename}`;
        }
        return `${S3_BASE}/${id}/${filename}`;
    }

    // Fallback for relative paths starting with /
    if (url.startsWith('/storage/')) {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        if (type === 'product') return `${S3_BASE}/products/${filename}`;
    }

    // Replace double slashes except after colon (http://)
    return url.replace(/([^:]\/)\/+/g, "$1");
};
