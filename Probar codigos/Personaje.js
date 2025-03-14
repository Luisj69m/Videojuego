// Clase base Personaje
class Personaje {
    constructor(nombre, vidaMax, habilidades = []) {
        this.nombre = nombre;
        this.vidaMax = vidaMax;
        this.vida = vidaMax;
        this.estado = "normal"; // Estado actual (normal, aturdido, etc.)
        this.turnosAturdido = 0;
        this.habilidades = habilidades;  // Habilidades que el personaje puede usar
    }

    // Método para aplicar una habilidad a otro personaje
    aplicarHabilidad(habilidad, objetivo) {
        habilidad.aplicar([this], [objetivo]);
    }

    // Método para actualizar el estado del personaje (e.g., si está aturdido)
    actualizarEstado() {
        if (this.estado === "aturdido" && this.turnosAturdido > 0) {
            this.turnosAturdido--;
            if (this.turnosAturdido <= 0) {
                this.estado = "normal"; // El personaje ya no está aturdido
            }
        }
    }
}

// Exportar la clase Personaje para poder usarla en otros archivos
export default Personaje;
