document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill');

    skillBars.forEach(skill => {
        const progressBar = skill.querySelector('.skill-bar_1, .skill-bar_2');
        const percent = skill.getAttribute('data-percent');

        progressBar.style.width = '0%';

        progressBar.textContent = '0%';

        setTimeout(function() {

            progressBar.style.transition = 'width 1.7s ease-in-out';

            progressBar.style.width = percent + '%';

            function animateCounter() {
                let counter = 0;
                const interval = setInterval(function() {
                    if (counter < percent) {
                        counter++;
                        progressBar.textContent = counter + '%';
                    } else {
                        clearInterval(interval);
                    }
                }, 30);
            }

            animateCounter();
        }, 100);
    });
});