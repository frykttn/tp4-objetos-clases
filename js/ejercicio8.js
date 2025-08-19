//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }
  get nombre(){
        return this.#nombre
    }

    get edad (){
        return this.#edad
    }

    get profesion(){
        return this.#profesion
    }

    set nombre (nuevoNombre){
        this.#nombre = nuevoNombre
    }
    
    set edad (nuevaEdad){
        this.#edad = nuevaEdad
    }

    set profesion (nuevaProfesion){
        this.#profesion = nuevaProfesion
    }

  saludar() {
    document.writeln(`Hola! ${this.#nombre}`);
  }
  despedirse(){
    document.writeln(`Hasta pronto ${this.#nombre}`)
  }
}
const nombre1 = prompt(`Ingrese el nombre de la primera persona: `);
const nombre2 = prompt(`Ingrese el nombre de la segunda persona: `);

const Persona1 = new Persona(nombre1)
const Persona2 = new Persona(nombre2)


Persona1.saludar()
Persona1.despedirse()

Persona2.saludar()
Persona2.despedirse()
