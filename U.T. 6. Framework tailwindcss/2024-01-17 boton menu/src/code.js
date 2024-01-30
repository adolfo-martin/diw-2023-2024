document.addEventListener('DOMContentLoaded', _ => {
    const nNav = document.querySelector('nav');
    nNav.classList.toggle('hidden');

    const nImg = document.querySelector('img');
    nImg.addEventListener('click', _ => {
        const nNav = document.querySelector('nav');
        nNav.classList.toggle('hidden');
    });
});