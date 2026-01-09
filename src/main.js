document.addEventListener('DOMContentLoaded', () => {
    // Инициализация иконок Lucide
    lucide.createIcons();

    // Плавный скролл Lenis
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Эффект хедера при скролле
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });
});