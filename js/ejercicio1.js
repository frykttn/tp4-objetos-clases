//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  marca: 'Fiat',
  anio: '2023',
  modelo: 'Cronos',
  color: 'Gris',

  encender : function() {
    document.writeln('<p>Se encendio el auto 🟢</p>')
  },
  apagar : function() {
    document.writeln('<p>Se apago el auto 🔴</p>')

  }
}

auto.encender()
auto.apagar()