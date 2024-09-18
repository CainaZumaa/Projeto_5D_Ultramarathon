let count = 1;
document.getElementById("radio1").checked = true;

const buttons = document.querySelectorAll('.manual-btn');

function updateButtonStyles() {
    buttons.forEach((button, index) => {
        if (index === count - 1) {
            button.style.backgroundColor = '#dadada';
            button.style.border = '2px solid #dadada';
        } else {
            button.style.backgroundColor = '#5a5a5a';
            button.style.border = '2px solid #5a5a5a';
        }
    });
}

updateButtonStyles();

setInterval(function () {
    nextImage();
}, 9000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
    updateButtonStyles();
}

let startX;
let isDragging = false;

const slidesContainer = document.querySelector('.slides');

slidesContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
});

slidesContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    if (diff > 50) {
        prevImage();
        isDragging = false;
    } else if (diff < -50) {
        nextImage();
        isDragging = false;
    }
});

slidesContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

slidesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    isDragging = true;
});

slidesContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].pageX - startX;
    if (diff > 50) {
        prevImage();
        isDragging = false;
    } else if (diff < -50) {
        nextImage();
        isDragging = false;
    }
});

slidesContainer.addEventListener('touchend', () => {
    isDragging = false;
});

function prevImage() {
    count--;
    if (count < 1) {
        count = 3;
    }

    document.getElementById("radio" + count).checked = true;
    updateButtonStyles();
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        count = index + 1;
        document.getElementById("radio" + count).checked = true;
        updateButtonStyles();
    });
});

window.onload = function() {
    document.getElementById("inicioTexto").scrollIntoView();
};



