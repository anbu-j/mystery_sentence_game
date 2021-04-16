window.addEventListener('DOMContentLoaded', documentLoaded, false);

document.getElementById("sg").disabled = false
document.getElementById("rg").disabled = true
document.getElementById("pg").disabled = false
console.log(document.getElementById("sg").disabled + " : sg")
console.log(document.getElementById("rg").disabled + " : rg")
console.log(document.getElementById("pg").disabled + " : pg")
var play1 = 0
var play2 = 0

var pl1Points = 0
var pl2Points = 0

var pl1Rd1Points = 0
var pl1Rd2Points = 0
var pl1Rd3Points = 0
var pl1Rd4Points = 0
var pl1Rd5Points = 0

var pl2Rd1Points = 0
var pl2Rd2Points = 0
var pl2Rd3Points = 0
var pl2Rd4Points = 0
var pl2Rd5Points = 0

var pl1MatchPoints = 0
var pl2MatchPoints = 0
//console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
//console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)

var easy = [
    "WHOLE WORLD IS A THEATER",
    "SUN RISES IN THE EAST",
    "MARY HAD A LITTLE LAMB",
    "MAGIC IS BELIEVING IN YOURSELF",
    "ASPIRE TO INSPIRE BEFORE EXPIRE",
    "MAKE EACH DAY BEST DAY OF LIFE"
];

function documentLoaded() {
    "use strict";
  
    // listen for mouse clicks on the button
    //document.getElementById("btnStart").addEventListener("click", atClick, false);
    //document.querySelector(".alpha").addEventListener("click",atClick(),false);
  }

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

const disp_text = easy[3];
console.log(disp_text)

function disp_board(disp_text) {
    //console.log("Hello")
    var a = disp_text;
    //console.log(a)
    var newBox = document.createElement("div")
    newBox.setAttribute("class","bx1")
    var boxVal = document.createTextNode(a)
    newBox.style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;border-style: solid;border-color: black;border-width: 1px; background-color: thistle; color: pink;';
    newBox.appendChild(boxVal);
    
    document.getElementById("display-board").appendChild(newBox)

    //console.log(insBox)
};
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

function disp_comp(disp_text) {
    //5var len = disp_text.length
    var keys = document.getElementsByClassName("alpha")
    var compBox = document.getElementById("display-board").querySelectorAll(".bx1")
    var breaker = 0
    for (var j = 0; j<keys.length; j++) {
       var keyCnt = 0
       for (var i = 0; i<compBox.length; i++){

            if (compBox[i].innerText == keys[j].value && compBox[i].innerText == disp_text) {
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
        //console.log(keyCnt + " : Inside outer loop" + " : " + keys[j].value)
      if(breaker > 0 || keyCnt > 0) {
       // console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
       // console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
            if (play1 == 1) {
                pl1Points = pl1Points + keyCnt;
                //console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
                //console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
            }
            if (play2 == 1) {
                pl2Points = pl2Points + keyCnt
                //console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
                //console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)
            }
            scoreCalc()
        //  console.log("No match")
          break;
      }  
      
    }

}
    

//disp_string(disp_text);

/*document.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
  });*/

function startGame() {
    //console.log
    document.getElementById("sg").disabled = true;
    document.getElementById("rg").disabled = false;
    document.getElementById("pg").disabled = false;
    alert("Player 1 goes first. Player 2 goes next" )
    disp_string(disp_text);
    document.getElementById("p1").style.cssText = 'background-color: red'
    play1 = 1
    console.log("Player 1 : " + play1 + " and Player 2 : " + play2)
    console.log("Player 1 points: " + pl1Points + " and Player 2 points : " + pl2Points)


}

function reGame() {
    document.getElementById("sg").disabled = true;
    document.getElementById("rg").disabled = false;
    document.getElementById("pg").disabled = false;
    var bord = document.getElementById("display-board").childNodes
    //bord.remove();
    console.log(document.getElementById("sg").disabled)
    console.log(document.getElementById("rg").disabled)
   
    var j = 0
    do {
        for (i=0; i<bord.length; i++) {
            bord[i].parentNode.removeChild(bord[i])
        }
        console.log(bord.length)
    } while (j<bord.length)
    disp_string(disp_text);
    console.log(bord)
    var elem = document.querySelectorAll(".alpha")
    console.log(elem.length)
    for (k = 0; k < elem.length; k++) {
        elem[k].style.cssText = 'background-color: teal'
    }
}

function scoreCalc() {
    var turnCnt = 1
    document.getElementById("p1Score").innerHTML = "Score : " + pl1Points
    document.getElementById("p2Score").innerHTML = "Score : " + pl2Points
    for (i=0; i<disp_text.length; i++) {
        for (j=1;j<disp_text.length;j++) {
            if(disp_text[i] != disp_text[j] && i<j) {

            }
        }
    }
}

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
