const Questions=[
    {
    "Question":"Who's is the fairest of them all?",
    "choices":["Mitchelle","Lydia","Makini","all of the above"],
    "answer":"all of the above",
    "score":5,
    "name":"question1",
    },
    {
        "Question":"What do you love drinking?",
        "choices":["glen rock","Hennesy","red label","blue moon"],
        "answer":"glen rock",
        "score":10,
        "name":"question2",
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

