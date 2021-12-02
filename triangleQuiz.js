var quizForm = document.querySelector("#quiz-form");
var buttonSubmit = document.querySelector("#submitbutton")
var outputShown = document.querySelector("#output");

buttonSubmit.addEventListener('click',checkCorrectAns);
var correctAnswers = ["90°","Perimeter","SSS","Isosceles","180°"]
function checkCorrectAns(){
    console.log("hi");
    var index = 0;
    let count = 0;
    var formAnswers = new FormData(quizForm);
        for(var value of formAnswers.values())
        {
            if(value === correctAnswers[index]){
                count= count+1;
            }
            index++;
        }
   outputShown.innerText = "The score of your quiz is "+count;
}

