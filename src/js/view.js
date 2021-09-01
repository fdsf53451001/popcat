function set_style_sel(){
    if(isMobile){styleCount=2;}
    for(let i=0;i<Math.ceil(styles.length/styleCount);i++){
        if(i==0){ //first section
            for(let j=0;j<styleCount;j++){
                code = '<img class="sel-style-item" src="'+styles[j][1]+'" onclick="set_style('+j+')" />';
                document.getElementById('sel-style').innerHTML+=code;
            }
            continue;
        }
        //other section
        code='<div class="display-center">'
        for(let j=0;j<styleCount;j++){
            if(styleCount*i+j==styles.length){break;}
            code += '<img class="sel-style-item" src="'+styles[styleCount*i+j][1]+'" onclick="set_style('+(styleCount*i+j)+')" />';
        }
        code+='</div>'
        document.getElementById('style-hide').innerHTML+=code;

    }
}

function set_style_view(i){
    document.getElementById('cat').setAttribute('src',styles[current_style][1]);
    //collapse show area
    if(i>=styleCount){ 
        var collapseElementList = [].slice.call(document.querySelectorAll('#style-hide'))
        var collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl)
        })
    }
}

function set_point_view(){
    document.getElementById('point').innerHTML = point;
}