//COUNTER PROGRAM
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");

let count=0;

decreasebtn.onclick = function(){
    count--;
    document.getElementById("myLabel").textContent = count;
}
increasebtn.onclick = function(){
    count++;
    document.getElementById("myLabel").textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    document.getElementById("myLabel").textContent = count;
}