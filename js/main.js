// 동영상 재생 js

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.player-wrap video');
    const button = document.querySelector('.player-control button');

    const playIcon = `<svg class="play-icon" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height="80" rx="20" fill="#000" fill-opacity=".5"></rect>
                        <path fill="#fff" d="M26 24h8v32h-8zM46 24h8v32h-8z"></path>
                      </svg>`;

    const stopIcon = `<svg class="stop-icon" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height="80" rx="20" fill="#000" fill-opacity=".5"></rect>
                        <path fill="#fff" d="M56 40.32L30 57.642V23l26 17.32z"></path>
                      </svg>`;

    button.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            button.innerHTML = playIcon;
            button.className = 'btn-play';
        } else {
            video.pause();
            button.innerHTML = stopIcon;
            button.className = 'btn-stop';
        }
    });
});

// main pagination js

const slides = document.querySelectorAll('.swiper-slide');
const wrapper = document.querySelector('.swiper-wrapper');
const pagination = document.querySelector('.swiper-pagination');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

let index = 0;
const totalSlides = slides.length;

// pagination 바 생성
const paginationBarEl = document.createElement('div');
paginationBarEl.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: calc(100% / ${totalSlides});
    background: #fff;
    transition: transform 0.5s;
`;
pagination.appendChild(paginationBarEl);

function updateSlide() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    paginationBarEl.style.transform = `translateX(${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

let autoSlide = setInterval(nextSlide, 5000);
function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
}

updateSlide();