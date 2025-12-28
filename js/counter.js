// Visitor Counter using localStorage
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('visitorCount');

    if (!counterElement) return;

    // Check if user has already been counted
    const hasVisited = localStorage.getItem('hasVisited');

    // Get current count from localStorage
    let visitCount = localStorage.getItem('visitCount');

    // Initialize if first time anyone visits
    if (!visitCount) {
        visitCount = 0;
    }

    // Only increment if this is a new visitor
    if (!hasVisited) {
        visitCount = parseInt(visitCount) + 1;

        // Save new count
        localStorage.setItem('visitCount', visitCount);

        // Mark this browser as having visited
        localStorage.setItem('hasVisited', 'true');
    } else {
        visitCount = parseInt(visitCount);
    }

    // Animate counter
    animateCounter(counterElement, 0, visitCount, 1000);
});

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuad = progress * (2 - progress);
        const current = Math.floor(start + (end - start) * easeOutQuad);

        element.textContent = current.toLocaleString('ru-RU');

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end.toLocaleString('ru-RU');
        }
    }

    requestAnimationFrame(update);
}
