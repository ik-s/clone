const progress = document.querySelector('.header-progress');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    progress.style.setProperty('--percent', percent + '%');
});