let url = 'https://github.com/pipiorange030/photoroom/blob/main/newcss.css';
let originalResponse = $response.body;
let newCssLink = `<link rel="stylesheet" type="text/css" href="${url}">`;
let newBody = originalResponse.replace(/<\/head>/i, `${newCssLink}</head>`);
$done({ body: newBody });
