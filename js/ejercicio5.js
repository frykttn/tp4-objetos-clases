//5- Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//Para realizar este método tener en cuenta la siguiente tabla de generaciones:
//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//generaDNI(): genera un número aleatorio de 8 cifras.


class Persona{
    #edad
    #nombre
    #dni
    #sexo
    #peso
    #altura
    #anioNacimiento
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.#nombre = nombre,
        this.#edad = edad,
        this.#dni = dni,
        this.#sexo = sexo
        this.#peso = peso,
        this.#altura = altura,
        this.#anioNacimiento = anioNacimiento
    }
    get getNombre(){
        return (this.#nombre)
    }
    set setNombre(nombre){
        this.#nombre=nombre
    }
    get getEdad(){
        return(this.#edad)
    }
    set setEdad(edad){
        this.#edad = edad
    }
    get getDni(){
        return(this.#dni)
    }
    set setDni(dni){
        this.#dni =dni
    }
    get getSexo(){
        return(this.#sexo)
    }
    set setSexo(sexo){
        this.#sexo = sexo
    }
    get getPeso(){
        return(this.#peso)
    }
    set setPeso(peso){
        this.#peso= peso
    }
    get getAltura(){
        return(this.#altura)

    }
    set setAltura(altura){
        this.#altura = altura
    }
    get getAnioNacimiento(){
        return(this.#anioNacimiento)
    }
    set setAnioNacimiento(anioNacimiento){
        this.#anioNacimiento = anioNacimiento
    }
    
    mostrarGeneracion (){
        if(this.#anioNacimiento <= 1948){
            document.writeln(`${this.nombre} pertenece a la Silent Generation (Los niños de la posguerra) donde su rasgo caracteristico es la "AUSTERIDAD"`)
        }else if(this.#anioNacimiento <= 1968){
            document.writeln(`${this.#nombre} pertenece a la generacion Baby Boom y su rasgo caracteristico es la "AMBICION"`)
        }else if(this.#anioNacimiento <=1980){
            document.writeln(`${this.#nombre} pertenece a la Generacion X, donde su rasgo caracteristico es LA "OBSESION POR EL EXITO"`)
        }else if(this.#anioNacimiento <= 1993){
            document.writeln(`${this.#nombre} pertenece a la Generacion Y (millenials), inicio de la digitalizacion y su rasgo carcteristico es la "FRUSTRACION" `)
        }else if(this.#anioNacimiento <= 2010){
            document.writeln(`${this.#nombre} pertenece a la Generacion Z, expansion masiva de internet y su rasgo caracteristico es la "IRREVERENCIA"`)
        }
    }
    mayorEdad(){
        if(this.#edad >=18){
            alert(`${this.#nombre} Es mayor de edad`)
        }else{
            alert(`${this.#nombre} Es menor de edad`)
        }
    }

    generarDni(){
         this.#dni = Math.floor(Math.random() * 90000000) + 10000000;
    }


mostrarDatos(){
            document.writeln(`<ul class= 'list-group'>
            <li class='list-group-item'>Nombre:${this.#nombre}</li>
            <li class='list-group-item'>Edad: ${this.#edad}</li>
            <li class='list-group-item'>Dni: ${this.#dni}</li>
            <li class='list-group-item'>Sexo: ${this.#sexo}</li>
            <li class='list-group-item'>Peso: ${this.#peso}</li>
            <li class='list-group-item'>Altura: ${this.#altura}</li>
            <li class='list-group-item'>Año de nacimiento: ${this.#anioNacimiento}</li>
            
            </ul>`)

}
}

const persona= new Persona

persona.setNombre=prompt("Ingresa el nombre de la persona")
persona.setEdad=prompt("Ingresa la edad de la persona")
persona.generarDni()
persona.setSexo= prompt('ingrese el sexo de la persona (M) mujer, (H) hombre.')
persona.setPeso= prompt('Ingrese el peso de la persona')
persona.setAltura= prompt('Ingrese la altura de la persona')
persona.setAnioNacimiento=parseInt((prompt("Ingresa el Año de nacimiento de la persona")))
console.log(persona.getAnioNacimiento)

persona.mostrarGeneracion()
persona.mostrarDatos()