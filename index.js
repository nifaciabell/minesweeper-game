const grid = document.querySelector('.grid')
let width = 10
let cell = []
let bombAmount = 20 

// class User {
  
// }

function createBoard() {
 
  const bombArray = Array(bombAmount).fill('bomb')
  const safeArray = Array(100-bombAmount).fill('safe')
  // console.log(bombArray, safeArray)   // --> Output an array of bombs and safe zones (numbers?)

  const mergeArrays = [...bombArray, ...safeArray]
  // console.log(mergeArrays)
  
  const shuffleArray = mergeArrays.sort(() => 0.5 - Math.random());
  // console.log(shuffleArray)

  for (let i =0; i < 100; i++) {
   const square = document.createElement('div')
   square.setAttribute('id', i)
   square.classList.add(shuffleArray[i]) 
   grid.appendChild(square) 
   cell.push(square)
  }
}
 
createBoard()
// console.log(squares) --> Array of square divs 


