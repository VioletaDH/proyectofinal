//Seleccion del boton chat
let btnBolita = document.querySelector('.contenedorchatbot');

btnBolita.addEventListener('click',  aparece );

function aparece(){
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style', 'display:block;');
}

//seleccion del boton cerrar
let btncerrar = document.querySelector('.btncerrar');

btncerrar.addEventListener('click', desaparecer );

function desaparecer(){
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:none;');
}

//Enter para escribir
let escrituraInput = document.querySelector('.mensajes');
escrituraInput.addEventListener('keyup',tecleado);

function tecleado(event){
    if(event.key == "Enter")
        agregartexto();
}

//Seleccionar el boton enviar
let btnenviar = document.querySelector('.btnenviar');
btnenviar.addEventListener('click', agregartexto);

function agregartexto(){
        //Usuario
        //seleccionar la caja de texto
    let cajaMensajes = document.querySelector('.mensajes');
    //Obtenemos el texto de la caja
    let textoPregunta = cajaMensajes.value; 
         //
    cajaMensajes.value = "";

    let contenedorChat = document.querySelector('.chatchatbot');
        //Creamos un elemento parrafo
    let parrafoNuevo = document.createElement('p');
    //Agregamos una clase a p
    parrafoNuevo.className = "mensajeusuario";
        //Añadimos el texto al parrafo nuevo
    parrafoNuevo.innerHTML = "Tu:"+ textoPregunta;
       //AÑADIMOS EL PARRAFO NUEVO AL CHAT
    contenedorChat.appendChild(parrafoNuevo);

    //IA
    let parrafoIA = document.createElement('p');
    parrafoIA.innerHTML = "IA:" + IA(textoPregunta);
    contenedorChat.appendChild(parrafoIA);

    // Linea de codigo para que se ponga hacia abajo
    contenedorChat.scrollTop = contenedorchat.scrollHeight;
}

function IA(pregunta){

    //Pregunta 1
    let edadPregunta = /(tienes|años|edad)/gi; /años[a-z]*tienes/gi;
    if (edadPregunta.test(pregunta)){
        return "Tengo 30 años";
    }
    //pregunta 2
    let nombrePregunta = /tu|te[a-z\s]*nombre|Llamas/gi;
    if (nombrePregunta.test(pregunta)){
        return "Mi nombre es Violet";
    }
        //pregunta 3
        let programasPregunta = /gusta[a-z\s]*programar|programas/gi;
        if (programasPregunta.test(pregunta)){
            return "Me encanta programar";
        }
    // Pregunta 4
    let internetPregunta = /invento|ocurrio[a-z\s]*internet/gi;
    if (internetPregunta.test(pregunta)){
        return "A Tim Bernes-Lee";
    }
    // Pregunta 5
    let mundoPregunta = /gustaria[a-z\s]*mundo/gi;
    if (mundoPregunta.test(pregunta)){
        return"Si, Me gustaria conocer todo el mundo";
    }

    //AQUI LA MAGIA DE LA IA
    return"Lo siento no entendi tu pregunta";
}