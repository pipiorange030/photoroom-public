const css = `
#fake_avivid_waterfall_webpush1,
.a__gs_cy,
.fake_avivid_waterfall_webpush_active_left,
.normal-top:nth-of-type(1),
.ad-area-close,
.ad-area-close ~ div,
.reader-cartoon-chapter iframe,
.reader-book-read-wraper article div:first-child,
.index-banner,
.manga-list:first-of-type,
.manga-list-2:nth-of-type(1),
.manga-list-title:nth-of-type(1),
.index-marquee,
.ifpopup_content,
.ifpopup_div,
.row.stui-pannel,
.blocked_hint_msg_pc,
#index-marquee-block,
.app_download,
.reader-home-swiper,
.reader-home-title-fixed,
#temp_block_01 + div,
#temp_block_02 + div,
#temp_block_03 + div,
#temp_block_04 + div,
.reader-zone-list-view.list.no-hairlines + div,
iframe,
.guess_mh_list + div {
    display: none !important;
}

.ad-area {
    opacity: 0 !important;
    height: 0px !important;
}
`;

$done({ body: $response.body.replace(/<\/head>/, `<style>${css}</style></head>`) });