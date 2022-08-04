let firstNumEl=document.getElementById("firstNum") 
let operatorEl=document.getElementById("operator_label")
let secondNumEl=document.getElementById("secondNum")
let resultEl=document.getElementById("screen_result_label")


function add(){
let num1=firstNumEl.value;
    num1=parseInt(num1)
let num2=secondNumEl.value;
    num2=parseInt(num2)
let addResult= num1 + num2
    resultEl.textContent="=" + addResult
    operatorEl.textContent="+"
}

function sub(){
let num1=firstNumEl.value;
    num1=parseInt(num1)
let num2=secondNumEl.value;
    num2=parseInt(num2)
let subResult= num1 - num2
    resultEl.textContent="=" + subResult
    operatorEl.textContent="-"
}

function mult(){
    let num1=firstNumEl.value;
    num1=parseInt(num1)
let num2=secondNumEl.value;
    num2=parseInt(num2)
let multResult= num1 * num2
    resultEl.textContent="=" + multResult
    operatorEl.textContent="x"
}
function div(){
    let num1=firstNumEl.value;
    num1=parseInt(num1)
let num2=secondNumEl.value;
    num2=parseInt(num2)
let divResult= num1 / num2
    resultEl.textContent="=" + divResult
    operatorEl.textContent="/"
}

function clear(){
numl=0
num2=0
resultEl="="
resultEl.textContent="=" 
firstNumEl.textContent="0"
operatorEl.textContent="+"
secondNumEl.textContent="0"
}