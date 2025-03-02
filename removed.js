// 脚本名称: Hide Shadow DOM Banner on manwasa.cc
// 匹配规则: ^https?://manwasa\.cc

// 查找 Shadow DOM 宿主元素
const shadowHost = document.querySelector('shadow-host-selector');
if (shadowHost && shadowHost.shadowRoot) {
    const banner = shadowHost.shadowRoot.querySelector('.index-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}
