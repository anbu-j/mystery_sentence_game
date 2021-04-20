
/* --------------------------- Initialize section --------------------------------

1. Enable Start and Restart buttons
2. Initiaalize all game variables.
3. Set the array of sentences and a default sentence

*/

document.getElementById("sg").disabled = false
document.getElementById("pg").disabled = false

// initializing the players chances for each turn
var play1 = 0
var play2 = 0
// initializing players points to zero before starting the game
var pl1Points = 0
var pl2Points = 0
// initializing player 1 points to zero in each of the 5 rounds
var pl1Rd1Points = 0
var pl1Rd2Points = 0
var pl1Rd3Points = 0
var pl1Rd4Points = 0
var pl1Rd5Points = 0
// initializing player 2 points to zero in each of the 5 rounds
var pl2Rd1Points = 0
var pl2Rd2Points = 0
var pl2Rd3Points = 0
var pl2Rd4Points = 0
var pl2Rd5Points = 0
// initializing the sum of each players scored in all 5 rounds as zero
var pl1MatchPoints = 0
var pl2MatchPoints = 0

//number of turns for each player
var turnsCnt = 0;
var p1Turns = 0;
var p2Turns = 0; 

//Initialize to first round
var rdVal = 1;

// Initialize variable for "Predict the Sentence" button (homeRun Function)
var base = 0 
// input array for user
let easy = [
    "WHOLE WORLD IS A THEATER",
    "SUN RISES IN THE EAST",
    "MARY HAD A LITTLE LAMB",
    "MAGIC IS BELIEVING IN YOURSELF",
    "ASPIRE TO INSPIRE BEFORE EXPIRE",
    "MAKE EACH DAY BEST DAY OF LIFE"
];

//calling the 3rd element from the input array to be displayed on the display board
var disp_text = easy[0];

/*
 --------------------------------Start of Common functions -------------------------------------
*/

/* Common Functions 

1. select a random sentence for game 
2. CLear Display Board
3. Clear the Key Selections
4. Clear the points at the end of Game
5. Create Sentence in the display board
6. Create space in the sentences
7. Calculate Turns left in the game
8. Calculcate points won in each play
9. Calculate Score after each round
10. End Game to clear variables after 5 rounds
*/

// Function to generate random inputs from an array */
function getString() {
    let gameSentence = easy[Math.floor(Math.random() * easy.length)];
    return(gameSentence)
}

/* to remove all stored inputs in display board */

function clearDisplayBoard() {
    var bord = document.getElementById("display-board").childNodes
    var j = 0
    do {
        for (i=0; i<bord.length; i++) {
            bord[i].parentNode.removeChild(bord[i])
        }
    } while (j<bord.length)

}
/* function to clear all key colors user clicked */
function clearKeyColor() {
    var elem = document.querySelectorAll(".alpha")
    for (k = 0; k < elem.length; k++) {
        elem[k].style.cssText = 'background-color: teal'
    }
}
/* function to clear each players each round scores and player turns  */
function clearPoints() {
    play1 = 0
    play2 = 0

    pl1Points = 0
    pl2Points = 0

    pl1Rd1Points = 0
    pl1Rd2Points = 0
    pl1Rd3Points = 0
    pl1Rd4Points = 0
    pl1Rd5Points = 0

    pl2Rd1Points = 0
    pl2Rd2Points = 0
    pl2Rd3Points = 0
    pl2Rd4Points = 0
    pl2Rd5Points = 0

    pl1MatchPoints = 0
    pl2MatchPoints = 0

    rdVal = 0
    play1 = 0
    play2 = 0

    turnsCnt = 0;
    p1Turns = 0;
    p2Turns = 0;
    
    base = 0;
}
// function calling the input text to the display board by creating new text nodes in javascript
function disp_board(disp_text) {
    var a = disp_text;
    // creating new letter boxes in the display board
    var newBox = document.createElement("div")
    newBox.setAttribute("class","bx1")
    // to create a new text node for html page and passing a value into that
    var boxVal = document.createTextNode(a)
    // styling of the display boxes
    newBox.style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;border-style: solid;border-color: black;border-width: 1px; background-color: thistle; color: thistle;';
    newBox.appendChild(boxVal);
    // passing the value of new text node to the boxes we created
    document.getElementById("display-board").appendChild(newBox)
};


