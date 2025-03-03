// 將 questions 對象設為全局變量
window.questions = {
    male: {
        // 花心型渣男的特徵問題
        flirty: [
            { text: "我曾經同時和多人保持曖昧關係", type: "flirty" },
            { text: "我曾在戀愛中保持其他曖昧對象", type: "flirty" },
            { text: "我曾在戀愛中保持多個備胎", type: "flirty" },
            { text: "我經常對不同的人說一樣的甜言蜜語", type: "flirty" },
            { text: "我曾跟朋友炫耀自己同時交往多少人", type: "flirty" },
            { text: "我覺得感情不順利時可以同時接觸其他人", type: "flirty" },
            { text: "我曾在社交軟體上和異性曖昧聊天", type: "flirty" },
            { text: "我經常在社交媒體上隱瞞自己的感情狀態", type: "flirty" },
            { text: "我曾經在戀愛中出軌", type: "flirty" },
            { text: "我曾在分手後立即開始新的戀情", type: "flirty" }
        ],

        // 冷漠型渣男的特徵問題
        cold: [
            { text: "我曾在戀愛中保持距離，不願意承諾", type: "cold" },
            { text: "我經常在戀愛中忽冷忽熱", type: "cold" },
            { text: "我曾在戀愛中保持若即若離的態度", type: "cold" },
            { text: "我曾不主動關心對方的生活狀況", type: "cold" },
            { text: "我曾不特別記得對方的生日或紀念日", type: "cold" },
            { text: "我經常以工作忙為藉口不陪伴對方", type: "cold" },
            { text: "我曾在交往期間刻意不回覆對方的訊息", type: "cold" },
            { text: "我曾不在意對方的感受就做決定", type: "cold" },
            { text: "我曾故意不接對方的電話製造神秘感", type: "cold" },
            { text: "我曾不真誠地跟對方溝通問題", type: "cold" }
        ],

        // 騙錢型渣男的特徵問題
        scammer: [
            { text: "我曾經利用別人的感情來獲取利益", type: "scammer" },
            { text: "我覺得感情就是一種交易關係", type: "scammer" },
            { text: "我覺得送禮物就能彌補一切過錯", type: "scammer" },
            { text: "我曾在戀愛中保持神秘感，不願意透露太多", type: "scammer" },
            { text: "我曾不告訴現任關於我和前任的事情", type: "scammer" },
            { text: "我曾刻意不讓對方認識我的朋友圈", type: "scammer" },
            { text: "我經常把自己的過錯推給其他人", type: "scammer" },
            { text: "我經常對伴侶說謊", type: "scammer" },
            { text: "我覺得偶爾說謊是維持感情的必要手段", type: "scammer" },
            { text: "我覺得感情中適當的欺騙是可以接受的", type: "scammer" }
        ],

        // 控制型渣男的特徵問題
        controller: [
            { text: "我曾在吵架時提起對方的過去傷害他/她", type: "controller" },
            { text: "我經常用分手來威脅對方就範", type: "controller" },
            { text: "我曾因為一點小事就威脅要分手", type: "controller" },
            { text: "我經常拿其他異性來刺激對方", type: "controller" },
            { text: "我曾在感情中故意製造不安全感", type: "controller" },
            { text: "我曾因為一時心情不好就對對方發脾氣", type: "controller" },
            { text: "我經常把自己的錯誤歸咎於對方", type: "controller" },
            { text: "我曾因為對方不夠完美就想分手", type: "controller" },
            { text: "我曾跟朋友分享對方的私密事情", type: "controller" },
            { text: "我覺得感情就是一場遊戲", type: "controller" }
        ],

        // 口是心非型渣男的特徵問題
        liar: [
            { text: "我經常在戀愛中不願意付出真心", type: "liar" },
            { text: "我曾在約會時故意遲到或放鴿子", type: "liar" },
            { text: "我覺得偶爾約會遲到是很正常的事", type: "liar" },
            { text: "我經常在戀愛中玩欲擒故縱", type: "liar" },
            { text: "我曾經在戀愛中欺騙對方的感情", type: "liar" },
            { text: "我曾經在戀愛中欺騙對方的信任", type: "liar" },
            { text: "我曾在戀愛中保持獨立，不願意承擔責任", type: "liar" },
            { text: "我曾因為自己心情不好就找人約會", type: "liar" },
            { text: "我曾經在戀愛中利用對方的弱點", type: "liar" },
            { text: "我曾在戀愛中保持神秘感，不願意分享生活", type: "liar" }
        ]
    },
    
    female: {
        // 花心型渣女的特徵問題
        flirty: [
            { text: "我曾經同時和多人保持曖昧關係", type: "flirty" },
            { text: "我曾在戀愛中保持其他曖昧對象", type: "flirty" },
            { text: "我曾在戀愛中保持多個備胎", type: "flirty" },
            { text: "我經常對不同的人說一樣的甜言蜜語", type: "flirty" },
            { text: "我曾跟朋友炫耀自己同時交往多少人", type: "flirty" },
            { text: "我覺得感情不順利時可以同時接觸其他人", type: "flirty" },
            { text: "我曾在社交軟體上和異性曖昧聊天", type: "flirty" },
            { text: "我經常在社交媒體上隱瞞自己的感情狀態", type: "flirty" },
            { text: "我曾經在戀愛中出軌", type: "flirty" },
            { text: "我曾在分手後立即開始新的戀情", type: "flirty" }
        ],

        // 冷漠型渣女的特徵問題
        cold: [
            { text: "我曾在戀愛中保持距離，不願意承諾", type: "cold" },
            { text: "我經常在戀愛中忽冷忽熱", type: "cold" },
            { text: "我曾在戀愛中保持若即若離的態度", type: "cold" },
            { text: "我曾不主動關心對方的生活狀況", type: "cold" },
            { text: "我曾不特別記得對方的生日或紀念日", type: "cold" },
            { text: "我經常以工作忙為藉口不陪伴對方", type: "cold" },
            { text: "我曾在交往期間刻意不回覆對方的訊息", type: "cold" },
            { text: "我曾不在意對方的感受就做決定", type: "cold" },
            { text: "我曾故意不接對方的電話製造神秘感", type: "cold" },
            { text: "我曾不真誠地跟對方溝通問題", type: "cold" }
        ],

        // 騙錢型渣女的特徵問題
        scammer: [
            { text: "我曾要求對方買名牌包包或奢侈品", type: "scammer" },
            { text: "我覺得男生就應該要請客買單", type: "scammer" },
            { text: "我曾用生氣來要求對方送禮物", type: "scammer" },
            { text: "我經常暗示對方要送我貴重禮物", type: "scammer" },
            { text: "我曾拿其他人送的禮物來比較", type: "scammer" },
            { text: "我覺得男生的價值在於他能給我什麼", type: "scammer" },
            { text: "我曾因為對方的經濟條件而考慮分手", type: "scammer" },
            { text: "我經常跟對方借錢但不還", type: "scammer" },
            { text: "我曾用感情來要求對方在經濟上支持我", type: "scammer" },
            { text: "我覺得感情就是一種交易關係", type: "scammer" }
        ],

        // 控制型渣女的特徵問題
        controller: [
            { text: "我曾要求對方隨時回報行蹤", type: "controller" },
            { text: "我曾檢查對方的手機和社交軟體", type: "controller" },
            { text: "我曾限制對方和異性來往", type: "controller" },
            { text: "我經常懷疑對方出軌或劈腿", type: "controller" },
            { text: "我曾要求對方刪除異性好友", type: "controller" },
            { text: "我曾因為吃醋而大發脾氣", type: "controller" },
            { text: "我曾限制對方的社交活動", type: "controller" },
            { text: "我曾威脅自殘來控制對方", type: "controller" },
            { text: "我曾用眼淚來操控對方", type: "controller" },
            { text: "我覺得對方應該要順從我的一切要求", type: "controller" }
        ],

        // 口是心非型渣女的特徵問題
        liar: [
            { text: "我經常說「隨便」但心裡有明確的期待", type: "liar" },
            { text: "我曾說不用送禮物但其實很期待", type: "liar" },
            { text: "我曾說「沒事」但其實很生氣", type: "liar" },
            { text: "我經常說反話測試對方", type: "liar" },
            { text: "我曾刻意表現出不在意的樣子", type: "liar" },
            { text: "我曾期待對方讀懂我的心思", type: "liar" },
            { text: "我曾因為對方沒察覺我的暗示而生氣", type: "liar" },
            { text: "我經常說「不用了」但希望對方堅持", type: "liar" },
            { text: "我曾用沉默來表達不滿", type: "liar" },
            { text: "我覺得對方應該要懂我的心思", type: "liar" }
        ]
    }
};

// 從每個類型中隨機選擇問題
function getRandomQuestions(count = 15, gender) {
    let allQuestions = [];
    const typeCount = Object.keys(questions[gender]).length;
    const questionsPerType = Math.ceil(count / typeCount);
    
    // 從每個類型中選擇相同數量的問題
    for (let type in questions[gender]) {
        const typeQuestions = questions[gender][type];
        const shuffled = [...typeQuestions].sort(() => 0.5 - Math.random());
        allQuestions = allQuestions.concat(shuffled.slice(0, questionsPerType));
    }
    
    // 隨機打亂並只返回需要的數量
    return allQuestions.sort(() => 0.5 - Math.random()).slice(0, count);
}

// 將函數設為全局變量
window.getRandomQuestions = getRandomQuestions; 