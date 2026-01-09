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
    // Горизонтальный скролл для преимуществ
if (window.innerWidth > 992) {
    const wrapper = document.querySelector('.advantages__wrapper');
    const cards = document.querySelectorAll('.adv-card');
    
    gsap.to(wrapper, {
        x: () => -(wrapper.scrollWidth - window.innerWidth + window.innerWidth * 0.1),
        ease: "none",
        scrollTrigger: {
            trigger: ".advantages",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
        }
    });

    // Легкая анимация появления самих карточек внутри скролла
    cards.forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.9,
            x: 100,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                containerAnimation: gsap.getById("horizontalScroll"), // Если задавать ID, но scrub справится сам
                start: "left center",
            }
        });
    });
    }
    // Аккордеон курсов
const courseItems = document.querySelectorAll('.course-item');
const coursesGlow = document.querySelector('.courses__bg-glow');

courseItems.forEach(item => {
    const header = item.querySelector('.course-item__header');
    
    header.addEventListener('click', () => {
        // Убираем active у всех
        const isActive = item.classList.contains('active');
        
        courseItems.forEach(i => i.classList.remove('active'));
        
        // Если не был активен — открываем
        if (!isActive) {
            item.classList.add('active');
            
            // Меняем цвет свечения фона
            const newColor = item.getAttribute('data-color');
            if (coursesGlow) {
                coursesGlow.style.background = `radial-gradient(circle, ${newColor} 0%, transparent 70%)`;
            }
        }
    });
});
    // В начало файла (или перед использованием) добавьте загрузку скрипта
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
document.head.appendChild(script);

script.onload = () => {
    // Инициализация Swiper
    const blogSwiper = new Swiper('.blog-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.blog-next',
            prevEl: '.blog-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
};
});