const toggleButtons = document.querySelectorAll('.theme-toggle');
const body = document.body;

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });
});
