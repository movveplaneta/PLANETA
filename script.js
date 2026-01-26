// ================= TRADUCCIÓN =================
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es', 
        includedLanguages: 'en,fr,de,it,pt,zh-CN,es', 
        autoDisplay: false
    }, 'google_translate_element');
}

function toggleMenu() { 
    document.getElementById('langMenu').classList.toggle('active'); 
}

function execTranslate(lang) {
    var combo = document.querySelector('.goog-te-combo');
    if(combo) { 
        combo.value = lang; 
        combo.dispatchEvent(new Event('change')); 
    }
    toggleMenu();
}

// ================= SCROLL DINÁMICO (Navbar y Logo) =================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.getElementById('mainNav');
    const logo = document.getElementById('fLogo');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add('hidden');
        logo.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
        logo.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// ================= MODAL MULTIMEDIA =================
function openMedia(src, type) {
    const content = document.getElementById('modalContent');
    if(type === 'video') {
        content.innerHTML = `<video src="${src}" controls autoplay style="width:100%; display:block;"></video>`;
    } else {
        content.innerHTML = `<img src="${src}" style="width:100%; display:block;">`;
    }
    document.getElementById('mediaModal').style.display = 'flex';
}

function closeMedia() { 
    document.getElementById('mediaModal').style.display = 'none'; 
    document.getElementById('modalContent').innerHTML = '';
}

// ================= ANIMACIONES DE APARICIÓN =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { 
        if(e.isIntersecting) e.target.classList.add('visible'); 
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => observer.observe(s));

// ================= REDES SOCIALES MONETIZADAS =================
function monetizarSocial(url) {
    // Abre publicidad en pestaña nueva
    window.open("https://www.effectivegatecpm.com/xpxckz2f?key=df71c9b35e9fd812f18cb6537270a3de", '_blank');
    // Redirige a la red social
    window.location.href = url;
}