// script.js

const functionSelect = document.getElementById("functionSelect");
const userInput = document.getElementById("userInput");
const runBtn = document.getElementById("runBtn");

const inputDisplay = document.getElementById("inputDisplay");
const functionDisplay = document.getElementById("functionDisplay");
const outputDisplay = document.getElementById("outputDisplay");

const consoleBox = document.getElementById("consoleBox");

const boxes = document.querySelectorAll(".box");

runBtn.addEventListener("click", runFunction);

function runFunction(){

    clearConsole();

    removeAnimation();

    const selectedFunction = functionSelect.value;
    const value = userInput.value;

    if(value === ""){
        alert("Please enter a value");
        return;
    }

    inputDisplay.innerText = value;

    let result;

    addLog("Receiving Input...");

    setTimeout(() => {

        functionDisplay.innerText = selectedFunction + "()";

        addLog("Calling Function : " + selectedFunction + "()");

        animateBox(1);

    }, 500);

    setTimeout(() => {

        switch(selectedFunction){

            case "square":
                result = square(Number(value));
                break;

            case "cube":
                result = cube(Number(value));
                break;

            case "evenodd":
                result = evenOdd(Number(value));
                break;

            case "factorial":
                result = factorial(Number(value));
                break;

            case "palindrome":
                result = palindrome(value);
                break;

            case "bmi":
                result = bmi(Number(value));
                break;

            case "temperature":
                result = temperature(Number(value));
                break;

        }

        outputDisplay.innerText = result;

        animateBox(2);

        addLog("Processing Complete...");
        addLog("Returned Value : " + result);

    }, 1500);

}

function square(num){

    addLog("Calculating square...");
    return num * num;

}

function cube(num){

    addLog("Calculating cube...");
    return num * num * num;

}

function evenOdd(num){

    addLog("Checking even or odd...");

    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }

}

function factorial(num){

    addLog("Calculating factorial...");

    let fact = 1;

    for(let i = 1; i <= num; i++){
        fact *= i;
    }

    return fact;

}

function palindrome(text){

    addLog("Checking palindrome...");

    let reversed = text.split("").reverse().join("");

    if(text === reversed){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }

}

function bmi(weight){

    addLog("Calculating BMI...");

    let height = 1.75;

    let result = weight / (height * height);

    return result.toFixed(2);

}

function temperature(celsius){

    addLog("Converting Temperature...");

    return (celsius * 9/5) + 32 + " °F";

}

function addLog(message){

    const log = document.createElement("div");

    log.classList.add("log");

    log.innerText = "> " + message;

    consoleBox.appendChild(log);

    consoleBox.scrollTop = consoleBox.scrollHeight;

}

function clearConsole(){

    consoleBox.innerHTML = "";

}

function animateBox(index){

    boxes[index].classList.add("animate");

}

function removeAnimation(){

    boxes.forEach(box => {
        box.classList.remove("animate");
    });

}