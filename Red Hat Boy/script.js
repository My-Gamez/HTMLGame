var bgm = new Audio('audio/bgm.mp3');
var go = new Audio('audio/go.mp3');
var coinm = new Audio('audio/coin.mp3');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 830;
canvas.height = 1800;

var bg = new Image();
bg.src = 'image/bg1.jpg';
x = 0;
y = 0;

var boy = new Image();
boy.src = 'image/rhb1.png'
bx = 100;
by = 0;
bsw = 133;
bsh = 188;
xb = 2;
yb = 0;

var man = new Image();
man.src = 'image/man.png';
mx = 100;
my = 631;
m=5;
ms = 2.5;

var coin = new Image();
coin.src = 'image/coin.png';
csx = 0;
csy = 0;
cx = 130;
cy = 611;

var frame = 0;
var onGround = true;
var onTop = false;
var score = 0;
var cn = 0;
document.getElementById('coin').innerText = "Coin: "+cn;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Background
    ctx.drawImage(bg, x, y, 830, 1800);
    if(y <= -900)y=0;
    else y-=1;

    //Character
    ctx.drawImage(boy, xb*bsw, yb*bsh, bsw, bsh, bx, by, 100, 100);
    if(frame % 5 == 0){
        if(yb < 7)yb++;
        else yb = 0;
    }

    //Coin
    ctx.drawImage(coin, csx*173, csy*121, 163, 121, cx, cy, 50, 50);
    if(cy < -10)cy = 800;
    else cy-=3;
    if(frame%5==0){
        if(csx<9){
            csx++;
        }else{
            csx = 0;
        }
    }
    if(bx < cx+25 && by < cy+25 && cx < bx+50 && cy < by+50){
        cn++;
        document.getElementById('coin').innerText = "Coin: "+cn;
        cy = 800;
        score+=100;
        coinm.play();
    }
    //Man
    ctx.drawImage(man, 0, m*128, 188, 128, mx, my, 120, 120);
    if(my <= -100){
        my = 800;
        ms+=0.4;
    }else{
        my-=ms;
    }
    if(frame%5 == 0){
        if(m > 0){
            m--;
        }else{
            m = 5;
        }
    }
    bgm.play();
    if(bx < mx+50 && by < my+ 50 && mx < bx+50 && my < by+50){
        document.getElementById('gameover').style.display = 'block';
        document.getElementById('replay').style.display = 'block';
        bgm.pause();
        go.play();
        cancelAnimationFrame();
    }
    score++;
    document.getElementById('score').innerText = "Score: "+score;
    frame++;
    requestAnimationFrame(animate);
}
animate();

var js = 3;
function jump(){
    if(bx >= 250){
        onGround = false;
        onTop = true;
    }
    else if(bx == 100){
        onGround = true;
        onTop = false;
    }
    if(onGround == true && onTop == false){
        bx+=js;
        xb = 5;
        yb = 6;
    }
    else if(onGround == false && onTop == true){
        bx-=js;
        xb = 5;
        yb = 11;
        if(bx == 100){
            xb = 2;
            js+=0.5;
            cancelAnimationFrame();
        }
    }
    requestAnimationFrame(jump);
}
function replay(){
    location.href = "https://my-gamez.github.io/HTMLGame/Red Hat Boy/index.html";
}
