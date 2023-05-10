const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const updateButton = document.getElementById('update');
const nextButton = document.getElementById('next');

let currentIndex = 0;
let timerId = null;
let images = [
    {src: 'livingroom1.jpg', alt: 'home'},
    {src: 'livingroom2.jpg', alt: 'home'},
    {src: 'livingroom3.jpg', alt: 'home'},
    {src: 'livingroom4.jpg', alt: 'home'},
    {src: 'livingroom5.jpg', alt: 'home'},
    {src: 'livingroom6.jpg', alt: 'home'},
    {src: 'livingroom7.jpg', alt: 'home'}
];

function showCurrentImage() {
    const image = images[currentIndex];
    gallery.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    clearInterval(timerId);
    if (image.time) {
        timerId = setInterval(showNextImage, image.time * 1000);
    }
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImage();
}

prevButton.addEventListener('click', showPrevImage);
updateButton.addEventListener('click', showCurrentImage);
nextButton.addEventListener('click', showNextImage);

showCurrentImage();