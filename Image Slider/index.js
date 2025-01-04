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




//Random Password Generator


// function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

//     const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "1234567890";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowerCase ? lowerCaseChars : "";
//     allowedChars += includeUpperCase ? upperCaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";


//     if(length<=0){
//         return `Password should be at least one character!`;
//     }
//     else if(allowedChars.length===0){
//         return `At least one set of characters needs to be selected!`;
//     }
//     for(let i=0; i<length;i++){
//         let index = Math.floor(Math.random()*allowedChars.length);
//         password += allowedChars[index];
//     }
//     return password;
// }


// const passwordLength = 12;
// const includeLowerCase = false;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = false;

// const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

// console.log(`Generated Password : ${password}`);




//Callback = a function that is passed as an argument to another function
//
//           used to handle asynchronous operations
//           1.Reading a file
//           2.Network Requests
//           3.Interacting with databases


// sum(displayConsole, 3, 4);

// function sum(callback, x, y){
//     let result = x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }



//forEach() = method used to iterate over the elements of an array
//            and apply a specified function (callback)
//            to each element

//            array.forEach(callback)
//            element, index, array are provided

// let numbers = [1,2,3,4,5];


// numbers.forEach(cube);
// numbers.forEach(displayConsole);

// function double(element, index, array){
//     array[index] = element*2;
// }

// function triple(element, index, array){
//     array[index] = element*3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function displayConsole(element){
//     console.log(element);
// }




//map = accepts a callback and applies that function to each element
//      of an array, and then returns a new array


// let numbers = [1,2,3,4,5,6];


// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// console.log(squares);
// console.log(cubes);





//filter = creates a new array by filtering out elements


// let numbers = [1,2,3,4,5,6,7,8]

// let evenNumbers = numbers.filter(evenNumber);

// console.log(evenNumbers);

// function evenNumber(element){
//     return element%2===0 ? true : false;
// }



//reduce = reduce the elements of any array into a single value

// let numbers = [1,2,3,4,5,6,7]

// let sumOfNumbers = numbers.reduce(sum);

// console.log(sumOfNumbers);

// function sum(accumulator, element){
//     return accumulator+element;
// }


// let grades = [45, 67, 89, 94, 68, 90, 23, 56];

// let maxgrade = grades.reduce(maxGrades);
// console.log(maxgrade);

// function maxGrades(accumulator, element){
//     return Math.max(accumulator, element);
// }



//function declaration = define a reusable block of code
//                       that performs a specific task

//function expression = a way to define functions as values or variable

// let numbers = [1,2,3,4,5,6,7];


// let squares = numbers.map(function (element){
//     return Math.pow(element, 2);
// });

// console.log(squares)


// let cubes = numbers.map(function (element){
//     return Math.pow(element, 3)
// })

// console.log(cubes);


// const hello = function () {
//     console.log(`Hello`);
// }

// hello();

// setTimeout(function(){
//     console.log(`Good Bye!!`)
// }, 3000);




//arrow functions = a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code


// const hello = (name, age) => {console.log(`Hello ${name}!!`)
//                         console.log(`You are ${age} years old!`)
//                             }

// hello("Satish", 25);


// const numbers = [1,2,3,4,5,6]

// const squares = numbers.map((element)=>{
//     return Math.pow(element, 2);
// })

// console.log(squares);

// const cubes = numbers.map((element) => {
//     return Math.pow(element, 3);
// })
// console.log(cubes);

// const evenNumbers = numbers.filter((element)=> {return element%2!==0} );

// console.log(evenNumbers);

// const sum = numbers.reduce((accumulator, element)=>{return accumulator+element});

// console.log(sum);



//object = a collection of related properties and/or methods
//         can represent real world objects (people, products, places)
//         object = {key : value,
//                  function()}


// const person1 = {
//     firstName: "SpongeBob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: () => console.log("Hello! This is SpongeBob!!"),
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: true,
//     sayHello: function (){console.log("Hello! This is Patrick!!")}
// }

// person1.sayHello();
// person2.sayHello();





//this = reference to the object where THIS is used
//       (the object depends on the immediate context)
//        person.name = this.name


// const person1 = {
//     name: "Spongebob",
//     favFood: "hamburgers",
//     sayHello: function (){console.log(`Hi Iam ${this.name} and my fav food is ${this.favFood}`)}
// }

// person1.sayHello()




