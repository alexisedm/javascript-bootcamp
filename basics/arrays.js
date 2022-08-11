//Arreglos y .map
const carrito = ['Producto 1', 'Producto 2','Producto 3'];

console.log(carrito);
//map conserva el array original y genera un nuevo array
carrito.map(producto => {
    return 'El producto es' + producto;

});
console.log(producto)

//Objects Keys
const person = {
    nombre: 'Alexis',
    trabajo: 'Desarrollador Web',
    edad: 500
}

console.log(Object.keys(person));

//destructuring
const {nombre} = person;
console.log(nombre);

/*Tradicionalmente
const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`
})
appContenedor.innerHTML = html;
*/

//Spread  operator

let lenguajes = ['Python', 'JS', 'Java'];
let frameworks = ['React', 'Laravel', 'Django'];

//unir los arrays en 1 solo
let combinacion = lenguajes.concant(frameworks);
console.log(combinacion);


///nueva forma
let combinacionSpread = [...lenguajes, ...frameworks];
console.log(combinacionSpread);


//ultimo elemento del array   con spread
let [ultimo] = [...lenguajes].reverse();

//con spread
console.log(lenguajes);
console.log(ultimo);



function suma(a,b,c){

    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros);

//Metodos en arrays

const personas = [
    {nombre:'Alexis', edad:23, aprendiendo:'Javascript'},
    {nombre:'Jorge',  edad:18, aprendiendo:'PHP'},
    {nombre:'Alejandra', edad:21, aprendiendo:'Python'},
    {nombre:'Karen', edad:30, aprendiendo:'Laravel'},
    {nombre:'Miguel', edad:35, aprendiendo:'Adobe XD'},

]

console.log(personas);

//mayores a 28 años

const mayores = personas.filter(persona => {
return persona.edad > 28;

});
console.log(mayores);

//find
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});
console.log(alejandra.aprendiendo);

//reduce  acumula los valores de un campo de un array en este caso sumar todos las edades
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length);
    
