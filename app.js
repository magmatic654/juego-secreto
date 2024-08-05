let parrafo = document.querySelector('p');
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let botonReiniciar = document.querySelector('#reiniciar'); 
let numerosRestantes = numeroMaximo;

condicionesIniciales();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.querySelector("#valorUsuario").value);
    
    
    if(numeroSecreto === numeroDeUsuario){
        numerosRestantes--;
        if(!numerosRestantes){
            reiniciarJuego();  
            asignarTextoElemento('p', `Terminó el juego`);
        }else{
            reiniciarJuego(); 
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        }

    }else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    intentos++;
    return;
}

function condicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    intentos = 1; 
    if(!numerosRestantes){
        listaNumerosSorteados = [];
        deshabilitarInput('#intentar');
        habilitarInput('#reiniciar');
        console.log(numerosRestantes)
        numerosRestantes = numeroMaximo;
    }else{
        deshabilitarInput('#reiniciar');
        habilitarInput('#intentar');
        console.log(numerosRestantes)
        numeroSecreto = generarNumeroSecreto();
        console.log(numeroSecreto);

    }
}

function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
}

function deshabilitarInput(inputName){
    document.querySelector(inputName).setAttribute('disabled', true);
}
function habilitarInput(inputName){
    document.querySelector(inputName).removeAttribute('disabled');
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}

// let listaGenerica = [];
// let lenguajesDeProgramación = ['JavaScript','C','C++','Kotlin', 'Python'];
// lenguajesDeProgramación.push('Java', 'Ruby', 'GoLang');


// function elementosLista(lista){
//     for(let i = 0; i < lista.length; i++){
//         console.log(lista[i]);
//     }
//     return 
// }
// function invertirLista(lista){
//     let listaInvertida = [];
//     for(let i = lista.length-1; i >= 0; i--){
//         listaInvertida.push(lista[i]);
//     }
//     return listaInvertida;
// }
// elementosLista(lenguajesDeProgramación);
// let listaInvertida = invertirLista(lenguajesDeProgramación);
// console.log(listaInvertida);
// elementosLista(listaInvertida);

// function calcularPromedioLista(lista){
//     sumaLista = 0;
//     for(let i = 0; i < lista.length; i++){
//         sumaLista = sumaLista+lista[i];
//     }
//     return sumaLista/lista.length;
// }

// let listaNumerosDesordenados = [23,3,5,3,1,6,1,22,5,2,6,7,8,2];


// function ordenemientoBurbujaAscendente(lista){
//     let listaNueva = [...lista];
//     for(let i = 0; i < listaNueva.length-1; i++){
//         for(let j = 0; j < (listaNueva.length - i -1);j++){
//             if(listaNueva[j]>listaNueva[j+1]){
//                 let aux = listaNueva[j];
//                 listaNueva[j] = listaNueva[j+1];
//                 listaNueva[j+1] = aux; 
//             }
//         }
//     }
//     return listaNueva;
// }
// function ordenemientoBurbujaDescendente(lista){
//     let listaNueva = [...lista];
//     for(let i = 0; i < listaNueva.length-1; i++){
//         for(let j = 0; j < (listaNueva.length - i -1);j++){
//             if(listaNueva[j]<listaNueva[j+1]){
//                 let aux = listaNueva[j];
//                 listaNueva[j] = listaNueva[j+1];
//                 listaNueva[j+1] = aux; 
//             }
//         }
//     }
//     return listaNueva;
// }

// let lista1 = [4,5,3,6,2,5,6,2,7,-12,2,0,120];

// function numeroMaximoLista(lista){
//     listaOrdenada = ordenemientoBurbujaAscendente(lista);
//     numeroMaximo = listaOrdenada[listaOrdenada.length-1]
//     return numeroMaximo;
// }

// function numeroMinimoLista(lista){
//     listaOrdenada = ordenemientoBurbujaAscendente(lista);
//     numeroMinimo = listaOrdenada[0]
//     return numeroMinimo;
// }

// function numeroMaximoMinimo(lista){
//     let numeroMaximo = numeroMaximoLista(lista);
//     let numeroMinimo = numeroMinimoLista(lista);

//     return {numeroMaximo, numeroMinimo}; 
// }

// let MaxMin = numeroMaximoMinimo(lista1);

// console.log(`El número Maximo es: ${MaxMin.numeroMaximo} y el número Minímo es: ${MaxMin.numeroMinimo}`)

// function sumaNumerosLista(lista){
//     let suma = 0;
//     for(i = 0; i <= lista.length-1; i++){
//         suma = suma + lista[i]
//     }
//     return suma;
// }

