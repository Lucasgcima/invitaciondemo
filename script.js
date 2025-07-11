
const countdown = document.getElementById("countdown");
const eventDate = new Date("2026-02-26T20:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "¡El gran día ha llegado!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

 const playBtn = document.getElementById("play-music");
 const audio = document.getElementById("bg-music");
 playBtn.addEventListener("click", () => {
   audio.play();
   playBtn.style.display = "none";
 });
