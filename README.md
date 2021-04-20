# Mystery Sentence Game

<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#technical-details">Technical Details</a></li>
    <li><a href="#bugs">Bugs</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project aims at building an online game that both kids and adults can enjoy. It focuses on users ability to recognize commonly used words by the number of leters in the words. Users who are able to recognize words by the minimum information available on the game screen generally tend to be successful in the game. 

Key features of the game include:
* Interesting
* Encourages to learn spelling
* Develops mental prowess

## Built With
 
The game is developed using the following:
* HTML
* Javascript
* CSS

## Getting Started

To play the game;

### Prerequisites
1. Visual Studio 
2. Chrome (Version 89.0.4389.128 or later)

### Installation
Clone the Git repository to your local system <br>

```bash
    git clone https://github.com/anbu-j/mystery_sentence_game.git 
```

## Usage
Game starts when the user clicks on the button "**Start Game**". The game ends automatically after 5 rounds. If the user wants to replay, the "**Restart**" button can be utilised. 

 The game screen is split into 3 sections 
 * **PLAYER CONSOLE :** shows the player turns, status of play (*future feature*), Start and Restart buttons.
 * **GAME CONSOLE :** shows the "**Mystery Sentence**" to be predicted, a keyboard to predict a letter of the mystery sentence and a shortcut button "**Predict the Sentence**" to winning a round of "**Mystery Sentence**"
 * **SCORE BOARD :** shows the "**Score**" and "**Turns left**" for each player during a round of "**Mystery Sentence**". After each round, the winner of the round gets all the points. Maximum points scored in all five rounds determines the winner of the game.


## Features
1. Turns of each player is highlighted with a red background.
2. The selection made by the user on the on-screen keyboard turns the color of the key to
    * "**Golden**" upon matching a letter in the mystery sentence 
    * "**Grey**" upon not matching a letter in the mystery sentence.
3. Each time a key is selected, the players "**Turns left**"  and points "**Score**" are updated in the "**Score Board**".
4. Users are alerted of the game progress as alerts during the game.
5. Users can restart the game at any time during the play, using the button "**Restart**"
6. A winner is declared after 5 rounds of play.
7. Automaticaly determine the number of turns based on the mystery sentence.

## Roadmap
1. Display in game messages in the "**Game Message**" section of the Players Console.
2. Add Screenshots of the game to README file

## Technical Details
1. **atClick** - Function called each time a key on the On screen keyboard is selected.
2. **startGame** - Function called each time the Start button is selected. Disabled when the game is in progress.
3. **disp_string** - Function that calls disp_board() and disp_space() functions to create the hidden sentence on the game console.
4. **disp_comp**- Function that compares the Key selected on the On screen keyboard with the hidden letter on the game console and changes both to "**Golden**" uppon successful match and "**Grey**" upon unsuccessful match. Also calls the pointsCalc() and winCalc() functions to calculate the points and determine if the round is complete.
5. **winCalc** - Function calculates if the mystery sentence has been successfully found within the number of turns. If all 5 rounds have completed successfully, the function declares a winner of the game. The function calls reGame() function to start the next round and endGame() to go back to the Start of the game.
6. **reGame** - Resets the game console and Scoreboard. Resets all the in game variables used by the program.
7. **quitGame** - Resets the game console, Player console and the score board. Start button is activated at this point.
8. **homeRun** - Function gives the in-turn player an opportunity to take out the second player from the game and predict the sentence. Turns are recalculated to ensure the player has minimum opportunities to win. If successful, the player gets all the points for the round. If unsuccessful, no player gets a point for the round.
9. **getString** - Function scans through the array of available sentenes and randomly selects a sentence for the round.
10. **clearDisplayBoard** - Function clears the mystery sentence, upon calling.
11. **clearKeyColor** - Function clears the key selected on the keyboard (after completion of a round/game/restart)
12. **clearPoints** - Function clears the points for both players in each round, upon calling.
13. **disp_board** - Function creates a box of letter in the mystery sentence, upon calling.
14. **disp_space** - Function creates a blank space between two words, upon calling.
15. **turnsCalc** - Scans through the mystery sentence, finds the count of unique letters, and marks it as the number of turns a player has to predict the mystery sentence.
16. **pointsCalc** - Function calculates the points after each user selection on the on screen keyboard, upon calling.
17. **resultMessage**- Function displays the alert message notifying players about the status of play, upon calling.
18. **scoreBoard** - Functions prints the scoreboard in the game screen during play, upon calling.
19. **endGame**- Function clears the player in round scoreboard, after each round, upon calling.

## Bugs
1. Points are displayed after the alert message.
2. Repeated click on an already selected letter leads to losing a chance.
## Contact
Email - anbuelza_cherian@yahoo.com <br>
LinkedIn - [linkedin-url]: https://linkedin.com/in/anbu-joselin
## Acknowledgement
[w3 schools](W3Schools Online Web Tutorialshttps://www.w3schools.com) <br>
[stack overflow](Stack Overflow - Where Developers Learn, Share, & Build ...https://stackoverflow.com)