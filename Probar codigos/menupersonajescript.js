function selectCharacter(player) {
    const select = document.getElementById(player);
    const imageDiv = document.getElementById(`${player}-image`);
    const character = select.value;
    
    if (character) {
        imageDiv.innerHTML = `<img src="images/${character}.png" alt="${character}">`;
    } else {
        imageDiv.innerHTML = "";
    }
}

function startFight() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    if (player1 && player2) {
        alert(`¡Comienza la pelea entre ${player1} y ${player2}!`);
    } else {
        alert('Selecciona ambos personajes para iniciar la pelea.');
    }
}

function resetSelection() {
    document.getElementById('player1').value = "";
    document.getElementById('player2').value = "";
    document.getElementById('player1-image').innerHTML = "";
    document.getElementById('player2-image').innerHTML = "";
} 
