//Comprenden el codigo cuando se realiza un llamado asyncrono
//por ejemplo cuando hay un API solo hay 2 opciones succes o error
const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;
        if(descuento){
            resolve('Descuento aplicado!');

        }else{
            reject('No se pudo aplciar el descuento');
         }

    }, 3000);
});
//methodo then 
aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});  
console.log(aplicarDescuento);


//Promises y uso en Fetch o AJAXs
const descargarUsuarios = cantidad =>  new Promise((resolve, reject) => {
    //definir api
    const api = `api${cantidad}`;
    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir conexion
    xhr.open('GET', api, true);
    // on load
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.oneror = (error) => reject(error);

    //send
    xhr.send();
});

descargarUsuarios(30).then(
    miembros => console.log(miembros),
    error => console.error(
        new Error('Hubo un error' +error)

    )
);

//imprimir html
descargarUsuarios2(30).then(
    miembros => imprimirHtml(miembros),
    error => console.error(
        new Error('Hubo un error' +error)

    )
);

function imprimirHtml(usuarios){

    let html2 = '';

    usuarios.forEach(usuario => {
        let html2 += 
        `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Image:
                <img src="${usuario.picture.medium}">
            </li>
        `;
    });
    
    const contenedorApp = doucment.querySelector('#app');
    contenedorApp.innerHTML = html;
}