/* to find out the space between the words displayed */ 

function disp_space(disp_text) {
    var a = disp_text;
    // creating a new div with boxvalue 'A' and giving ittransparent color to set space between words in display board
    var newBox = document.createElement("div")
    var boxVal = document.createTextNode("A")
    newBox.style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;color: transparent'
    newBox.appendChild(boxVal)
    document.getElementById("display-board").appendChild(newBox)
};

/* function to find out how many turns for players */
function turnsCalc(gameSentence) {
    var turnCnt = 1
    // new array initialized to find the unique letters in the sentence from input array
    var arr = []
    for (i=0; i<gameSentence.length; i++) {
        var temp = 0
        for (j=0;j<turnCnt;j++) {
            if(arr.length == 0) {
                arr[j] = gameSentence[i] 
                turnCnt++;
                break;
            }
            else if (gameSentence[i] == arr[j] || gameSentence[i] == ' '){
                temp++
            }
            else if(gameSentence[i] != arr[j] && j == turnCnt - 1 && temp == 0) {
                arr[j] = gameSentence[i];
                turnCnt++;
                break;
            }
        }
    }
    turnCnt = turnCnt - 1
    return(turnCnt)
}
/* function for calculating each rounds score to determine the winner in the final fifth round */
function pointsCalc(status) {
    var rdPoints = 0;
    rdPoints = pl1Points + pl2Points;
    if (status === "success"){
        if (rdVal == 1 && play1 == 1) {pl1Rd1Points = rdPoints}
        else if (rdVal == 1 && play2 == 1) {pl2Rd1Points = rdPoints}
        else if (rdVal == 2 && play1 == 1) {pl1Rd2Points = rdPoints}
        else if (rdVal == 2 && play2 == 1) {pl2Rd2Points = rdPoints}
        else if (rdVal == 3 && play1 == 1) {pl1Rd3Points = rdPoints}
        else if (rdVal == 3 && play2 == 1) {pl2Rd3Points = rdPoints}
        else if (rdVal == 4 && play1 == 1) {pl1Rd4Points = rdPoints}
        else if (rdVal == 4 && play2 == 1) {pl2Rd4Points = rdPoints}
        else if (rdVal == 5 && play1 == 1) {pl1Rd5Points = rdPoints}
        else if (rdVal == 5 && play2 == 1) {pl2Rd5Points = rdPoints}
        pl1MatchPoints = pl1Rd1Points + pl1Rd2Points + pl1Rd3Points + pl1Rd4Points + pl1Rd5Points;
        pl2MatchPoints = pl2Rd1Points + pl2Rd2Points + pl2Rd3Points + pl2Rd4Points + pl2Rd5Points;

    }
    
}
/* function for setting alert messages as results for each rounds */
function resultMessage(status) {
    if (rdVal == 5 && pl1MatchPoints > pl2MatchPoints) {
        alert("Congratulations Player 1 wins the game!!")
        endGame()
    }
    else if (rdVal == 5 && pl1MatchPoints < pl2MatchPoints) {
        alert("Congratulations Player 2 wins game!!")
        endGame()
    }
    else if (rdVal == 5 && pl1MatchPoints == pl2MatchPoints) {
        alert("Congratulations Player 1 & Player2 win the game!!")
        endGame()
    }
    else {
        if (rdVal >= 1 && rdVal < 5 && status === "success") {
            if (play1 == 1) {
                alert("Player 1 wins Round" + rdVal);
                rdVal++;
                reGame()
            }
            if (play2 == 1) {
                alert("Player 2 wins Round" + rdVal);
                rdVal++;
                reGame()
            }
        }
        else if (rdVal >= 1 && rdVal < 5 && status === "failure") {
            alert("Nobody won, Round: " + rdVal + ". Better Luck next time!!")
            rdVal++;
            reGame();

        }
    }
}
/* Score Board functions */
function scoreBoard() {
    document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
    document.getElementById("p2Score").innerHTML = "Score : " + pl2Points
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns;
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns;
    document.getElementById("p1RdScore").innerHTML = "Player1 : " + pl1Rd1Points + " + " + pl1Rd2Points + " + " + pl1Rd3Points + " + " + pl1Rd4Points + " + " + pl1Rd5Points + " = " + pl1MatchPoints;
    document.getElementById("p2RdScore").innerHTML = "Player2 : " + pl2Rd1Points + " + " + pl2Rd2Points + " + " + pl2Rd3Points + " + " + pl2Rd4Points + " + " + pl2Rd5Points + " = " + pl2MatchPoints;
  
}


