const S3_BASE = "https://hardware-website-images.s3.us-east-1.amazonaws.com";
const S3_HOSTNAME = "hardware-website-images.s3.us-east-1.amazonaws.com";
const CLOUDFRONT_HOSTNAME = "d3243ix3g2hwoc.cloudfront.net";

// Matches /storage/{id}/{filename} or /{id}/{filename} on any non-S3 host
const STORAGE_PATTERN = /https?:\/\/(?!hardware-website-images\.s3)[^/]+(?:\/storage)?\/(\d+)\/([^?#]+)/;

const cleanUrl = (url) => url.replace(/\\/g, "/").replace(/([^:]\/)\/+/g, "$1");

/**
 * @param {string} url
 * @param {'product'|'other'} type - 'product' stores under /products/, 'other' keeps /{id}/
 */
export const sanitizeUrl = (data, type = "other") => {
    const item = Array.isArray(data) ? data[0] : data;
    let url = item && typeof item === "object" ? item.asset_url || item.original_url || item.url : item;

    if (!url || typeof url !== "string" || !url.includes("/")) return null;

    // Already on CDN/S3 — use as-is
    if (
        url.includes(S3_HOSTNAME) ||
        url.includes(CLOUDFRONT_HOSTNAME) ||
        (url.startsWith("http") && !url.includes("/storage/") && !STORAGE_PATTERN.test(url))
    ) {
        return cleanUrl(url);
    }

    // Rewrite legacy storage paths (relative or absolute /storage/{id}/file)
    let match = url.match(STORAGE_PATTERN);
    if (!match) {
        match = url.match(/^\/?(?:storage\/)?(\d+)\/([^?#]+)/);
    }

    if (match) {
        const id = match[1];
        const filename = match[2];

        if (type === "product" && !url.includes(`/${id}/`)) {
            return `${S3_BASE}/products/${filename}`;
        }
        return `${S3_BASE}/${id}/${filename}`;
    }

    return cleanUrl(url);
};
