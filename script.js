let likeCount = 0;

function showMore() {
    const info = document.getElementById("moreInfo");
    info.classList.toggle("hidden");
}

function likeGame() {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
