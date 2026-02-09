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