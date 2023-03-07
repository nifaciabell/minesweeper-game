<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/ca7a03048ed3806fe5a12e3fdfb24876/large.jpg">
  </a>

<h1 align="center">Minesweeper Game</h1>

  <p align="center">
    Online video game
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

In this project, I recreated a classic game of Minesweeper. This game was originally launched in 1989 on Microsoft Windows but now is available on the web. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## How to Play Minesweeper

Minesweeper is a puzzle game where the objective is to uncover all the squares on a board without detonating any mines. Here's how to play in simple terms:
* The game board is a grid of squares, some of which contain hidden mines.
* The player clicks on a square to reveal what's underneath.
* If the square contains a mine, the game is over and the player loses.
* If the square doesn't contain a mine, a number will be displayed indicating how many of its neighboring squares contain mines.
* The player can use this information to deduce which squares are safe to click on and which ones contain mines.
* The player can also mark squares that they think contain mines, to help keep track of which squares are dangerous.
* The game is won when all non-mine squares are uncovered.




## Getting Started

My initial thought process behind this project was that I wanted to recreate a classic game that was simple for the average user to understand and play.

What I need to make my game functional:
* Grid with each grid representing either a number or mine. 
* Event listener that when called upon by a click event would fire a function that would give a random result in either a mine or number. 
* Create an if statement : if user clicks on mine - game over
* Create an array with numbers and another array with mines that allows them to loop over each other. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Challenges/Pain Points -->
## Pain Points

In the game, the mines are adjacent to the number or empty block. I needed to make sure the mines were properly dispersed throughout the board. And that I would receive an accurate output of quantity depending on the mines next to the block.
Ex: If there was a 3 mines next to one block I need the blocked thats not the mine clicked to give the user the number 3.
Figuring out the logic stumped me! 
Would there be built-in method I could use that would allow me to execute this function? 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Wireframe -->
## Wireframe

![Wireframe IMG](Screen%20Shot%202023-03-06%20at%204.45.14%20PM.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Next Steps -->
## Next Steps & Improvements

* Make the webpage responsive.
* Create levels ex: Beginner, Intermediate, Expert (with each level the grid and bomb count will increase).
* A function to calculate the number of mines left once flagged.
* A timer to track how much it takes the user to win or lose the game.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Nifacia Bell - [@linkedin_handle](https://www.linkedin.com/in/nifacia-bell-4b06361a9/) - nifaciabell.tech@gmail.com

Project Link: [https://github.com/github_username/repo_name](https://nifaciabell.github.io/minesweeper-game/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Youtube video - "Build Minesweeper with Javascript](https://www.youtube.com/watch?v=W0No1JDc6vE)
* [Youtube video -"Build Minesweeper with Javascript HTML CSS"](https://www.youtube.com/watch?v=AfhfAxKFP-s)
* [Youtube video - "Timer & New Game - Minesweeper JavaScript & Canvas Game Development Tutorial 10"](https://www.youtube.com/watch?v=17hqEIWuJ0A)
* [Stack overflow](https://stackoverflow.com/questions/28744682/the-best-way-to-reset-your-javascript-game-after-gameover-and-how)
* [PerScholas Course Info]()
* ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
* ![Invision](https://img.shields.io/badge/invision-FF3366?style=for-the-badge&logo=invision&logoColor=white)
* ![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)
* ![Codecademy](https://img.shields.io/badge/Codecademy-FFF0E5?style=for-the-badge&logo=codecademy&logoColor=1F243A)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

