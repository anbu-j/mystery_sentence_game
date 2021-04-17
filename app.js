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

// input array for user
var easy = [
    "WHOLE WORLD IS A THEATER",
    "SUN RISES IN THE EAST",
    "MARY HAD A LITTLE LAMB",
    "MAGIC IS BELIEVING IN YOURSELF",
    "ASPIRE TO INSPIRE BEFORE EXPIRE",
    "MAKE EACH DAY BEST DAY OF LIFE"
];

//calling the 3rd element from the input array to be displayed on the display board
const disp_text = easy[1];
console.log(disp_text)

/*
 --------------------------------Start of Common functions
*/

/* Common Functions 

1. CLear Display Board
2. Clear the Key Selections
3. Clear the points at the end of Game
4. Create Sentence in the display board
5. Create space in the sentences
6. Calculate Turns left in the game
7. Calculcate points won in each play
8. Calculate Score after each round
9. End Game to clear variables after 5 rounds
*/


function clearDisplayBoard() {
    var bord = document.getElementById("display-board").childNodes
    var j = 0
    do {
        for (i=0; i<bord.length; i++) {
            bord[i].parentNode.removeChild(bord[i])
        }
        console.log(bord.length)
    } while (j<bord.length)

}

function clearKeyColor() {
    var elem = document.querySelectorAll(".alpha")
    for (k = 0; k < elem.length; k++) {
        elem[k].style.cssText = 'background-color: teal'
    }
}

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
    

}

function disp_board(disp_text) {
    //console.log("Hello")
    var a = disp_text;
    //console.log(a)
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

    //console.log(insBox)
};


//to find out the space between the words displayed 

function disp_space(disp_text) {
    //console.log("Hello")
    var a = disp_text;
    //console.log(a)
    var newBox = document.createElement("div")
    var boxVal = document.createTextNode("A")
    newBox.style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;color: transparent'
    newBox.appendChild(boxVal)
    document.getElementById("display-board").appendChild(newBox)

    //console.log(insBox)
};


function turnsCalc(disp_text) {
    //WHOLE WORLD IS A THEATER
    //ASPIRE TO INSPIRE BEFORE EXPIRE
    var turnCnt = 1
    var arr = []
    for (i=0; i<disp_text.length; i++) {
        var temp = 0
        for (j=0;j<turnCnt;j++) {
            if(arr.length == 0) {
                arr[j] = disp_text[i] 
                turnCnt++;
                //console.log(arr)
                break;
            }
            else if (disp_text[i] == arr[j] || disp_text[i] == ' '){
                temp++
            }
            else if(disp_text[i] != arr[j] && j == turnCnt - 1 && temp == 0) {
                arr[j] = disp_text[i];
                turnCnt++;
                //console.log(arr)
                break;
            }
        }
    }
    turnCnt = turnCnt - 1
    //console.log("No of turns : " + turnCnt)
    //console.log(arr)
    return(turnCnt)
}

