// Countdown logic
const birthday = new Date("2025-12-17T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Selamat Ulang Tahun!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `${days}h ${hours}j ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// PIN logic & autoplay music
document.getElementById("pinButton").addEventListener("click", () => {
  const input = document.getElementById("pinInput").value;
  if (input === "1712") {
    document.getElementById("countdownPage").classList.add("hidden");
    document.getElementById("greetingPage").classList.remove("hidden");

    const Music = document.getElementById("birthdayMusic");
    Music.volume = 100.0;
    Music.play().then(() => {
      console.log("Lagu diputar");
    }).catch((err) => {
      console.warn("Autoplay diblokir, user harus klik layar.");
      alert("Klik di mana saja pada layar untuk mulai memutar lagu.");
      document.body.addEventListener("click", () => {
        Music.play();
      }, { once: true });
    });
  } else {
    alert("PIN salah. Coba lagi!");
  }
});

// Confetti logic
document.getElementById("confettiButton").addEventListener("click", () => {
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
