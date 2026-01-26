export const sanitizeUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    // Replace double slashes with single slash, except after colon (http://)
    return url.replace(/([^:]\/)\/+/g, "$1");
};
