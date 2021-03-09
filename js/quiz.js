// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "ما معنى كلمة(معنعن)؟",
        imgSrc : '../assets/quizImg/1.gif',
        choiceA : "يمشي بكبرياء",
        choiceB : "يمسك بعض من النعناع",
        choiceC : "معصب",
        correct : "A"
    },{
        question : "ما معنى كلمة(زت)؟",
        imgSrc : '../assets/quizImg/2.gif',
        choiceA : "اختصار كلمة زيت",
        choiceB : "إرمي",
        choiceC : "إقترب",
        correct : "B"
    },{
        question : "ما معنى كلمة(فكح)؟",
        imgSrc : '../assets/quizImg/3.gif',
        choiceA : "فكك الشيء",
        choiceB : "عطس",
        choiceC : "هرب",
        correct : "C"
    },{
        question : "ما معنى كلمة(فطرز)؟",
        imgSrc : '../assets/quizImg/4.gif',
        choiceA : "صنع الفطور",
        choiceB : "مات(بعيد الشر عنكم)",
        choiceC : "تشقلب",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? '../assets/quizImg/5.png' :
              (scorePerCent >= 60) ? "../assets/quizImg/4.png" :
              (scorePerCent >= 40) ? "../assets/quizImg/3.png" :
              (scorePerCent >= 20) ? "../assets/quizImg/2.png" :
              "../assets/quizImg/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    scoreDiv.innerHTML +=  '<button id="restart" onclick="again()" >Refresh</button>';
}

function again() {
    window.location.reload("Refresh")
}



// select all elements
const start2 = document.getElementById("start2");
const quiz2 = document.getElementById("quiz2");
const question2 = document.getElementById("question2");
const qImg2 = document.getElementById("qImg2");
const choice2A = document.getElementById("2A");
const choice2B = document.getElementById("2B");
const choice2C = document.getElementById("2C");
const count2er2 = document.getElementById("count2er2");
const timeGauge2 = document.getElementById("timeGauge2");
const progress2 = document.getElementById("progress2");
const score2Div2 = document.getElementById("scorecontainer2");

// create our question2s
let question2s = [
    {
        question2 : "ما معنى مقولة (دير بالك عحالك)؟",
        imgSrc2 : "../assets/quizImg/5.gif",
        choice2A : "اسلوب تهديد غير مباشر",
        choice2B : "انتبه على نفسك من الخطر",
        choice2C : "اهتم بنفسك",
        correct2 : "2A"
    },{
        question2 : "ما معنى مقولة (عندي موضوعك)؟",
        imgSrc2 : "../assets/quizImg/6.gif",
        choice2A : "انا اعلم كل اسرارك",
        choice2B : "تقال عند الاستعداد التام لتقديم خدمة ما",
        choice2C : "لا تقلق الامور بخير",
        correct2 : "2B"
    },{
        question2 : "ما معنى مقولة (حصتي)؟",
        imgSrc2 : "../assets/quizImg/7.gif",
        choice2A : "جزئي الخاص",
        choice2B : "درسي الخاص",
        choice2C : "صديقي المقرب",
        correct2 : "2C"
    },{
        question2 : "ما معنى مقولة (ينعن عمري)؟",
        imgSrc2 : "../assets/quizImg/8.gif",
        choice2A : "مقولة عند الغضب",
        choice2B : "شتيمة",
        choice2C : "التغزل",
        correct2 : "2C"
    }
];

// create some variables

const lastquestion2 = question2s.length - 1;
let runningquestion2 = 0;
let count2 = 0;
const question2Time = 10; // 10s
const gaugeWidth2 = 150; // 150px
const gaugeUnit2 = gaugeWidth2 / question2Time;
let timer2;
let score2 = 0;

// render a question2
function renderquestion2(){
    let q2 = question2s[runningquestion2];
    
    question2.innerHTML = "<p>"+ q2.question2 +"</p>";
    qImg2.innerHTML = "<img src="+ q2.imgSrc2 +">";
    choice2A.innerHTML = q2.choice2A;
    choice2B.innerHTML = q2.choice2B;
    choice2C.innerHTML = q2.choice2C;
}

start2.addEventListener("click",start2quiz2);


