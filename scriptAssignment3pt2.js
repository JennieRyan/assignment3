/*====================================================================

COMM644
Assignment 3, Part 2

====================================================================*/

/*====================================================================
The Rock, Paper, Scissors Game (10 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
Our code will break the game into 3 phases:
1.	User makes a choice. How will we collect the user’s choice?
2.	Computer makes a choice. How will we collect the computer’s choice?
3.	A conditional that determines who wins.
In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
1.	Begin by prompting the user for their choice.
2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5.	What if the result ends in a tie? Figure out how to handle that as well.
6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
====================================================================*/
 

/*====================================================================
//STEP 1
var choice = window.prompt("Please select Paper, Rock or Scissors").toLowerCase();
//STEP 2 & 3

var coinFlip = Math.floor(Math.random() * 60); //generates a Random Number Between 0-60

var randomResult;
if (coinFlip >= 20) {
    randomResult = "rock";
} else if (coinFlip > 21 && coinFlip < 40) {
    randomResult = "paper";
} else {
    randomResult = "scissors";
}

//STEP 4

function winnerWinner(choice, randomResult) {
    "use strict";
    if (choice == "rock" && randomResult == "scissors") {
        window.alert("The computer picked: " + randomResult + "\n" + "Rock smashes scissors! You win!!");
    } else if (choice == "paper" && randomResult == "rock") {
        window.alert("The computer picked: " + randomResult + "\n" + "Paper covers Rock! You win!!");
    } else if (choice == "scissors" && randomResult == "paper") {
        window.alert("The computer picked: " + randomResult + "\n" + "Scissors cut paper! You win!!");
    } else if (choice == "paper" && randomResult == "scissors") {
        window.alert("The computer picked: " + randomResult + "\n" + "Scissors cut paper. Sorry, you lose. Please try again.");
    } else if (choice == "scissors" && randomResult == "rock") {
        window.alert("The computer picked: " + randomResult + "\n" + "Rock smashes scissors. Sorry, you lose. Please try again.");
    } else if (choice == "rock" && randomResult == "paper") {
        window.alert("The computer picked: " + randomResult + "\n" + "Paper covers rock. Sorry, you lose. Please try again.");
        
//STEP 5
    } else if (choice == randomResult) {
        window.alert("The computer picked: " + randomResult + "\n" + "It's a tie! Play again!!");

//STEP 6        
        choice = window.prompt("Pick Rock, Paper, or Scissors.").toLowerCase();
        winnerWinner(choice, randomResult);
    } else {
        choice = window.prompt("That's not a valid input, please choose again: Rock, Paper, or Scissors.").toLowerCase();
        winnerWinner(choice, randomResult);
    }
}
winnerWinner(choice, randomResult);
====================================================================*/

/*====================================================================
The Basic Calculator (10 points)
In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
1.	Prompt the user for a number and store that in a variable.
2.	Prompt the user for a second number and store that in a variable.
3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
4.	Create a new named function called calculate() that accepts 3 parameters.
5.	Call the calculate function and pass in the 3 variables as parameters. 
HINT: You will need to convert the 2 numbers from strings to numbers. 
6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.
====================================================================*/
/*====================================================================

//STEP 1
var choice1 = parseFloat(window.prompt("Please enter the first number of your equation."), 10);
//STEP 2
var choice2 = parseFloat(window.prompt("Please enter the second number of your equation"), 10);
//STEP 3
var choiceOperation = window.prompt("Please choose if you'd like to add, subtract, multiply, or divide these two numbers");
//STEP 4
function calculate(a, b, c) {
    "use strict";
}
//STEP 5
calculate(choice1, choice2, choiceOperation);
//STEP 6
switch (choiceOperation) {
case "+":
case "add":
    window.alert(choice1 + choice2);
    break;
case "-":
case "subtract":
case "minus":
    window.alert(choice1 - choice2);
    break;
case "/":
case "divide":
    window.alert(choice1 / choice2);
    break;
case "*":
case "multiply":
case "times":
    window.alert(choice1 * choice2);
    break;
//STEP 7
default:
    choiceOperation = window.prompt("You entered an invalid selection. Please choose to \"add\", \"subtract\", \"multiply\", or \"divide\".");
    calculate(choiceOperation, choice1, choice2);
    break;
}

calculate(choiceOperation, choice1, choice2);

====================================================================*/


//Death by JavaScript (4 points each for 20 points total)

//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.


/*====================================================================
//1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'

var x = "webmaster";

function alphabetize(a) {
    "use strict";
    window.console.log(a.split("").sort().join(""));
}

alphabetize(x);
====================================================================*/
/*====================================================================
//2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.

//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'


var x = "the quick brown fox";

function toTitleCase(a) {
    "use strict";
    return a.replace(/\b\w+/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
window.console.log(toTitleCase(x));

====================================================================*/
/*====================================================================
//3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5

var x = "The quick brown fox";

function vowels(a) {
    "use strict";
    var m = a.match(/[aeiou]/gi);
//This just matches against the regex (g makes it search the whole string, i makes it case-insensitive) and returns the number of matches. 
    return m === null ? 0 : m.length;
//    We check for null incase there are no matches (ie no vowels), and return 0 in that case
}

window.console.log(vowels(x));

====================================================================*/
/*====================================================================
//4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

var i;
var index;

function generatePW () {
    "use strict";
    var password = '';
    var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (i = 0; i <= 7; i++) {
        index = Math.floor(Math.random() * 62);
        password = password.concat(characters[index]);
    }
    return password;
}
window.console.log(generatePW());
====================================================================*/

/*====================================================================
//5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.

//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"

var i;
var longest;

function longName(a) {
    "use strict";
	longest = a[0];
	for (i = 0; i < a.length; i++) {
		if (longest.length < a[i].length) {
			longest = a[i];
			return longest;
		}
	}
}
window.console.log(longName(["Australia", "Germany", "United States of America"]));

====================================================================*/