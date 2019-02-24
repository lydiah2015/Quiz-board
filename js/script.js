const Questions=[
    {
    "Question":"What are variables used for in Javascript programs?",
    "choices":["storing numbers,dates and other values","varying randomly","algebra","all of the above"],
    "answer":"storing numbers,dates and other values",
    "score":5,
    "name":"question1",
    },
    {
        "Question":"When a user views a page containing Javascript program which machine actually executes the code?",
        "choices":["The user's machine running a web browser","The webserver","A central machine deep within Netscape's corporate office","None listed above"],
        "answer":"The user's machine running a web browser",
        "score":5,
        "name":"question2",
        },
    {

        "Question":"Inside which HTML element do we put the JavaScript code?",
        "choices":["html","script","body","head"],
        "answer":"script",
        "score":5,
        "name":"question3",
    },  
    {
        "Question":"Which one of the following is a function?",
        "choices":["confirm()","toExponential()","toString()","toFixed()"],
        "answer":"confirm()",
        "score":5,
        "name":"question4",
    },
    {
        "Question":"An action taken on something is referred to as?",
        "choices":["Argument","Operation","Function","Method "],
        "answer":"Function",
        "score":5,
        "name":"question5",

    },
    {
        "Question":"According to your JS knowledge, something that performs an action is called a?",
        "choices":["String","Method","Function","Variable"],
        "answer":"Function",
        "score":5,
        "name":"question6",

    },
    ]
var score=0;

$("document").ready(function(){
    generateQuiz();
})

var generateQuiz= function(){
    $("#quiz-container").empty();
    for(var m=0; m<Questions.length; m++){
        var choicesHtml=``;
        for(var i=0; i<Questions[m].choices.length; i++){
            choicesHtml+=`
            <div class="form-check">
                <input type=radio class="form-check-input" value="`+Questions[m].choices[i]+`" name=`+Questions[m].name+` ></input>
                <label>`+Questions[m].choices[i]+`</label>
            </div>
            `
        }
        $("#quiz-container").append(
            `
            <form>
                <p>`+Questions[m].Question+`</p>
                `+choicesHtml+`
            </form>
            `
        )
    }
    $("#quiz-container").append(
        `
        <button class="btn btn-primary" onclick="checkAnswers()">Submit</button>
        `
    )
}

var checkAnswers = function(){
    for(var i=0; i<Questions.length; i++){
        var selectedAnswer = $("input[name="+Questions[i].name+"]:checked").val();
        if(selectedAnswer){
            if(selectedAnswer===Questions[i].answer){
                console.log("correct");
                score +=Questions[i].score
            }
            else{
                console.log("wrong");
            }
        }
        else{
            alert("Please select an answer");
            return false;
        }
    }
    $("#quiz-container").empty();
    $("#quiz-container").append(
        `
        <div class="container">
            <h3> Your Score is `+score+`</h3>
        </div>
        <button onclick="generateQuiz()" class="btn btn-primary">Retake quiz</button>
        `
    )
    score=0;
    return true;
}




