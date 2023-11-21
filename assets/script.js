const img = document.querySelector('.right img');
let isMovingDown = true;
let currentPosition = 0;
const moveDistance = 30; // Jarak pergerakan gambar

function moveImage() {
    const maxHeight = document.querySelector('.hero').offsetHeight - img.offsetHeight;

    if (isMovingDown) {
        currentPosition += 1;
        if (currentPosition >= moveDistance) {
            isMovingDown = false;
        }
    } else {
        currentPosition -= 1;
        if (currentPosition <= 0) {
            isMovingDown = true;
        }
    }

    img.style.transform = `translateY(${currentPosition}px)`;
}

setInterval(moveImage, 40);

const textElement = document.querySelector('.left h3');
const text = textElement.textContent;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        index = 0;
        textElement.textContent = '';
        setTimeout(typeWriter, 100);
    }
}
typeWriter();