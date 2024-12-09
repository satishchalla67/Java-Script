const button = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

let min = 1;
let max = 6;

button.onclick = function (){
    let randomNum1 = Math.floor(Math.random()*max)+min;
    let randomNum2 = Math.floor(Math.random()*max)+min;
    let randomNum3 = Math.floor(Math.random()*max)+min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}