let subDisplayText = [];

let x = "";
let y = "";
let variable = [];
let initialValue = "zero";
let answer = "";
let operator = "";
let decimal = "inactive";


function addition() {
    if (operator === "-") {
        subtraction();
    } else if (operator === "x") {
        multiplication();
    } else if (operator === "÷") {
        division();
    } else if (answer === "" && y === "" && operator === "=") {
        y = parseFloat(variable.join(""));
        variable = [];
        answer = x + y;
        x = "";
        y = "";
        operator = "";
    } else if (answer === "" && y !== "") {
        answer = x + y;
        x = "";
        y = "";
    } else if (answer !== "") {
        answer += x;
        x = "";
    } 
};

function subtraction() {
    if (operator === "+") {
        addition();
    } else if (operator === "x") {
        multiplication();
    } else if (operator === "÷") {
        division();
    } else if (answer === "" && y === "" && operator === "=") {
        y = parseFloat(variable.join(""));
        z = Math.abs(y);
        variable = [];
        answer = x - z;
        x = "";
        y = "";
        operator = "";
    } else if (answer === "" && y !== "") {
        z = Math.abs(y);
        answer = x - z;
        x = "";
        y = "";
    } else if (answer !== "") {
        answer -= x;
        x = "";
    } 
};

function multiplication() {
    if (operator === "-") {
        subtraction();
    } else if (operator === "+") {
        addition();
    } else if (operator === "÷") {
        division();
    } else if (answer === "" && y === "" && operator === "=") {
        y = parseFloat(variable.join(""));
        variable = [];
        answer = x * y;
        x = "";
        y = "";
        operator = "";
    } else if (answer === "" && y !== "") {
        answer = x * y;
        x = "";
        y = "";
    } else if (answer !== "") {
        answer *= x;
        x = "";
    } 
};

function division() {
    if (operator === "-") {
        subtraction();
    } else if (operator === "+") {
        addition();
    } else if (operator === "x") {
        multiplication();
    } else if (answer === "" && y === "" && operator === "=") {
        y = parseFloat(variable.join(""));
        variable = [];
        answer = x / y;
        x = "";
        y = "";
        operator = "";
    } else if (answer === "" && y !== "") {
        answer = x / y;
        x = "";
        y = "";
    } else if (answer !== "") {
        answer /= x;
        x = "";
    } 
};

function equals() {
    if (operator === "-" && answer === "") {
        operator = "=";
        subtraction();
    } else if (operator === "-" && answer !== "") {
        operator = "=";
        x = parseFloat(variable.join(""));
        z = Math.abs(x)
        variable = [];
        answer -= z;
        x = "";
    } else if (operator === "+" && answer === "") {
        operator = "=";
        addition();
    } else if (operator === "+" && answer !== "") {
        x = parseFloat(variable.join(""));
        variable = [];
        answer += x;
        x = "";
    } else if (operator === "x" && answer === "") {
        operator = "=";
        multiplication();
    } else if (operator === "x" && answer !== "") {
        x = parseFloat(variable.join(""));
        variable = [];
        answer *= x;
        x = "";
    } else if (operator === "÷" && answer === "") {
        operator = "=";
        division();
    } else if (operator === "÷" && answer !== "") {
        x = parseFloat(variable.join(""));
        variable = [];
        answer /= x;
        x = "";
    } else if (operator === "") {
        y = parseFloat(variable.join(""));
        z = Math.abs(y);
        answer = x - z;
        y = "";
        x = "";
    }
    initialValue = "zero";
}




document.addEventListener('click', targetIdentity);

