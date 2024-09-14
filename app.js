// Simple scroll animation for destinations
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.destination-card');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        }
    });
});