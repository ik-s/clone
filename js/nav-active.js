const links = document.querySelectorAll('.nav-item');
const current = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute('href') === current) {
        link.classList.add('active');
    }
});