const slides = document.querySelectorAll('#slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        removeActive();
        slide.classList.add('_active');
    });
};

function removeActive() {
    slides.forEach((slide) => {
        slide.classList.remove('_active');
    });
};