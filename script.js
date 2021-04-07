(function(){
   function buildQuiz(){
      var output = [];
      myQuestions.foreach(
          (currentQuestion,questionNumber) => {
            var answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                   <label>
                       <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                       ${letter} :
                       ${currentQuestion.answers[letter]}
                   </label> 
                );
            }
            output.push(
                <div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>
            );
          }
        );
        quizContainer.innerHTML = output.join('');
    }
    function showResults(){
        
    }
      });
    }
}