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

