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
