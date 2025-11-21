const ball = document.getElementById("ball");
const card = document.getElementById("card");
const square = document.getElementById("square");
const root = document.documentElement;

const startAll = document.getElementById("startAll");
const pauseAll = document.getElementById("pauseAll");
const resetAll = document.getElementById("resetAll");
const faster = document.getElementById("faster");
const slower = document.getElementById("slower");
const toggleBall = document.getElementById("toggleBall");
const toggleCard = document.getElementById("toggleCard");
const toggleSquare = document.getElementById("toggleSquare");

function play(el) { el.classList.remove("paused"); }
function pause(el) { el.classList.add("paused"); }
function hide(el) { el.classList.add("hidden"); }
function show(el) { el.classList.remove("hidden"); }

startAll.onclick = () => [ball, card, square].forEach(el => { play(el); show(el); });
pauseAll.onclick = () => [ball, card, square].forEach(el => pause(el));

resetAll.onclick = () => {
    root.style.setProperty("--speed", 1);
    [ball, card, square].forEach(el => {
        el.classList.remove("paused");
        el.style.animation = "none";
        requestAnimationFrame(() => el.style.animation = "");
    });
};

faster.onclick = () => {
    let s = parseFloat(getComputedStyle(root).getPropertyValue("--speed"));
    root.style.setProperty("--speed", Math.min(s * 1.3, 6));
};

slower.onclick = () => {
    let s = parseFloat(getComputedStyle(root).getPropertyValue("--speed"));
    root.style.setProperty("--speed", Math.max(s / 1.3, 0.2));
};

toggleBall.onclick = () => ball.classList.toggle("hidden");
toggleCard.onclick = () => card.classList.toggle("hidden");
toggleSquare.onclick = () => square.classList.toggle("hidden");