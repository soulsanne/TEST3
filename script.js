const birthday = new Date("2025-12-17T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function checkPin() {
  const input = document.getElementById("pinInput").value;
  if (input === "1712") {
    document.getElementById("countdownPage").classList.add("hidden");
    document.getElementById("greetingPage").classList.remove("hidden");

    // Memutar lagu setelah PIN benar
    const song = document.getElementById("birthdaySong");
    song.play().catch(error => {
      console.log("Autoplay diblokir oleh browser. Pengguna harus klik dulu.");
    });

  } else {
    alert("PIN salah. Coba lagi!");
  }
}

};

document.addEventListener("DOMContentLoaded", () => {
  const confettiButton = document.getElementById("confettiButton");
  if (confettiButton) {
    confettiButton.addEventListener("click", () => {
      const emojis = ["🎉", "🎂", "🥳", "🎈", "💖", "🌟"];
      const container = document.getElementById("emojiContainer");
      container.innerHTML = "";

      for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = Math.random() * window.innerHeight + "px";
    emoji.style.animation = "fall 2s ease-out";
    container.appendChild(emoji);

    setTimeout(() => emoji.remove(), 2000);
  }
});
