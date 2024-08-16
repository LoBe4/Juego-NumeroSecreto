let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

console.log(intentos);
  if(numeroDeUsuario === numeroSecreto ){
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces '}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acerto
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');   
    } else {
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }

    return;
}

function limpiarCaja (){
let valorCaja = document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(ListaNumerosSorteados);
    //Si ya sorteamos todos los números

if(ListaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p','Ya se sortearon todos los números posibles');
} else {

//Si el numero generado esta includio en la lista
   if (ListaNumerosSorteados.includes(numeroGenerado)) {
     return generarNumeroSecreto();

   } else {
     ListaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado; 
   }
 }
}

function condicionesInciales (){
  asignarTextoElemento('h1','Juego del numero secreto');
   asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numero
  //Generar el numeor aleaotorio
  //Inicializar el numero de intentos
  condicionesInciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');

  
}


condicionesInciales();