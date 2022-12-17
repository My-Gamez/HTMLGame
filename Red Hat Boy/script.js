var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 830;
canvas.height = 1800;

var bg = new Image();
bg.src = 'image/bg.jpg';
x = 0;
y = 0;

var boy = new Image();
boy.src = 'image/rhb1.png'
bx = 40;
bsw = 133;
bsh = 188;
xb = 2;
yb = 0;

var frame = 0;
var onGround = true;
var onTop = false;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Background
    ctx.drawImage(bg, x, y, 375, 1222);
    if(y <= -611)y=0;
    else y--;

    //Character
    ctx.drawImage(boy, xb*bsw, yb*bsh, bsw, bsh, bx, 0, 70, 70);
    if(frame % 5 == 0){
        if(yb < 7)yb++;
        else yb = 0;
    }

    frame++;
    requestAnimationFrame(animate);
}
animate();

function jump(){
    if(bx >= 200){
        onGround = false;
        onTop = true;
    }
    else if(bx == 40){
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
        if(bx == 40){
            xb = 2;
            cancelAnimationFrame();
        }
    }
    requestAnimationFrame(jump);
}