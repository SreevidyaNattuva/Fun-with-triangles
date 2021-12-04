var angle1 = document.querySelector("#input1");
var angle2 = document.querySelector("#input2");
var angle3 = document.querySelector("#input3");
var buttonCheck = document.querySelector(".button");
var outputShown = document.querySelector(".output");
buttonCheck.addEventListener('click',checkAnglesSum);
function checkAnglesSum()
{
    var selectedangle1 = Number(angle1.value);
    var selectedangle2 = Number(angle2.value);
    var selectedangle3 = Number(angle3.value);
    if(selectedangle1&&selectedangle2&&selectedangle3){
    var sumofAngles= (selectedangle1+selectedangle2+selectedangle3);
    //console.log(typeof(selectedangle1),sumofAngles);
    checkIfTriangle(sumofAngles);}
    else{
        outputShown.innerText="Please enter valid and non zero inputs";
    }
}
function checkIfTriangle(sumofAngles){
    if(sumofAngles===180)
    {
        //console.log("hi");
        outputShown.innerText="Bravo!!Angles you entered makes a triangle";
    }
    else{
        outputShown.innerText="Oh noo!!These angles don't form a triangle!!Try again";
    }
}