

//Function Declaration
function saludar(nombre){
    console.log('Bienvenido' + nombre);
}
saludar();

//Function expression
const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente:' + nombreCliente);
}
cliente('Juan');

// Scope
var musica = 'Jazz';

if(musica) {
    var musica = 'Rock';
    console.log('dentro del if', musica);
}
console.log('Fuera del if', musica);


//Scope con let    - ventaja no sobreescribe el valor de la variable dentro de sentencias If
let musica1 = 'Jazz';
if(musica1) {
    let musica1 = 'Rock';
    console.log('dentro del if', musica1);
}
console.log('Fuera del if', musica1);


//Template Strings
const nombre= 'Juan';
const trabajo = 'Desarrollador Web';
//concatenar js
console.log('Nombre' + nombre + ', Trabajo:' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);
const contenerApp = document.querySelector('#app');
let html = '<ul>'+
            '<li> Nombre:'+ nombre + '</li>' +
            '<li> Trabajo:'+ trabajo + '</li>' +
            '</ul>';

contenerApp.innerHTML = html;


//String literals
let html2 = `
        <ul>
            <li> Nombre: ${nombre} </li>
            <li> Trabajo: ${trabajo} </li>
        </ul>
    `;
contenerApp.innerHTML = html2;

//arrow functions
let viajando1 = function(destino){
    return `Viajando a la ciudad de: ${destino}`;

};
//le asigna el valor de retorno de la funcion a viaje
let viaje1 = viajando1('Paris');
let viaje2 = viajando1('Roma');
console.log(viaje1);

/*arrow functions   
*si solo tiene un parametro puedes quitar el () antes del  apuntador flecha =>
*quitar return ya que se da por implicito
*/
let viajando = (destino, duracion) =>`Viajando a la ciudad de: ${destino} por ${duracion}`;
//le asigna el valor de retorno de la funcion a viaje
let viaje = viajando('Paris','9 dias');
let viaje3 = viajando('Londres','4 dias');
let viaje4 = viajando('Roma','6 dias');
console.log(viaje);

//Objetos
//Object literal --Menos flexible
const persona = {
    nombre: 'Juan',
    profesion:'Desarrollador web',
    edad: 500, //alterar el  tipo de dato de un atributo/propiedad 
}
persona.edad = '';

//tradicional
let nombrePersona = 'Juan';
let profesion = 'Desarrollador web';
console.log(nombrePersona);
console.log(profesion);

//obj literal
console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad); // console.log(persona['edad']); 


//Object constructor ---   sirve para crear multiples objetos con distintos valores    ya que anterioremnte en js no soportaba clases
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear una nueva tarea;
const tarea1 = new Tarea('Apender js y react','Urgente');
console.log(tarea1);

//crear nuevos objetos
const tarea2 = new Tarea('Pasear al perro', 'Media');
const tarea3 = new Tarea('Preparar café', 'Baja');
console.log(tarea2);
console.log(tarea3);


//Prototypes

//Obj literal
/*
const persona = {
    nombre: 'Juan',
    profesion:'Desarrollador web',
    edad: 500, //tambien cualquier tipo de datos hasta funciones
}

console.log(persona);
const mostrarCliente = mostrarInformacionTarea(persona.nombre,
    persona.profesion);
console.log(mostrarCliente);
*/

//Obj constructor Solo puede ser objeto Tarea con sus props y sus methods
function TareaObj(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
//Agregar un prototype a tarea
TareaObj.prototype.mostrar =  function(){ //acede a los paramtros del objeto tarea por logica ya con this instancia sus params
    return `La tarea ${this.nombre} tiene una prioridad de  ${this.urgencia}`;
}

//crear nueva tarea
const tareaPrototype = new TareaObj('Aprender js y react','Urgente');
console.log(tareaPrototype);
console.log(tareaPrototype.mostrarInformacionTarea() );


//Destructuring 
const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'Vuejs', 'AngularJs']

}
//Destructuring es extraer valores de un objeto
let {anterior} = aprendiendoJS.version;
console.log(anterior);

//Object Literal Enhancement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ["1","2","3"];


//forma anterior

const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
console.log(metallica);


//forma nueva
const metallica1 = {banda,genero, canciones};
console.log(metallica1);

//metodos o funciones en un objeto

//Object keys
const person = {
    nombre: 'Alexis',
    trabajo: 'Desarrollador Web',
    edad: 500,
    musicaTech: true,
    mostrarInfo() {   //string templates
        console.log(`${nombre} es ${trabajo} y su edad es ${edad}`) //if this doesnt exist it gonna throws an error
    }

}
person.mostrarInfo();