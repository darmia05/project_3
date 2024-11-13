let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slider .slide');
  const totalSlides = slides.length;

  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  slides[currentSlide].classList.add('active');
}
