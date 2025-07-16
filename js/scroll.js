let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll === 0) {
        // 최상단 → 헤더 보이고 투명
        header.classList.remove('header-hide');
        header.classList.remove('header-scroll-up');
    } else if (currentScroll > lastScroll) {
        // 아래로 스크롤 → 숨김
        header.classList.add('header-hide');
        header.classList.remove('header-scroll-up');
    } else {
        // 위로 스크롤 → 보이고 흰색
        header.classList.remove('header-hide');
        header.classList.add('header-scroll-up');
    }

    lastScroll = currentScroll;
});