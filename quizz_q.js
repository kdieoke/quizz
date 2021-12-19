let round = 1; 
let level = "easy"; 
let question;
let q_num_easy;
let q_num_medium;
let q_num_hard;
let q_num_epic;
let q_num_legy;
let points = 0;
let max = 20;
let easy = [];
let medium = [];
let hard = [];
let epic = [];
let legy = [];

console.log("Points:" + points)

function setup(){
//Easy
for(let i = 1; i<= questions.easy.amount; i++){
easy.push(questions.easy[`q${i}`].name)
}
//log
console.log("EASY::" + easy)

//Medium
for(let i = 1; i<= questions.medium.amount; i++){
medium.push(questions.medium[`q${i}`].name)
}
//log
console.log("MEDIUM::" + medium)

//Hard
for(let i = 1; i<= questions.hard.amount; i++){
hard.push(questions.hard[`q${i}`].name)
}
//log
console.log("HARD::" + hard)

//Epic
for(let i = 1; i<= questions.epic.amount; i++){
epic.push(questions.epic[`q${i}`].name)
}
//log
console.log("EPIC::" + epic)

//Legy
for(let i = 1; i<= questions.legy.amount; i++){
legy.push(questions.legy[`q${i}`].name)
}
//log
console.log("LEGY::" + legy)
}


//update the difficulty
function checkdiff(){

if(round <= settings_difficulty.medium) level = "easy";
if(round <= settings_difficulty.hard && round > settings_difficulty.medium) level = "medium";
if(round <= settings_difficulty.epic && round > settings_difficulty.hard) level = "hard";
if(round <= settings_difficulty.legy && round > settings_difficulty.epic) level = "epic";
if(round <= max && round > settings_difficulty.legy) level = "legy";

console.log("DIFFICULTY::" + round + " LEVEL :: " + level);
}


//update page
function displayQ(){

//console log round
console.log("ROUND::" + round);

//display difficulty
let display_lvl = document.getElementById("level");
display_lvl.innerText = level;

//display round ‚
let display_headline = document.getElementById("q_number");
display_headline.innerText = `Frage ${round}/${max}`;

//random int between 0 and [difficulty]length
q_num_easy = (Math.floor(Math.random()*(easy.length)+1))-1
q_num_medium = (Math.floor(Math.random()*(medium.length)+1))-1
q_num_hard = (Math.floor(Math.random()*(hard.length)+1))-1
q_num_epic = (Math.floor(Math.random()*(epic.length)+1))-1
q_num_legy = (Math.floor(Math.random()*(legy.length)+1))-1

//get random question based on difficulty
if(level == "easy") question = easy[q_num_easy];
if(level == "medium") question = medium[q_num_medium];
if(level == "hard") question = hard[q_num_hard];
if(level == "epic") question = epic[q_num_epic];
if(level == "legy") question = legy[q_num_legy];

//display background_image
console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--background-image'))
//document.documentElement.style.setProperty('--background-image', `url('./images/${questions[level][question].b_img}')`);
console.log("Question::" + question)

//console.log (debug)
console.log("QUESTIONS.[LEVEL].AMOUNT::" + questions[level][question].name)
console.log("QUESTION:" + question)
console.log("LEVEL::" + level)

//display question 
let Q = document.getElementById("q");
Q.innerText = questions[level][question].q
//display answer A
let aA = document.getElementById("aA");
aA.innerText = questions[level][question].ansA
//display answer B
let aB = document.getElementById("aB");
aB.innerText = questions[level][question].ansB
//display answer C
let aC = document.getElementById("aC");
aC.innerText = questions[level][question].ansC
//display answer D
let aD = document.getElementById("aD");
aD.innerText = questions[level][question].ansD
}



//on answer given
function next(ans){
//new round
round++;

//check wether answer was correct
if(ans == questions[level][question].correct) points += questions[level][question].points;
console.log("RECIEVED ANSWER:" + ans)
console.log("POINTS::" + points)

//check if quizz has ended
if(round > max) {
localStorage.setItem("points", points)
location.replace("quizz_end.html");
}
//delete question from question pool
if(level == "easy") easy.splice(q_num_easy, 1), console.log("EASY[]::" + easy);
if(level == "medium") medium.splice(q_num_medium, 1), console.log("MEDIUM[]::" + medium);
if(level == "hard") hard.splice(q_num_hard, 1), console.log("HARD[]::" + hard);
if(level == "epic") epic.splice(q_num_epic, 1), console.log("EPIC[]::" + epic);
if(level == "legy") legy.splice(q_num_legy, 1), console.log("LEGY[]::" + legy);

//increase diff and update level
checkdiff();

displayQ();
}




