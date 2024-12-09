// Temperature Conversion program
//(0°C × 9/5) + 32 = 32°F ->celsius to fahrenheit
//(32°F − 32) × 5/9 = 0°C ->fahrenheit to celsius



const textbox = document.getElementById("myTextBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");


function convert (){
    let inputTemp = Number(textbox.value);
    if(toFahrenheit.checked){
        outputTemp = (inputTemp*9/5)+32;
        result.textContent = `${outputTemp.toFixed(2)}°F`
    }
    else if(toCelsius.checked){
        outputTemp = (inputTemp-32)*5/9;
        result.textContent = `${outputTemp.toFixed(2)}°C`
    }
    else{
        result.textContent = `select a unit`;
    }

}