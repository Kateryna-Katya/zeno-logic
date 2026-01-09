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
    // Интерактивный свет за мышью
const glow = document.querySelector('.hero__glow');
window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(glow, {
        x: x - 300,
        y: y - 300,
        duration: 2,
        ease: "power2.out"
    });
});

// Анимация текста Hero
const heroTitle = new SplitType('.hero__title', { types: 'chars' });

gsap.from(heroTitle.chars, {
    opacity: 0,
    y: 100,
    rotateX: -90,
    stagger: 0.02,
    duration: 1.5,
    ease: "expo.out",
    delay: 0.5
});

gsap.from('.hero__text', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out",
    delay: 1.2
});

gsap.from('.hero__btns', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out",
    delay: 1.4
});
    // Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Анимация появления заголовка секции About
gsap.from('.about__head > *', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});

// Анимация появления карточек
gsap.from('.about-card', {
    scrollTrigger: {
        trigger: '.about__grid',
        start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 1,
    ease: "back.out(1.7)"
});
});