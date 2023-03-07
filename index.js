const grid = document.querySelector(".grid");
// const button = document.getElementsByClassName('help')
const width = 10;
const bombAmount = 15;
let flags = 0;
const cells = [];
let gameOver = false;

function createBoard() {
  const bombArray = Array(bombAmount).fill("bomb"); // --> Fill the array with the value of 'bomb'.
  const validArray = Array(100 - bombAmount).fill("valid");
  const mergedArrays = [...bombArray, ...validArray]; // --> Merging two arrays together
  const shuffledArray = mergedArrays.sort(() => 0.5 - Math.random()); // --> .sort method shuffled the two values of bomb and valid

  // Create the board by creating individual squares (or cells) within the grid. Every time the code loops over(100x) it creates a square and gives it a new id.
  for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(shuffledArray[i]); // --> This gives whatever index that is being looped over a class name
    grid.appendChild(square);
    cells.push(square); //  --> 100 square divs are pushed to the grid

    // Add event listener to square element
    square.addEventListener("click", function () {
      click(square);
    });
    square.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      flagBombs(square);
    });
  }
  //  Add numbers to neighboring bombs-calculate the number of bombs in the neighboring cells of a particular cell
  for (let i = 0; i < 100; i++) {
    let total = 0;
    // Create two variables that identify what the left and side of the board is. This will JS from checking the wrong side.
    const leftSide = i % width === 0;
    const rightSide = i % width === 9;

    // --> The code first checks if the current cell has a "valid" class. If yes, it proceeds to check for the presence of bombs in the neighboring cells.
    if (cells[i].classList.contains("valid")) {
      // -->The if statements check if the neighboring cells (left, right, top, bottom and diagonal) are within the bounds of the game board and if they contain a bomb. If the condition is true, it increments the "total" variable.
      if (i > 0 && !leftSide && cells[i - 1].classList.contains("bomb"))
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
    // -->  where the objective is to uncover all cells that do not contain bombs while avoiding cells that do contain bombs.
  }
}

createBoard();

// --> Display flags 
function flagBombs(square) {
  if (gameOver) return;

  if (!square.classList.contains("checked-square") && flags < bombAmount) {
    if (!square.classList.contains("flag"))// --> Does not contain a flag already 
    {
      square.classList.add("flag");
      square.innerHTML = "🚩";
      square.style.fontSize = "x-large";
      flags++;
      // winnerWinner()
    } else {
      // --> If the flag is already there 
      square.classList.remove("flag");
      square.innerHTML = "";
      flags--;
    }
  }
}

function click(square) {
  let currentId = square.id;
  if (gameOver) return;
  if (
    square.classList.contains("checked-square") ||
    square.classList.contains("flag")
  )
    return;
  if (square.classList.contains("bomb")) {
    loseGame(square);
    // alert('GAME OVER 💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣💣')
  } else {
    let number = square.getAttribute("data");
    if (number != 0) {
      // --> I only want numbers between 1-100
      square.classList.add("clicked-square");
      square.innerHTML = number; // --> display the number of bombs the square is adjacent to
      square.style.textAlign = "center";
      square.style.fontSize = "25px";
      square.style.color = "#fff";
      return;
    }
    fanOutSquares(square, currentId);
  }
  square.classList.add("clicked-square");
}

function fanOutSquares(square, currentId) {
  
  const isLeftSide = currentId % width === 0;
  const isRightSide = currentId % width === 9;
// --> check whether the currentId parameter is on the left or right side of the grid. 
  setTimeout(() => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        //--> Calculate the row and column of each adjacent square based on the currentId parameter and the loop counters i and j
        const row = parseInt(currentId / width) + i;
        const col = (currentId % width) + j;
        const adjIndex = row * width + col;// --> index of adjacent square 
        // -->  checks whether the adjacent square is a valid index within the grid. It also checks whether the adjacent square is on the left or right edge of the grid, and skips those squares if they are.
        const isValidIndex =
          adjIndex >= 0 &&
          adjIndex < 100 &&
          !(isLeftSide && j === -1) &&
          !(isRightSide && j === 1);
        if (isValidIndex) {
          const adjSquare = document.getElementById(adjIndex);
          click(adjSquare);
          // --> If the adjacent square is valid, the click function is then executed 
        }
      }
    }
  }, 5);
}
// -->setTimeout will delay the execution by 5 milliseconds 


function loseGame(square) {
  // alert('GAME OVER');
  gameOver = true;

  // --> Display the bombs 
  cells.forEach((square) => {
    if (square.classList.contains("bomb")) {
      square.innerText = "💣";
      square.style.textAlign = "center";
      square.style.fontSize = "25px";
    }
  });
}
// for loop to see if the divs are both a flag and bomb but unchecked. 
function winnerWinner() {
  let win = 0;
  for (let i = 0; i < 100; i++)
    if (
      cells[i].classList.contains("flag") &&
      cells[i].classList.contains("bomb")
    ) {
      win++;
    }
  if (win === bombAmount) {
    console.log("WINNER WINNER");
    gameOver = true;
  }
}

function helpButton() {
  alert("Reread The Game Rules... You Got This!");
}
const button = document.querySelector(".helpButton");
button.addEventListener("click", helpButton);

function resetGame() {
  flags = 0;
  gameOver = false;
  cells.length = 0;
  grid.innerHTML = "";
  createBoard();
  cells.forEach((square) => {
    square.classList.remove("clicked-square", "checked-square", "flag", "bomb");
    square.innerHTML = "";
  });
}

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", resetGame);

let time = 0;

function timer() {
  setTimeout(function () {
    const timerButton = document.getElementById("timer");
    time++;
    timerButton.innerHTML = time;
    timer();
  }, 1000);
}
timer();
// console.log(timer);
