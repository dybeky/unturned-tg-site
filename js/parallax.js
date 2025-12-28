// Parallax Effect on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const header = document.querySelector('.header');
    const contentContainer = document.querySelector('.content-container');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        // Parallax effect for header
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
            header.style.opacity = 1 - scrolled / 500;
        }

        // Parallax effect for content container
        if (contentContainer) {
            contentContainer.style.transform = `translateY(${scrolled * -0.1}px)`;
        }
    });

    // Mouse move parallax
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        if (container) {
            container.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});
