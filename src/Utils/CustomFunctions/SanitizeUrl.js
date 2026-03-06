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

    // Rewrite local/production /storage/{id}/{filename} → S3
    const match = url.match(STORAGE_PATTERN);
    if (match) {
        const id = match[1];
        const filename = match[2];
        if (type === 'product') {
            // Product images go into /products/ prefix
            return `${S3_BASE}/products/${filename}`;
        }
        // Other assets (logos, favicons, etc.) keep the /{id}/ structure
        return `${S3_BASE}/${id}/${filename}`;
    }

    // Replace double slashes except after colon (http://)
    return url.replace(/([^:]\/)\/+/g, "$1");
};
