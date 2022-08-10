class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;

    }

    mostrar(){
        return `${this.nombre} tiene uan prioridad de ${this.prioridad}`;
   
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad); //referencia constructor padre, puedo heredar utilizar us smetodos tambien
        this.cantidad = cantidad;

    }

    mostrar(){
        super.mostrar();
        return `y la cantidad de ${this.cantidad}`;
    }
    hola(){
        return 'Hola';
    }
}


//crear objetos
let tarea1 = new Tarea('Aprender js', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'Media');
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());



//Compras
let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
console.log(compra1);
console.log(compra1.mostrar());
console.log(compra1.hola());