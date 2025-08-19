//
class Libro {
  #isbn;
  #titulo;
  #autor;
  #paginas;
  constructor(isbn, titulo, autor, paginas) {
    (this.#isbn = isbn),
      (this.#titulo = titulo),
      (this.#autor = autor),
      (this.#paginas = paginas);
  }

  get isbn() {
    return this.#isbn;
  }
  set isbn(isbn) {
    this.#isbn = isbn;
  }
  get titulo() {
    return this.#titulo;
  }
  set titulo(titulo) {
    this.#titulo = titulo;
  }
  get autor() {
    return this.#autor;
  }
  set autor(autor) {
    this.#autor = autor;
  }
  get paginas() {
    return this.#paginas;
  }
  set paginas(paginas) {
    this.#paginas = paginas;
  }

  mostrarLibro(){
    document.writeln(`El libro ${this.#titulo} con ISBN ${this.#isbn}, creado por el autor ${this.#autor} tiene paginas ${this.#paginas}`)
  }
}

const libro1 = new Libro
const libro2 = new Libro

libro1.titulo=prompt("Ingrese el titulo del libro")
libro1.isbn=prompt("Ingrese el ISBN del libro")
libro1.autor=prompt("Ingrese el autor del libro")
libro1.paginas=parseInt(prompt("Ingrese la cantidad de páginas del libro"))

libro2.titulo=prompt("Ingrese el titulo del libro")
libro2.isbn=prompt("Ingrese el ISBN del libro")
libro2.autor=prompt("Ingrese el autor del libro")
libro2.paginas=parseInt(prompt("Ingrese la cantidad de páginas del libro"))

libro1.mostrarLibro()
libro2.mostrarLibro()

if (libro1.paginas >= libro2.paginas) {
    document.writeln(`<br><p>El libro ${libro1.titulo} es el que tiene más paginas</p>`)
}else if(libro2.paginas >= libro1.paginas){
    document.writeln(`<br><p>El libro ${libro2.titulo} es el que tiene más paginas</p>`)
}