/* End game function calls */
function endGame() {
    clearDisplayBoard()
    clearKeyColor()
    clearPoints()

    document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
    document.getElementById("p2Score").innerHTML = "Score : " + pl2Points
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns;
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns;
    document.getElementById("p1RdScore").innerHTML = "Player1 : " + pl1Rd1Points + " + " + pl1Rd2Points + " + " + pl1Rd3Points + " + " + pl1Rd4Points + " + " + pl1Rd5Points + " = " + pl1MatchPoints;
    document.getElementById("p2RdScore").innerHTML = "Player2 : " + pl2Rd1Points + " + " + pl2Rd2Points + " + " + pl2Rd3Points + " + " + pl2Rd4Points + " + " + pl2Rd5Points + " = " + pl2MatchPoints;

    document.getElementById("sg").disabled = false;
    document.getElementById("pg").disabled = false;
}


/*
 ----------------------------------- End of Common Functions -----------------------------
*/

/* --------------------------------- Start of Game flow -----------------------------------

1. Start Game button function
2. Select the Sentence 
3. Actions at click of Keyboard input.
4. Check clicked keyboard input with hidden letters on display board
    4.1 Make them visible
    4.2 Assign points to players.
5. Check if there is a winner.
    5.1 Update scoreboard
    5.2 Post message on round/game winners
6. move to next round(restart game)
7. Restart game in the middle of play (quit game)
*/
/* when user clicks start button */
function startGame() {
    rdVal = 1;
    document.getElementById("sg").disabled = true;
    document.getElementById("pg").disabled = false;
    turnsCnt = turnsCalc(disp_text);
    p1Turns = turnsCnt;
    p2Turns = turnsCnt;
    alert("Player 1 goes first. Player 2 goes next" )
    disp_string();
    document.getElementById("p1").style.cssText = 'background-color: red'
    play1 = 1
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns

}

//called when start button is activated

function disp_string() {
    var gameSentence = getString();
    var len = gameSentence.length
    var cntr = 0;
    for (var i = 0; i<len; i++) {
        if(gameSentence[i] === " ") {
            disp_space(gameSentence[i]);
        }
        else 
        disp_board(gameSentence[i]) 
    }
}


// this function decides the turn of each player by clicks and assign colors on screen for their turn
  function atClick(e) {
    disp_comp(e);
    if (document.getElementById("sg").disabled) {
        if (document.getElementById("p1").style.backgroundColor === "red"){
            document.getElementById("p2").style.cssText = 'background-color: red'
            document.getElementById("p1").style.cssText = 'background-color: slateblue'
            if (base == 0){
                play1 = 0;
                play2 = 1;
            }

        }
        else if (document.getElementById("p2").style.backgroundColor === "red"){
            document.getElementById("p1").style.cssText = 'background-color: red'
            document.getElementById("p2").style.cssText = 'background-color: slateblue'
            if (base == 0) {
                play2 = 0;
                play1 = 1;
            }
        }

    }

    
    
  }


