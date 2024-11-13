let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
  });

  slides[currentIndex].classList.add('active');
}
