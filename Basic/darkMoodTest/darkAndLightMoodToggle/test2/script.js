const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleButton.textContent = body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
});
