let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

window.onload = () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
};
