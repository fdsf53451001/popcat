var point = 0;
var last_point = 0;

var ban = false;

var status = 0; //0=not press 1=press

var styles = [
    ['style1','asset/photo/CAT1.JPG','asset/photo/CAT2.JPG','asset/photo/CAT_ERR.JPG'],
    ['style2','asset/photo/CAT21.JPG','asset/photo/CAT22.JPG','asset/photo/CAT_ERR.JPG'],
    ['style3','asset/photo/CAT31.JPG','asset/photo/CAT32.JPG','asset/photo/CAT_ERR.JPG'],
    ['style4','asset/photo/CAT41.JPG','asset/photo/CAT42.JPG','asset/photo/CAT_ERR.JPG'],
    ['style5','asset/photo/CAT51.JPG','asset/photo/CAT52.JPG','asset/photo/CAT_ERR.JPG'],
]
var current_style = 0;

const cacheFiles = [
    'index.html',
    'index.css',
    'src/js/global.js',
    'src/js/index.js',
    'src/js/view.js',
    'asset/photo/CAT1.JPG',
    'asset/photo/CAT2.JPG',
]
const cacheName = 'static-v1';