// function to check the user clicks and checking it with input array on the comp box and with keyboard
function disp_comp(disp_text) {
    var keys = document.getElementsByClassName("alpha")
    var compBox = document.getElementById("display-board").querySelectorAll(".bx1")
    var breaker = 0
    for (var j = 0; j<keys.length; j++) {
       var keyCnt = 0 // count number of times an alphabet is repeated in the sentence 
       for (var i = 0; i<compBox.length; i++){
// To change the color of button pressed by the user in the keyboard
            if (compBox[i].innerText == keys[j].value && compBox[i].innerText == disp_text) {
                //console.log(keys[j].style.backgroundColor)
                
                    keyCnt++;
                     // console.log(keyCnt + " : Inside If" + " : " + keys[j].value + " : " + compBox[i].innerText)
                    compBox[i].style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;border-style: solid;border-color: black;border-width: 1px; background-color: goldenrod';

                    keys[j].style.cssText = 'font-size: var(--font-size-medium);height: 40px;width: 40px;border-radius: 5px;text-align: center;background-color: goldenrod;';
                
                
              
            }
            else if (keyCnt == 0 && i == compBox.length - 1 && keys[j].value == disp_text) {
                keys[j].style.cssText = 'background-color: grey'
                breaker++
                //break;
            }
        }
        
        /*breaker is the condition where no match is present in the array compBox.
        keyCnt is the condition number of perfect matches found in the array compBox and the keyboard. */


      if(breaker > 0 || keyCnt > 0) {
            if (play1 == 1) {
                pl1Points = pl1Points + keyCnt;
                p1Turns = p1Turns - 1;

            }
            if (play2 == 1) {
                pl2Points = pl2Points + keyCnt;
                p2Turns = p2Turns - 1;
            }

            document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
            document.getElementById("p2Score").innerHTML = "Score : " + pl2Points

            turnsCnt = turnsCalc(disp_text);
            document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns
            document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns
            winCalc()
          break;
      }  
      
    }

}
/* function decides the winner by compairing the value of temp, display text box color, turns of each players and base value */
function winCalc() {
    var temp = 0;
    var compBox = document.getElementById("display-board").querySelectorAll(".bx1")
    for ( i = 0; i < compBox.length ; i++) {
        if (compBox[i].style.backgroundColor === 'goldenrod') {
            temp++
        }
        if (i == compBox.length - 1 && temp == compBox.length) {
            pointsCalc("success")
            scoreBoard("success")
            resultMessage("success")
        }
        if (i == compBox.length - 1 && temp != compBox.length && p1Turns == 0 && p2Turns == 0) {
            pointsCalc("failure")
            scoreBoard("failure")
            resultMessage("failure")
        }
        if (i == compBox.length - 1 && temp != compBox.length && base == 1) {
            if (p1Turns == 0 || p2Turns == 0) {
                pointsCalc("failure")
                scoreBoard("failure")
                resultMessage("failure")
            }

        }

        
    }
}
    /* funcion to restart game */
function reGame() {
    //rdVal = 1;
    document.getElementById("sg").disabled = true;
    document.getElementById("pg").disabled = false;

    //bord.remove();
   
    turnsCnt = turnsCalc(disp_text);
    p1Turns = turnsCnt;
    p2Turns = turnsCnt;

    pl1Points = 0
    pl2Points = 0

    clearDisplayBoard();

    disp_string();
    clearKeyColor();
    document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
    document.getElementById("p2Score").innerHTML = "Score : " + pl2Points
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns
    
    base = 0;
}
// function for quitting the game,start button will be enabled
function quitGame() {
    document.getElementById("sg").disabled = false;
    document.getElementById("pg").disabled = true;
    clearDisplayBoard();
    clearKeyColor();
    clearPoints();

    document.getElementById("p1Score").innerHTML = "Score : " 
    document.getElementById("p2Score").innerHTML = "Score : " 
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: ";
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: ";
    document.getElementById("p1RdScore").innerHTML = "Player1 : " ;
    document.getElementById("p2RdScore").innerHTML = "Player2 : " ;

}
 // Function for predicting the sentence
function homeRun() {
    base = 1;
    console.log("Total turns: " + turnsCnt + " Player 1 turns: " + p1Turns + " Player 2 turns: " + p2Turns)
    var wordsLeft = 0;
    var playCnt = 0;
    var compBox = document.getElementById("display-board").querySelectorAll(".bx1")
    for (i = 0; i<compBox.length; i++) {
        if(compBox[i].style.backgroundColor === 'goldenrod') {
            playCnt++
        }
    }
    wordsLeft = compBox.length - playCnt;
    

    if (play1 == 1) {
        p1Turns = wordsLeft;
        console.log("New turns for Player 1 is : " + p1Turns)
        alert("Player 1 has " + p1Turns + " turns to predict and win") 
    }
    else if (play2 == 1) {
        p2Turns = wordsLeft;
        console.log("New turns for Player 2 is : " + p2Turns)
        alert("Player 2 has " + p2Turns + " turns to predict and win") 
    }

}
 
/* --------------------------------- End of Game flow -----------------------------------*/