const css = `
/* 隐藏 ad-top-info 元素 */
div.ad-top-info {
    display: none !important;
}

/* 隐藏 two-ad-area 元素 */
div.two-ad-area {
    display: none !important;
}
`;

$done({ body: $response.body.replace(/<\/head>/, `<style>${css}</style></head>`) });
