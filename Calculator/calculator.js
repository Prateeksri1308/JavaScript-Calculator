const inputBox = document.querySelector("#inputBox");

// const percentage = document.querySelector(".percentage");


const ac = document.querySelector("#logics-Ac");
 


inputBox.value = "0";

function squareRoot() {
    const value = eval(inputBox.value);
    if(value<0){
        inputBox.value = "invalid √";
        expression = "";
    }else{
        const result = inputBox.value = Math.sqrt(value).toFixed(4);
        expression = result.toString();
    }
    updateACCE()
}

function percentage() {
    const value = eval(inputBox.value);
    if(value<0){
        inputBox.value = "invalid %"
        expression = "";
    }else {
       const result = inputBox.value = (value/100);
        expression = result.toString();   
    }
    updateACCE()

}

function sign() {
    let value = eval(inputBox.value);
    value = -value;
    inputBox.value = value
    expression = value.toString();
    updateACCE()
}
function dot() {
    let value = eval(inputBox.value)
    value = value + ".";
    inputBox.value = value;
    expression = value.toString();
    updateACCE()
}

let expression = "";

function appendValue(val) {
    if(inputBox.value === "0" || ["+", "-", "*", "/"].includes(inputBox.value)) {
        inputBox.value = val;
    }else{ 
        inputBox.value += val;
    }
    expression += val;
    updateACCE();
}
function appendOperator(op) {
    expression += op;
    inputBox.value = op;
    updateACCE()
}
function clearDisplay(){
    inputBox.value = "0";
    expression = ""
    updateACCE()
}
function calculate(){
    try{
        const result = eval(expression);
        inputBox.value = result;
        FixedDecimal = parseFloat(result).toFixed(2);
    inputBox.value = eval(inputBox.value).toFixed(2);
    expression = FixedDecimal.toString();
    }catch(handleKeyPress) {
        inputBox.value = "Error"
    }
    updateACCE()
    // expression ="";
}

let currentInput = "123";

function deleteLast() {
    inputBox.value = inputBox.value.slice(0,-1);
    expression = expression.slice(0,-1);

    if(inputBox.value === ""){
        inputBox.value = "0";
    }
}

document.addEventListener("keydown", handleKeyPress);
    
    function handleKeyPress(event) {
        const key = event.key;
    
    
    if(!isNaN(key)){
        appendValue(key);
    }else if(["+","-","/","*"].includes(key)) {
        appendValue(key);
    }else if(key === "Enter" || key ==="="){
        calculate()
    }else if(key=== "Backspace"){
        deleteLast();
    }else if(key === "Escape"){
        clearDisplay()
    }else if(key === "Delete"){
        clearDisplay();
    }else if(key ==="r" || key === "R"){
        squareRoot();
    }

    }

    inputBox.addEventListener("input", updateACCE );

    function updateACCE() {

    if(inputBox.value.trim() !== "0" && inputBox.value.trim() !== ""){
        ac.innerText = "CE";
    }else{
        ac.innerText = "AC";
    }}