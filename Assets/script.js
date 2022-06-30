var countClicks = 0;
var answers = document.getElementById("answers")

function counter(clicks) {
    countClicks += 1;
    console.log(countClicks)
}

function disappearStart () {
    document.getElementById("start").style.display="none";
    document.getElementById('question-answer-box').style.display = "block";
    displayQuestionsAnswers();
}

function displayQuestionsAnswers() {
    document.getElementById('question').textContent = questionsArray[0]; 
}



let questionData = [

    
    { 
        question: "When did World War 1 begin?",
        answers: [
            {
                text: "1914",
                isCorrect: true
            },
            {
                text: "1916",
                isCorrect: false
            },
            {
                text: "1917",
                isCorrect: false
            },
            {
                text: "1915",
                isCorrect: false
            },
            
     ]
    },

    { 
        question: "In what city do the characters in The Simpsons live?",
        answers: [
            {
                text: "Fairview",
                isCorrect: false
            },
            {
                text: "Oakdale",
                isCorrect: false
            },
            {
                text: "Simpsonville",
                isCorrect: false
            },
            {
                text: "Springfield",
                isCorrect: true
            },
            
     ]
    },
 
    { 
        question: "What holiday is celebrated on the 26th of December?",
        answers: [
            {
                text: "Christmas Eve",
                isCorrect: false
            },
            {
                text: "Hanukkah",
                isCorrect: false
            },
            {
                text: "New Years Eve",
                isCorrect: false
            },
            {
                text: "Boxing Day",
                isCorrect: true
            },
            
     ]
    },
    
    


]

