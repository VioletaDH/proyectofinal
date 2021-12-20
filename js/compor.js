//Seleccion de elemento fila
let filas = document.querySelectorAll('.fila');//array conjunto d elementos 

filas[0].addEventListener('mouseover', function(){ cambiar('pdf/Beauty.jpg', 'Beauty')} );
filas[1].addEventListener('mouseover', function(){ cambiar('pdf/Cincuenta.jpg', 'Cincuenta')} );
filas[2].addEventListener('mouseover', function(){ cambiar('pdf/grey.jpg', 'Grey')} );
filas[3].addEventListener('mouseover', function(){ cambiar('pdf/Mirame y Dispara.jpg', 'Mirame y Dispara')} );



function cambiar (ruta, titulo ){
    let contenedorImg = document.querySelector('.contenedorImagen img');
    contenedorImg.src = 'pdf/Beauty.jpg';//cambiar el atributo

    let contenedorTexto = document.querySelector('.contenedorImagen h4');
    contenedorTexto.textContent ='Beauty';
}
////////////////////////////////////////////////////////////////////////////////////
let btnAgregar = document.querySelector('.btnAgregar');
let btnEliminar = document.querySelector('.btnEliminar');

btnAgregar.addEventListener('click', agregar);
btnEliminar.addEventListener('click', eliminar);

function agregar(){
    //pedir dtos
    let libro = prompt('Que libro te gusta?');
    let Calificacion = prompt('Cual es tu calificacion?');
    let ruta = prompt('url de la imagen');

    let filaNueva = document.createElement('tr');//<tr></tr>
    filaNueva.innerHTML =`<td>${Top}</td><td>${Libros}</td><td>${Calificación}</td>`;

    let tabla = document.querySelector('.tabla tbody');
    tabla.appendChild(filaNueva);

    filaNueva.addEventListener('mouseover', function(){cambiar (ruta, libro)});
}

function eliminar(){
    let ultmaFila =document.querySelector('.tabla tbody');

    let ultimaFila = tabla.lastchild;
    ultimaFila.remove();
}