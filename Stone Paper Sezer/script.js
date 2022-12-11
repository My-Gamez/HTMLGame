var click = new Audio('audio/click.mp3');
var win = new Audio('audio/win.mp3');
var comnum;
var chosest = false;
var chosepa = false;
var chosese = false;
var uprint = document.getElementById('print');
var comprint = document.getElementById('comprint');
var winlose = document.getElementById('winlose');
function stfun() {
    click.play();
    winlose.innerText = "";
    comprint.innerText = "";
    chosest = true;
    chosepa = false;
    chosese = false;
    comnum = Math.floor(Math.random() * 3);
    setTimeout(() => {
        win_lose();
        print_status();
    }, 1000);
}
function pafun() {
    click.play();
    winlose.innerText = "";
    comprint.innerText = "";
    chosest = false;
    chosepa = true;
    chosese = false;
    comnum = Math.floor(Math.random() * 3);
    setTimeout(() => {
        win_lose();
        print_status();
    }, 1000);
}
function sefun() {
    click.play();
    winlose.innerText = "";
    comprint.innerText = "";
    chosest = false;
    chosepa = false;
    chosese = true;
    comnum = Math.floor(Math.random() * 3);
    setTimeout(() => {
        win_lose();
        print_status();
    }, 1000);
}

function win_lose(){
    if(chosest == true && comnum == 0){
        winlose.innerText = "Draw";
        winlose.style.color = "rgb(215,138,3)";
    }
    else if(chosest == true && comnum == 1){
        winlose.innerText = "You Lost";
        winlose.style.color = "Red";
    }
    else if(chosest == true && comnum == 2){
        winlose.innerText = "You Won";
        winlose.style.color = "green";
        win.play();
    }
    else if(chosepa == true && comnum == 0){
        winlose.innerText = "You Won"
        winlose.style.color = "green";
        win.play();
    }
    else if(chosepa == true && comnum == 1){
        winlose.innerText = "Draw";
        winlose.style.color = "rgb(215,138,3)";
    }
    else if(chosepa == true && comnum == 2){
        winlose.innerText = "You Lost";
        winlose.style.color = "Red";
    }
    else if(chosese == true && comnum == 0){
        winlose.innerText = "You Lost";
        winlose.style.color = "Red";
    }
    else if(chosese == true && comnum == 1){
        winlose.innerText = "You Won";
        winlose.style.color = "green";
        win.play();
    }
    else if(chosese == true && comnum == 2){
        winlose.innerText = "Draw";
        winlose.style.color = "rgb(215,138,3)";
    }
}

function print_status(){
    if(comnum == 0){
        comprint.innerText = "Waltor chose Stone";
    }
    else if(comnum == 1){
        comprint.innerText = "Waltor chose Paper";
    }
    else if(comnum == 2){
        comprint.innerText = "Waltor chose Sezer";
    }
}
