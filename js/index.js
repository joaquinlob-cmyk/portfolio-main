const sections = document.querySelectorAll(".gif");
const heroCarousel = document.querySelector('.hero-carousel')
const slides = [
    { nombre: 'Proyecto 1', image: './media/image1.jpg', href: './proyectos.html', cursor: './media/gif1.gif' },
    { nombre: 'Proyecto 2', image: './media/image2.jpg', href: './proyectos.html', cursor: './media/gif2.gif' },
    { nombre: 'Proyecto 3', image: './media/image3.jpg', href: './proyectos.html', cursor: './media/gif3.gif' },
    { nombre: 'Proyecto 4', image: './media/image4.jpg', href: './proyectos.html', cursor: './media/gif4.gif' },
]

let count = 0

slides.forEach(slide => {
    const newSlide = document.createElement('a')
    newSlide.classList.add('hero-slide', 'gif')
    newSlide.href = slide.href
    newSlide.setAttribute('data-cursor', slide.cursor)
    newSlide.innerHTML = `
        <img src="${slide.image}" alt="${slide.nombre}">    
    `
    newSlide.style.display = 'none'
    heroCarousel.appendChild(newSlide)
})

let heroSlide = document.querySelectorAll('.hero-slide')
heroSlide[0].style.display = 'block'

setInterval(() => {
    if (count < slides.length - 1) {
        heroSlide[count].style.display = 'none'
        count++
        heroSlide[count].style.display = 'block'
    } else {
        heroSlide[count].style.display = 'none'
        count = 0
        heroSlide[count].style.display = 'block'
    }

    console.log(count)
}, 3000)

const cursor = document.createElement("img");
cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

heroSlide.forEach(slide => {

    slide.addEventListener("mouseenter", () => {
        cursor.src = slide.dataset.cursor;
        cursor.style.display = "block";
    });

    slide.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    slide.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
    });

});

/*POPUPS*/

/* =========================
   PROJECT POPUP
========================= */

const projectCards = document.querySelectorAll('.projects-page__card');

if (projectCards.length > 0) {

    // Información de cada proyecto
    const projectDescriptions = [
        'Descripción del proyecto 01. Aquí puedes explicar brevemente el concepto, el proceso y las características principales del proyecto.',

        'Descripción del proyecto 02. Aquí puedes explicar el objetivo del proyecto y las decisiones tomadas durante su desarrollo.',

        'Descripción del proyecto 03. Aquí puedes explicar el proceso creativo y el resultado final.',

        'Descripción del proyecto 04. Aquí puedes explicar las herramientas utilizadas y las características del proyecto.',

        'Descripción del proyecto 05. Aquí puedes explicar el concepto y el desarrollo del proyecto.',

        'Descripción del proyecto 06. Aquí puedes explicar brevemente el proyecto y sus objetivos.'
    ];


    // Crear el popup automáticamente
    const projectModal = document.createElement('div');

    projectModal.classList.add('project-modal');

    projectModal.innerHTML = `
        <div class="project-modal__content">

            <button class="project-modal__close" aria-label="Cerrar">
                &times;
            </button>

            <div class="project-modal__image-container">
                <img class="project-modal__image" src="" alt="">
            </div>

            <div class="project-modal__info">

                <h2 class="project-modal__title"></h2>

                <p class="project-modal__description"></p>

            </div>

        </div>
    `;


    // Añadir popup al body
    document.body.appendChild(projectModal);


    // Elementos del popup
    const modalImage = projectModal.querySelector('.project-modal__image');
    const modalTitle = projectModal.querySelector('.project-modal__title');
    const modalDescription = projectModal.querySelector('.project-modal__description');
    const closeButton = projectModal.querySelector('.project-modal__close');


    // Abrir popup
    projectCards.forEach((card, index) => {

        card.addEventListener('click', (event) => {

            event.preventDefault();

            const image = card.querySelector('img');
            const title = card.querySelector('h2');

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


    // Cerrar con X
    closeButton.addEventListener('click', () => {

        projectModal.classList.remove('is-open');

        document.body.style.overflow = '';

    });


    // Cerrar haciendo click fuera
    projectModal.addEventListener('click', (event) => {

        if (event.target === projectModal) {

            projectModal.classList.remove('is-open');

            document.body.style.overflow = '';

        }

    });


    // Cerrar con ESC
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {

            projectModal.classList.remove('is-open');

            document.body.style.overflow = '';

        }

    });

}

