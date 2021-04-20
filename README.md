# Mystery Sentence Game

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

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
2. The selecttion made by the user on the on-screen keyboard turns the color of the key to "**Golden**" upon matching a letter in the mystery sentence and "**Grey**" upon not matching a letter in the mystery sentence.
3. Each time a key is selected, the players "**Turns left**"  and points "**Score**" are updated in the "**Score Board**".
4. Users are alerted of the game progress as alerts during the game.
5. Users can restart the game at any time during the play, using the button "**Restart**"
6. A winner is declared after 5 rounds of play.