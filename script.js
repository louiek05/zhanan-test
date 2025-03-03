let currentQuestions = [];
let currentQuestionIndex = 0;
let currentGender = ''; // 'male' 或 'female'
let scores = {
    flirty: 0,    // 花心型
    cold: 0,      // 冷漠型
    scammer: 0,   // 騙錢型
    controller: 0, // 控制型
    liar: 0       // 口是心非型
};

// DOM 元素
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const maleBtn = document.getElementById('male-btn');
const femaleBtn = document.getElementById('female-btn');
const agreeBtn = document.getElementById('agree-btn');
const disagreeBtn = document.getElementById('disagree-btn');
const questionText = document.getElementById('question-text');
const scoreElement = document.getElementById('score');
const resultText = document.getElementById('result-text');
const restartBtn = document.getElementById('restart-btn');

// 性別選擇按鈕
maleBtn.addEventListener('click', () => {
    currentGender = 'male';
    startTest();
});

femaleBtn.addEventListener('click', () => {
    currentGender = 'female';
    startTest();
});

// 同意按鈕
agreeBtn.addEventListener('click', () => {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const questionType = currentQuestion.type;
    scores[questionType]++;
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
});

function startTest() {
    // 重置所有分數
    for (let type in scores) {
        scores[type] = 0;
    }
    
    // 根據性別獲取問題
    currentQuestions = getRandomQuestions(15, currentGender);
    currentQuestionIndex = 0;
    
    // 隱藏開始畫面，顯示問題畫面
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        questionText.textContent = currentQuestions[currentQuestionIndex].text;
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
    
    // 計算總分和最高分的類型
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const maxScore = Math.max(...Object.values(scores));
    const maxTypes = Object.entries(scores)
        .filter(([_, score]) => score === maxScore && score > 0)
        .map(([type, _]) => getTypeDescription(type, currentGender));
    
    let resultMessage = '';
    
    // 主要評語（放大字體）
    if (totalScore <= 5) {
        resultMessage = `✨ 哇你悶是一個乖寶寶！✨\n`;
        resultText.style.color = "#27ae60";  // 綠色
    } else if (totalScore <= 7) {
        resultMessage = `⚠️ 唉呦你有點小渣渣的嫌疑喔！⚠️\n`;
        resultText.style.color = "#f1c40f";  // 黃色
    } else if (totalScore <= 12) {
        resultMessage = `💔 看來你玩弄了很多人的感情呢！💔\n`;
        resultText.style.color = "#e67e22";  // 橙色
    } else {
        resultMessage = `🚫 別懷疑，你就全宇宙最渣了吧！🚫\n`;
        resultText.style.color = "#e74c3c";  // 紅色
    }
    
    resultMessage += `\n`;  // 增加間距
    
    // 總分（小字）
    resultMessage += `測驗得分：${totalScore} / ${currentQuestions.length}\n`;
    
    // 如果有明顯特徵，顯示在評語下方
    if (maxTypes.length > 0) {
        resultMessage += `\n你最明顯的${currentGender === 'male' ? '渣男' : '渣女'}特徵是：\n`;
        resultMessage += maxTypes.map(type => `• ${type}`).join('\n');
    }
    
    resultText.textContent = resultMessage;
    
    // 設置主要評語的樣式
    resultText.style.whiteSpace = 'pre-line';
    resultText.style.textAlign = 'center';
    scoreElement.textContent = '';  // 清空原本的總分顯示
}

function getTypeDescription(type, gender) {
    const descriptions = {
        male: {
            flirty: "花心型渣男",
            cold: "冷漠型渣男",
            scammer: "騙錢型渣男",
            controller: "控制型渣男",
            liar: "口是心非型渣男"
        },
        female: {
            flirty: "花心型渣女",
            cold: "冷漠型渣女",
            scammer: "騙錢型渣女",
            controller: "控制型渣女",
            liar: "口是心非型渣女"
        }
    };
    return descriptions[gender][type];
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 