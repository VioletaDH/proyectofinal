//Seleccion de elemento fila
let filas = document.querySelectorAll('.fila');//array conjunto d elementos 

filas[0].addEventListener('mouseover', function(){ cambiar('peliculas/furioso.jpg', 'furioso')} );
filas[1].addEventListener('mouseover', function(){ cambiar('peliculas/moda.jpg', 'moda')} );
filas[2].addEventListener('mouseover', function(){ cambiar('peliculas/tengo.jpg', 'tengo')} );
filas[3].addEventListener('mouseover', function(){ cambiar('peliculas/transportador.jpg', 'transportador')} );
filas[4].addEventListener('mouseover', function(){ cambiar('peliculas/tres.jpg', 'tres')} );


function cambiar (ruta, titulo ){
    let contenedorImg = document.querySelector('.contenedorImagen img');
    contenedorImg.src = 'peliculas/tres.jpg';//cambiar el atributo

    let contenedorTexto = document.querySelector('.contenedorImagen h4');
    contenedorTexto.textContent ='Violet';
}
////////////////////////////////////////////////////////////////////////////////////
let btnAgregar = document.querySelector('.btnAgregar');
let btnEliminar = document.querySelector('.btnEliminar');

btnAgregar.addEventListener('click', agregar);
btnEliminar.addEventListener('click', eliminar);

function agregar(){
    //pedir dtos
    let pelicula = prompt('Cual pelicula te gusta?');
    let Calificacion = prompt('Cual es tu calificacion?');
    let ruta = prompt('url de la imagen');

    let filaNueva = document.createElement('tr');//<tr></tr>
    filaNueva.innerHTML =`<td>${Top}</td><td>${Pelicula}</td><td>${Calificación}</td>`;

    let tabla = document.querySelector('.tabla tbody');
    tabla.appendChild(filaNueva);

    filaNueva.addEventListener('mouseover', function(){cambiar (ruta, peliula)});
}

function eliminar(){
    let ultmaFila =document.querySelector('.tabla tbody');

    let ultimaFila = tabla.lastchild;
    ultimaFila.remove();
}