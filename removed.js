// 脚本名称: Hide Dynamic Banner on manwasa.cc
// 匹配规则: ^https?://manwasa\.cc

// 等待页面加载完成
window.addEventListener('load', function() {
    // 检查元素是否存在
    const banner = document.querySelector('.index-banner');
    if (banner) {
        banner.style.display = 'none';
    }
});