let questions = {

    easy: {

        q1:{
            name: "q1",
            q: "Wieviele Bundesländer hat Deutschland?",
            points: 1,
            ansA: "18", 
            ansB: "16",
            ansC: "15",
            ansD: "17",
            correct: "B",
            b_img: "q1.jpg"
        },
        q2:{
            name: "q2",
            q: "Wieviele Nachbarländer hat Deutschland",
            points: 1,
            ansA: "8", 
            ansB: "12",
            ansC: "7",
            ansD: "9",
            correct: "D",
            b_img: "q2.jpg"
        },
        q3:{
            name: "q3",
            q: "Welches ist kein Nachbarland von Deutschland?",
            points: 1,
            ansA: "Tschechische Republik", 
            ansB: "Lichtenstein",
            ansC: "Frankreich",
            ansD: "Schweiz",
            correct: "B",
            b_img: "q3.jpg"
        },
        q4:{
            name: "q4",
            q: "Welcher Ozean ist der größte der Welt?",
            points: 1,
            ansA: "Indischer Ozean", 
            ansB: "Pazifischer Ozean",
            ansC: "Nordpolarmeer",
            ansD: "Atlantischer Ozean",
            correct: "B",
            b_img: "q3.jpg"
        },
        
        amount: 4
    },
    medium: {

        q1:{
            name: "q1",
            q: "Welche Stadt ist die Hauptstadt von Norwegen?",
            points: 1,
            ansA: "Oslo", 
            ansB: "Koppenhagen",
            ansC: "Dublin",
            ansD: "Stockholm",
            correct: "A",
            b_img: "q1.jpg"
        },
        q2:{
            name: "q2",
            q: "Wie wird die richterliche Gewalt in Deutschland genannt?",
            points: 1,
            ansA: "Legislative", 
            ansB: "Executive",
            ansC: "Judikative",
            ansD: "Legilastive",
            correct: "C",
            b_img: "q2.jpg"
        },
        q3:{
            name: "q3",
            q: "Wie lautet das chemische Zeichen für Silber?",
            points: 1,
            ansA: "S", 
            ansB: "Sb",
            ansC: "Sv",
            ansD: "Ag",
            correct: "D",
            b_img: "q2.jpg"
        },
        q4:{
            name: "q4",
            q: "Welcher Stoff gibt Blättern ihre grüne Farbe?",
            points: 1,
            ansA: "Kaliumhexacyanoferrat", 
            ansB: "Chromoplast",
            ansC: "Chlorophyll",
            ansD: "Chloroplast",
            correct: "C",
            b_img: "q2.jpg"
        },
       amount: 4
    },
    hard:{

        q1:{
            name: "q1",
            q: "Wer entdeckte Australien?",
            points: 1,
            ansA: "Ferdinand Magellan", 
            ansB: "Galileo Galilei",
            ansC: "James Cook",
            ansD: "Marco Polo",
            correct: "C",
            b_img: "q1.jpg"
        },
        q2:{
            name: "q2",
            q: "Wieviele Video-Aufrufe erreichte das Spiel Minecraft bisher auf Youtube?",
            points: 1,
            ansA: "1.000.000.000.000", 
            ansB: "10.000.000.000.000",
            ansC: "50.000.000.000",
            ansD: "500.000.000",
            correct: "A",
            b_img: "q2.jpg"
        },
        q3:{
            name: "q3",
            q: "Worum handelt es sich in der Literatur bei 'Neologismus'(rethorisches Mittel) ",
            points: 1,
            ansA: "Beschönigung", 
            ansB: "Wortneuschöpfung",
            ansC: "Übertreibung",
            ansD: "Verniedlichung",
            correct: "B",
            b_img: "q2.jpg"
        },
        q4:{
            name: "q4",
            q: "Welcher Stoff gibt Blättern ihre grüne Farbe?",
            points: 1,
            ansA: "Kaliumhexacyanoferrat", 
            ansB: "Chromoplast",
            ansC: "Chlorophyll",
            ansD: "Chloroplast",
            correct: "C",
            b_img: "q2.jpg"
        },
        amount: 4
    },
    epic:{
        q1:{
            name: "q1",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        q2:{
            name: "q2",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        q3:{
            name: "q3",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        q4:{
            name: "q4",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        amount: 4
    },
    legy:{
        q1:{
            name: "q1",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        q2:{
            name: "q2",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        q3:{
            name: "q3",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        q4:{
            name: "q4",
            q: "PLACEHOLDER",
            points: 1,
            ansA: "ANSWER A", 
            ansB: "ANSWER B",
            ansC: "ANSWER C",
            ansD: "ANSWER D",
            correct: "D",
            b_img: "q2.jpg"
        },
        amount: 4


    }


}

//difficulty settings
let settings_difficulty = {
easy: 0,
medium: 4,
hard: 8,
epic: 12,
legy: 16
}

//start
setup();
displayQ();