document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slider');

    if (!slidesContainer) {
        return;
    }

    const images = Array.from(slidesContainer.children);

    let currentPosition = 0;
    const scrollSpeed = 0.65;

    function animateSlider() {
        currentPosition -= scrollSpeed;

        if (Math.abs(currentPosition) >= slidesContainer.scrollWidth) {
            currentPosition = 0;
        }

        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(animateSlider);
    }

    animateSlider();
});
