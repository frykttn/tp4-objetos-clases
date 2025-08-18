//2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//Una propiedad titular con el valor "Alex".
//Una propiedad saldo, teniendo como valor inicial 0.
//Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//Un método extraer() que permita retirar la cantidad pasada como parámetro.
//Un método informar() que retorne la información del estado de la cuenta.

//Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
  //propiedades
  titular: "alex",
  saldo: 0,
  //metodos
  ingresar: function (cantidad) {
    this.saldo += cantidad;
    alert(`Has ingresado $${cantidad}. Su saldo actual es de $${this.saldo}`);
  },

  extraer: function (cantidad) {
    if (this.saldo -= cantidad) {
        alert(`Has retirado $${cantidad} Dinero disponible $${this.saldo}`)
    }else{
        cantidad > this.saldo;
        alert('El monto supera el dinero disponible')
    }
  },
  informar: function () {
    return `Titular: ${this.titular} | Saldo $${this.saldo}`;
  },
};
let opcion;
do {
  opcion = prompt(
    "Elige una opcion 1-Ingresar dinero, 2-Extrae dinero, 3-Ver estado de la cuenta"
  );

  switch (opcion) {
    case "1":
      let ingreso = parseInt(prompt("Ingrese el monto que desea ingresar"));
      cuenta.ingresar(ingreso);
      break;
    case "2":
      let retiro = parseInt(prompt("Cuanto dinero deseas extraer?"));
      cuenta.extraer(retiro);
      break;
    case "3":
      alert(cuenta.informar());
      break;
    default:
      alert("Opcion no valida, intentelo de nuevo");
  }
} while ("Desea realizar otra operacion?");
