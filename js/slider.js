let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; 
  }
  
  slides[slideIndex].classList.add('active');
  
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

window.onload = function() {
  showSlides(); 
  setInterval(showSlides, 3000);
};
