const nav = document.querySelector('nav');
const slides = document.querySelector('.slider');
slides.style.minHeight = `calc(90vh - ${nav.offsetHeight}px)`;