//constructor = special method for defining the properties and
//              methods of objects


// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function (){console.log(`You drive a ${this.model}`)}
// }


// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2026, "silver");


// car1.drive();
// car2.drive();
// car3.drive();



//class = (ES6 feature) provides a more structured and cleaner way to 
//         work with objects compared to traditional constrctor function
//         ex. static keyword, encapsulation, inheritance


// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//     }

//     calculateTax(tax){
//         return this.price+(this.price*tax/100);
//     }
// }

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 20.50);
// const product3 = new Product("Underwear", 100.00);


// const tax = product3.calculateTax(18);
// console.log(tax);



//Static = keyword that defines properties or methods that belong
//         to a class itself rather than the objects created from 
//         that class (class owns anything static, not the object)


// class MathUtil{
//     static PI = 3.14;

//     static getDiameter(radius){
//         return 2*radius;
//     }
//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius*radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));





//Inheritance = allows a new class to inherit properties and methods
//              from an existing class (parent->child)
//              helps with code reusability



// class Animal {
//     alive = true;

//     eat (){
//         console.log(`This ${this.name} is eating!`);
//     }
//     sleep (){
//         console.log(`This ${this.name} is sleeping!`);
//     }
// }


// class Rabbit extends Animal{
//     name = 'rabbit';

//     run (){
//         console.log(`This ${this.name} can run!`);
//     }
// }
// class Fish extends Animal{
//     name = 'fish';
// }
// class Hawk extends Animal{
//     name = 'hawk';
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// fish.eat();
// fish.sleep();



//super = keyword is used in classes to call the constructor or acess the 
//        properties and methods of a parent (super class)
//        this = this object
//        super = parent object



// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`This ${this.name} can move at a speed of ${speed}`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`This ${this.name} can run!`);
//         super.move(this.runSpeed);
//     }

// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;

//     }
//     swim(){
//         console.log(`This ${this.name} can swim!`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;

//     }
//     fly(){
//         console.log(`This ${this.name} can fly!`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 5);
// const hawk = new Hawk("hawk", 5, 50);

// rabbit.run();
// fish.swim();
// hawk.fly();




//Getters = a special method that makes a property readable
//Setters = a special method that makes a property writeable

//Validate and modify a value when reading or writing a property


// class Reactangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error(`The width of the rectangle must be positive integer`);
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error(`The height of the rectange must be positive integer`);
//         }
//     }

//     get width(){
//         return this._width.toFixed(1);
//     }

//     get height(){
//         return this._height.toFixed(1);
//     }
//     get area(){
//         return (this._height * this._width).toFixed(1);
//     }


// }

// const reactangle = new Reactangle(3, 5);

// console.log(reactangle.width);
// console.log(reactangle.height);
// console.log(reactangle.area);



// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length>0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error(`FirstName must be a string and length more than one`);
//         }

//     }
//     set lastName(newlastName){
//         if(typeof newlastName === "string" && newlastName.length>0){
//             this._lastName = newlastName;
//         }
//         else{
//             console.error(`lastName must be a string and length more than one`);
//         }

//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge>=0){
//             this._age = newAge;
//         }
//         else{
//             console.log(`Age must be a number and greater than one`);
//         }
//     }

//     get fullName(){
//         return `${this._firstName} ${this._lastName}`;
//     }
// }

// const person1 = new Person("Satish", "Challa", 25);

// console.log(person1.fullName);
// console.log(person1.lastName);
// console.log(person1.age);







//destructuring = extract values from arrays and objects and 
//                then assign them to variables in a convenient way
//                [] = to perform array destruction
//                {} = to perform objet destruction


//-------EXAMPLE 1------------
//Swap the values of two variables

// let a = 1;
// let b = 2;

// [a , b] = [b, a];

// console.log(a);
// console.log(b);


//--------EXAMPLE 2------------
//Swap the elements of an array

// let colors = ["red", "yellow", "blue", "green", "pink"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);


//-------EXAMPLE 3------------
//Assign elements of an array to variables

// let colors = ["red", "yellow", "blue", "green", "pink"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


//-------Example 4--------------
//Extract values from objects

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// const {firstName, lastName, age, job="Undefined"} = person1;


// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


//----------Example 5------------
//Destrcuture in function parameters


// function displayFunction({firstName, lastName, age, job='undefined'}){
//     console.log(firstName);
//     console.log(lastName);
//     console.log(age);
//     console.log(job);

