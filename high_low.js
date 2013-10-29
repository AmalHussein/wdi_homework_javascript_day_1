 
// Also, write a simple 'game' that makes a user guess a number between 1 and 10.
// If they are incorrect, output if they are high or low. If they are correct, output 
// that they are correct and end the game. 
// Put these in their respective javascript files. 

var 
guess = prompt("Hello Ninja, guess what number I'm thinking?"); 
answer = Math.random() * (1 - 10)

while 
	(guess !== answer) {
	console.log("Wrong guess, try again!");
	guess = prompt("Guess again!"); 
	}
else {
	console.log("")
}





	x = 1;
while (x < 11){
	if (x%2 ===0){
		console.log("X is even");
	} 
	else {
		console.log("X is odd");
	}
	x = x + 1;
}
