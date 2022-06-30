var questionNumber = 0;
var answers = document.getElementById("answers")
var timeLeft = 60

function counter() {
    questionNumber += 1;
    console.log(questionNumber)
}

function disappearStart () {
    document.getElementById("start").style.display="none";
    document.getElementById('question-answer-box').style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    document.getElementById('question').textContent = questionData[questionNumber].question; 

    document.getElementById('answer-1').textContent = questionData[questionNumber].answers[0].text; 
    document.getElementById('answer-2').textContent = questionData[questionNumber].answers[1].text; 
    document.getElementById('answer-3').textContent = questionData[questionNumber].answers[2].text; 
    document.getElementById('answer-4').textContent = questionData[questionNumber].answers[3].text; 
}

function questionGenerator() {
    counter();
    displayQuestion();
    
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
    
    { 
        question: "How many squares are there on a chessboard?",
        answers: [
            {
                text: "64",
                isCorrect: true
            },
            {
                text: "100",
                isCorrect: false
            },
            {
                text: "49",
                isCorrect: false
            },
            {
                text: "81",
                isCorrect: false
            },
            
     ]
    },
    
    {
    question: "Dover is the capital of which U.S. State?",
        answers: [
            {
                text: "Connecticut",
                isCorrect: false
            },
            {
                text: "Delaware",
                isCorrect: true
            },
            {
                text: "Rhode Island",
                isCorrect: false
            },
            {
                text: "New Jersey",
                isCorrect: false
            },
        ]
    },

    {    
    question: "Dover is the capital of which U.S. State?",
        answers: [
            {
                text: "Connecticut",
                isCorrect: false
            },
            {
                text: "Delaware",
                isCorrect: true
            },
            {
                text: "Rhode Island",
                isCorrect: false
            },
            {
                text: "New Jersey",
                isCorrect: false
            },

        ]
    },

    { 
        question: "What element was discovered by Marie and Pierre Curie?",
        answers: [
            {
                text: "Helium",
                isCorrect: false
            },
            {
                text: "Manganese",
                isCorrect: false
            },
            {
                text: "Radium",
                isCorrect: true
            },
            {
                text: "Bohrium",
                isCorrect: false
            },
            
     ]
    },

    { 
        question: "Who was the first African American to play in the major leagues?",
        answers: [
            {
                text: "Curt Flood",
                isCorrect: false
            },
            {
                text: "Willie Mays", 
                isCorrect: false
            },
            {
                text: "Hank Aaron",
                isCorrect: false
            },
            {
                text:  "Jackie Robinson",
                isCorrect: true
            },
            
     ]
    },

    { 
        question: "What does a funambulist walk on?",
        answers: [
            {
                text: "Water",
                isCorrect: false
            },
            {
                text: "Hot coals", 
                isCorrect: false
            },
            {
                text: "A tight rope",
                isCorrect: true
            },
            {
                text:  "Balance beams",
                isCorrect: false
            },
            
     ]
    },

    { 
        question: "What is the world's most expensive spice by weight?",
        answers: [
            {
                text: "Turmeric",
                isCorrect: false
            },
            {
                text: "Saffron", 
                isCorrect: true
            },
            {
                text: "Cinnamon",
                isCorrect: false
            },
            {
                text:  "Cardamom",
                isCorrect: false
            },
            
     ]
    },

    { 
        question: "What year was Queen Elizabeth II born?",
        answers: [
            {
                text: "1926",
                isCorrect: true
            },
            {
                text: "1927", 
                isCorrect: false
            },
            {
                text: "1928",
                isCorrect: false
            },
            {
                text:  "1929",
                isCorrect: false
            },
            
     ]
    },

]