// }


// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// displayFunction(person2);



//nested objects = objects inside other objects.
//                 allows you to represent more complex data structures
//                 child object is enclosed by a parent object


// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 counch st.",
//         city: "Hyderabad",
//         country: "India"
//     }
// }

// for (const property in person){
//     console.log(person[property]);
// }



// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Satish", 25, "Nehru Nagar", "Guntur", "India");


// console.log(person1.address.country);



//Array of objects

// const fruits = [{name: "apple", color: "red", calories: 50},
//                 {name: "orange", color: "orange", calories: 165},
//                 {name: "banana", color: "yellow", calories: 105},
//                 {name: "pineapple", color: "white", calories: 78}]

// console.log(fruits[3].calories);

// fruits.pop();
// fruits.push({name: "mushroom", color: "brown", calories: 98});



// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.calories));

// const fruitsNames = fruits.map(fruit => fruit.name);
// console.log(fruitsNames);

// const fruitNames = fruits.filter(fruit => fruit.calories>100);
// console.log(fruitNames);

// const maxFruit = fruits.reduce((accumulator, fruit) => accumulator.calories>=fruit.calories ? accumulator : fruit);

// console.log(maxFruit);





//sort = method used to sort elements of an array in place
//       sorts elements as strings in lexicographically not alphabetical
//       lexicographically = (alphabet + numbers + symbol)

// let numbers = [1,10,3,4,5,6,9,7,2,8];

// numbers.sort((a,b)=>b-a);

// console.log(numbers);



// const fruits = [{name: "apple", color: "red", calories: 50},
//                 {name: "orange", color: "orange", calories: 165},
//                 {name: "banana", color: "yellow", calories: 105},
//                 {name: "pineapple", color: "white", calories: 78}]


// fruits.sort((a,b) => a.calories-b.calories);

// fruits.sort((a,b) => a.name.localeCompare(b.name));
// console.log(fruits);


//Shuffle an array - Fisher- Yates Algorithm


// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q'];

// function shuffle(arr){
//     for(let i=arr.length-1; i>0; i--){
//         j = Math.floor(Math.random()*(i+1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }

// shuffle(cards);

// console.log(cards);





//Date Objects = Objects that contain values that represent dates and times
//               These date objects can be changed and formatted

//Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 4, 12, 15, 22, 56, 30);
// const date = new Date("2024-05-12T15:22:56z");
// const date = new Date(1700000000000); date at which computer starts time * 1.7 billion seconds
 
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth()+1;
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(date);
// console.log(year);
// console.log(month, typeof month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(dayOfWeek);


// date.setFullYear(1975);
// date.setMonth(0);
// date.setDate(15);
// date.setHours(15);
// date.setMinutes(22);
// date.setSeconds(56);

// console.log(date);

// const date1 = new Date("2024-12-22");
// const date2 = new Date("2024-1-1");


// if(date2>date1){
//     console.log("Happy New Year!!");
// }






// closure = A function defined inside another function,
//           the inner function has access to variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular



// function outer(){
//     let message = "Hello!!";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();



//Counter Program

// function outerCounter(){
//     let count=0;
//     function innerCount(){
//         count++;
//         console.log(`Count is increased to: ${count}`)
//     }

//     function getCount(){
//         return count;
//     }
    
//     return {innerCount, getCount};
// }

// const counter = outerCounter();

// console.log(`Your current is count is: ${counter.getCount()}`);

// counter.innerCount();
// counter.innerCount();
// counter.innerCount();
// counter.innerCount();
// counter.innerCount();
// counter.innerCount();

// console.log(`Your current is count is: ${counter.getCount()}`);


//Program to keep track of points in a game using closures:


// function play(){
//     let score = 0;

//     function win(){
//         score++;
//         console.log(`You won!! Your score increased to ${score}`);
//     }

//     function loose(){
//         score--;
//         console.log(`You lost!! Your score decreased to ${score}`);
//     }

//     function getScore(){
//         return score;
//     }

//     return {win, loose, getScore};
// }

// let player1 = play();
// let keepPlaying = true;

// while(keepPlaying){
//     let input = window.prompt(`Enter your input: `);

//     if(input>10){
//         player1.win();
//     }
//     else{
//         player1.loose();
//         keepPlaying = false;
//     }

//     console.log(`Your current score is: ${player1.getScore()}`);
// }




