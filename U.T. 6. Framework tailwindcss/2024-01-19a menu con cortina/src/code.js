document.addEventListener('DOMContentLoaded', _ => {
    const nButtonMenu = document.querySelector('img');
    nButtonMenu.addEventListener('click', _ => {
        const nMenu = document.querySelector('nav');
        nMenu.classList.toggle("-translate-x-full");
    });
});