function targetIdentity(e) {
    if (e.target.id === "zero") {
        variable.push("0");
        initialValue = "not zero";
    } else if (e.target.id === "one"){
        variable.push("1");
        initialValue = "not zero";
    } else if (e.target.id === "two"){
        variable.push("2");
        initialValue = "not zero";
    } else if (e.target.id === "three"){
        variable.push("3");
        initialValue = "not zero";
    } else if (e.target.id === "four"){
        variable.push("4");
        initialValue = "not zero";
    } else if (e.target.id === "five"){
        variable.push("5");
        initialValue = "not zero";
    } else if (e.target.id === "six"){
        variable.push("6");
        initialValue = "not zero";
    } else if (e.target.id === "seven"){
        variable.push("7");
        initialValue = "not zero";
    } else if (e.target.id === "eight"){
        variable.push("8");
        initialValue = "not zero";
    } else if (e.target.id === "nine"){
        variable.push("9");
        initialValue = "not zero";
    } else if (e.target.id === "minus" && initialValue === "zero" && answer === "") {
        variable.push("-");
    } else if (e.target.id === "minus" && initialValue === "zero" && answer !== "" && operator !== "") {
        variable.push("-");
    } else if (e.target.id === "minus" && initialValue !== "zero" && x === "") {
        x = parseFloat(variable.join(""));
        variable = [];
        subtraction();
        operator = "-";
    } else if (e.target.id === "minus" && x !== "") {
        y = parseFloat(variable.join(""));
        variable = [];
        subtraction();
        operator = "-";
    } else if (e.target.id === "minus" && answer !== "" && x === "" && y === "" && operator !== "x" && operator !== "÷") {
        variable.push("-");
        x = answer;
        answer = "";
        operator = "-";
    } else if (e.target.id === "plus" && initialValue !== "zero" && x === "" && operator !== "=") {
        initialValue = "zero";
        x = parseFloat(variable.join(""));
        variable = [];
        addition();
        operator = "+";
    } else if (e.target.id === "plus" && x !== "" && operator !== "=") {
        initialValue = "zero";
        y = parseFloat(variable.join(""));
        variable = [];
        addition();
        operator = "+";
    } else if (e.target.id === "plus" && answer !== "" && x === "" && y === "") {
        x = answer;
        answer = "";
        variable = [];
        operator = "+";
    } else if (e.target.id === "x" && initialValue !== "zero" && x === "" && operator !== "=") {
        initialValue = "zero";
        x = parseFloat(variable.join(""));
        variable = [];
        multiplication();
        operator = "x";
    } else if (e.target.id === "x" && x !== "" && operator !== "=") {
        initialValue = "zero";
        y = parseFloat(variable.join(""));
        variable = [];
        multiplication();
        operator = "x";
    } else if (e.target.id === "x" && answer !== "" && x === "" && y === "") {
        x = answer;
        answer = "";
        variable = [];
        operator = "x";
    } else if (e.target.id === "divide" && initialValue !== "zero" && x === "" && operator !== "=") {
        initialValue = "zero";
        x = parseFloat(variable.join(""));
        variable = [];
        division();
        operator = "÷";
    } else if (e.target.id === "divide" && x !== "" && operator !== "=") {
        initialValue = "zero";
        y = parseFloat(variable.join(""));
        variable = [];
        division();
        operator = "÷";
    } else if (e.target.id === "divide" && answer !== "" && x === "" && y === "") {
        x = answer;
        answer = "";
        variable = [];
        operator = "÷";
    } else if (e.target.id === "equals") {
        equals();
    } if (answer < 10000000 && answer >= 0 && answer !== "") {
        document.getElementById("display").innerHTML = +answer.toFixed(3);
    } if (answer > 10000000) {
        document.getElementById("display").innerHTML = answer.toExponential(3);
    } if (answer < 0 && answer !== "") {
        document.getElementById("display").innerHTML = +answer.toPrecision(3);
    } if (answer < -10000000 && answer !== "") {
        document.getElementById("display").innerHTML = answer.toExponential(3);
    }
}


document.addEventListener('click', displays);

function displays(e) {
    if (e.target.id === "zero") {
        subDisplayText.push("0");
    } else if (e.target.id === "one"){
        subDisplayText.push("1");
    } else if (e.target.id === "two"){
        subDisplayText.push("2");
    } else if (e.target.id === "three"){
        subDisplayText.push("3");
    } else if (e.target.id === "four"){
        subDisplayText.push("4");
    } else if (e.target.id === "five"){
        subDisplayText.push("5");
    } else if (e.target.id === "six"){
        subDisplayText.push("6");
    } else if (e.target.id === "seven"){
        subDisplayText.push("7");
    } else if (e.target.id === "eight"){
        subDisplayText.push("8");
    } else if (e.target.id === "nine"){
        subDisplayText.push("9");
    } else if (e.target.id === "minus") {
        subDisplayText.push(" - ");
        decimal = "inactive"
    } else if (e.target.id === "plus") {
        subDisplayText.push(" + ");
        decimal = "inactive"
    } else if (e.target.id === "x") {
        subDisplayText.push(" × ");
        decimal = "inactive"
    } else if (e.target.id === "divide") {
        subDisplayText.push(" ÷ ");
        decimal = "inactive"
    } else if (e.target.id === "decimal" && decimal === "inactive") {
        subDisplayText.push(".");
        variable.push(".");
        decimal = "active";
    } else if (e.target.id === "equals") {
        subDisplayText.push(" = " + +answer.toFixed(3));
        decimal = "inactive"
    } else if (e.target.id === "AC") {
        subDisplayText = [];
        variable = [];
        x = "";
        y = "";
        initialValue = "zero";
        answer = "";
        operator = "";
        decimal = "inactive"
        document.getElementById("display").innerHTML = "0";
    } else if (e.target.id === "C" && answer === "") {
        subDisplayText.pop();
        variable.pop();
    }
    document.getElementById("subDisplay").innerText = subDisplayText.join("");
}

