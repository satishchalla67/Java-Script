// console.log(`Hello World!!`);
// console.log(`I like pizza!`);
// window.alert(`Hello world!`);
// window.alert(`I like Pizza!`);
// document.getElementById("myH1").textContent = `Hello world!`;
// document.getElementById("myP").textContent = `I like pizza!`;



//Variable
// let fullName = "Satish";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `My age is ${age}`;
// document.getElementById("p3").textContent = `isStudent: ${isStudent}`;


//Arithmatic operators

// let students = 31;

// students += 1;
// students -=1;
// students *=2;
// students /=2;
// students **=2
// students %= 3

// console.log(students)


//HOW TO ACCEPT USER INPUT
// 1.EASY WAY = Window prompt
// 2.PROFESSIONAL WAY = HTML Textbox

// let username;

// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myInput").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }



// Type conversion = Change the datatype of a value to another
//                   (Strings, numbers, booleans)


// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//const = a variable that can't be changed


//COUNTER PROGRAM
// const decreasebtn = document.getElementById("decreasebtn");
// const resetbtn = document.getElementById("resetbtn");
// const increasebtn = document.getElementById("increasebtn");

// let count=0;

// decreasebtn.onclick = function(){
//     count--;
//     document.getElementById("myLabel").textContent = count;
// }
// increasebtn.onclick = function(){
//     count++;
//     document.getElementById("myLabel").textContent = count;
// }
// resetbtn.onclick = function(){
//     count=0;
//     document.getElementById("myLabel").textContent = count;
// }



//Math = built-in object that provides a collection of objects and methods


// let x = 3.234;
// let y = -25;
// let z = 2.718281828459045;

// x = Math.round(x)
// x= Math.floor(x)
// x = Math.ceil(x);
// x = Math.trunc(x);
// y = Math.sqrt(y)
// z = Math.log(z)
// y = Math.abs(y)
// y = Math.sign(y)
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);


// console.log(min);
// console.log(y);
// console.log(Math.PI)
// console.log(Math.E)





//RANDOM NUMBER GENERATOR

//   let randomNum = Math.floor(Math.random()*6)+1;

// let min=50;
// let max=100;

// let randomNum = Math.floor(Math.random()*(max-min))+min

// console.log(randomNum);



// const button = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");

// let min = 1;
// let max = 6;

// button.onclick = function (){
//     let randomNum1 = Math.floor(Math.random()*max)+min;
//     let randomNum2 = Math.floor(Math.random()*max)+min;
//     let randomNum3 = Math.floor(Math.random()*max)+min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }




//IF STATEMENTS


// const input = document.getElementById("myInput");
// const button = document.getElementById("myButton");
// const output = document.getElementById("myOutput");

// let age;

// button.onclick = function(){
//     age = input.value;
//     age = Number(age);
//     if(age>100){
//         output.textContent = `You are TOO OLD to enter this site`;
//     }
//     else if(age>=18){
//         output.textContent = `You are eligible to enter this site`;
//     }
//     else if(age==0){
//         output.textContent = `Age cannot be 0`;
//     }
//     else{
//         output.textContent = `You must be 18+ to enter this site`;
//     }
// }



//ternary operator - a shortcut to if{} and else{} statements
//                   helps to assign a variable based on the condition
//                   condition ? codeIfTrue : codeIfFalse;


// let age=21;
// let message = age>=18 ? `you are an adult!` : `you are a minor!`;

// console.log(message);


// string methods = allow you to manipulate and work with text (strings)

// string slicing = creating a substring from a portion of another string
//                  string.slice(start, end)

// const fullName = "Satish Challa";

// let fistname = fullName.slice(-6,-2);
// let lastname = fullName.slice(7,13);

// console.log(fistname);
// console.log(lastname);

// const email = "satishchalla67@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@"));


// console.log(username);
// console.log(extension);





//Method chaning = calling one method after other in a one contionous
//                 of line of code.

//------NO METHOD CHAINING---------


//----- METHOD CHAINING------------

// let username = window.prompt("Enter your username: ");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);



//Logical operators = used to combine or manupilate boolean values
//                    (true or false)
//                     AND = &&
//                     OR = ||
//                     NOT = !


