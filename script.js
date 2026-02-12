// Función para abrir el video
function openVideo(videoSrc) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideo');
    
    // 1. Asignar la ruta del video al elemento <video>
    videoPlayer.src = videoSrc;
    
    // 2. Mostrar el modal con un efecto de flex (para centrar)
    modal.style.display = 'flex';
    
    // 3. Reproducir automáticamente
    videoPlayer.play();
}

// Función para cerrar el video
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideo');
    
    // 1. Ocultar el modal
    modal.style.display = 'none';
    
    // 2. Pausar y resetear el video para que no siga cargando
    videoPlayer.pause();
    videoPlayer.src = "";
}

// CERRAR AL HACER CLIC FUERA DEL CONTENIDO
// Esto permite que si el usuario toca el fondo oscuro, el video se cierre.
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    const overlay = document.querySelector('.modal-overlay');
    
    if (event.target == overlay) {
        closeVideo();
    }
}

const images = document.querySelectorAll('.gallery-image');
const dots = document.querySelectorAll('.dot');
const caption = document.getElementById('imageCaption');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateGallery(index) {
    // Quitar clases activas
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Activar nueva imagen y punto
    images[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Actualizar el texto del país usando el atributo "alt" de la imagen
    caption.textContent = images[index].alt;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

// Click en los puntos
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

// Cambio automático cada 6 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
}, 6000);

// Toggle del Menú de Idiomas
function toggleMenu() {
    const langMenu = document.getElementById('langMenu');
    langMenu.classList.toggle('show');
}

// Cerrar menú si se hace clic fuera
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn') && !event.target.matches('.fa-bars')) {
        const dropdown = document.getElementById('langMenu');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const stack = document.getElementById('stackSlider');

    if (stack) {
        function autoMove() {
            const cards = stack.querySelectorAll('.stack-card');
            if (cards.length === 0) return;

            // Tomamos la carta que está arriba de todo
            const topCard = cards[cards.length - 1];

            // Aplicamos la clase de animación (se desliza a la derecha)
            topCard.classList.add('shift-out');

            setTimeout(() => {
                // La movemos al fondo de la pila (atrás de todas)
                stack.prepend(topCard);
                // Le quitamos la clase para que se posicione atrás suavemente
                topCard.classList.remove('shift-out');
            }, 800); // Duración del desplazamiento
        }

        // Se ejecuta solo cada 3500ms (3.5 segundos)
        setInterval(autoMove, 3500);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("welcomeModal");
    const btnAprende = document.getElementById("btnAprende");
    const btnRegistro = document.getElementById("btnRegistro");

    // 1. Verificar si ya ha visitado la página antes
    if (!localStorage.getItem("movve_user_visited")) {
        // Si NO existe la marca, mostramos el modal
        modal.style.display = "flex";
    } else {
        // Si YA existe, nos aseguramos de que el modal esté oculto
        modal.style.display = "none";
    }

    // 2. Función para cerrar el modal y marcar como "visitado"
    function cerrarYMarcar() {
        modal.style.opacity = "0"; // Efecto de desvanecimiento
        setTimeout(() => {
            modal.style.display = "none";
            // Guardamos en la memoria del navegador que ya entró
            localStorage.setItem("movve_user_visited", "true");
        }, 300);
    }

    // Eventos al hacer clic en los botones
    btnAprende.addEventListener("click", cerrarYMarcar);
    btnRegistro.addEventListener("click", cerrarYMarcar);
});

document.addEventListener("DOMContentLoaded", function(){

    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    const zoneID = "10595987";
    const frequencyCookie = "movve_popunder";

    /* =========================
       CONFIGURACIÓN DIRECT LINKS
    ========================== */

    const directLink1 = "https://omg10.com/4/10600695"; // Principal
    const directLink2 = "https://omg10.com/4/10600809"; // Segundo

    /* =========================
       UTILIDADES
    ========================== */

    function setCookie(name,value,days){
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
    }

    function getCookie(name){
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    function isMobile(){
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function isFromSocial(){
    const ref = document.referrer.toLowerCase();
    return ref.includes("facebook") ||
           ref.includes("fb.com") ||
           ref.includes("instagram") ||
           ref.includes("ig.me") ||
           ref.includes("whatsapp") ||
           ref.includes("wa.me") ||
           ref.includes("messenger") ||
           ref.includes("tiktok") ||
           ref.includes("t.co") ||
           ref.includes("twitter") ||
           ref.includes("x.com");
}

    function isLATAM(){
        const lang = navigator.language || navigator.userLanguage;
        return lang.startsWith("es");
    }

    function loadMonetag(){

        if(document.getElementById("monetag-script")) return;

        const s = document.createElement("script");
        s.id = "monetag-script";
        s.src = "https://al5sm.com/tag.min.js";
        s.dataset.zone = zoneID;
        s.async = true;
        s.defer = true;

        document.body.appendChild(s);
    }

    /* =========================
       DIRECT LINKS CONTROLADOS
    ========================== */

    function activateDirectLinks(){

        document.addEventListener("click", function once(e){

            if(e.target.closest(".footer")) return;
            if(e.target.closest("a")) return;

            // Si viene de redes → usar ambos
            if(isFromSocial()){
                window.open(directLink1, "_blank");
                setTimeout(() => {
                    window.open(directLink2, "_blank");
                }, 1500);
            }
            // Si es LATAM → solo uno
            else if(isLATAM()){
                window.open(directLink1, "_blank");
            }
            // Otros países → segundo link
            else{
                window.open(directLink2, "_blank");
            }

        }, { once: true });
    }

    /* =========================
       ACTIVACIÓN PRINCIPAL
    ========================== */

    function initMonetag(){

        if(getCookie(frequencyCookie)) return;

        // Frecuencia 12 horas
        setCookie(frequencyCookie,"1",0.5);

        // Delay estratégico
        setTimeout(function(){

            if(isMobile()){

                document.addEventListener("click", function once(){
                    loadMonetag();
                    activateDirectLinks();
                }, { once: true });

            } else {

                loadMonetag();
                activateDirectLinks();

            }

        }, 4000);
    }

    /* =========================
       COOKIES
    ========================== */

    if(localStorage.getItem("cookiesAccepted") === "true"){
        if(banner) banner.style.display = "none";
        initMonetag();
    }

    if(acceptBtn){
       acceptBtn.addEventListener("click", function(){

    // 1️⃣ Guardamos que aceptó cookies
    localStorage.setItem("cookiesAccepted", "true");

    // 2️⃣ Ocultamos el banner
    banner.style.display = "none";

    // 3️⃣ Iniciamos Monetag
    initMonetag();

});


