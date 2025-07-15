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