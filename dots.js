var boxes; //empty var, but used at later time
var red; //this will change colors of boxes
var blue; //change colors of boxes
var numberOfBoxesRed = 0; //this will count who has more/who wins
var numberOfBoxesBlue = 0; //this will count who has more/who wins

function end() {
  alert("Then we won't play..");
} //if the person playing does not want to play, they won't be prompted with the rest

var user = confirm("Are you ready to play Dots and Boxes?"); {
  if (user === true) { //allows the player to choose whether or not they want to play and if they press "ok" they will input their names
    var playerOne = prompt("What is player 1's name?"); {
      console.log(playerOne.toUpperCase());
    } //this allows player 1 to input their name for the game in all caps
    var playerTwo = prompt("What is player 2's name?"); {
      console.log(playerTwo.toUpperCase());
    } //player 2 will input their name and it will appear in all capital letters
  }
  else {
    end();
  } //if they do not want to play then the players won't be prompted to input their names
}

//when clicked, lines will turn solid
//the value of the function is noted in the id of each row

var rClick = function(value) {
  document.getElementById("r" + value).style.background = "black";
};
//this function turns the rows black


var cClick = function(value) {
  document.getElementById("c" + value).style.background = "black";
};
//this function turns the columns black

function square(value) {
  input = window.prompt("Who won this box?");
  if (input == playerOne) {
    colorRed(red, value);
  } else if (input == playerTwo) {
    colorBlue(blue, value);
  }
} //this allows the players to determine who won the box bc they can input who won it

function colorRed(playerColor, boxNumber) {
  boxes = document.getElementById("s" + boxNumber).style.backgroundColor = "red";
  numberOfBoxesRed++;
} //if player 1 won the box then the color changes to red

function colorBlue(playerColor, boxNumber) {
  boxes = document.getElementById("s" + boxNumber).style.backgroundColor = "blue";
  numberOfBoxesBlue++;
} //if player 2 won the box changes to blue

function endGame() {
  if (numberOfBoxesRed > numberOfBoxesBlue) {
    window.alert(playerOne.toUpperCase() + " WINS!");
  } else {
    window.alert(playerTwo.toUpperCase() + " WINS!");
  }
} //at the end of the game this figures out who will win and will display it as an alert