var inputValues = document.querySelectorAll(".input");
var buttonCalculate = document.querySelector("#calculatebtn");
var outputShown = document.querySelector("#output");

buttonCalculate.addEventListener('click',calculateHypotenuse);
function calculateHypotenuse(){
    var hypotenuse = 0;
    var a = Number(inputValues[0].value);
    var b = Number(inputValues[1].value);
    if(a && b){
        hypotenuse = Math.sqrt((a*a)+(b*b));
        //console.log(hypotenuse);
        outputShown.innerText = "Hypotenuse of given numbers is "+hypotenuse.toFixed(3);
    }
    else{
        outputShown.innerText = "Please enter valid and non zero inputs"
    }
    
}