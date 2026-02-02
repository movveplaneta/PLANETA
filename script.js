// ================= MODAL UNIFICADO VIDEOS + IMÁGENES =================
function openMedia(src, type) {
  const modal = document.getElementById('mediaModal');
  const content = document.getElementById('modalContent');
  document.body.style.overflow = 'hidden';
  content.innerHTML = '';

  if (type === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = '100%';
    content.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '100%';
    content.appendChild(img);
  }
  modal.style.display = 'flex';
}

function closeMedia() {
  const modal = document.getElementById('mediaModal');
  const content = document.getElementById('modalContent');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  content.innerHTML = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMedia();
});


// ================= GOOGLE TRANSLATE =================
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'es',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

function toggleMenu() {
  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.toggle('show');
}

function execTranslate(lang) {
  const select = document.querySelector('select.goog-te-combo');
  if (!select) return;

  select.value = lang;
  select.dispatchEvent(new Event('change'));
}


// ================= GALERÍA STACK =================
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll('.stack-card');
  const slider = document.getElementById('stackSlider');

  if (cards.length === 0 || !slider) return;

  let index = 0;
  let startX = 0;

  function renderStack() {
    cards.forEach((card, i) => {
      card.classList.remove('active','next','prev');
      if (i === index) card.classList.add('active');
      if (i === (index + 1) % cards.length) card.classList.add('next');
      if (i === (index - 1 + cards.length) % cards.length) card.classList.add('prev');
    });
  }

  function nextCard() {
    index = (index + 1) % cards.length;
    renderStack();
  }

  setInterval(nextCard, 4500);

  slider.addEventListener('mousedown', e => startX = e.clientX);
  slider.addEventListener('mouseup', e => {
    if (e.clientX - startX < -40) nextCard();
    if (e.clientX - startX > 40) {
      index = (index - 1 + cards.length) % cards.length;
      renderStack();
    }
  });

  slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  slider.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX < -40) nextCard();
    if (endX - startX > 40) {
      index = (index - 1 + cards.length) % cards.length;
      renderStack();
    }
  });

  renderStack();
});


// ================= NAVBAR AUTO HIDE (MÓVIL) =================
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (window.innerWidth <= 768) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    } else {
      navbar.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });
});

const track = document.getElementById("proTrack");
const cards = document.querySelectorAll(".pro-card");
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close-btn");

/* 🔁 Loop infinito real */
track.innerHTML += track.innerHTML;

/* 🎥 Abrir video SOLO al hacer click */
cards.forEach(card => {
  card.addEventListener("click", () => {
    modalVideo.src = card.dataset.video;
    modal.style.display = "flex";
    modalVideo.play();
  });
});

/* ❌ Cerrar modal */
closeBtn.onclick = closeModal;
modal.onclick = e => e.target === modal && closeModal();

function closeModal() {
  modalVideo.pause();
  modalVideo.src = "";
  modal.style.display = "none";
}

/* 📱 Swipe móvil */
let startX = 0;
track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
track.addEventListener("touchmove", e => {
  let moveX = e.touches[0].clientX - startX;
  track.style.transform = `translateX(${moveX}px)`;
});