//strict equality

// = assignment operator
// == comparision operator (compare if values are equal)
// === strict equality operator (compare if values and data type are equal)
// != inequality operator
// !== strict inequality operator



//WHILE LOOP = repeat same code WHILE some condition is true


// let loggedIn = false;
// let userName;
// let password;


// while(!loggedIn){
//     userName = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");

//     if (userName === "myUserName" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!!");
//     }else{
//         console.log("Invalid credentials! Please try again!");
//     }
// }



//for loop = repeat some code limited amount of times


// for(let i=1; i<=20; i++){
//     if(i==13){
//         continue;
//     }
//     console.log(i);
// }








// NUMBER GUESSING GAME

// let min = 50;
// let max = 100;
// let answer = Math.round(Math.random()*(max-min+1) + min);


// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${min} - ${max}: `);
//     guess = Number(guess);

//     if (isNaN(guess)){
//         window.alert(`${guess} is not a number!`);
//     }
//     if(guess<min || guess>max){
//         window.alert(`You can only choose a number between ${min} and ${max}`);
//     }

//     attempts++;
//     if(guess == answer){
//         console.log(`You have won the game! Answer is ${answer}! ad you took ${attempts} attempts!`);
//         running = false;
//     }
//     else if(guess > answer){
//         console.log(`You have guessed a larger number! guess something less than ${guess}`);
//     }
//     else{
//         console.log(`You have guessed a smaller number! guess something greater than ${guess}`);
//     }
// }



//function = a reusable line of code.


// function divide(x, y){
//     return [x/y, x%y];
// }

// let [quotient, remainder] = divide(10, 20);


// console.log(`${quotient}, ${remainder}`);





// Temperature Conversion program
//(0°C × 9/5) + 32 = 32°F ->celsius to fahrenheit
//(32°F − 32) × 5/9 = 0°C ->fahrenheit to celsius



// const textbox = document.getElementById("myTextBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");


// function convert (){
//     let inputTemp = Number(textbox.value);
//     if(toFahrenheit.checked){
//         outputTemp = (inputTemp*9/5)+32;
//         result.textContent = `${outputTemp.toFixed(2)}°F`
//     }
//     else if(toCelsius.checked){
//         outputTemp = (inputTemp-32)*5/9;
//         result.textContent = `${outputTemp.toFixed(2)}°C`
//     }
//     else{
//         result.textContent = `select a unit`;
//     }

// }



//array = a variable like structure that can hold more than one element.


// let fruits = ["apple", "banana", "orange", "mango"];

// fruits.push("mango");
// fruits.pop()
// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits.length);
// console.log(fruits.indexOf("mango"));

// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);




// spread operator = ... allows an iterable such as an array or
//                   string to be expanded in to seperate elements.
//                   (unpacks the elements)

// let numbers = [1,2,3,4,5,6];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// let username = "Satish Challa";
// let names = [...username];
// console.log(names.join("-"));

// let fruits = ["apple", "banana", "orange", "mango"];
// let vegetables = ["carrot", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables]; //shallow copy

// console.log(foods);



//rest parameters = (...rest) allows a function to work with variable
//                  no of parameters by bundling them into an array.

// spread = expands an array into seperate elements
//rest = bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(foods);
// }

// function openFridge(...foods){
//     return foods;
// }

// openFridge("apple", "banana", "orange", "mango");
// let items = openFridge("apple", "banana", "orange", "mango");
// console.log(items);


// function combineStrings(...strings){
//     return strings.join(" ");
// }


// const fullName = combineStrings("Mr", "Spongebob", "Squarepants", "III");

// console.log(fullName);


//Dice Roller Program


// function rollDice(){
//     const noOfDice = document.getElementById("noOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     let values = [];
//     let images = [];

//     for(let i=0; i<noOfDice; i++){
//         let value = Math.floor(Math.random()*6)+1;
//         values.push(value);
//         images.push(`<image src="dice_images/${value}.png" alt="Dice ${value}">`);
//     }
//     diceResult.textContent = `Dice : ${values.join(", ")}`;
//     diceImages.innerHTML = images.join('');
// }





