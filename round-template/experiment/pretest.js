/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "The output of latches will remain in set/reset until ___________",  ///// Write the question inside double quotes
      answers: {
        a: "The trigger pulse is given to change the state",                  ///// Write the option 1 inside double quotes
        b: "Any pulse given to go into previous state",                  ///// Write the option 2 inside double quotes
        c: "They don’t get any pulse more",                  ///// Write the option 3 inside double quotes
        d: "The pulse is edge-triggered"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "What is a trigger pulse?",  ///// Write the question inside double quotes
      answers: {
        a: "A pulse that starts a cycle of operation",                  ///// Write the option 1 inside double quotes
        b: "A pulse that reverses the cycle of operation",                  ///// Write the option 2 inside double quotes
        c: "A pulse that prevents a cycle of operation",                  ///// Write the option 3 inside double quotes
        d: "A pulse that enhances a cycle of operation"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "If Q = 1, the output is said to be ___________",  ///// Write the question inside double quotes
      answers: {
        a: "Set",                  ///// Write the option 1 inside double quotes
        b: "Reset",                  ///// Write the option 2 inside double quotes
        c: "Previous state",                  ///// Write the option 3 inside double quotes
        d: "Current state"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


    {
     question: "The sequential circuit is also called ___________",  ///// Write the question inside double quotes
      answers: {
        a: "Flip-flop",                  ///// Write the option 1 inside double quotes
        b: "Latch",                  ///// Write the option 2 inside double quotes
        c: "Strobe",                  ///// Write the option 3 inside double quotes
        d: "Adder"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
     question: "The basic latch consists of ___________",  ///// Write the question inside double quotes
      answers: {
        a: "Two inverters",                  ///// Write the option 1 inside double quotes
        b: "Two comparators",                  ///// Write the option 2 inside double quotes
        c: "Two amplifiers",                  ///// Write the option 3 inside double quotes
        d: "Two adders"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////