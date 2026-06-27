function showMore(btn) {
    const card = btn.parentElement;
    const more = card.querySelector(".more");
    more.classList.toggle("hidden");
}

function likeGame(btn) {
    const span = btn.querySelector("span");
    let count = parseInt(span.innerText);
    count++;
    span.innerText = count;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
let score = 0;

function sayHello() {
  alert("你好！歡迎來到我的升級版網站 😎");
}

function addScore() {
  score++;
  document.getElementById("score").innerText = score;
}// ===== 打字機效果 =====

const text =
"歡迎來到 Emir 的個人網站 🚗🧱💻";

let index = 0;

function typing(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);
    }
}

typing();


// ===== 深色模式 =====

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML = "☀️";

    }else{

        themeBtn.innerHTML = "🌙";
    }

});


// ===== 猜數字遊戲 =====

const answer =
Math.floor(Math.random()*100)+1;

function guessGame(){

    const input =
    document.getElementById("guessInput");

    const result =
    document.getElementById("result");

    const guess =
    Number(input.value);

    if(!guess){

        result.innerHTML =
        "請輸入數字！";

        return;
    }

    if(guess > answer){

        result.innerHTML =
        "📈 太大了！";

    }
    else if(guess < answer){

        result.innerHTML =
        "📉 太小了！";

    }
    else{

        result.innerHTML =
        "🎉 恭喜答對！";
    }
}


// ===== Emir Bot =====

function chatBot(){

    const input =
    document.getElementById("chatInput");

    const output =
    document.getElementById("chatOutput");

    const msg =
    input.value.toLowerCase();

    if(msg.includes("你好")){

        output.innerHTML =
        "👋 你好！歡迎來到 Emir 的網站！";

    }
    else if(msg.includes("tomica")){

        output.innerHTML =
        "🚗 我最喜歡收藏 Tomica 小汽車！";

    }
    else if(msg.includes("lego")){

        output.innerHTML =
        "🧱 LEGO 超好玩！";

    }
    else if(msg.includes("網站")){

        output.innerHTML =
        "💻 這是 Emir 親手製作的網站！";

    }
    else{

        output.innerHTML =
        "🤖 我還在學習中，換個問題試試吧！";
    }

}


// ===== 回到頂端 =====

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display =
        "block";

    }else{

        topBtn.style.display =
        "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};


// ===== 粒子背景 =====

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        size: {
            value: 3
        },

        move: {
            speed: 2
        },

        line_linked: {
            enable: true
        }

    }

});