// start2 quiz2
function start2quiz2(){
    start2.style.display = "none";
    renderquestion2();
    quiz2.style.display = "block";
    renderprogress2();
    rendercount2er2();
    timer2 = setInterval(rendercount2er2,1000); // 1000ms = 1s
}

// render progress2
function renderprogress2(){
    for(let qIndex2 = 0; qIndex2 <= lastquestion2; qIndex2++){
        progress2.innerHTML += "<div class='prog2' id="+ (qIndex2+5) +"></div>";
    }
}

// count2er2 render

function rendercount2er2(){
    if(count2 <= question2Time){
        count2er2.innerHTML = count2;
        timeGauge2.style.width = count2 * gaugeUnit2 + "px";
        count2++
    }else{
        count2 = 0;
        // change progress2 color to red
        answer2IsWrong();
        if(runningquestion2 < lastquestion2){
            runningquestion2++;
            renderquestion2();
        }else{
            // end the quiz2 and show the score2
            clearInterval(timer2);
            score2Render();
        }
    }
}

// checkAnwer

function checkAnswer2(answer2){
    if( answer2 == question2s[runningquestion2].correct2){
        // answer2 is correct2
        score2++;
        // change progress2 color to green
        answer2Iscorrect2();
    }else{
        // answer2 is wrong
        // change progress2 color to red
        answer2IsWrong();
    }
    count2 = 0;
    if(runningquestion2 < lastquestion2){
        runningquestion2++;
        renderquestion2();
    }else{
        // end the quiz2 and show the score2
        clearInterval(timer2);
        score2Render();
    }
}

// answer2 is correct2
function answer2Iscorrect2(){
    document.getElementById(runningquestion2+5).style.backgroundColor = "#0f0";
    console.log(runningquestion2);
}

// answer2 is Wrong
function answer2IsWrong(){
    document.getElementById(runningquestion2+5).style.backgroundColor = "#f00";
}

// score2 render
function score2Render(){
    score2Div2.style.display = "block";
    
    // calculate the amount of question2 percent answer2ed by the user
    const score2PerCent = Math.round(100 * score2/question2s.length);
    
    // choose the image based on the score2PerCent
    let img = (score2PerCent >= 80) ? "../assets/quizImg/5.png" :
              (score2PerCent >= 60) ? "../assets/quizImg/4.png" :
              (score2PerCent >= 40) ? "../assets/quizImg/3.png" :
              (score2PerCent >= 20) ? "../assets/quizImg/2.png" :
              "../assets/quizImg/1.png";
    
    score2Div2.innerHTML = "<img src="+ img +">";
    score2Div2.innerHTML += "<p>"+ score2PerCent +"%</p>";
    score2Div2.innerHTML +=  '<button id="restart" onclick="again()" >Refresh</button>';
}




// select all elements
const start3 = document.getElementById("start3");
const quiz3 = document.getElementById("quiz3");
const question3 = document.getElementById("question3");
const qImg3 = document.getElementById("qImg3");
const choice3A = document.getElementById("3A");
const choice3B = document.getElementById("3B");
const choice3C = document.getElementById("3C");
const count3er3 = document.getElementById("count3er3");
const timeGauge3 = document.getElementById("timeGauge3");
const progress3 = document.getElementById("progress3");
const score3Div3 = document.getElementById("scorecontainer3");

// create our question3s
let question3s = [
    {
        question3 : "يقال هذا المثل عند تشبيه البنت بأمها في صفاتها وشخصيتها",
        imgSrc3 : "../assets/quizImg/9.gif",
        choice3A : "إقلب الطنجرة على تمها بتطلع البنت لامها",
        choice3B : "من سلمك مذبحه لا تذبحه",
        choice3C : "الأم مثل بنتها",
        correct3 : "3A"
    },{
        question3 : "يعبر هذا المثل عن الشخص الكسول والغير مبالي",
        imgSrc3 : "../assets/quizImg/10.gif",
        choice3A : "من رادك ريده ومن طلب بعدك جافيه",
        choice3B : "الجمال تعارك وجملنا بارك",
        choice3C : "الغربه بتضيع الاصل",
        correct3 : "3B"
    },{
        question3 : "يشير هذا المثل إلى إن المظاهر دائماً ما تخدع الإنسان لذلك يجب التأني قبل إتخاذ الأحكام والقرارات",
        imgSrc3 : "../assets/quizImg/11.gif",
        choice3A : "عنب الدروز كل حبه برصاصه",
        choice3B : "عمر القصير ما يوكل تين",
        choice3C : "مش كل حمرا لحمه",
        correct3 : "3C"
    },{
        question3 : "يدل على العفو عند المقدرة وإظهار التسامح مع الأشخاص المبادرين والراغبين في الصلح",
        imgSrc3 : "../assets/quizImg/12.gif",
        choice3A : "من رادك ريده ومن طلب بعدك جافيه",
        choice3B : "الجمال تعارك وجملنا بارك",
        choice3C : "من سلمك مذبحه لا تذبحه",
        correct3 : "3C"
    }
];

