'use strict';
{
function createColumn(col) {
  const source = [];
  for (let i = 0; i < 15; i++) {
    source[i] = i + 1 + 15 * col;
  };
  const column = [];
  for (let i = 0; i < 5; i++) {
    column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
  }
  return column;
}

function createBingo() {
  const bingo = [];
  for (let i = 0; i < 5; i++) {
    bingo[i] = createColumn(i);
  }
  bingo[2][2] = "FREE";
  return bingo;
}


function renderBingo() {
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
      const td = document.createElement('td');
      td.textContent = bingo[i][row];
      tr.appendChild(td);
      document.querySelector('tbody').appendChild(tr);

      td.addEventListener('click', () => {
      td.classList.toggle('hidden');
    });
    }
  }
}

const bingo = createBingo();
renderBingo(bingo);

const btn = document.getElementById('btn');
const result = document.getElementById('result');

const source = [];
for (let i = 0; i < 75; i++) {
  source[i] = i + 1;
}
btn.addEventListener('click', () => {
  const number = source.splice(Math.floor(Math.random() * source.length),1)[0];
  result.textContent = number;
});
  
}





