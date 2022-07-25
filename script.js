const quizData = [
    {
        quiz: "ㅂ ㄴ ㄴ ㅋ",
        answer: "바나나킥"
    },
    {
        quiz: "ㅅ ㅇ ㄲ",
        answer: "새우깡"
    },
    {
        quiz: "ㅁ ㅅ",
        answer: "몽쉘"
    }
];

let $quizSentence = document.querySelector(".quiz-sentence");
let quizNumber = 0; // 문제 번호
const $userInput = document.querySelector(".inputFromKey");
const $ok_btn = document.querySelector("#ok-btn");
$ok_btn.addEventListener('click', check_answer);
let score = 0; // 점수
let currentquizData; // 현재 문제 정보
let $scoreValue = document.querySelector("#scoreValue");
let $quizNumber = document.querySelector("#quiz-number");
loadquiz();

function loadquiz() {
    $userInput.value = ""; // input창 비우기
    currentquizData = quizData[quizNumber];
    //console.log(currentquizData, currentquizData.quiz);
    $quizSentence.innerText = currentquizData.quiz;
    $quizNumber.innerText = quizNumber + 1;
}

async function check_answer() {
    //console.log($userInput.value); // 바나나킥
    let isCorrect = "";
    if($userInput.value === currentquizData.answer) { // 정답이라면
        score++; // 1점 증가
        isCorrect = "맞았습니다.";
    } else { // 틀리면
        isCorrect = "틀렸습니다.";
    }
    $quizSentence.innerText = isCorrect; 
    await delay(2); // 2초 기다리기
    $scoreValue.innerText = score; // 점수 출력
    quizNumber++; // 문제 번호 1 증가
    if(quizNumber < quizData.length) { // 다음 퀴즈가 남았으면
        loadquiz(); // 다음 문제 불러오기
    } else { // 모든 퀴즈가 끝났으면
        $quizSentence.innerText = `결과:${score}점/총${quizData.length}문제`;
        let reStartBtn = document.createElement("button");
        reStartBtn.innerText = "다시풀기";
        reStartBtn.className = "reStartBtn";
        reStartBtn.onclick = function() {
            window.location.reload(); // 브라우저 새로고침
        }
        let $quiz = document.querySelector('.quiz');
        $quiz.appendChild(reStartBtn);
    }
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}