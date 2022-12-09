let coinaud = new Audio("Audio/coin.mp3")
let goaud = new Audio("Audio/go.mp3");
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 550;
canvas.height = 550;

const bg = new Image();
bg.src = "Image/sky.png";
let x = 0;
let y = 0;

const bird = new Image();
bird.src = "Image/bird.png";
let bsx = 0;
let bsy = 2;
let bx = 0;
let by = 230;

const coin = new Image();
coin.src = "Image/coin.png";
let csx = 0;
let csy = 0;
let cx = 550;
let cy = Math.floor(Math.random() * 530);

const eggle = new Image();
eggle.src = "Image/eggle.png";
let esx = 0;
let esy = 0;
let ex = 550;
let ey = Math.floor(Math.random() * 530);
const eggle1 = new Image();
eggle1.src = "Image/eggle1.png";
let e1sx = 0;
let e1sy = 0;
let e1x = 650;
let e1y = Math.floor(Math.random() * 530);
const eggle2 = new Image();
eggle2.src = "Image/eggle2.png";
let e2sx = 0;
let e2sy = 0;
let e2x = 750;
let e2y = Math.floor(Math.random() * 530);

let frame = 0;
let score = 0;
let num = 0;
let speed = 2;
let speedb = 30;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, x, y, 4113, 980);
    if(x > - 1371)x-=1;
    else x = 0;
    ctx.drawImage(bird, bsx * 85, bsy * 93, 80, 80, bx, by, 63, 80);
    if(frame % 5 == 0){
        if(bsx < 7)bsx++;
        else bsx = 0;
    }
    frame++;
    document.onkeydown = function(e){
        if(e.key == "w" || e.key == "W"){
            by-=speedb;
        }
        if(e.key == "s" || e.key == "S"){
            by+= speedb;
        }
    }
    if(by <= -40 || by >= 510 ||(bx < ex + 76 && by < ey + 44 && ex < bx + 63 && ey < by + 80) || (bx < e1x + 76 && by < e1y + 44 && e1x < bx + 63 && e1y < by + 80) || (bx < e2x + 76 && by < e2y + 44 && e2x < bx + 63 && e2y < by + 80)){
        goaud.play();
        document.getElementById('gameover').style.display = "block";
        document.getElementById('pscore').innerText = "Last Score: "+localStorage.getItem("myscore");
        localStorage.setItem("myscore", score);
        document.getElementById("replay").style.display = "block";
        window.cancelAnimationFrame();
    }

    ctx.drawImage(coin, csx * 173, csy * 121, 163, 121, cx, cy, 103, 41);
    if(frame % 5 == 0){
        if(csx < 7)csx++;
        else csx = 0;
    }
    if(cx > -30)cx-=5;
    else{
        cx = 550;
        cy = Math.floor(Math.random() * 530);
    };
    document.getElementById("num").innerText = "Coin: "+num;
    if(bx < cx + 103 && by < cy + 41 && cx < bx + 63 && cy < by + 80){
        coinaud.play();
        cx = 550;
        cy = Math.floor(Math.random() * 530);
        num++;
        document.getElementById("num").innerText = "Coin: "+num;
        score+=1000;
        document.getElementById("add").style.display = "block";
        setTimeout(() => {
            document.getElementById("add").style.display = "none";
        }, 500);
    }
    score++;
    document.getElementById('score').innerText = "Score:"+score;

    ctx.drawImage(eggle, 0, (esy * 144)+10, 216, 144, ex, ey, 76, 44);
    if(frame % 7== 0){
        if(esy < 7)esy++;
        else esy = 0;
    }
    if(ex > -30)ex-=speed;
    else{
        speedb+=1;
        speed+=0.1;
        ex = 550;
        ey = Math.floor(Math.random() * 530);
    };

    ctx.drawImage(eggle1, 0, (e1sy * 144)+10, 216, 144, e1x, e1y, 76, 44);
    if(frame % 7== 0){
        if(e1sy < 7)e1sy++;
        else e1sy = 0;
    }
    if(e1x > -30)e1x-=speed;
    else{
        speed+=0.1;
        e1x = 650;
        e1y = Math.floor(Math.random() * 530);
    };

    ctx.drawImage(eggle2, 0, (e2sy * 144)+10, 216, 144, e2x, e2y, 76, 44);
    if(frame % 7== 0){
        if(e2sy < 7)e2sy++;
        else e2sy = 0;
    }
    if(e2x > -30)e2x-=speed;
    else{
        speed+=0.001;
        e2x = 750;
        e2y = Math.floor(Math.random() * 530);
    };
    window.requestAnimationFrame(animate);
}
animate();

function upfun(){
    by-=speedb;
}
function downfun(){
    by+=speedb;
}
function replay(){
    window.location.href = "https://my-gamez.github.io/HTMLGame/MyBird/index.html";
}
