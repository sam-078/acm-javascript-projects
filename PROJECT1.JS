
   //PART 1: Number Counter
 

// 1. SETUP: Declare variable and get elements
let count = 0;

const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

// 2. EVENT LISTENERS & LOGIC
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};


   //PART 2: Temperature Converter

// 1. SETUP: Get input, radio buttons, submit button, and result display
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submitBtn = document.getElementById("submitBtn");
const resultLabel = document.getElementById("resultLabel");

let temp;

// 2. CONVERSION LOGIC (inside submit button click handler)
submitBtn.onclick = function() {
    temp = Number(textBox.value);

    if (toFahrenheit.checked) {
        temp = (temp * 9 / 5) + 32;
        resultLabel.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = (temp - 32) * (5 / 9);
        resultLabel.textContent = temp.toFixed(1) + "°C";
    }
    else {
        resultLabel.textContent = "Please select a unit!";
    }
};