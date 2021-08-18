function onKeyPressed(e){
    if(status==0 && !ban){
        console.log(123);
        document.getElementById('cat').setAttribute('src','src/CAT2.JPG')
        status=1;
    }
}

function onKeyReleased(e){
    if(status==1 && !ban){
        console.log(456);
        document.getElementById('cat').setAttribute('src','src/CAT1.JPG');
        point+=1;
        document.getElementById('point').innerHTML = point;
        status=0;
    }
}

function banHappened(){
    ban = true;
    document.getElementById('cat').setAttribute('src','src/CAT_ERR.JPG');
}

document.addEventListener('keydown',onKeyPressed);
document.addEventListener('keyup',onKeyReleased);

setInterval(function(){ //watchdog, used to prevent bot
    if(point-last_point>100){
        banHappened();
    }
    last_point = point
},1000);