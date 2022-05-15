// DICE 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNum1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// DICE 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Display the winner
if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(randomNum2 == randomNum1) {
  document.querySelector("h1").innerHTML = "Draw!";
}
