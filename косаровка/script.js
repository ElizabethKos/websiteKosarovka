// Плавный скролл по клику на пункты меню
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Можно добавить анимации при прокрутке
window.addEventListener('scroll', function() {
    // Например, появляющиеся элементы
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Автоматическая прокрутка каждые 5 секунд
    setInterval(nextImage, 10000);
});

const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0; // Текущий активный слайд (начинается с 0)
const slideCount = slides.length; // Общее количество слайдов
function goToSlide(slideIndex) {
  // Проверка на выход за границы
  if (slideIndex < 0) {
    currentSlide = slideCount - 1; // Переход к последнему слайду
  } else if (slideIndex >= slideCount) {
    currentSlide = 0; // Переход к первому слайду
  } else {
    currentSlide = slideIndex; // Установка текущего слайда
  }
  
  // Сдвиг карусели
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
prevBtn.addEventListener('click', function() {
  goToSlide(currentSlide - 1); // Переход к предыдущему слайду
});

nextBtn.addEventListener('click', function() {
  goToSlide(currentSlide + 1); // Переход к следующему слайду
});