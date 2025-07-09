//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const Auto = {
  Marca: 'Fiat',
  Modelo: 'Cronos',
  Color: 'Gris',
  Estado: false,

  Encender : function() {
    this.Estado =true
    document.writeln('<p>Se encendio el auto 🟢</p>')
  },
  Apagar : function() {
    this.Estado = false
    document.writeln('<p>Se apago el auto 🔴</p>')

  }
}

Auto.Encender()
Auto.Apagar()