//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2007,
    color: 'Gris',
    //metodos

   encendido: () =>{
    encendido = true
    document.writeln('El auto esta encendido')
   },
   apagado: () =>{
    apagado = false
    document.writeln('El auto esta apagado')
   }

}