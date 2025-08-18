//4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }
  get getCodigo() {
    return this.#codigo;
  }
  get getNombre() {
    return this.#nombre;
  }
  get getPrecio() {
    return this.#precio;
  }
  set setCodigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }
  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set setPrecio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  mostrarDatos() {
    document.writeln(`<h1>Producto</h1>
            <ul>
                <li>Nombre: ${this.#nombre}</li>
                <li>Codigo: ${this.#codigo}</li>
                <li>Precio: $${this.#precio}</li>
            </ul>
            `);
  }
}

const producto1 = new Producto();
const producto2 = new Producto();
const producto3 = new Producto();

const productos = [producto1, producto2, producto3];

for (let i = 0; i < productos.length; i++) {
  productos[i].setNombre = prompt(`Ingrese el nombre del producto N° ${i + 1}`);
  productos[i].setCodigo = prompt(`Ingrese el codigo del producto N° ${i + 1}`);
  productos[i].setPrecio = prompt(`Ingrese el precio del producto N° ${i + 1}`);
}
for (let i = 0; i < productos.length; i++) {
  productos[i].mostrarDatos();
}
