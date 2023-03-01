// Use a function to create the board.

// For loop to loop over a square in the grid 

// Create a new variable using the DOM that is assigned to create 100 divs since I am looping through 100x

// Set an attribute 'id' to each square to call on later 

// Put squares that were just created into the grid div by using appendChild method

// Create a variable set to an empty array outside of my function. 

// In the global scope create a variable of bombAccount 

// In the function create an array 

// Push created individual square into square array --> this will create an array of 100 squares

// ** The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

 // Create shuffled game array with random bombs

 // Merge arrays so that I can be able to randomize the elements.

//  const shuffleArray = mergeArrays.sort(() => 0.5 - Math.random());
 // This method puts the elements into random order. 

 //---> Now that I have an array with randomize elements I need to insert this array into my grid. Each cell created in my div needs to be either a bomb or safe cell. Insert shuffleArray into my empty squares array.

 // Now that the bombs have been added to the board/grid now I need to add the numbers. 
// In minesweeper if a cell is clicked that is a number then the bomb is adjacent to that number I need to create a code that will allow me to create a pattern so that the user will have an idea where the bomb is based on the number. 

 // add numbers to the neighboring bombs- if a square has a bomb and if any of the squares in any direction need a total number to give to the user. This means I have to check we have to check every square surrounding 8 squares per bomb.

 // If the square index is larger than 0. I don't want to be in that index because I can't check any cells to the left of it and the code will break since the cells do not exist. If the cell index is bigger than 0 and is not at the leftSide and if both of those statements are true. && if the cell to the left of my current cell contains a bomb I can execute the code total ++. I only add one if all 3 of those statements are true.

// If we are in cell of index 10 I am checking to see if cell of index 1 has a bomb.

// alt code- more dynamic code if size of board increase of decrease, ex: with each level it will increase in the amount of cells in a grid... const rightSide= (i % width === width -1). This code will calculate whatever amount and subtract one
// console.log(leftSide);
// console.log(rightSide);
//   const topSide = (i <= 9)
//   const bottomSide = (i >= 90)
// console.log(topSide)
//   console.log (bottomSide)
// }

// if the cell I am looping over contains the class of safe (not a bomb)