//Program to keep track of points in a game using closures:



// function createScore(){
//     let score = 0;
//     function increaseScore(points){
//         score+=points;
//         console.log(`+${points}pts`)
//     }

//     function decreaseScore(points){
//         score-=points;
//         console.log(`-${points}pts`)
//     }

//     function getScore(){
//         return score;
//     }

//     return {int: increaseScore, dec: decreaseScore, get: getScore};

// }

// const player1 = createScore();

// player1.increaseScore(5);
// player1.increaseScore(6);
// player1.decreaseScore(3);

// player1.int(5);
// player1.dec(6);
// player1.int(3);

// console.log(`Your score is ${player1.get()}`);



// setTimeOut = function in JavaScript that allows to schedule the execution
//              of a function after an amount of time (milliseconds)
//              Times are approximate (varies based on workload of the JavaScript runtime env.)

//setTimeOut(callback, delay)
//clearTimeOut(timeOutId) = can cancel a timeout before it triggers

// let timeOutId1;
// let timeOutId2;
// let timeOutId3;

// function startTimmer (){
//     timeOutId1 = setTimeout(function sayHello(){
//         console.log("Hello!!")
//     }, 3000);
//     timeOutId2 = setTimeout(function (){console.log("Hello 2!!")}, 4000);
//     timeOutId3 = setTimeout(()=>console.log("Hello 3!!"), 5000);
    
// }

// function stopTimmer(){
//     clearTimeout(timeOutId1);
//     clearTimeout(timeOutId2);
//     clearTimeout(timeOutId3);
// }




// DIGITAL CLOCK PROGRAM

// function updateTime (){
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0);
//     const meridian = hours>12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);
//     const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
//     document.getElementById("clock").textContent = timeString;
// }


// updateTime();
// setInterval(updateTime, 1000);





//STOPWATCH PROGRAM


// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;


// function start(){

//     if(!isRunning){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }

// }
// function stop(){

//     if(isRunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }
// function reset(){
//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;
//     display.textContent = `00:00:00:00`;
// }

// function update(){

//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000*60*60));
//     let minutes = Math.floor(elapsedTime/(1000*60)%60);
//     let seconds = Math.floor(elapsedTime/1000%60);
//     let milliseconds = Math.floor(elapsedTime%1000/10);


//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");
//     milliseconds = String(milliseconds).padStart(2, "0");

//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }





// ES6 Module

// import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';


// console.log(PI);

// const area = getArea(3);
// const circum = getCircumference(3);
// const volume = getVolume(3);

// console.log(area);
// console.log(circum);
// console.log(volume);


//synchronous = Executes line by line consecutively in a sequential manner
//              code that waits for an operation to complete

//asynchronous = allows multiple operations to be performed concurrently.
//               Doesnot block the execution flow and allows the program to continue
//               (I/O operations, network requests, fetching data)
//               Handled with: Callbacks, Promises, Async/Await


//Asychronous using callback
// function func1(callback){setTimeout(()=>{console.log("Task 1")
//                                         callback();    
// }, 3000);}


// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);





//Error = An object that is created to represent a poblem that occurs
//        often with user input or establishing a connection

// try { }
// catch { }
// finally { }


// try{
//     console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
// }
// catch(error){
//     console.error(error);
// }
// finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
//     console.log("This always executes!");
// }

// console.log("Hello you have reached end of the program!!");



// try{
//     const dividend = Number(window.prompt("Enter your dividend: "));
//     const divisor = Number(window.prompt("Enter your divisor: "));


//     if(divisor == 0){
//         throw new Error("Dinominator cannot be a zero!!");
//     }
//     else if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Enter only digits not strings!");
//     }

//     const result = dividend/divisor;
//     console.log(result);
// }
// catch(error){
//     console.log(error);
// }


// CALCULATOR PROGRAM

// const display = document.getElementById("display");


// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }






//DOM = DOCUMENT OBJECT MODEL
//      object {} that represents the page you see in your web browser
//      and provides with an api to interact with it.
//      web browser constructs the DOM, when it loads an HTML document
//      and structures all the elements in a tree like representation
//      JavaScript can access the DOM to dynamically
//      change the content, structure, and style of a web page.


// document.title = "Hello Satish!";

// document.body.style.backgroundColor = `hsl(0, 0%, 75%)`;

// console.dir(document);

// const username = "Satish Challa";

