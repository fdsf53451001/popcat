function set_style_sel(){
    for(let i=0;i<styles.length;i++){
        code = '<img class="sel-style-item" src="'+styles[i][1]+'" onclick="set_style('+i+')" />';
        document.getElementById('sel-style').innerHTML+=code;
    }
}

function set_style(i){
    current_style = i;
    document.getElementById('cat').setAttribute('src',styles[current_style][1]);
    update_point(0);
}

function set_point_view(){
    document.getElementById('point').innerHTML = point;
}