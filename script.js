const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector('button');

function main() {
  let num = prompt('Enter n (n * n)');
  makeGrid(num);
  btn.addEventListener('click', reset);
}

function makeGrid(num) {
  gridContainer.style.setProperty('--grid-rows', num);
  gridContainer.style.setProperty('--grid-cols', num);
  for (let i = 0 ; i < (num * num); i++) {
      let cell = document.createElement('div');
      cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
      })
      cell.classList.add('grid-item');
      gridContainer.appendChild(cell);
    }
}

function reset() {
  location.reload();
}

main();


// btn.addEventListener("click", )
// btn.addEventListener('click', () => {
//   alert("enjoy!");
// });
// btn.addEventListener('click', function(e) {
//   e.target.style.background = 'blue';
// })

// $(".grid-item").hover(function() {
//   $(this).css("background", "black");
// }
// });

// let cells = document.querySelector('.grid-item');
// // cells.addEventListener('mouseover', (e) => {
// //   e.target.style.backgroundColor = 'green';
// //   //cells.setAttribute("style", "background-color: blue;")
// // });
//
// function hovering(e) {
//   //if (e.propertyName !== 'transform') return;
// //  this.classList.remove('playing');
//   this.style.backgroundColor = 'green';
// }
//
// cellss.forEach(cell => cell.addEventListener('mouseover', hovering));
