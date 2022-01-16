var point = 0;
var last_point = 0;

var isMobile = false;
var styleCount = 5;

var ban = false;

var status = 0; //0=not press 1=press

const styles = [
    ['style1','asset/photo/CAT1.JPG','asset/photo/CAT2.JPG','asset/photo/CAT_ERR.JPG'],
    ['style2','asset/photo/CAT21.JPG','asset/photo/CAT22.JPG','asset/photo/CAT_ERR.JPG'],
    ['style3','asset/photo/CAT31.JPG','asset/photo/CAT32.JPG','asset/photo/CAT_ERR.JPG'],
    ['style4','asset/photo/CAT41.JPG','asset/photo/CAT42.JPG','asset/photo/CAT_ERR.JPG'],
    ['style5','asset/photo/CAT51.JPG','asset/photo/CAT52.JPG','asset/photo/CAT_ERR.JPG'],
    ['style6','asset/photo/CAT61.JPG','asset/photo/CAT62.JPG','asset/photo/CAT_ERR.JPG'],
    ['style7','asset/photo/subaru_meme_1.JPG','asset/photo/subaru_meme_2.JPG','asset/photo/CAT_ERR.JPG'],
]
var current_style = 0;

var pop_music = new Audio('asset/music/POP.wav');