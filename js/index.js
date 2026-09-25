
const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {

    const slides = [
        {
            nombre: 'Proyecto 1',
            image: './media/WEBP/image-1.webp',
            href: './proyectos.html',
            cursor: './media/GIFs/gif1.gif'
        },
        {
            nombre: 'Proyecto 2',
            image: './media/WEBP/image-2.webp',
            href: './proyectos.html',
            cursor: './media/GIFs/gif2.gif'
        },
        {
            nombre: 'Proyecto 3',
            image: './media/WEBP/image-3.webp',
            href: './proyectos.html',
            cursor: './media/GIFs/gif3.gif'
        },
        {
            nombre: 'Proyecto 4',
            image: './media/WEBP/image-4.webp',
            href: './proyectos.html',
            cursor: './media/GIFs/gif4.gif'
        }
    ];

    let count = 0;

    slides.forEach(slide => {

        const newSlide = document.createElement('a');

        newSlide.classList.add('hero-slide', 'gif');

        newSlide.href = slide.href;

        newSlide.setAttribute('data-cursor', slide.cursor);

        newSlide.innerHTML = `
            <img src="${slide.image}" alt="${slide.nombre}">
        `;

        newSlide.style.display = 'none';

        heroCarousel.appendChild(newSlide);

    });


    const heroSlides = document.querySelectorAll('.hero-slide');

    if (heroSlides.length > 0) {

        heroSlides[0].style.display = 'block';


        setInterval(() => {

            heroSlides[count].style.display = 'none';

            count++;

            if (count >= heroSlides.length) {
                count = 0;
            }

            heroSlides[count].style.display = 'block';

        }, 3000);


        /* Custom cursor */

        const cursor = document.createElement('img');

        cursor.classList.add('custom-cursor');

        document.body.appendChild(cursor);


        heroSlides.forEach(slide => {

            slide.addEventListener('mouseenter', () => {

                cursor.src = slide.dataset.cursor;

                cursor.style.display = 'block';

            });


            slide.addEventListener('mousemove', (event) => {

                cursor.style.left = `${event.clientX}px`;

                cursor.style.top = `${event.clientY}px`;

            });


            slide.addEventListener('mouseleave', () => {

                cursor.style.display = 'none';

            });

        });

    }

}


/*---POPUPS---*/

const projectCards = document.querySelectorAll('.projects-page__card');


if (projectCards.length > 0) {

    const projectDescriptions = [
        'Descripción del proyecto 01. Aquí puedes explicar brevemente el concepto, el proceso y las características principales del proyecto.',

        'Descripción del proyecto 02. Aquí puedes explicar el objetivo del proyecto y las decisiones tomadas durante su desarrollo.',

        'Descripción del proyecto 03. Aquí puedes explicar el proceso creativo y el resultado final.',

        'Descripción del proyecto 04. Aquí puedes explicar las herramientas utilizadas y las características del proyecto.',

        'Descripción del proyecto 05. Aquí puedes explicar el concepto y el desarrollo del proyecto.',

        'Descripción del proyecto 06. Aquí puedes explicar brevemente el proyecto y sus objetivos.'
    ];


    const projectModal = document.createElement('div');

    projectModal.classList.add('project-modal');


    projectModal.innerHTML = `

        <div class="project-modal__content">

            <button
                class="project-modal__close"
                aria-label="Cerrar proyecto"
            >
                ×
            </button>


            <div class="project-modal__image-container">

                <img
                    class="project-modal__image"
                    src=""
                    alt=""
                >

            </div>


            <div class="project-modal__info">

                <h2 class="project-modal__title"></h2>

                <p class="project-modal__description"></p>

            </div>

        </div>

    `;


    document.body.appendChild(projectModal);

    const modalImage =
        projectModal.querySelector('.project-modal__image');

    const modalTitle =
        projectModal.querySelector('.project-modal__title');

    const modalDescription =
        projectModal.querySelector('.project-modal__description');

    const closeButton =
        projectModal.querySelector('.project-modal__close');

    projectCards.forEach((card, index) => {

        card.addEventListener('click', (event) => {

            event.preventDefault();


            const image = card.querySelector('img');

            const title = card.querySelector('h2');


            if (!image || !title) {
                return;
            }


            modalImage.src = image.src;

            modalImage.alt = image.alt;

            modalTitle.textContent = title.textContent;


            modalDescription.textContent =
                projectDescriptions[index] ||
                'Descripción del proyecto.';


            projectModal.classList.add('is-open');


            document.body.style.overflow = 'hidden';

        });

    });

    closeButton.addEventListener('click', () => {

        projectModal.classList.remove('is-open');

        document.body.style.overflow = '';

    });

    projectModal.addEventListener('click', (event) => {

        if (event.target === projectModal) {

            projectModal.classList.remove('is-open');

            document.body.style.overflow = '';

        }

    });

    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {

            projectModal.classList.remove('is-open');

            document.body.style.overflow = '';

        }

    });

}

