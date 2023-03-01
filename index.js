const grid = document.querySelector(".grid");
let width = 10; // --> represent the number of squares in each row of thr grid
let cell = []; // --> empty array that will be used to store references to each of the 100 squares on the grid
let bombAmount = 20; // --> number of bombs that will be randomly placed on the board 


function createBoard() {
  const bombArray = Array(bombAmount).fill("bomb");  // --> the .fill method with fill the array with the 'bomb' value for each index. Which has length equal to bombAmount - 20
  const safeArray = Array(100 - bombAmount).fill("safe"); // --> safeArray is an array filled with "safe" values and has a length equal to 100 minus "bombAmount"

  // console.log(bombArray, safeArray)   // --> Output an array of bombs and safe zones 

  const mergeArrays = [...bombArray, ...safeArray];
  // console.log(mergeArrays)

  const shuffleArray = mergeArrays.sort(() => 0.5 - Math.random());  // --> .sort will shuffle the values of bomb and safe 
 
  // console.log(shuffleArray)

  for (let i = 0; i < 100; i++) {
    const square = document.createElement("div"); //  --> for each iteration the loops creates a new div called square by using the createElement method.
    square.setAttribute("id", i); // --> the new square element will each an id with the current iteration number 
    square.classList.add(shuffleArray[i]);
    // each square is given a classList that corresponds with the shuffleArray value. 
    grid.appendChild(square);   // --> puts the square divs inside the grid by using appendChild method 
    cell.push(square); 
    // --> pushes the squares inside the empty array. (Without this push the code will break) 

    function click(cell) { // --> The "click" function is defined inside the loop. 
      if (square.classList.contains("bomb")) {// --> When called, it checks if the clicked square contains a "bomb" by using the "contains" method
        alert("GAME OVER");//  --> If it does, the game ends with an "alert" message.
      } else { // --> If it does not, the code checks for neighboring bombs and displays a number indicating how many bombs are adjacent to the clicked square.
        let number = square.getAttribute('data')
        if (number !=0){// --> if the number is 0 we don't want it showing up we only want numbers 1 and above
          square.classList.add('clicked') // --> if number does not equal we will create a classList of clicked.
          square.innerHTML = number  // --> this will display the number and the square at the same time.
          return// --> break the cycle 
        }
        square.classList.add('clicked')// --> this will display the zero value square. It will be a blank square since it is neither a number higher than 0 or bomb. 
      }
    }
    square.addEventListener("click", function (e) {
      click(square);
    });
  }

    for (let i = 0; i < 100; i++) {
      let total = 0;
      const leftSide = i % width === 0; // --> define left & and right border
      const rightSide = i % width === 9;
      
      // Now I am checking in each direction to see if a bomb exist

      if (cell[i].classList.contains("safe")) {// --> For each iteration, it checks if the corresponding element in the "cell" array contains a "safe" class name.

        // --> If it does not, the code checks each neighboring square for the presence of a "bomb" class name and counts the number of neighboring bombs. 

        if (i > 0 && !leftSide && cell[9].classList.contains('bomb')) total++;
        if (i > 9 && !rightSide && cell[i + 1 - width].classList.contains('bomb')) total ++
        if (i > 10 && cell[i-width].classList.contains('bomb')) total ++
        if (i > 11 && !leftSide && cell[i - 1 - width].classList.contains('bomb')) total ++
        if (i < 98 && !rightSide && cell[i + 1].classList.contains('bomb')) total ++
        if (i < 90 && !leftSide && cell[i - 1 + width ].classList.contains('bomb')) total ++
        if (i < 88 && !rightSide && cell[i + 1 + width].classList.contains('bomb')) total ++
        if (i < 89 && cell [i + width].classList.contains('bomb')) total ++

        cell[i].setAttribute('data',total)// --> The total number of neighboring bombs is then stored as a "data" attribute on the square using the "setAttribute" method.
  }
    }
    
}


createBoard();
