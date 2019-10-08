/* index.js */
const button = document.querySelector('.button');
const content = document.querySelector('.content');
const playersA = ['Barcelona', 'Madrid', 'Valencia', 'Getafe'];
const playersB = ['Barcelona', 'Madrid', 'Valencia', 'Getafe'];


function puntuacion() {

  const A = Math.floor(Math.random() * playersA.length);
  const B = Math.floor(Math.random() * playersB.length);
  const golesA = Math.round(Math.random() * 10);
  const golesB = Math.round(Math.random() * 10);
  const playerA = playersA[A];
  const playerB = playersB[B];

  content.innerHTML = playerA + '' + golesA + '' + golesB + '' + playerB;

}

button.addEventListener('click', puntuacion);



