// 脚本名称: Remove Ads for Domestic Domain

const removeAds = () => {
    const adSelectors = ['.ad-area', '.index-banner', 'iframe[src*="ad"]'];
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
};

window.addEventListener('load', removeAds);
