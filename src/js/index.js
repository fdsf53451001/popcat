function preload_img(){
    for(let i=0;i<styles.length;i++){
        for(let j=1;j<=3;j++){
            img = new Image();
            img.src = styles[i][j];
        }
    }
}

function set_style(i){
    current_style = i;
    update_point(0);
    set_style_view(i);
}

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
        status=0;
    }
}

function banHappened(){
    ban = true;
    document.getElementById('cat').setAttribute('src',styles[current_style][3]);
}

function init(){    // initialize
    // check device
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    isMobile = mobileDevice.some(e => navigator.userAgent.match(e));
    console.log(isMobile)

    // register service worker
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
        .then(reg=>{console.log('SW registered!',reg);})
        .catch(err=>{console.log('ERR',err);});
    }

    // loading page
    preload_img();
    set_style_sel();

    // setting respond
    document.addEventListener('keydown',onKeyPressed);
    document.addEventListener('pointerdown',function(e){
        if(e.target.id!='cat'){return;}
        onKeyPressed(e);
    });
    document.addEventListener('keyup',onKeyReleased);
    document.addEventListener('pointerup',function(e){
        if(e.target.id!='cat'){return;}
        onKeyReleased(e);
    });
    // if use mouseup/mousedown, touch screen with fire both on finger leave screen
    // which means photo change too quick for user to see.

    setInterval(function(){ //watchdog, used to prevent bot
        if(point-last_point>100){
            banHappened();
        }
        last_point = point
    },1000);

    
}

init();