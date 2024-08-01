// script.js
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    const interval = 7000; // 7 segundos

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items[currentIndex].classList.add('active');
        updateCarousel();
    }

    function updateCarousel() {
        // Ajustar el índice si se llega al final
        if (currentIndex === 0) {
            // Mover el carrusel instantáneamente al inicio antes de animar
            document.querySelector('.carousel-inner').style.transition = 'none';
            document.querySelector('.carousel-inner').style.transform = `translateX(0)`;
            setTimeout(() => {
                // Volver a activar la transición para el próximo ciclo
                document.querySelector('.carousel-inner').style.transition = 'transform 1s ease';
            }, 50); // Pequeño retraso para asegurarse de que se aplique correctamente
        } else {
            // Aplicar la transformación normalmente
            document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    setInterval(showNextItem, interval);
});

