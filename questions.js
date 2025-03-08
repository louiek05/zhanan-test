// 將 questions 對象設為全局變量
window.questions = {
    male: {
        // 花心型渣男的特徵問題
        flirty: [
            { text: "我曾經同時和多人保持曖昧關係", type: "flirty" },
            { text: "我曾跟不同的女生聊天來證明自己的魅力", type: "flirty" },
            { text: "我覺得同時和多個女生曖昧很正常", type: "flirty" },
            { text: "我曾在不同場合約不同的女生出去", type: "flirty" },
            { text: "我覺得偶爾約炮是很正常的事", type: "flirty" },
            { text: "我曾在感情不順時去夜店獵豔", type: "flirty" },
            { text: "我曾在朋友面前炫耀自己的把妹技巧", type: "flirty" },
            { text: "我曾在社交軟體上和正妹聊天", type: "flirty" },
            { text: "我覺得劈腿只是一時的生理需求", type: "flirty" },
            { text: "我曾跟朋友炫耀自己同時交往多少女生", type: "flirty" }
        ],
        // 正向題目
        positive: [
            { text: "我會尊重女生的個人隱私和空間", type: "positive" },
            { text: "我願意為了對方的夢想提供支持", type: "positive" },
            { text: "我相信感情需要雙方共同經營", type: "positive" },
            { text: "我會在對方需要時給予支持", type: "positive" },
            { text: "我願意和對方一起面對困難", type: "positive" },
            { text: "我重視感情中的誠實和信任", type: "positive" },
            { text: "我會記住對方重要的日子", type: "positive" },
            { text: "我願意為了感情改變缺點", type: "positive" },
            { text: "我相信每個人都值得被真誠對待", type: "positive" },
            { text: "我會主動關心對方的生活", type: "positive" }
        ],
        // 冷暴力型渣男的特徵問題
        cold: [
            { text: "我曾覺得女生太情緒化很煩", type: "cold" },
            { text: "我曾表現出不喜歡女生撒嬌", type: "cold" },
            { text: "我覺得談戀愛不需要太黏", type: "cold" },
            { text: "我曾逃避處理感情問題", type: "cold" },
            { text: "我曾忘記重要的紀念日", type: "cold" },
            { text: "我曾用工作忙來逃避約會", type: "cold" },
            { text: "我曾抱怨女生要求太多關注", type: "cold" },
            { text: "我曾說女生的情緒太難懂", type: "cold" },
            { text: "我曾拒絕表達感情", type: "cold" },
            { text: "我曾說女生太愛計較", type: "cold" }
        ],

        // 吃軟飯渣男的特徵問題
        scammer: [
            { text: "我曾跟女生借錢說要創業", type: "scammer" },
            { text: "我曾誇大自己的收入和身分", type: "scammer" },
            { text: "我曾用投資理財來騙錢", type: "scammer" },
            { text: "我曾找各種理由跟女生借錢", type: "scammer" },
            { text: "我曾用感情來要脅女生借錢給我", type: "scammer" },
            { text: "我曾跟多個女生同時借錢", type: "scammer" },
            { text: "我曾編造困境來騙取同情", type: "scammer" },
            { text: "我曾許諾未來還錢但沒打算還", type: "scammer" },
            { text: "我曾用緊急狀況為藉口借錢", type: "scammer" },
            { text: "我覺得騙女生的錢沒什麼", type: "scammer" }
        ],

        // 控制狂渣男的特徵問題
        controller: [
            { text: "我曾限制女友的穿著打扮", type: "controller" },
            { text: "我曾要求看女友的手機", type: "controller" },
            { text: "我曾禁止女友和異性來往", type: "controller" },
            { text: "我曾干涉女友的社交圈", type: "controller" },
            { text: "我曾用生氣來控制對方", type: "controller" },
            { text: "我曾利用分手這件事要求對方做事情", type: "controller" },
            { text: "我曾限制女友的行動自由", type: "controller" },
            { text: "我曾要求即時回覆訊息", type: "controller" },
            { text: "我曾監控女友的行蹤", type: "controller" },
            { text: "我曾對女友的生活指手畫腳", type: "controller" }
        ],

        // 死皮賴臉型渣男的特徵問題
        liar: [
            { text: "我曾說謊來避免爭吵", type: "liar" },
            { text: "我曾找藉口逃避承諾", type: "liar" },
            { text: "我曾答應事情但不做到", type: "liar" },
            { text: "我曾用謊言來維持關係", type: "liar" },
            { text: "我曾隱瞞自己的過去", type: "liar" },
            { text: "我曾對感情狀態說謊", type: "liar" },
            { text: "我曾用謊言來測試對方", type: "liar" },
            { text: "我曾找藉口放鴿子", type: "liar" },
            { text: "我曾對自己的行蹤說謊", type: "liar" },
            { text: "我覺得善意的謊言是必要的", type: "liar" }
        ]
    },
    
    female: {
        // 花心型渣女的特徵問題
        flirty: [
            { text: "我享受被多人同時追求的感覺", type: "flirty" },
            { text: "我曾在社群軟體上吸引異性注意", type: "flirty" },
            { text: "我覺得同時接受多人追求很正常", type: "flirty" },
            { text: "我享受不同男生的討好", type: "flirty" },
            { text: "我曾保持多個備胎以防分手", type: "flirty" },
            { text: "我曾在感情不順時尋找其他目標", type: "flirty" },
            { text: "我曾跟朋友炫耀有多少人追", type: "flirty" },
            { text: "我覺得玩弄感情很有成就感", type: "flirty" },
            { text: "我曾和不同類型的男生約會", type: "flirty" },
            { text: "我享受曖昧的感覺", type: "flirty" }
        ],
        // 正向題目
        positive: [
            { text: "我會尊重男友的個人空間", type: "positive" },
            { text: "我願意支持男友追求夢想", type: "positive" },
            { text: "我相信感情需要互相體諒", type: "positive" },
            { text: "我會在對方需要時給予支持", type: "positive" },
            { text: "我願意和對方共同成長", type: "positive" },
            { text: "我重視感情中的信任", type: "positive" },
            { text: "我會記住對方的喜好", type: "positive" },
            { text: "我願意為了感情改變", type: "positive" },
            { text: "我相信真誠的重要", type: "positive" },
            { text: "我會主動關心對方", type: "positive" }
        ],
        // 冷暴力型渣女的特徵問題
        cold: [
            { text: "我曾覺得男生的感受沒那麼重要", type: "cold" },
            { text: "我曾用冷處理來懲罰對方", type: "cold" },
            { text: "我曾打擊男生的自尊心", type: "cold" },
            { text: "我曾用沉默來表達不滿", type: "cold" },
            { text: "我曾不在意對方的感受", type: "cold" },
            { text: "我曾刻意晾著對方", type: "cold" },
            { text: "我曾覺得男生不值得認真對待", type: "cold" },
            { text: "我曾用高傲的態度對待男生", type: "cold" },
            { text: "我曾玩弄男生的感情", type: "cold" },
            { text: "我曾故意表現得很難追", type: "cold" }
        ],

        // 超拜金渣女的特徵問題
        scammer: [
            { text: "我覺得男人就該為女生花錢", type: "scammer" },
            { text: "我曾暗示男友買名牌包包", type: "scammer" },
            { text: "我曾用身體條件來換取利益", type: "scammer" },
            { text: "我曾跟不同男生要禮物", type: "scammer" },
            { text: "我曾用撒嬌來要求買東西", type: "scammer" },
            { text: "我曾拿別人送的禮物來比較", type: "scammer" },
            { text: "我曾因禮物不夠貴而生氣", type: "scammer" },
            { text: "我曾要求男友支付我的開銷", type: "scammer" },
            { text: "我覺得男人的價值在於能給我什麼", type: "scammer" },
            { text: "我曾用交往為條件要求禮物", type: "scammer" }
        ],

        // 控制狂渣女的特徵問題
        controller: [
            { text: "我曾用眼淚來控制男友", type: "controller" },
            { text: "我曾威脅自殘來要求就範", type: "controller" },
            { text: "我曾查看男友的手機", type: "controller" },
            { text: "我曾限制男友的社交活動", type: "controller" },
            { text: "我曾因為吃醋而鬧脾氣", type: "controller" },
            { text: "我曾要求男友馬上回訊息", type: "controller" },
            { text: "我曾干涉男友的穿著打扮", type: "controller" },
            { text: "我曾要求刪除異性好友", type: "controller" },
            { text: "我曾用情緒勒索來控制對方", type: "controller" },
            { text: "我曾要求對方順從我的想法", type: "controller" }
        ],

        // 臭公主型渣女的特徵問題
        liar: [
            { text: "我曾說「隨便」但心裡有答案", type: "liar" },
            { text: "我曾說「不用送禮物」但很期待", type: "liar" },
            { text: "我曾說「沒事」但在生氣", type: "liar" },
            { text: "我曾用反話來測試對方", type: "liar" },
            { text: "我曾期待對方讀懂我的心思", type: "liar" },
            { text: "我曾說「不餓」但想吃東西", type: "liar" },
            { text: "我曾因為對方沒察覺暗示而生氣", type: "liar" },
            { text: "我曾說「不用了」但希望堅持", type: "liar" },
            { text: "我覺得男生應該要懂我的心思", type: "liar" },
            { text: "我曾用考驗來測試對方", type: "liar" }
        ]
    }
};

