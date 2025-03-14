class Aturdir {
    constructor() {
        this.nombre = "Aturdir";
        this.descripcion = "El objetivo no puede actuar durante 1 turno.";
    }

    aplicar(usuarios, objetivos) {
        objetivos.forEach(objetivo => {
            objetivo.estado = "aturdido";
            objetivo.turnosAturdido = 1;
            console.log(`${objetivo.nombre} ha sido aturdido.`);
        });
    }
}

// Exportar la habilidad Aturdir
export default Aturdir;
