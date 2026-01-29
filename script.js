// MODAL UNIFICADO VIDEOS + IMAGENES
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

// ===== GOOGLE TRANSLATE INIT =====
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'es',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

// ===== ABRIR / CERRAR MENÚ IDIOMAS =====
function toggleMenu() {
  const menu = document.getElementById('langMenu');
  menu.classList.toggle('show');
}

// ===== EJECUTAR TRADUCCIÓN =====
function execTranslate(lang) {
  const select = document.querySelector('select.goog-te-combo');
  if (!select) return;

  select.value = lang;
  select.dispatchEvent(new Event('change'));
}
