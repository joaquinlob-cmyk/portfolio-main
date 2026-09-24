const sections = document.querySelectorAll(".gif");
const slide = [
    {nombre: 'Proyecto 1', image: './media/torn-posters.jpg', href: './proyectos.html', cursor: './media/gif1.gif'},
    {nombre: 'Proyecto 2', image: './media/torn-posters.jpg', href: './proyectos.html', cursor: './media/Chad.gif'},
    {nombre: 'Proyecto 3', image: './media/torn-posters.jpg', href: './proyectos.html', cursor: './media/download (2).gif'},
    {nombre: 'Proyecto 4', image: './media/torn-posters.jpg', href: './proyectos.html', cursor: './media/download.gif'},
]

const cursor = document.createElement("img");
cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

sections.forEach(section => {

    section.addEventListener("mouseenter", () => {
        cursor.src = section.querySelector('.hero-slide').dataset.cursor;
        cursor.style.display = "block";
    });

    section.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    section.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
    });

});

