
# SPOOKY TIC TAC TOE - A project by Colgan Meanor (2108 FE)
Mod1 2108 FE

## Table of Contents
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Install + Setup](#set-up)
  - [Contributors](#contributors)
	- [Wins](#wins)
	- [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract
  This project is designed to allow two users to play a simple game of **Tic Tac Toe** in the browser. But wait... it's ***SPOOKY***! (ghost emoji). **Player 1** is represented by the ☠️, while **Player 2** is represented by 🎃.  
  
  <img width="1438" alt="Screen Shot 2021-09-28 at 7 43 01 PM" src="https://user-images.githubusercontent.com/87510749/135184172-5c8950e1-244a-425f-afe6-b06f0ae195ef.png">


  The users take turns playing the game by clicking in the box of their choice - **Player 1** always starts. We don't need to go over the rules of **Tic Tac Toe**, right? Everyone should know this by now? OK - cool. Once a player has filled in the game squares that would allow them to win, the game ends and a message is displayed that announces the winning player.
  
  ![Tic Tac Toe - Player 1 Win](https://user-images.githubusercontent.com/87510749/135184073-1fe44cbf-db0c-4c08-9cdf-47fba8d12029.gif)


  If the game is played and there is no winner, the game will announce that it has ended in a draw.
  
  ![Tic Tac Toe - Draw](https://user-images.githubusercontent.com/87510749/135184398-a0d7d4c5-e7dc-4da7-861c-24c0439257ce.gif)


  **Player wins are tracked across page refresh**.

  Regardless of whether the game ends in a win or a draw, the game will begin anew a few seconds after the result screen is displayed.
  *heads up* - keep an ear 👂 out for any lurking creatures. You never know who is creeping around.

  Tired of the current game? Click the button at the bottom to reset the score and begin your scary tic-tac-toe game ANEW!

## Architecture

  The main logic of the game is contained in **game.js** - which contains all the functioning logic of the game. The data model in this application is represented by a property in the Game object called gameSpaces, which acts as a data representation of the actual spaces on the board. By default these are set to **null** - however these properties are updated over the course of the game to a number value of 1 or 2. There is a method in the **game.js** file which checks for winning combinations on of the right numbers, and determines a winner based on the actions of the player who meets a winning condition FIRST. There are other methods in this file such as a method which adjusts the current turn of the player, a method to determine a draw, and a method to reset the game's properties to default.

  In **player.js** - we've got the data for our players. These are a bit simpler - they contain an ID, a token, and a property that keeps track of their wins. They also contain our methods to access localStorage and save the player's wins to the browser.

  In **main.js** - we've mostly got Javascript code that pertains to the updating of the DOM based on the Data Model. This code mostly serves to facilitate actual interaction from the user to the page.

## Technologies
  - Javascript
  - CSS HTML
  - Atom
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line


## Install + Setup
  - clone this repo: https://github.com/colganmeanor/colgan-tic-tac-toe
  - On the command line, type: **$ open index.html**

## Contributors
  - [Colgan Meanor](https://github.com/colganmeanor)

## Wins
  - Successfully created a functioning game of Tic Tac Toe using Javascript. I was able to set this up with very minimal DOM elements, and that was so cool to have a functioning logic game in just the console.
  - Practiced event handling, local storage, class to class interactions in JS
  - Practiced CSS layout and handling, got some experience using display: grid in constructing my physical game board.
  - Took on a new challenge, and successfully implemented sound effects into my application. Upon game win and game draw, you will a specific sound effect. This was fun to play with!

## Challenges + Improvements
 - This project was so difficult for me to start. I felt like I was drowning in the ambiguity of the instructions and the spec. I wasted a day and a half in a botched planning phase. I finally sat down with my mentor to talk out all of my thoughts, and discuss my ideas and plans thus far with him to figure out if I was on the right path. Once I did this, I finally felt validated in my ideas to proceed and try to make the game happen.
 - Javascript refactoring - I had one function that I managed to refactor extremely well, and another function in **main.js** that is still gigantic. Overall I am proud of how I handled the Javascript code here, but I know that it could be improved and made shorter, and DRYer. At the end of the project though, I'm still proud of my logic, and my problem solving over the course of this project.

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)
  - My deployed page is... Not active yet since this project is still set to 'Private'.
