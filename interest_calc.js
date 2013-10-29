// Write a simple interest calculator for loans (except Bryce, who will write compound). 
// Ask the user for the total amount borrowed, interest rate and number of years.


var loan, years, interest; 
loan = prompt("What the loan amount?");
years = prompt("Whats the numbers of years for the loan payments?");
interest = prompt("Whats the interest rate of the loan?");

var total_interest = loan*years*interest; 

var total = parseFloat(total_interest) + parseFloat(loan);

console.log("$" + total_interest + " is the total amount of interest paid on your loan!");
console.log("$"+ total + " is the full repayment of the loan. ");
