// const heading = document.getElementById("myH1");

// heading.textContent += username === "" ? " Guest" : ` ${username}`;



//element selctors = methods used to target and manuplate html elements
//                   they allow to select one or multiple html elements
//                   from the DOM (Document Object Model)

//1. document.getElementById()         // ELEMENT OR NULL
//2. document.getElementsByClassName() // HTML COLLECTION
//3. document.getElementsByTagName()   // HTML COLLECTION
//4. document.querySelector()          // FIRST ELEMENT OR NULL
//5. document.querySelectorAll()       // NODELIST

//1. document.getElementById() 
// const myHeading = document.getElementById("myHeading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";


// const fruits = document.getElementsByClassName("fruits");
// Array.from(fruits).forEach((fruit)=>fruit.style.backgroundColor = "red");


// let h4Elements = document.getElementsByTagName("h4");
// let liElements = document.getElementsByTagName("li");

// h4Elements = Array.from(h4Elements);
// liElements = Array.from(liElements);

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "red";
// }




// const element = document.querySelector("h4");

// element.style.backgroundColor = "yellow";


// const foods = document.querySelectorAll("li");

// for(let food of foods){
//     food.style.backgroundColor = "red";
// }



//DOM Navigation = the process of navigation through the structure
//                 of an HTML document using JavaScript

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//---------------.firstElementChild-------------------

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";


// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(element =>{
//     const firstElement = element.firstElementChild;
//     firstElement.style.backgroundColor = "lightGreen";
// });

//---------------.lastElementChild-------------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// ulElements.forEach(element =>{
//     const lastElement = element.lastElementChild;
//     lastElement.style.backgroundColor = "lightPink";
// });



//---------------.nextElementSibling-------------------

// const firstElement = document.getElementById("Orange");
// const secondElement = firstElement.nextElementSibling;
// secondElement.style.backgroundColor = "yellow";

//---------------.previousElementSibling-------------------

// const firstElement = document.getElementById("Orange");
// const secondElement = firstElement.previousElementSibling;
// secondElement.style.backgroundColor = "yellow";



//---------------.parentElement-------------------

// const element = document.getElementById("Apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "lightPink";

// const parentSibling = parent.nextElementSibling;
// parentSibling.style.backgroundColor = "lightGreen";


//---------------.children-------------------
// const element = document.getElementById("fruits");
// const fruits = element.children;


// const fruitsArray = Array.from(fruits);

// fruitsArray.forEach(fruit => {
//     fruit.style.backgroundColor = "lightGreen";
// })




//Add and Change HTML

//---------------Example 1 <h1>-------------------

//STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");


//STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

//STEP 3 APPEND THE ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("myBox1").append(newH1);
// document.getElementById("myBox2").prepend(newH1);

// const myBox2 = document.getElementById("myBox2");
// document.body.insertBefore(newH1, myBox2);

// const divList = document.querySelectorAll("div");
// document.body.insertBefore(newH1, divList[2]);

// const divArray = Array.from(divList);

// divArray.forEach(element => {
//     const newH2 = document.createElement("h2");
//     newH2.textContent = "I like ice cream!!";
//     document.body.insertBefore(newH2, element);
// })


//REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("myBox1").removeChild(newH1);


//---------------Example 2 <li>-------------------
//STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");

//STEP 2 ADD ATTRIBUTES/PROPERTIES
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightGreen";

//STEP 3 APPEND THE ELEMENT TO DOM
// document.body.append(newListItem);

// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const apple = document.getElementById("apple");
// document.getElementById("fruits").insertBefore(newListItem, apple);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);


// const fruitList = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, fruitList[1]);








//MOUSE EVENTS = Listen for specific events to create interative web pages
//               events: click, mouseover, mouseout
//               .addEventListner(event, callback)

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");


// function setBackgroundColor(event){
//     const box = event.target;
//     box.classList.toggle("active");

//     if(box.classList.contains("active")){
//         box.textContent = "Ouch 🤕";
//     }
//     else{
//         box.textContent = "Click me 😀";
//     }
// }

// myBox.addEventListener("click", setBackgroundColor);



// myButton.addEventListener("mouseover", event => {
//     myBox.style.backgroundColor = "yellow";
//     myBox.textContent = "Don't do it 😲";
// });

// myButton.addEventListener("mouseout", event => {
//     myBox.style.backgroundColor = "lightGreen";
//     myBox.textContent = "Click me 😀";
// });




