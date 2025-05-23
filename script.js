// Countdown dummy
document.getElementById("countdown").innerText = "🎓 0 Hari Menuju Wisuda 🎓";

// Fungsi verifikasi PIN dan memutar lagu
function checkPin() {
  const input = document.getElementById("pinInput").value;
  if (input === "1712") {
    document.getElementById("countdownPage").classList.add("hidden");
    document.getElementById("greetingPage").classList.remove("hidden");

    // Mainkan lagu
    const music = document.getElementById("birthdayMusic");
    music.play();
  } else {
    alert("PIN salah. Coba lagi.");
  }
}

// Confetti/Emoji Rain
document.getElementById("confettiButton").addEventListener("click", () => {
  const emojis = ["🎉", "🎈", "🎓", "🎂", "💖", "🌟"];
  const container = document.getElementById("emojiContainer");
  container.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "-50px";
    emoji.style.fontSize = "24px";
    emoji.style.animation = "fall 2s ease-out forwards";
    emoji.style.zIndex = 9999;
    container.appendChild(emoji);

    setTimeout(() => emoji.remove(), 2000);
  }
});
