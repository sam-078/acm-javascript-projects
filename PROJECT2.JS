   //PART 1: Dice Roller

const numOfDice = document.getElementById("numOfDice");
const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

rollBtn.onclick = function() {
    let num = Number(numOfDice.value);
    let values = [];
    let images = [];

    for (let i = 0; i < num; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push('<img src="dice_images/' + value + '.png">');
    }

    diceResult.textContent = "dice: " + values.join(", ");
    diceImages.innerHTML = images.join("");
};


   //PART 2: Random Password Generator

const passwordBtn = document.getElementById("passwordBtn");
const passwordResult = document.getElementById("passwordResult");

passwordBtn.onclick = function() {
    let length = Number(document.getElementById("passLength").value);
    let includeLower = document.getElementById("includeLower").checked;
    let includeUpper = document.getElementById("includeUpper").checked;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;

    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()";

    let allowedChars = "";
    let password = "";

    if (includeLower) {
        allowedChars += lowercaseChars;
    }
    if (includeUpper) {
        allowedChars += uppercaseChars;
    }
    if (includeNumbers) {
        allowedChars += numberChars;
    }
    if (includeSymbols) {
        allowedChars += symbolChars;
    }

    if (length <= 0) {
        passwordResult.textContent = "Password length must be at least 1";
        return;
    }

    if (allowedChars.length === 0) {
        passwordResult.textContent = "Select at least one set of characters!";
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordResult.textContent = "Password: " + password;
};