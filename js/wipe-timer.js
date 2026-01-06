// Wipe Timer - Countdown to next server wipe
document.addEventListener('DOMContentLoaded', () => {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const wipeDateEl = document.getElementById('wipeDate');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // Configuration
    const WIPE_CONFIG = {
        // Initial wipe date: January 10, 2026 at 00:00 Moscow time (UTC+3)
        initialWipeDate: new Date('2026-01-10T00:00:00+03:00'),
        // Wipe interval in days
        wipeIntervalDays: 14
    };

    // Calculate next wipe date
    function getNextWipeDate() {
        const now = new Date();
        let nextWipe = new Date(WIPE_CONFIG.initialWipeDate);

        // If initial date has passed, calculate next wipe
        while (nextWipe <= now) {
            nextWipe.setDate(nextWipe.getDate() + WIPE_CONFIG.wipeIntervalDays);
        }

        return nextWipe;
    }

    // Format date for display
    function formatWipeDate(date) {
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day} ${month} ${year} в ${hours}:${minutes}`;
    }

    // Update timer display
    function updateTimer() {
        const nextWipe = getNextWipeDate();
        const now = new Date();
        const diff = nextWipe - now;

        if (diff <= 0) {
            // Wipe just happened, recalculate
            setTimeout(updateTimer, 1000);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update display with leading zeros
        const newDays = days.toString().padStart(2, '0');
        const newHours = hours.toString().padStart(2, '0');
        const newMinutes = minutes.toString().padStart(2, '0');
        const newSeconds = seconds.toString().padStart(2, '0');

        // Animate changes
        if (daysEl.textContent !== newDays) {
            animateChange(daysEl);
            daysEl.textContent = newDays;
        }
        if (hoursEl.textContent !== newHours) {
            animateChange(hoursEl);
            hoursEl.textContent = newHours;
        }
        if (minutesEl.textContent !== newMinutes) {
            animateChange(minutesEl);
            minutesEl.textContent = newMinutes;
        }
        if (secondsEl.textContent !== newSeconds) {
            animateChange(secondsEl);
            secondsEl.textContent = newSeconds;
        }

        // Update wipe date text
        if (wipeDateEl) {
            wipeDateEl.textContent = formatWipeDate(nextWipe);
        }
    }

    // Add brief animation to element
    function animateChange(element) {
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 100);
    }

    // Initial update
    updateTimer();

    // Update every second
    setInterval(updateTimer, 1000);
});
