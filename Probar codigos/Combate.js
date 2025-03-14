// Importar clases de personajes y habilidades (si usas módulos)
import CJ from './G1-CJ';  // Asegúrate de que CJ.js existe y está correctamente escrito
import Beetle from './G1-Beetle';  // Si tienes más personajes, agrégalos aquí

import Aturdir from './Aturdir.js';  // Asegúrate de que esta clase existe

// Variables globales para los personajes
let personaje1, personaje2;

// Función para obtener parámetros de la URL (jugadores seleccionados)
function obtenerPersonajesSeleccionados() {
    const params = new URLSearchParams(window.location.search);
    const jugador1 = params.get('jugador1');
    const jugador2 = params.get('jugador2');

    // Mapear nombres a clases de personajes
    const personajesDisponibles = {
        "Cj_eleccion": CJ,
        "Beetle": Beetle,
        
    };

    // Crear instancias de los personajes seleccionados
    personaje1 = new (personajesDisponibles[jugador1] || CJ)();  // Si no encuentra, usa CJ por defecto
    personaje2 = new (personajesDisponibles[jugador2] || Beetle)();  // Usa Scorpion si no encuentra

    console.log(`Personaje 1: ${personaje1.nombre}`);
    console.log(`Personaje 2: ${personaje2.nombre}`);
}

// Función para comenzar el combate
function comenzarCombate() {
    if (!personaje1 || !personaje2) {
        console.error("No se han seleccionado personajes.");
        return;
    }

    console.log(`¡El combate comienza entre ${personaje1.nombre} y ${personaje2.nombre}!`);
    
    // Iniciar el primer turno
    iniciarTurno();
}

// Función para manejar los turnos del combate
function iniciarTurno() {
    console.log(`Turno de ${personaje1.nombre}`);

    // Simulación básica de ataque
    personaje1.atacar(personaje2);
    console.log(`${personaje2.nombre} tiene ${personaje2.vida} de vida restante.`);

    // Cambio de turno
    [personaje1, personaje2] = [personaje2, personaje1];  // Intercambia los turnos
}

// Hacer que las funciones sean accesibles globalmente
window.comenzarCombate = comenzarCombate;
window.iniciarTurno = iniciarTurno;

// Ejecutar cuando la página cargue
window.onload = function () {
    obtenerPersonajesSeleccionados();
    comenzarCombate();
};
