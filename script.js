let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM 元素
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const agreeBtn = document.getElementById('agree-btn');
const disagreeBtn = document.getElementById('disagree-btn');
const questionText = document.getElementById('question-text');
const scoreElement = document.getElementById('score');
const resultText = document.getElementById('result-text');
const restartBtn = document.getElementById('restart-btn');

// 開始測試
startBtn.addEventListener('click', startTest);

// 同意按鈕
agreeBtn.addEventListener('click', () => {
    score++;
    nextQuestion();
});

// 不同意按鈕
disagreeBtn.addEventListener('click', () => {
    nextQuestion();
});

// 重新開始
restartBtn.addEventListener('click', () => {
    startScreen.classList.remove('hidden');
    questionScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    startTest();
});

function startTest() {
    // 隨機選擇15個問題
    currentQuestions = shuffleArray([...questions]).slice(0, 15);
    currentQuestionIndex = 0;
    score = 0;
    
    // 隱藏開始畫面，顯示問題畫面
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        questionText.textContent = currentQuestions[currentQuestionIndex];
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    scoreElement.textContent = `得分：${score} / ${currentQuestions.length}`;
    
    if (score >= 10) {
        resultText.textContent = "很抱歉，根據測試結果，你可能是個渣男...";
        resultText.style.color = "#e74c3c";
    } else {
        resultText.textContent = "恭喜你！根據測試結果，你是個好男人！";
        resultText.style.color = "#27ae60";
    }
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 