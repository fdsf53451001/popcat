function update_point(p){
    point = p;
    set_point_view();
}

function onKeyPressed(e){
    if(status==0 && !ban){
        document.getElementById('cat').setAttribute('src',styles[current_style][2])
        status=1;
    }
}

function onKeyReleased(e){
    if(status==1 && !ban){
        document.getElementById('cat').setAttribute('src',styles[current_style][1]);
        update_point(point+1);
        set_point_view();
        status=0;
    }
}

function banHappened(){
    ban = true;
    document.getElementById('cat').setAttribute('src',styles[current_style][3]);
}

// initialize
document.getElementById('cat').setAttribute('src',styles[current_style][1]);

document.addEventListener('keydown',onKeyPressed);
document.addEventListener('mousedown',onKeyPressed);

document.addEventListener('keyup',onKeyReleased);
document.addEventListener('mouseup',onKeyReleased);

setInterval(function(){ //watchdog, used to prevent bot
    if(point-last_point>100){
        banHappened();
    }
    last_point = point
},1000);

set_style_sel();