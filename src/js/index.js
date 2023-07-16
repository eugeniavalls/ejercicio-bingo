// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

// generar números aleatorios, que los vaya devolviendo, etc
// generar 15 numeros aleatorios con while
// que se creen 15 numeros para cada usuario y pc, y que los añada al html (los cartones de cada jugador)
// lo mismo para los 99 numeros del bingo: bucle para los números del bingo, que les meta clase en el html y así aparezcan. Esta función tiene que estar ejecutada. Otra opción es meter los 99 numeros en el html asi sin más pero yo preferí usar un bucle y meterlos desde el javascript al html para no tener que escribir 99 numeros a mano
// función para que, a medida que salgan los numeros aleatorios, se vayan marcando en el main
// que haya un ganador y perdedor (esto es lo que me queda, es lo del checkwinner que vimos hace semanas)
// botón para iniciar la partida

// ------------------------

// Crear 3 contenedores, cartón del usuario, números del bingo, cartón del    ordenador.

// Función que genere un número aleatorio entre 1 y 99.

// Función que genere 15 números aleatorios que no se repitan y los guarde en un array. El cartón del jugador y el del ordenador pueden tener números que se repitan, pero no puede repetirse un número en el mismo cartón.

// Usar esa función para rellenar los 2 cartones dentro de otra función.

// Rellenar el bingo con números del 1 al 99.

// Función que seleccione un número aleatorio entre el 1 y el 99 para marcarlo en el cartón de bingo cada X segundos, el mío es cada 1 segundo.

// Marcar el número que ha salido en el cartón del bingo.

// Buscar en los cartones de los jugadores coincidencias para marcarlo.

// Cada vez que busquemos coincidencias comprobar si ya están todos marcados o no, si ya se han marcado todos, el juego termina y gana el jugador que haya completado el cartón antes.


const buttonStart = document.getElementById('button-start');
const mainElement = document.getElementById('main');
const numbersElement = document.getElementById('numbers');
const numberElement = document.getElementById('number');
const cardboardsElement = document.getElementById('cardboards');
const cardboardUser = document.getElementById('cardboard-user');
const cardboardPc = document.getElementById('cardboard-pc'); 


const randomNumbers = Math.floor(Math.random()*99);

let arrayNumbersCardboard = [];

const randomNumbersCardboards = Math.floor(Math.random()*15);



// const insertArray = () => {
  
//     const fragment = document.createDocumentFragment();
//     arrayNumbersCardboard.forEach(task => {
//       const newTask = generateHtmlForTask(task);
//       fragment.append(newTask);
//     });
  
//     tasksElement.append(fragment);
//   };
  
//   const saveTask = task => {
//     arrayNumbersCardboard.push(task);
//     insertArray();
//   };