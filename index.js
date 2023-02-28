const grid = document.querySelector('.grid')
let width = 10
let squares = []
let bombAmount = 20 
// Use a function to create the board.
// For loop to loop over a square in the grid 
// Create a new variable using the DOM that is assigned to create 100 divs since I am looping through 100x
// Set an attribute 'id' to each square to call on later 
// Put squares that were just created into the grid div by using appendChild method
// Create a variable set to an empty array outside of my function. 
// In the global scope create a variable of bombAccount 
// In the function create an array 
// Push created individual square into square array --> this will create an array of 100 squares

function createBoard() {
  // Create shuffled game array with random bombs
  const bombArray = Array(bombAmount).fill('bomb')
  const safeArray = Array(100-bombAmount).fill('safe')
  
  // console.log(bombArray, safeArray)   // --> Output an array of bombs and safe zones (numbers?)

  
  
  for (let i =0; i < 100; i++) {
   const square = document.createElement('div')
   square.setAttribute('id', i)
   grid.appendChild(square) 
   squares.push(square)
  }
}
createBoard()
// console.log(squares) --> Array of square divs 
