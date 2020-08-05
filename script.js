const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

function makeGrid() {
  makeRows(16);
  makeCols(16);
}

function makeRows(num) {
  let row = document.createElement('div');
  con
}
