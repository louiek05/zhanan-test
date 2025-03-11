let currentQuestions = [];
let currentQuestionIndex = 0;
let currentGender = ''; // 'male' 或 'female'
let currentNickname = ''; // 用戶暱稱
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
const resultDiv = document.getElementById('result');
const maleBtn = document.getElementById('male-btn');
const femaleBtn = document.getElementById('female-btn');
const agreeBtn = document.getElementById('agree-btn');
const disagreeBtn = document.getElementById('disagree-btn');
const questionText = document.getElementById('question-text');
const scoreElement = document.getElementById('score');
const resultText = document.getElementById('result-text');
const nicknameInput = document.getElementById('start-nickname');

// 監聽暱稱輸入
nicknameInput.addEventListener('input', () => {
    const nickname = nicknameInput.value.trim();
    maleBtn.disabled = !nickname;
    femaleBtn.disabled = !nickname;
});

// 性別選擇按鈕
maleBtn.addEventListener('click', () => {
    if (!nicknameInput.value.trim()) return;
    currentGender = 'male';
    currentNickname = nicknameInput.value.trim();
    currentQuestions = maleQuestions;
    startTest();
});

femaleBtn.addEventListener('click', () => {
    if (!nicknameInput.value.trim()) return;
    currentGender = 'female';
    currentNickname = nicknameInput.value.trim();
    currentQuestions = femaleQuestions;
    startTest();
});

// 同意按鈕
agreeBtn.addEventListener('click', () => {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const questionType = currentQuestion.type;
    // 只有非正向題目才計分
    if (questionType !== 'positive') {
        scores[questionType]++;
    }
    nextQuestion();
});

// 不同意按鈕
disagreeBtn.addEventListener('click', () => {
    nextQuestion();
});

// 重新開始
document.getElementById('restart-btn').addEventListener('click', () => {
    // 移除問題模式的背景
    document.body.classList.remove('question-mode');
    
    startScreen.classList.remove('hidden');
    questionScreen.classList.add('hidden');
    resultDiv.style.display = 'none';
    nicknameInput.value = currentNickname;
});

function startTest() {
    const nickname = nicknameInput.value.trim();
    if (!nickname) {
        alert('請輸入暱稱');
        return;
    }

    currentNickname = nickname;
    currentQuestionIndex = 0;
    resetScores();

    // 隱藏開始畫面
    document.getElementById('start-screen').classList.add('hidden');
    
    // 顯示問題畫面
    const questionScreen = document.getElementById('question-screen');
    questionScreen.classList.remove('hidden');
    document.body.classList.add('question-mode');
    
    // 顯示第一個問題
    showQuestion();
}

function resetScores() {
    scores = {
        flirty: 0,
        cold: 0,
        scammer: 0,
        controller: 0,
        liar: 0
    };
}

function showQuestion() {
    try {
        console.log('Showing question:', currentQuestionIndex);
        if (currentQuestionIndex < currentQuestions.length) {
            const question = currentQuestions[currentQuestionIndex];
            console.log('Current question:', question);
            questionText.textContent = question.text;
        } else {
            showResult();
        }
    } catch (error) {
        console.error('Error in showQuestion:', error);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    // 移除問題模式的背景
    document.body.classList.remove('question-mode');
    
    questionScreen.classList.add('hidden');
    resultDiv.style.display = 'block';
    
    // 計算總分和最高分的類型
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const maxScore = Math.max(...Object.values(scores));
    const maxTypes = Object.entries(scores)
        .filter(([_, score]) => score === maxScore && score > 0)
        .map(([type, _]) => type);
    
    let resultMessage = '';
    
    // 設置背景圖片
    if (maxTypes.length > 0) {
        const mainType = maxTypes[0];
        const gender = currentGender;
        const backgroundImage = getTypeBackgroundImage(mainType, gender);
        resultDiv.style.backgroundImage = `url(${backgroundImage})`;
        resultDiv.style.backgroundSize = 'cover';
        resultDiv.style.backgroundPosition = 'center';
        resultDiv.style.backgroundRepeat = 'no-repeat';
        resultDiv.style.position = 'relative';
        
        // 添加半透明遮罩，確保文字清晰可見
        resultDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    }
    
    // 主要評語（放大字體）
    if (totalScore <= 5) {
        resultMessage = `✨ 哇你真是一個乖寶寶！✨\n`;
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
        resultMessage += maxTypes.map(type => `• ${getTypeDescription(type, currentGender)}`).join('\n');
    }
    
    resultText.textContent = resultMessage;
    
    // 設置主要評語的樣式
    resultText.style.whiteSpace = 'pre-line';
    resultText.style.textAlign = 'center';
    scoreElement.textContent = '';  // 清空原本的總分顯示

    // 自動保存結果到 Firebase
    saveResult(resultMessage);
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

// 獲取類型對應的背景圖片
function getTypeBackgroundImage(type, gender) {
    const images = {
        male: {
            flirty: 'images/male-flirty.jpg',      // 花心型渣男
            cold: 'images/male-cold.jpg',          // 冷暴力型渣男
            scammer: 'images/male-scammer.jpg',    // 吃軟飯渣男
            controller: 'images/male-controller.jpg', // 控制狂渣男
            liar: 'images/male-liar.jpg'           // 死皮賴臉型渣男
        },
        female: {
            flirty: 'images/female-flirty.jpg',    // 花心型渣女
            cold: 'images/female-cold.jpg',        // 冷暴力型渣女
            scammer: 'images/female-scammer.jpg',  // 超拜金渣女
            controller: 'images/female-controller.jpg', // 控制狂渣女
            liar: 'images/female-liar.jpg'         // 臭公主型渣女
        }
    };
    return images[gender][type];
}

// 自動保存結果到 Firebase
async function saveResult(result) {
    try {
        await database.ref('shared-results').push({
            nickname: currentNickname,
            result: result,
            gender: currentGender,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
    } catch (error) {
        console.error('保存結果失敗：', error);
    }
}

// 顯示所有人的測試結果
async function showHistory() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('history').style.display = 'block';
    
    const historyList = document.getElementById('history-list');
    if (!historyList) return;

    historyList.innerHTML = '<div class="loading">載入中...</div>';
    
    try {
        const snapshot = await database.ref('shared-results')
            .orderByChild('timestamp')
            .limitToLast(50)
            .once('value');
        
        const sharedResults = [];
        snapshot.forEach(child => {
            sharedResults.push({
                ...child.val(),
                id: child.key
            });
        });

        if (sharedResults.length === 0) {
            historyList.innerHTML = '<div class="loading">還沒有人完成測試</div>';
            return;
        }
        
        historyList.innerHTML = '';
        sharedResults.reverse().forEach(item => {
            const date = new Date(item.timestamp).toLocaleString();
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <div class="history-info">
                    <span class="history-nickname">${item.nickname || '匿名用戶'}</span>
                    <span class="history-date">${date}</span>
                </div>
                <div class="history-gender">性別：${item.gender === 'male' ? '男生' : '女生'}</div>
                <div class="history-result">${item.result}</div>
            `;
            historyList.appendChild(div);
        });
    } catch (error) {
        console.error('載入結果失敗：', error);
        historyList.innerHTML = '<div class="error">載入失敗，請稍後再試</div>';
    }
}

// 添加事件監聽器
document.getElementById('view-history').addEventListener('click', showHistory);

document.getElementById('back-to-result').addEventListener('click', () => {
    document.getElementById('history').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}); 