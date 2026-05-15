const items = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    items.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
});
