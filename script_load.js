document.addEventListener("DOMContentLoaded", function() {
    const animatedHr = document.querySelector('.animated-hr');

    const colors = ['#ffe433', '#c99000', '#ff8f33', '#e00c0c'];
    let currentColorIndex = 0;

    function changeColorAndWidth() {
        animatedHr.style.backgroundColor = colors[currentColorIndex];
        animatedHr.style.width = 'auto';
        currentColorIndex = (currentColorIndex + 0.5) % colors.length;
    }

    changeColorAndWidth();
    setInterval(changeColorAndWidth, 3000);
});