// let listaSumada = sumaNumerosLista(lista1);
// console.log(listaSumada);

// let lista2 = [1,2,3,4,5,0,9,4];
// let lista3 = [4,3,2,1,0,5,-4,1];

// function buscarPosicionDeNumeroEnLista(lista, numero){
//     let posicion = 0;
//     let coincidencias = [];
//     for(i = 0; i<= lista.length-1; i++){
//         if(lista[i] == numero){
//             coincidencias.push({'posiciondenúmero': posicion})
//         }
//         posicion++;
//     }
//     return coincidencias.length == 0 ? -1 : coincidencias;
    
// }
// let buscaNumero = buscarPosicionDeNumeroEnLista(lista1, 120);
// console.log(buscaNumero);

// function sumaDeDosListas(lista1,lista2){
//     if(lista1.length !== lista2.length){
//         return -1;
//     }else{
//         let listaSumada = [];
//         for(i=0; i <= lista1.length-1; i++){
//             listaSumada.push(lista1[i]+lista2[i]);
//         }
//         return listaSumada;
//     }
// }
// console.log(sumaDeDosListas(lista2, lista3));

// let lista4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// function numerosListaAlCuadrado(lista){
//     if(lista.length == 0){
//         return -1;
//     }else{
//         let listaCuadrada = [];
//         for(i=0; i <= lista.length-1; i++){
//             listaCuadrada.push(Math.pow(lista[i], 2))
//         }
//         return listaCuadrada
//     }
// }



// function calcularIMC(altura, peso){
//     return peso/(altura*altura);
// }
// let imc1 = calcularIMC(1.88,78);
// let imc2 = calcularIMC(1.86,100);
// console.log(imc1);
// console.log(imc2);

// function calcularFactorial(numero){
//     let total = 1;
//     for(let i = 1; i<=numero; i++){
//         total = total*i;
//     }
//     console.log(total);
//     return total;
// }
// calcularFactorial(2);

// function convertirDolarAPeso(pesoMexicano){
//     let dolar = 18;
//     return pesoMexicano/dolar; 
// }
// let pesosMexicanosAhorros = convertirDolarAPeso(100);
// console.log(pesosMexicanosAhorros);

// function perimetroRectangulo(altura, ancho){
//     return (altura*2)+(ancho*2);
// }
// function areaRectangulo(altura, ancho){
//     return (altura*ancho);
// }
// function areaYPerimetroRectangulo(alto, ancho){
//     let perimetro = perimetroRectangulo(alto,ancho);
//     let area = areaRectangulo(alto,ancho);
//     return console.log(`Area: ${area}, Perimetro: ${perimetro}`)
// }
// areaYPerimetroRectangulo(5,10);

// const PI = 3.1416;

// function elevarNumero(numero, elevación){
//     return Math.pow(numero,elevación);
// }

// function areaCirculo(radio){
//     let radioAlCuadrado = elevarNumero(radio,2);
//     return PI*radioAlCuadrado;
// } 
// function perimetroCirculo(radio){
//     let diametro = radio*2;
//     return PI*diametro;
// }
// function areaPerimetroCirculo(radio){
//     let area = areaCirculo(radio);
//     let perimetro = perimetroCirculo(radio);
//     return console.log(`Area: ${area}, Perimetro: ${perimetro}`)
// }
// areaPerimetroCirculo(5);

// function tablaMultiplicar(numero){
//     let arrayTablaMultiplicar = [];
//     for(let i = 1; i<=10; i++){
//         let multiplicación = i*numero;
//         arrayTablaMultiplicar.push(multiplicación);
//         console.log(`${numero} X ${i} = ${multiplicación}`);
//     }
//     return arrayTablaMultiplicar;
// }
// let tablaMultiplicacion = tablaMultiplicar(129);
// console.log(tablaMultiplicacion)

// function mensajeConsola(texto){
//     console.log(texto);
// }
// mensajeConsola('Hola mundo');

// function saludoPersonalizado(nombre){
//     console.log(`¡Hola, ${nombre}!`);
// }
// saludoPersonalizado('Harold Edward');

// function duplicarNumero(numero){
//     return numero*2;
// }
// console.log(duplicarNumero(15));

// function promedioDeTresNumeros(a,b,c){
//     return (a+b+c)/3
// }
// console.log(promedioDeTresNumeros(1,2,3));

// function numeroMayor(a,b){
//     return a > b ? a : b;
// }
// console.log(numeroMayor(5,10));

// function elevarAlCuadrado(numero){
//     return numero*numero;
// }
// console.log(elevarAlCuadrado(5));