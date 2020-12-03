var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1; 

document.querySelectorAll('.dice')[0].setAttribute("src","images/dice" + randNum1 + ".png"); 
document.querySelectorAll('.dice')[1].setAttribute("src","images/dice" + randNum2 + ".png");

if (randNum1 === randNum2) {
   document.querySelector("h1").innerHTML = "Draw!";
} 
else if (randNum1 < randNum2) {
   document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
   document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

