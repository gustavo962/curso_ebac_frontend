const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  });
});


const target = new Date(2026, 6, 30, 0, 0, 0); 

const elDays = document.getElementById("days");
const elHours = document.getElementById("hours");
const elMinutes = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");
const status = document.getElementById("status");

function pad(n) {
  return String(n).padStart(2, "0");
}

function tick() {
  const now = new Date();
  let diff = target - now;

  if (diff <= 0) {
    elDays.textContent = "0";
    elHours.textContent = "00";
    elMinutes.textContent = "00";
    elSeconds.textContent = "00";
    status.textContent = "🎬 Chegou o grande dia! Feliz aniversário!";
    return;
  }

  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec % (3600 * 24)) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  elDays.textContent = String(days);
  elHours.textContent = pad(hours);
  elMinutes.textContent = pad(minutes);
  elSeconds.textContent = pad(seconds);

  status.textContent = `Contando até ${target.toLocaleDateString("pt-BR")}…`;
}

tick();
setInterval(tick, 1000);


const wppLink = document.getElementById("wppLink");


const phone = "55SEU_DDD_SEU_NUMERO";

const msg =
  "Fala! ✅ Confirmo presença no seu aniversário (30/07). Que horas começa?";

wppLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;


document.getElementById("year").textContent = new Date().getFullYear();
