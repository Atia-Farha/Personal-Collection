const slides = document.querySelectorAll('.slider img');

let i = 0;

function show(index) {
    slides.forEach(img => {
        img.style.display = 'none'
    });

    slides[index].style.display = 'block';
}

function changeSlide() {
    i = (i + 1 + slides.length) % slides.length;

    show(i);
}

document.addEventListener('DOMContentLoaded', () => {
    show(i);
    setInterval(() => changeSlide(), 3000);
});