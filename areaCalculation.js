var inputValues = document.querySelectorAll(".input");
var buttonCalculate = document.querySelector("#calculatebtn");
var outputShown = document.querySelector("#output");

buttonCalculate.addEventListener('click',calculateArea)
function calculateArea()
{
    var area=0;
    var base = Number(inputValues[0].value);
    var height = Number(inputValues[1].value);
    if(base&&height){
    area = (0.5*base*height);
   // console.log(area);
   outputShown.innerText = "The area is "+area;}
   else{
    outputShown.innerText = "Please enter valid and non zero inputs";
   }

}