//eventListener = Listen to specific events to create interactive web pages
//                events: keydown, keyup
//                keydown = press any key, keyup = release that key
//                document.addEventListener(event, callback)


// const myBox = document.getElementById("myBox");
// const movement = 50;
// let x = 0;
// let y = 0;


// document.addEventListener("keydown", event => {
//     myBox.textContent = "😲";
//     myBox.style.backgroundColor = "tomato";

// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "😀";
//     myBox.style.backgroundColor = "lightGreen";

// });


// document.addEventListener("keydown", event => {
    
//     if(event.key.startsWith("Arrow")){

//         switch(event.key){
//             case "ArrowDown":
//                 y += movement;
//                 break;
//             case "ArrowUp":
//                 y -= movement;
//                 break;
//             case "ArrowRight":
//                 x += movement;
//                 break;
//             case "ArrowLeft":
//                 x -= movement;
//                 break;
//         }
//         console.log(x);
//         console.log(y);

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }

// });





//Hide/Show HTML

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");


// myButton.addEventListener("click", event => {

//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "Show";
//     }
// });



//NodeList = static collection of HTML elements by (Id, class, elements)
//           can be created by using querySelectorAll()
//           similar to Array, but no (map, filter, reduce) but have forEach
//           NodeList won't update to automatically reflect changes


// let buttons = document.querySelectorAll(".myButtons");


//ADD HTML/CSS Properties

// buttons.forEach(button => {
//     button.style.backgroundColor = "tomato";
//     button.style.color = "black";

// });

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// })


//MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "lightBlue";
//         event.target.style.color = "black";
//     })

// });



//ADD AN ELEMENT

// const newButton = document.createElement("button");//STEP 1

// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";//STEP 2

// document.body.appendChild(newButton);//STEP 3
// console.log(buttons);

//Adding an element to NODELIST

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);


//REMOVE AN ELEMENT

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     })
// })




//ClassList = Element property in JavaScript used to interact with an 
//            element's list of classes (CSS classes)
//            Allow you to make reusable classes for many elements
//            across your web page



//add()
//remove()
//toggle(Remove if present, Add if not)
//replace(oldClass, newClass)
//contains()


// const button = document.getElementById("myButton");

// button.addEventListener("click", event => {
//     event.target.classList.toggle("enabled");
// });


// button.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");

// });
// button.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");

// });


// button.classList.add("enabled");

// button.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🥵";
//     }

//     event.target.classList.replace("enabled", "disabled");
// })


// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled");

// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("enabled")){
//         event.target.classList.add("disabled");
//     }
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬" ;
//     }
// });



// const myButtons = document.querySelectorAll(".myButtons");

// myButtons.forEach(button => {
//     button.classList.add("enabled");
// })


// myButtons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     })
// })

// myButtons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     })
// })

// myButtons.forEach(button => {
//     button.addEventListener("click", event => {

//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "🤑";
//         }
//         else{
//             event.target.classList.replace("enabled", "disabled");
//         }

//     })
// })




//ROCK - PAPER - Scissors GAME


// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;

// const choices = ['rock', 'paper', 'scissors'];

// function playGame(playerChoice){
//     const computerChoice = choices[Math.floor(Math.random()*3)];
//     let result = "";
//     if(playerChoice === computerChoice){
//         result = "IT'S A TIE!";
//     }
//     else{
//         switch(playerChoice){
//             case 'rock':
//                 result = (computerChoice==='paper') ? "You Lose!" : "You Win!";
//                 break;
//             case 'paper':
//                 result = (computerChoice==='scissors') ? "You Lose!" : "You Win!";
//                 break;
//             case 'scissors':
//                 result = (computerChoice==='rock') ? "You Lose!" : "You Win!";
//                 break;
    
//         }

//     }
//     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//     resultDisplay.textContent = result;

//     resultDisplay.classList.remove("greenText", "redText");


//     switch(result){
//         case 'You Win!':
//             resultDisplay.classList.add("greenText");
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore;
//             break;
//         case 'You Lose!':
//             resultDisplay.classList.add("redText");
//             computerScore++;
//             computerScoreDisplay.textContent = computerScore;
//             break;
//     }
// }





//IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initalizeSlide();
document.addEventListener("DOMContentLoaded", initalizeSlide);

function initalizeSlide(){

    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide (){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}