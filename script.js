document.addEventListener('DOMContentLoaded', () => {
    const car = document.querySelector('.car');
    const textLeft = document.querySelector('.text-left');
    const textRight = document.querySelector('.text-right');
    const content = document.querySelector('.content');
    const loaderContainer = document.querySelector('.loader-container');

    setTimeout(() => {
        car.classList.add('animate');
        textLeft.classList.add('split');
        textRight.classList.add('split');
        
        setTimeout(() => {
            content.classList.add('visible');
            loaderContainer.style.display = 'none';
        }, 700);  // Reduced from 1000 to 700 to match new animation speed
    }, 500);
});