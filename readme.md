# Mystery Sentence Game
A game for two players featuring sentence guess with five rounds !
## How to play?

Load the page and you can play right away by clicking the start button.Alert messages will pop up showing the first turn for the start of game. 
When user clicks, one of the keyboard values, the function (getString) will call the input array that randomly selects inputs and give it to the display board. 
We call function disp_board(disp_text) to generate comp boxes equivalent to the number of letters in the sentence.
Then function (turnCalc) will be called to display the number of turns left for each players in the scoreboard.An empty array is initialized to keep the unique letters in the sentence displayed and we set a counter for that to find the turnCount.
When user clicks,the function (atclick) is called a value from the keyboard key value is passed through it, and compare the value with each compbox value in the display board,user clicks,and with keyboard.If all these conditions are met, the keycount variable will increase and collor of keys will change to goldenrod.
typing the letters to the secret word or phrase! You get 10 wrong guesses before you lose. Hope you brushed up on your retro gaming knowledge! If you win the game, you will be treated to a victory message and music! If you lose the game, you will get the dreaded defeat message and sad music! After guessing or not guessing the secret word or phrase, the answer will be revealed, along with a image and description of the character!