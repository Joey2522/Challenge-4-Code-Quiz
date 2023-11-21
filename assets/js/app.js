// const questionsArr = [
//     {
//         question: "Question 1"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
//     {
//         question: "Question 2"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
//     {
//         question: "Question 3"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
//     {
//         question: "Question 4"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
//     {
//         question: "Question 5"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
//     {
//         question: "Question 6"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
//     {
//         question: "Question 7"
//         options: {
//             a: "A. "
//             b: "B. "
//             c: "C. "
//             d: "D. "
//         }
//         answer: "d"
//     }
// ];

let header = document.querySelector(".header");
let opening = document.querySelector(".opening");
let container = document.querySelector(".container");
let divider = document.querySelector(".divider");
let result = document.querySelector(".result");
let scores = [];
let mark = 0;
let index = 0;
let record = [];

function start(){
    //restart
    let removeAll = container;
    while(removeAll.hasChildNodes()) {
        removeAll.removeChild(removeAll.firstChild);
    }
};

    // create view high scores
    let viewScore = document.createElement("p");
    viewScore.classList.add("banner", "view-score");
    viewScore.textContent = "View High Scores";

    //create time
    let time = document.createElement("p");
    time.classList.add("banner", "time");
    time.textContent = "Time: ";
    let second = document.createElement("span");
    second.setAttribute('id', "second");
    time.appendChild(second);

    //create container title
    let opTitle = document.createElement("h1");
    opTitle.classList.add("title");
    opTitle.textContent = "JavaScript Quiz Challenge";

    //create container text
    let opText = document.createElement("p");
    opText.classList.add("text");
    opText.textContent = "This is a timed quiz with 7 questions. When you click the Start Quiz button below you will begin with 1 minutes to finish. Every question you answer incorrectly will subtract 10 seconds from the remaining time. At the end of the quiz you can enter your initials to compare your score to others. Good luck!";

    //create container start btn
    let startBtn = document.createElement("button");
    startBtn.classList.add("btn", "btn-start");
    startBtn.textContent = "Start Quiz";

    header.appendChild(viewScore);
    header.appendChild(time);
    container.appendChild(opTitle);
    container.appendChild(opText);
    container.appendChild(startBtn);

    //click to start the countdown timer
    document.querySelector(".btn-start").addEventListener("click", timer);

    //click to view highscores
    document.querySelector(".view-score").addEventListener("click", viewHighScore);

    function createQuiz() {
        let removeAll = container;
        while (removeAll.hasChildNodes()) {
            removeAll.removeChild(removeAll.firstChild);
        };

        if(index < quesionsArr.length) {

            //create quiz container
            let quizHere = document.createElement("div");
            quizHere.classList.add("quiz");
            container.appendChild(quizHere);

            //create question
            let quizTitle = document.createElement("h1");
            quizTitle.classList.add("title");
            quizTitle.textContent = quesionsArr[index].question;
            quizHere.appendChild(quizTitle);

            //create options
            let optionsObj = quesionsArr[index].options;
            for (var x in optionsObj) {
                var quizOption = document.createElement("button");
                quizOption.classList.add("btn", "btn-answer");
                if (x === quesionsArr[index].answer) {
                    quizOption.setAttribute("check", "correct");
                }
                quizOption.textContent = optionsObj[x];
                quizHere.appendChild(quizOption);
            }
            index++;

            divider.syle.visibility = "visible";

            //click option
            document.querySelector(".quiz").addEventListener("click", checkResult);

        }else{

            //create done screen
            let done = document.createElement('h2');
            done.classList.add('title');
            done.textContent = "All Done!";
            container.appendChild(done);

            let sum = document.createElement('p');
            sum.classList.add('text');
            sum.textContent = "All Done!";
            container.appendChild(sum);

            //form
            let formEl = document.createElement("form");
            formEl.classList.add("form");
            container.appendChild(formEl);

            let label = document.createElement("label");
            label.classList.add("text");
            label.setAttribute("for", "name");
            label.textContent = "Enter Initials Here:";
            formEl.appendChild(label);

            let input = document.createElement("input");
            input.classList.add("text");
            input.setAttribute("type", "text");
            input.setAttribute("name", "name");
            input.setAttribute("id", "name");
            input.setAttribute("placeholder", "name");
            formEl.appendChilld(input);

            let submit = document.createElement("button");
            submit.classList.add("btn", "btn-submit");
            submit.textContent = "Submit";
            formEl.appendChild(submit);

            //click submit button
            document.querySelector(".btn-submit").addEventListener("click", recordHighScore);
        }
    }

