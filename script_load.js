document.addEventListener("DOMContentLoaded", function() {
    const animatedHr = document.querySelector('.animated-hr');

    const colors = ['#ffe433', '#7fda10', '#0c45d3', '#e00c0c'];
    let currentColorIndex = 0;

    function changeColorAndWidth() {
        animatedHr.style.backgroundColor = colors[currentColorIndex];
        animatedHr.style.width = 'auto';
        currentColorIndex = (currentColorIndex + 0.5) % colors.length;
    }

    changeColorAndWidth();
    setInterval(changeColorAndWidth, 3000);
});