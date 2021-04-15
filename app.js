
var easy = [
    "WHOLE WORLD IS A THEATER",
    "SUN RISES IN THE EAST"
];

const disp_text = easy[0];
console.log(disp_text)

function disp_board(disp_text) {
    //console.log("Hello")
    var a = disp_text;
    //console.log(a)
    var newBox = document.createElement("div")
    newBox.setAttribute("class","bx1")
    var boxVal = document.createTextNode(a)
    newBox.style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;border-style: solid;border-color: black;border-width: 1px; background-color: thistle';
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
    console.log(len);
    var cntr = 0;
    for (var i = 0; i<len; i++) {
        if(disp_text[i] === " ") {
            console.log(disp_text[i] + "In") 
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
    console.log(compBox.length)
    //console.log(keys.length)
    for (var i = 0; i<compBox.length; i++) {
       // console.log("Hello1")
        for (var j = 0; j<keys.length; j++){
            //console.log("Hello2")
           // console.log(disp_text[i] +" " + keys[j].value)
            //if (disp_text[i] == keys[j].value) {
            if (compBox[i].innerText == keys[j].value) {
                //console.log(compBox[j].innerText)
                keys[j].style.cssText = 'font-size: var(--font-size-medium);height: 40px;width: 40px;border-radius: 5px;text-align: center;background-color: goldenrod;';
                compBox[i].style.cssText = 'height:20px; width:20px; border-radius:5px;text-align:center;border-style: solid;border-color: black;border-width: 1px; background-color: goldenrod';
                //console.log("Hello3");
                //console.log(keys[j].value);
                //disp_text
                break;
            }
        }
        
    }
}

disp_string(disp_text);
disp_comp(disp_text);

//disp_board(disp_text);
document.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
  });