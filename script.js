// === MATRIX EFFECT ===
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "HAPPYBIRTHDAY".split("");
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// === COUNTDOWN ===
let count = 3;
const countdown = document.getElementById("countdown");
const birthday = document.getElementById("birthday");
const book = document.getElementById("book");

const countdownInterval = setInterval(() => {
  count--;
  if (count > 0) {
    countdown.textContent = count;
  } else {
    clearInterval(countdownInterval);
    countdown.style.display = "none";
    birthday.classList.remove("hidden");

    // Show book after 3s
    setTimeout(() => {
      birthday.classList.add("hidden");
      book.classList.remove("hidden");
    }, 3000);
  }
}, 1000);