// 從每個類型中隨機選擇問題
function getRandomQuestions(count = 15, gender) {
    try {
        if (!window.questions || !window.questions[gender]) {
            console.error('Questions not found for gender:', gender);
            return [];
        }

        let allQuestions = [];
        const genderQuestions = window.questions[gender];
        
        // 首先選擇3個正向題目
        const positiveQuestions = [...genderQuestions.positive]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        
        // 計算剩餘需要的題目數量
        const remainingCount = count - positiveQuestions.length;
        const typesExceptPositive = Object.keys(genderQuestions).filter(type => type !== 'positive');
        const questionsPerType = Math.ceil(remainingCount / typesExceptPositive.length);
        
        // 從其他類型中選擇問題
        for (let type of typesExceptPositive) {
            const typeQuestions = genderQuestions[type];
            const shuffled = [...typeQuestions].sort(() => 0.5 - Math.random());
            allQuestions = allQuestions.concat(shuffled.slice(0, questionsPerType));
        }
        
        // 合併正向題目和其他題目
        allQuestions = allQuestions.concat(positiveQuestions);
        
        // 隨機打亂並只返回需要的數量
        return allQuestions.sort(() => 0.5 - Math.random()).slice(0, count);
    } catch (error) {
        console.error('Error in getRandomQuestions:', error);
        return [];
    }
}

// 將函數設為全局變量
window.getRandomQuestions = getRandomQuestions; 