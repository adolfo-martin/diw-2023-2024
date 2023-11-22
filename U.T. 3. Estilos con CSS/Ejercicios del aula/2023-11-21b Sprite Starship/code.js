document.addEventListener('DOMContentLoaded', setup);

let intervalId = undefined;

function setup(e) {
    setupButton();
    moveStarship();
}

function setupButton() {
    document.querySelector('#tDivButton')
        .addEventListener('click', destroyStarship);
}

function moveStarship() {
    let contador = 0;

    intervalId = setInterval(
        () => {
            const starShip = document.querySelector('#tDivStarship');
            contador++;
            if (contador === 3) {
                contador = 0;
            }
            starShip.style.backgroundPositionY = `${contador * -100}px`;
        },
        250
    )
}

function destroyStarship(e) {
    clearInterval(intervalId);
    const starShip = document.querySelector('#tDivStarship');
    starShip.style.backgroundPositionY = `-300px`;
}