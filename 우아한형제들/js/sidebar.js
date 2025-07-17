const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.sidebar a[href="#${id}"]`);
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(section => {
    observer.observe(section);
});