class Habilidad {
    constructor(nombre, descripcion, duracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion; // En turnos
    }

    aplicar(usuarios, objetivos) {
        console.log(`${this.nombre} aplicada, pero no está definida su lógica específica.`);
    }
}