function pointsCalc(status) {
    console.log("Round : " + rdVal + " : inside poitsCalc")
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


function scoreBoard() {
    console.log("Round : " + rdVal + " : inside scoreBoard")
    document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
    document.getElementById("p2Score").innerHTML = "Score : " + pl2Points
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns;
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns;
    document.getElementById("p1RdScore").innerHTML = "Player1 : " + pl1Rd1Points + " + " + pl1Rd2Points + " + " + pl1Rd3Points + " + " + pl1Rd4Points + " + " + pl1Rd5Points + " = " + pl1MatchPoints;
    document.getElementById("p2RdScore").innerHTML = "Player2 : " + pl2Rd1Points + " + " + pl2Rd2Points + " + " + pl2Rd3Points + " + " + pl2Rd4Points + " + " + pl2Rd5Points + " = " + pl2MatchPoints;
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
    
}


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

function startGame() {
    //console.log
    rdVal = 1;
    document.getElementById("sg").disabled = true;
    document.getElementById("pg").disabled = false;
    turnsCnt = turnsCalc(disp_text);
    p1Turns = turnsCnt;
    p2Turns = turnsCnt;
    alert("Player 1 goes first. Player 2 goes next" )
    disp_string(disp_text);
    document.getElementById("p1").style.cssText = 'background-color: red'
    play1 = 1
    //console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
    //console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns

}

//called when start button is activated

function disp_string(disp_text) {
    var len = disp_text.length
    //console.log(len);
    var cntr = 0;
    for (var i = 0; i<len; i++) {
        if(disp_text[i] === " ") {
            //console.log(disp_text[i] + "In") 
            disp_space(disp_text[i]);
        }
        else 
        disp_board(disp_text[i]) 
    }
}


// this function decides the turn of each player by clicks and assign colors on screen for their turn
  function atClick(e) {
    "use strict";
    console.log(e);
    disp_comp(e);
    if (document.getElementById("sg").disabled) {
        if (document.getElementById("p1").style.backgroundColor === "red"){
            document.getElementById("p2").style.cssText = 'background-color: red'
            document.getElementById("p1").style.cssText = 'background-color: slateblue'
            play1 = 0;
            play2 = 1;
        }
        else if (document.getElementById("p2").style.backgroundColor === "red"){
            document.getElementById("p1").style.cssText = 'background-color: red'
            document.getElementById("p2").style.cssText = 'background-color: slateblue'
            play2 = 0;
            play1 = 1;
        }

    }
    
    
  }


// function to check the user clicks and checking it with input array on the comp box and with keyoard
function disp_comp(disp_text) {
    //var len = disp_text.length
    var keys = document.getElementsByClassName("alpha")
    var compBox = document.getElementById("display-board").querySelectorAll(".bx1")
    var breaker = 0
    for (var j = 0; j<keys.length; j++) {
       var keyCnt = 0
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

        //console.log(keyCnt + " : Inside outer loop" + " : " + keys[j].value)

      if(breaker > 0 || keyCnt > 0) {
       // console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
       // console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
            if (play1 == 1) {
                pl1Points = pl1Points + keyCnt;
                //console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
                //console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
                p1Turns = p1Turns - 1;

            }
            if (play2 == 1) {
                pl2Points = pl2Points + keyCnt
                //console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
                //console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
                p2Turns = p2Turns - 1;
            }

            document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
            document.getElementById("p2Score").innerHTML = "Score : " + pl2Points

            turnsCnt = turnsCalc(disp_text);
            document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns
            document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns
            winCalc()
        //  console.log("No match")
          break;
      }  
      
    }

}

function winCalc() {
    var temp = 0;
    console.log("Round : " + rdVal + " : inside winCalc")
    var compBox = document.getElementById("display-board").querySelectorAll(".bx1")
    console.log(compBox.length + "Length of CompBox")
    //console.log(compBox.length)
    for ( i = 0; i < compBox.length ; i++) {
        if (compBox[i].style.backgroundColor === 'goldenrod') {
            console.log(compBox[i].innerHTML)

            temp++
            console.log("Temp : " + temp)
        }
        if (i == compBox.length - 1 && temp == compBox.length) {
            console.log(i + "Temp = compBox Length : " + temp)
            pointsCalc("success")
            scoreBoard()
        }
        if (i == compBox.length - 1 && temp != compBox.length && p1Turns == 0 && p2Turns == 0) {
            console.log(i + "Temp != compBox Length : " + temp)
            pointsCalc("failure")
            scoreBoard()
        }
        
    }
}
    




function reGame() {
    //rdVal = 1;
    document.getElementById("sg").disabled = true;
    document.getElementById("pg").disabled = false;

    //bord.remove();
    console.log(document.getElementById("sg").disabled)
    console.log(document.getElementById("pg").disabled)
   
    turnsCnt = turnsCalc(disp_text);
    p1Turns = turnsCnt;
    p2Turns = turnsCnt;

    pl1Points = 0
    pl2Points = 0

    clearDisplayBoard();

    disp_string(disp_text);
    //console.log(bord)
    clearKeyColor();
    document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
    document.getElementById("p2Score").innerHTML = "Score : " + pl2Points
    document.getElementById("p1TurnsLeft").innerHTML = "Turns left: " + p1Turns
    document.getElementById("p2TurnsLeft").innerHTML = "Turns left: " + p2Turns
    
}

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
 

