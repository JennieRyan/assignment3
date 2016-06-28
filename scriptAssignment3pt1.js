//COMM644
//Assignment 3, Part 1
//
//Practice with Arrays (5 points)


/*====================================================================
// STEP 1. 1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

var movies = ["The Lion King", "Swingers", "Harry Potter", "Game of Thrones", "Grease"];

window.console.log(movies [1]);
====================================================================*/

/*====================================================================
// STEP 2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

var movies = [];

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";

window.console.log(movies[1]);
====================================================================*/

/*====================================================================
// STEP 3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

var movies = [];

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";

movies.splice(2, 0, "Big");
window.console.log(movies.length);
====================================================================*/

/*====================================================================
// STEP 4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

var movies = [];

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";

movies.shift();
window.console.log(movies);
====================================================================*/

/*====================================================================
// STEP 5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

var movies = [];

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";
movies[5] = "Big";
movies[6] = "Matrix";

var moviesLength = movies.length;
var i;

for (i = 0; i < moviesLength; i++) {
    window.console.log((i + 1) + ". My favorite movie is " + movies[i]);
}
====================================================================*/

/*
// STEP 6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

var movies = [];
var i = 0;

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";
movies[5] = "Big";
movies[6] = "Matrix";


for (i in movies) {
    window.console.log(movies[i]);
}
====================================================================*/

/*
// STEP 7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

var movies = [];
var i = 0;

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";
movies[5] = "Big";
movies[6] = "Matrix";

for (i in movies) {
    window.console.log(movies.sort()[i]);
}
====================================================================*/

/*====================================================================
// STEP 8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3


var movies = [];
var i = 0;

movies[0] = "The Lion King";
movies[1] = "Swingers";
movies[2] = "Harry Potter";
movies[3] = "Game of Thrones";
movies[4] = "Grease";
movies[5] = "Big";
movies[6] = "Matrix";

var leastFavMovies = ["Rambo", "Bambi", "Borat"];

window.console.log("Movies I like: \n\n");
for (i in movies) {
    window.console.log(movies[i]);
}

window.console.log("\n\n Movies I regret watching: \n\n");
for (i in leastFavMovies) {
    window.console.log(leastFavMovies[i]);
}

====================================================================*/

/*====================================================================
// STEP 9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

var moviesLike = ["The Lion King", "Swingers", "Harry Potter", "Game of Thrones", "Grease", "Big", "Matrix"];

var leastFavMovies = ["Rambo", "Bambi", "Borat"];

var movies = moviesLike.concat(leastFavMovies);

movies.sort();

window.console.log(movies.reverse());
====================================================================*/

/*====================================================================
// STEP 10.	Return just the last item in the array and display it within the console window.

var moviesLike = ["The Lion King", "Swingers", "Harry Potter", "Game of Thrones", "Grease", "Big", "Matrix"];

var leastFavMovies = ["Rambo", "Bambi", "Borat"];

var movies = moviesLike.concat(leastFavMovies);

movies.sort();

window.console.log(movies.slice(-1));
====================================================================*/

/*====================================================================
// STEP 11.	Remove the previous method and this time return just the first item in the array and display it within the console window.

var moviesLike = ["The Lion King", "Swingers", "Harry Potter", "Game of Thrones", "Grease", "Big", "Matrix"];

var leastFavMovies = ["Rambo", "Bambi", "Borat"];

var movies = moviesLike.concat(leastFavMovies);

movies.sort();

window.console.log(movies[0]);
====================================================================*/

/*====================================================================
// STEP 12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

var movies = ["The Lion King", "Rambo", "Bambi", "Borat", "Swingers", "Harry Potter",  "Matrix"];

window.console.log(movies);
window.console.log(movies.indexOf("Rambo"));
window.console.log(movies.indexOf("Bambi"));
window.console.log(movies.indexOf("Borat"));

movies[1] = "Game of Thrones";
movies[2] = "Grease";
movies[3] = "Big";
        
window.console.log(movies);

====================================================================*/

/*====================================================================
// STEP 13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

var employee1 = [];
employee1[".employeeid"] = 298;
employee1[".name"] = "Jane Doe";
employee1[".title"] = "accounts receivable";
employee1[".department"] = "accounting";
employee1[".current"] = false;
        
var employee2 = [];
employee2[".employeeid"] = 218;
employee2[".name"] = "John Doe";
employee2[".title"] = "designer";
employee2[".department"] = "marketing";
employee2[".current"] = true;
        
var employees = [employee1, employee2];
        
//window.console.log(employees);
window.console.log(employees[1]["name"]);

====================================================================*/

/*====================================================================
// STEP 14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

var employee1 = [];
employee1[".employeeid"] = 298;
employee1[".name"] = "Jane Doe";
employee1[".title"] = "accounts receivable";
employee1[".department"] = "accounting";
employee1[".current"] = false;
        
var employee2 = [];
employee2[".employeeid"] = 218;
employee2[".name"] = "John Doe";
employee2[".title"] = "designer";
employee2[".department"] = "marketing";
employee2[".current"] = true;
        
var employees = [employee1, employee2];
var i;

for (i = 0; i < employees.length; i++) {window.console.log(employees[i][".name"]); }
====================================================================*/

/*====================================================================
// STEP 15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

var employee1 = [];
employee1[".employeeid"] = 298;
employee1[".name"] = "Jane Doe";
employee1[".title"] = "accounts receivable";
employee1[".department"] = "accounting";
employee1[".current"] = false;
        
var employee2 = [];
employee2[".employeeid"] = 218;
employee2[".name"] = "John Doe";
employee2[".title"] = "designer";
employee2[".department"] = "marketing";
employee2[".current"] = true;

var employee3 = [];
employee3[".employeeid"] = 187;
employee3[".name"] = "David Smith";
employee3[".title"] = "Sales Manager";
employee3[".department"] = "Corporate";
employee3[".current"] = true;
        
var employees = [employee1, employee2, employee3];
var i;

for (i = 0; i < employees.length; i++) {
    if (employees[i][".current"] == true) {
        window.console.log(employees[i][".name"]);
    }
}
====================================================================*/

/*====================================================================
// STEP 16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

var i;
var movies;

movies = [["Swingers 1", 1], ["The Lion King 2", 2], ["Harry Potter 3", 3], ["Grease 4", 4], ["Matrix 5", 5]];

function movieName(title) {
    "use strict";
    return typeof title == "string";
}

for (i = 0; i < movies.length; i++) {
    window.console.log(movies[i].filter(movieName));
}

//Was I supposed to remove the number from the movie title name string as well???  add this in somewhere after string (maybe make a new variable?) .slice([0,] [-2]) -- couldn't figure out how/where to add this though

====================================================================*/

/*====================================================================  

//Practice with Functions (5 points) 

====================================================================*/

/*====================================================================  
// STEP 1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

var displayMessage = function (textHere) {
    "use strict";
    window.alert(textHere);
};
displayMessage("I am an anonymous function");

====================================================================*/


/*====================================================================
// STEP 2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

function calculate(a, b) {
    "use strict";
    return (a % b);
}
window.console.log(calculate(5, 2));
   
====================================================================*/

/*====================================================================
// STEP 3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY

var employees = [];
var i;

employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];


var showEmployee = function (a) {
    "use strict";
    window.console.log("Employees: \n \n");
    for (i = 0; i < a.length; i++) {
        window.console.log(a[i]);
    }
};
showEmployee(employees);
====================================================================*/

