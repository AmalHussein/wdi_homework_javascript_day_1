 
// Also, write a simple 'game' that makes a user guess a number between 1 and 10.
// If they are incorrect, output if they are high or low. If they are correct, output 
// that they are correct and end the game. 
// Put these in their respective javascript files. 

var guess, answer; 
guess = prompt("Hello Ninja, guess what number I'm thinking?"); 
answer = Math.floor(Math.random()) * 11;

	if(guess < answer){
		guess = prompt("Guess a higher number");
	}
	else if(guess > answer){
		guess = prompt("Guess a lower number");
	}
	else {
		console.log("You guess correctly!");
		document.write("Great job Ninja. You got it right!");
}






