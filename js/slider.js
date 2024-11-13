let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000);
}

function moveSlide(n) {
  slideIndex += n;
  const slides = document.querySelectorAll('.slide');
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  showSlides();
}

window.onload = function() {
  showSlides(); 
};