// create some variables

const lastquestion3 = question3s.length - 1;
let runningquestion3 = 0;
let count3 = 0;
const question3Time = 10; // 10s
const gaugeWidth3 = 150; // 150px
const gaugeUnit3 = gaugeWidth3 / question3Time;
let timer3;
let score3 = 0;

// render a question3
function renderquestion3(){
    let q3 = question3s[runningquestion3];
    
    question3.innerHTML = "<p>"+ q3.question3 +"</p>";
    qImg3.innerHTML = "<img src="+ q3.imgSrc3 +">";
    choice3A.innerHTML = q3.choice3A;
    choice3B.innerHTML = q3.choice3B;
    choice3C.innerHTML = q3.choice3C;
}

start3.addEventListener("click",start3quiz3);


// start3 quiz3
function start3quiz3(){
    start3.style.display = "none";
    renderquestion3();
    quiz3.style.display = "block";
    renderprogress3();
    rendercount3er3();
    timer3 = setInterval(rendercount3er3,1000); // 1000ms = 1s
}

// render progress3
function renderprogress3(){
    for(let qIndex3 = 0; qIndex3 <= lastquestion3; qIndex3++){
        progress3.innerHTML += "<div class='prog3' id="+ (qIndex3+10) +"></div>";
    }
}

// count3er3 render

function rendercount3er3(){
    if(count3 <= question3Time){
        count3er3.innerHTML = count3;
        timeGauge3.style.width = count3 * gaugeUnit3 + "px";
        count3++
    }else{
        count3 = 0;
        // change progress3 color to red
        answer3IsWrong();
        if(runningquestion3 < lastquestion3){
            runningquestion3++;
            renderquestion3();
        }else{
            // end the quiz3 and show the score3
            clearInterval(timer3);
            score3Render();
        }
    }
}

// checkAnwer

function checkAnswer3(answer3){
    if( answer3 == question3s[runningquestion3].correct3){
        // answer3 is correct3
        score3++;
        // change progress3 color to green
        answer3Iscorrect3();
    }else{
        // answer3 is wrong
        // change progress3 color to red
        answer3IsWrong();
    }
    count3 = 0;
    if(runningquestion3 < lastquestion3){
        runningquestion3++;
        renderquestion3();
    }else{
        // end the quiz3 and show the score3
        clearInterval(timer3);
        score3Render();
    }
}

// answer3 is correct3
function answer3Iscorrect3(){
    document.getElementById(runningquestion3+10).style.backgroundColor = "#0f0";
    console.log(runningquestion3);
}

// answer3 is Wrong
function answer3IsWrong(){
    document.getElementById(runningquestion3+10).style.backgroundColor = "#f00";
}

// score3 render
function score3Render(){
    score3Div3.style.display = "block";
    
    // calculate the amount of question3 percent answer3ed by the user
    const score3PerCent = Math.round(100 * score3/question3s.length);
    
    // choose the image based on the score3PerCent
    let img = (score3PerCent >= 80) ? "../assets/quizImg/5.png" :
              (score3PerCent >= 60) ? "../assets/quizImg/4.png" :
              (score3PerCent >= 40) ? "../assets/quizImg/3.png" :
              (score3PerCent >= 30) ? "../assets/quizImg/3.png" :
              "../assets/quizImg/1.png";
    
    score3Div3.innerHTML = "<img src="+ img +">";
    score3Div3.innerHTML += "<p>"+ score3PerCent +"%</p>";
    score3Div3.innerHTML +=  '<button id="restart" onclick="again()" >Refresh</button>';
}

/////////////////////////////////////////////////
