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
bx = 48;
by = 0;
bsw = 133;
bsh = 188;
xb = 2;
yb = 0;

var man = new Image();
man.src = 'image/man.png';
mx = 48;
my = 631;
m=5;
ms = 5;

var frame = 0;
var onGround = true;
var onTop = false;
var score = 0;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Background
    ctx.drawImage(bg, x, y, 375, 1222);
    if(y <= -300)y=0;
    else y-=2;

    //Character
    ctx.drawImage(boy, xb*bsw, yb*bsh, bsw, bsh, bx, by, 50, 50);
    if(frame % 5 == 0){
        if(yb < 7)yb++;
        else yb = 0;
    }

    //Man
    ctx.drawImage(man, 0, m*128, 188, 128, mx, my, 50, 50);
    if(my <= -100){
        my = 631;
        ms+=0.1;
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
    if(bx < mx+25 && by < my+25 && mx < bx+25 && my < by+25){
        document.getElementById('gameover').style.display = 'block';
        document.getElementById('replay').style.display = 'block';
        cancelAnimationFrame();
    }
    score++;
    document.getElementById('score').innerText = "Score: "+score;
    frame++;
    requestAnimationFrame(animate);
}
animate();

function jump(){
    if(bx >= 150){
        onGround = false;
        onTop = true;
    }
    else if(bx == 48){
        onGround = true;
        onTop = false;
    }
    if(onGround == true && onTop == false){
        bx+=3;
        xb = 5;
        yb = 6;
    }
    else if(onGround == false && onTop == true){
        bx-=3;
        xb = 5;
        yb = 11;
        if(bx == 48){
            xb = 2;
            cancelAnimationFrame();
        }
    }
    requestAnimationFrame(jump);
}
function replay(){
    location.href = "https://my-gamez.github.io/HTMLGame/Red Hat Boy/index.html";
}
