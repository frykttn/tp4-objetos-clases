//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }

  getAlto(alto) {
    this.#alto = alto;
  }
  getAncho(ancho) {
    this.#ancho = ancho;
  }

  setAlto(nuevoAlto) {
    this.#alto = nuevoAlto;
  }

  setAncho(nuevoAncho) {
    this.#ancho = nuevoAncho;
  }

  mostrarRectangulo() {
    document.writeln(
      `La altura es ${this.#alto} y el ancho es ${this.#ancho}<br>`
    );
    document.writeln(
      `El perímetro es ${this.calcularPerimetro()} y el área es ${this.calcularArea()}<br>`
    );
  }

  calcularPerimetro() {
    return 2 * (this.#alto + this.#ancho);
  }

   calcularArea() {
        return this.#alto * this.#ancho;
}
}


const rectangulos = new Rectangulo(
    parseInt(prompt("Ingrese el alto")),
    parseInt(prompt("Ingrese el ancho"))
);

rectangulos.mostrarRectangulo();