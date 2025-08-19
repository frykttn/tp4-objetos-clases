//9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  get nombre (){
        return this.#nombre
    }

    get edad (){
        return this.#edad
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }

    set edad (nuevaEdad){
        this.#edad = nuevaEdad
    }

   emitirSonido(){

    }

}

class Perro extends Animal {
    constructor (nombre, edad){
        super (nombre, edad);
    }

    emitirSonido(){
        document.writeln(`El perro dice: guau guau! <br>`);
    }

}

class Gato extends Animal {
    constructor (nombre, edad){
        super (nombre, edad);
    }

    emitirSonido(){
        document.writeln(`El gato dice: miau miau!`);
    }

}

const perro = new Perro 
const gato = new Gato 

perro.emitirSonido();
gato.emitirSonido();
