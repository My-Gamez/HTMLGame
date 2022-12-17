var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1350;
canvas.height = 600;

var bg = new Image();
bg.src = "image/bg.png";
bx = 0;
by = 0;
bs = 2;

var ufo = new Image();
ufo.src = "image/ufo.png";
ux = 0;
uy = 250;
uys = 50;

var roc = new Image();
roc.src = "image/rocket.png";
a1sx = 0;
a1sy = 0;
a1x = 1400;
a1y = Math.floor(Math.random()*500);
a1xs = 4;
var roc2 = new Image();
roc2.src = "image/rocket.png";
a2x = 1800;
a2y = Math.floor(Math.random()*500);
var roc3 = new Image();
roc3.src = "image/rocket.png";
a3x = 2000;
a3y = Math.floor(Math.random()*500);
var roc4 = new Image();
roc4.src = "image/rocket.png";
a4x = 2500;
a4y = Math.floor(Math.random()*500);

var ms = new Image();
ms.src = "image/bullet.png";
mx = 200;
my = uy+50;
mw = 25;
mh = 10;

var bulletPass = true;
var hit = 0;
var score = 0;
var frame = 0;
document.getElementById('print').innerText = "X"+hit;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, bx, by, 2700, 600);
    ctx.drawImage(ufo,ux, uy, 200,100);
    ctx.drawImage(roc, a1x, a1y, 130, 50);
    ctx.drawImage(roc2, a2x, a2y, 130, 50);
    ctx.drawImage(roc3, a3x, a3y, 130, 50);
    ctx.drawImage(roc4, a4x, a4y, 130, 50);
    
    if(a1x<-100){
        a1x = 1400;
        a1y = Math.floor(Math.random()*500);
    }
    else{
        a1x-=a1xs;
    }
    if(a2x<-100){
        a2x = 1800;
        a2y = Math.floor(Math.random()*500);
    }
    else{
        a2x-=a1xs;
    }
    if(a3x<-100){
        a3x = 2000;
        a3y = Math.floor(Math.random()*500);
    }
    else{
        a3x-=a1xs;
    }
    if(a4x<-100){
        a4x = 2500;
        a4y = Math.floor(Math.random()*500);
    }
    else{
        a4x-=a1xs;
    }
    if(bx<=-1350)bx=0;
    else bx-=bs;
    
    if(uy <= -100 || uy >= 600){
        document.getElementById('gameOver').style.display = 'block';
        document.getElementById('reason').innerText = 'Out of border';
        document.getElementById('butt').style.display = 'block';
        cancelAnimationFrame();
    }
    if(mx < a1x+130 && my < a1y + 50 && a1x < mx + 25 && a1y < my + 10){
        a1x = 1400;
        a1y = Math.floor(Math.random()*500);
        hit++;
        document.getElementById('print').innerText = "X"+hit; 
        score+=100;
        a1xs+=0.2;
    }
    if(mx < a2x+130 && my < a2y + 50 && a2x < mx + 25 && a2y < my + 10){
        a2x = 1400;
        a2y = Math.floor(Math.random()*500);
        hit++;
        document.getElementById('print').innerText = "X"+hit; 
        score+=100;
        a1xs+=0.2;
    }
    if(mx < a3x+130 && my < a3y + 50 && a3x < mx + 25 && a3y < my + 10){
        a3x = 1400;
        a3y = Math.floor(Math.random()*500);
        hit++;
        document.getElementById('print').innerText = "X"+hit; 
        score+=100;
        a1xs+=0.2;
    }
    if(mx < a4x+130 && my < a4y + 50 && a4x < mx + 25 && a4y < my + 10){
        a4x = 1400;
        a4y = Math.floor(Math.random()*500);
        hit++;
        document.getElementById('print').innerText = "X"+hit; 
        score+=100;
        a1xs+=0.2;
    }
    if((ux < a1x+100 && uy < a1y + 40 && a1x < ux + 150 && a1y < uy + 75) || (ux < a2x+100 && uy < a2y + 40 && a2x < ux + 150 && a2y < uy + 75) || (ux < a3x+100 && uy < a3y + 40 && a3x < ux + 150 && a3y < uy + 75) || (ux < a4x+100 && uy < a4y + 40 && a4x < ux + 150 && a4y < uy + 75)){
        document.getElementById('gameOver').style.display = 'block';
        document.getElementById('reason').innerText = 'Collision';
        document.getElementById('butt').style.display = 'block';
        cancelAnimationFrame();
    }
    frame++;
    if(frame % 15 == 0){
        score+=10;
        document.getElementById('score').innerText = "Score: "+score;
    }
    requestAnimationFrame(animate);
}
animate();

function bullet_move(){
    ctx.drawImage(ms, mx, my, mw,mh);
    if(mx >= 1350){
        bulletPass = true;
        mx = 130;
        bullet_stop();
    }else{
        mx+=25;
        bulletPass = false;
    }
    requestAnimationFrame(bullet_move);
}

function bullet_stop(){
    ctx.drawImage(0, 0, 0, 0);
}


document.onkeydown = function(e){
    if(e.key == 'w' || e.key == 'W'){
        uy-=uys;
        a1xs += 0.1;
    }else if(e.key == 's' || e.key == 'S'){
        uy+=uys;
        a1xs += 0.1;
    }
    else if(e.key == 'f' || e.key == 'F'){
        if(bulletPass == true){
            bullet_move();
            my = uy+50;
            mx = 200;
        }
    }
}

function replay(){
    window.location.href = 'http://127.0.0.1:5500/index.html';
}