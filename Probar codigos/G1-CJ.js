import Personaje from './Personaje.js';  // Importamos la clase Personaje
import Aturdir from './Aturdir.js';  // Asegúrate de importar correctamente la clase Aturdir

// Clase Scorpion que hereda de Personaje
class CJ extends Personaje {
    constructor() {
        super("CJ", 100, [new Aturdir()]); // Llamamos al constructor de Personaje
    }
}

// Exportar el personaje Scorpion
export default CJ;
