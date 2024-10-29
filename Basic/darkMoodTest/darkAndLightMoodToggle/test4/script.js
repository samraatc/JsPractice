const cube = document.getElementById('cube');
const rotateButton = document.getElementById('rotate-button');
let rotationX = 0;
let rotationY = 0;

rotateButton.addEventListener('click', () => {
    rotationX += 90; // Rotate 90 degrees on X axis
    rotationY += 90; // Rotate 90 degrees on Y axis
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
