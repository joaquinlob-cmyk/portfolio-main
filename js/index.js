const sections = document.querySelectorAll(".hero");

const cursor = document.createElement("img");
cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

sections.forEach(section => {

    section.addEventListener("mouseenter", () => {
        cursor.src = section.dataset.cursor;
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