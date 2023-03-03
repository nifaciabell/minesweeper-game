const grid = document.querySelector(".grid");
// const button = document.getElementsByClassName('help')
const width = 10;
const bombAmount = 20;
let flags = 0;
const cells = [];
let gameOver = false;

function createBoard(){

  const bombArray = Array(bombAmount).fill('bomb')
  const validArray = Array(100- bombAmount).fill('valid')
  const mergedArrays = [...bombArray, ...validArray]
  const shuffledArray = mergedArrays.sort(() => 0.5 - Math.random())

  for(let i = 0; i < 100; i++){
    const square = document.createElement('div')
    square.setAttribute('id', i)
    square.classList.add(shuffledArray[i])
    grid.appendChild(square)
    cells.push(square)

    // Add event listener to square element
    square.addEventListener('click', function() {
      click(square);
    });
    square.oncontextmenu = function (e){
      e.preventDefault()
      flagBombs(square)
    }
  }

  for (let i = 0; i < 100; i++){
    let total = 0
    const leftSide = (i % width === 0)
    const rightSide = (i % width === 9)

    if (cells[i].classList.contains("valid")) {
      if (i > 0 && !leftSide&& cells[i - 1].classList.contains("bomb"))
        total++;
      if (
        i > 9 &&
        !rightSide &&
        cells[i + 1 - width].classList.contains("bomb")
      )
        total++;
      if (i > 10 && cells[i - width].classList.contains("bomb")) total++;
      if (
        i > 11 &&
        !leftSide &&
        cells[i - 1 - width].classList.contains("bomb")
      )
        total++;
      if (i < 98 && !rightSide && cells[i + 1].classList.contains("bomb"))
        total++;
      if (
        i < 90 &&
        !leftSide &&
        cells[i - 1 + width].classList.contains("bomb")
      )
        total++;
      if (
        i < 88 &&
        !rightSide &&
        cells[i + 1 + width].classList.contains("bomb")
      )
        total++;
      if (i < 89 && cells[i + width].classList.contains("bomb")) total++;
      cells[i].setAttribute("data", total);
    }
  }
}

createBoard();

function flagBombs(square){
  if (gameOver)
  return
  if (square.classList.contains('checked-square')&& (flags < bombAmount)){
if (!square.classList.contains('flag')){
  square.classList.add('flag')
  square.innerHTML= '⛳️'
  square.style.fontSize='x-large'
  flags ++
} else {
square.classList.remove('flag')
square.innerHTML = ''
flags --
}
  }
}

function click(square){
  let currentId = square.id
  if (gameOver)
  return
  if (square.classList.contains('checked-square')|| square.classList.contains('flag'))
  return
  if(square.classList.contains('bomb')){
    loseGame(square)
    // alert('GAME OVER 💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣')
  } else{
    let number = square.getAttribute('data')
    if (number !=0){
      square.classList.add('clicked-square')
      square.innerHTML = number
      square.style.textAlign = "center";
      square.style.fontSize = '25px'
      square.style.color = '#fff'
      return
    }
    fanOutSquares(square,currentId)
  }
  square.classList.add('clicked-square')
}


function fanOutSquares(square, currentId) {
  const isLeftSide = currentId % width === 0;
  const isRightSide = currentId % width === 9;

  setTimeout(() => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const row = parseInt(currentId / width) + i;
        const col = (currentId % width) + j;
        const adjIndex = row * width + col;
        const isValidIndex =
          adjIndex >= 0 &&
          adjIndex < 100 &&
          !(isLeftSide && j === -1) &&
          !(isRightSide && j === 1);
        if (isValidIndex) {
          const adjSquare = document.getElementById(adjIndex);
          click(adjSquare);
        }
      }
    }
  }, 10);
}

function loseGame(square) {
  // alert('GAME OVER');
  gameOver = true;

  cells.forEach(square => {
    if (square.classList.contains('bomb')) {
      square.innerText = "💣";
      square.style.textAlign ='center'
      square.style.fontSize='25px'
    }
  });
  
}

function winnerWinner(){
  let matches = 0 
  for(let i = 0 ; i < 100; i++)
  if (cells[i].classList.contains('flag')&& cells[i].classList.contains('bomb')){
    matches ++
  }
  if (matches === bombAmount){
    console.log('WINNER WINNER')
    gameOver = true
  }
}

function helpButton(){
  alert('Reread The Game Rules... You Got This!');
}

const button = document.querySelector('.helpButton');
button.addEventListener('click', helpButton);

function resetGame() {
  flags = 0;
  gameOver = false;
  cells.length = 0;
  grid.innerHTML = "";
  createBoard();
  cells.forEach(square => {
    square.classList.remove('clicked-square', 'checked-square', 'flag');
    square.innerHTML = "";
  });
}

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetGame);


