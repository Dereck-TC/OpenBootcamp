class Estudiante{// punto 1: clase
    //punto 2: variables
    nombre = "Dereck"
    //punto 3:
    asignaturas = ["javascript","html","css"]

    //punto 4:
    obtenDatos(){
        return {
            "nombre": this.nombre,
            "asignaturas": this.asignaturas
        }
    }
}
//punto 5:
const instanciaEstu = new Estudiante();
//punto 6:
console.log(instanciaEstu.obtenDatos())