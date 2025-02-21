const textBox = document.getElementById("textBox");
const toFarenhait = document.getElementById("toFarenhait");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFarenhait.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; // ° = alt + 0176  //tofixed takes decimal values
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent =  "select";
    }
}