/*---menu---*/

const header = document.querySelector('.header');

if (header) {

    let lastScrollY = window.scrollY;
    let menuOpen = false;

    const menuButton = document.createElement('button');

    menuButton.className = 'menu-toggle';

    menuButton.type = 'button';

    menuButton.setAttribute(
        'aria-label',
        'Abrir menú'
    );

    menuButton.setAttribute(
        'aria-expanded',
        'false'
    );

    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    document.body.appendChild(menuButton);

    const menuOverlay = document.createElement('div');

    menuOverlay.className = 'menu-overlay';

    const navigation =
        header.querySelector('.header__nav');

    let menuLinks = '';


    if (navigation) {

        const links =
            navigation.querySelectorAll('a');


        links.forEach(link => {

            menuLinks += `
                <li>
                    <a href="${link.getAttribute('href')}">
                        ${link.textContent.trim()}
                    </a>
                </li>
            `;

        });

    }

    menuOverlay.innerHTML = `

        <div class="menu-overlay__content">

            <button
                type="button"
                class="menu-close"
                aria-label="Cerrar menú"
            >
                ×
            </button>


            <nav class="menu-overlay__nav">

                <ul>
                    ${menuLinks}
                </ul>

            </nav>

        </div>

    `;


    document.body.appendChild(menuOverlay);

    const menuClose =
        menuOverlay.querySelector('.menu-close');

    function openMenu() {

        menuOpen = true;

        menuOverlay.classList.add(
            'menu-overlay--open'
        );

        menuButton.classList.add(
            'menu-toggle--active'
        );

        menuButton.setAttribute(
            'aria-expanded',
            'true'
        );

        menuButton.setAttribute(
            'aria-label',
            'Cerrar menú'
        );

        document.body.style.overflow = 'hidden';

    }

    function closeMenu() {

        menuOpen = false;

        menuOverlay.classList.remove(
            'menu-overlay--open'
        );

        menuButton.classList.remove(
            'menu-toggle--active'
        );

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );

        menuButton.setAttribute(
            'aria-label',
            'Abrir menú'
        );

        document.body.style.overflow = '';

    }

    menuButton.addEventListener(
        'click',
        () => {

            if (menuOpen) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    menuClose.addEventListener(
        'click',
        (event) => {

            event.preventDefault();

            event.stopPropagation();

            closeMenu();

        }
    );

    menuOverlay.addEventListener(
        'click',
        (event) => {

            if (
                event.target === menuOverlay
            ) {

                closeMenu();

            }

        }
    );

    const overlayLinks =
        menuOverlay.querySelectorAll('a');


    overlayLinks.forEach(link => {

        link.addEventListener(
            'click',
            () => {

                closeMenu();

            }
        );

    });

    window.addEventListener(
        'scroll',
        () => {

            const currentScrollY =
                window.scrollY;

            if (currentScrollY <= 20) {

                header.classList.remove(
                    'header--hidden'
                );

                menuButton.classList.remove(
                    'menu-toggle--visible'
                );

                lastScrollY =
                    currentScrollY;

                return;

            }

            if (
                currentScrollY > lastScrollY &&
                !menuOpen
            ) {

                header.classList.add(
                    'header--hidden'
                );
                menuButton.classList.add(
                    'menu-toggle--visible'
                );

            }
            if (
                currentScrollY < lastScrollY &&
                !menuOpen
            ) {

                header.classList.add(
                    'header--hidden'
                );

                menuButton.classList.add(
                    'menu-toggle--visible'
                );

            }


            lastScrollY =
                currentScrollY;

        }
    );
    document.addEventListener(
        'keydown',
        (event) => {

            if (
                event.key === 'Escape' &&
                menuOpen
            ) {

                closeMenu();

            }

        }
    );

}