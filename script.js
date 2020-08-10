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
