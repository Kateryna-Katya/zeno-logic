/**
 * Zeno-Logic 2026: Master Script
 */

window.addEventListener('load', () => {
    
    const ZenoApp = {
        init() {
            this.initMobileMenu();
            this.initHero();
            this.initInnovationGrid();
            this.initSwiper();
            this.initCourseAccordion();
            this.initContactForm();
            this.initCookies();
            if (window.lucide) lucide.createIcons();
        },

        // 1. Мобильное меню
        initMobileMenu() {
            const burger = document.querySelector('.burger');
            const menu = document.querySelector('.menu');
            if (!burger || !menu) return;

            burger.onclick = () => {
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
                document.body.style.overflow = menu.classList.contains('is-active') ? 'hidden' : '';
            };

            menu.querySelectorAll('a').forEach(link => {
                link.onclick = () => {
                    burger.classList.remove('is-active');
                    menu.classList.remove('is-active');
                    document.body.style.overflow = '';
                };
            });
        },

        // 2. Анимация Hero (Без разрыва слов)
        initHero() {
            const title = document.querySelector('.hero__title');
            if (title && window.SplitType) {
                const split = new SplitType(title, { types: 'words, chars' });
                gsap.from(split.chars, {
                    opacity: 0,
                    y: 30,
                    stagger: 0.02,
                    duration: 1,
                    ease: "power4.out"
                });
            }
        },

        // 3. Инновации: подгрузка элементов
        initInnovationGrid() {
            const cards = document.querySelectorAll('.inn-card');
            if (cards.length > 0 && window.gsap) {
                gsap.to(cards, {
                    scrollTrigger: {
                        trigger: '.innovation__grid',
                        start: 'top 85%'
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8
                });
            }
        },

        // 4. Swiper: Исправленные кнопки
        initSwiper() {
            const slider = document.querySelector('.blog-slider');
            if (slider && window.Swiper) {
                const swiperInstance = new Swiper('.blog-slider', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    navigation: {
                        nextEl: '.blog-next',
                        prevEl: '.blog-prev',
                    },
                    pagination: { el: '.swiper-pagination', type: 'progressbar' },
                    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
                });

                // Принудительная привязка к вашим кнопкам
                document.querySelector('.blog-next')?.addEventListener('click', () => swiperInstance.slideNext());
                document.querySelector('.blog-prev')?.addEventListener('click', () => swiperInstance.slidePrev());
            }
        },

        // 5. Аккордеон Курсов
        initCourseAccordion() {
            const items = document.querySelectorAll('.course-item');
            items.forEach(item => {
                item.querySelector('.course-item__header').onclick = () => {
                    const isActive = item.classList.contains('active');
                    items.forEach(i => i.classList.remove('active'));
                    if (!isActive) item.classList.add('active');
                };
            });
        },

        // 6. Логика Формы
        initContactForm() {
            const form = document.getElementById('contact-form');
            if (!form) return;

            const q = document.getElementById('captcha-question');
            const a = document.getElementById('captcha-answer');
            const phone = document.getElementById('phone');
            let result = 0;

            const gen = () => {
                const n1 = Math.floor(Math.random() * 9) + 1;
                const n2 = Math.floor(Math.random() * 9) + 1;
                result = n1 + n2;
                q.innerText = `${n1} + ${n2} =`;
            };
            gen();

            phone.oninput = (e) => e.target.value = e.target.value.replace(/[^0-9+]/g, '');

            form.onsubmit = (e) => {
                e.preventDefault();
                if (parseInt(a.value) !== result) {
                    alert('Ошибка капчи!');
                    gen();
                    return;
                }
                const btn = form.querySelector('button');
                btn.innerText = 'Отправка...';
                btn.disabled = true;

                setTimeout(() => {
                    form.reset();
                    btn.style.display = 'none';
                    document.getElementById('form-success').style.display = 'flex';
                }, 1500);
            };
        },

        // 7. Cookie попап
        initCookies() {
            const p = document.getElementById('cookie-popup');
            if (!p || localStorage.getItem('zeno_ok')) return;
            setTimeout(() => p.classList.add('is-show'), 3000);
            document.getElementById('cookie-accept').onclick = () => {
                localStorage.setItem('zeno_ok', 'true');
                p.classList.remove('is-show');
            };
        }
    };

    ZenoApp.init();
});