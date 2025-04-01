// 单词数据
const wordData = {
    unit1: [
        {en: "weigh", zh: "有......重，重"},
        {en: "kilogram", zh: "千克，公斤"},
        {en: "centimetre", zh: "厘米"},
        {en: "taller", zh: "更高的"},
        {en: "fan", zh: "迷，爱好者"},
        {en: "fantastic", zh: "极好的"},
        {en: "themselves", zh: "他们自己，她们自己，它们自己"},
        {en: "theatre", zh: "剧院"},
        {en: "go fishing", zh: "去钓鱼"},
        {en: "enjoy oneself", zh: "玩得愉快，得到乐趣"}
    ],
    unit2: [
        {en: "life", zh: "生活"},
        {en: "writer", zh: "作家"},
        {en: "photographer", zh: "摄影师"},
        {en: "film", zh: "胶卷"},
        {en: "digital", zh: "数码的"},
        {en: "street cleaner", zh: "环卫工人"},
        {en: "sweep", zh: "扫地"},
        {en: "broom", zh: "扫帚"},
        {en: "drive", zh: "驾驶"},
        {en: "street sweeper", zh: "扫地车"}
    ],
    unit3: [
        {en: "carry", zh: "背，提，拿"},
        {en: "online", zh: "在线地，在线的"},
        {en: "head teacher", zh: "校长"},
        {en: "PS", zh: "附言（用于信末）"},
        {en: "mountain", zh: "山，山脉"},
        {en: "even", zh: "甚至"},
        {en: "space", zh: "太空"},
        {en: "dinosaur", zh: "恐龙"},
        {en: "a piece of", zh: "一张，一片"},
        {en: "have a picnic", zh: "去野餐"}
    ],
    unit4: [
        {en: "oil", zh: "油"},
        {en: "oil painting", zh: "油画"},
        {en: "powerful", zh: "强有力的，力量大的"},
        {en: "ink", zh: "墨水，墨汁"},
        {en: "Chinese ink painting", zh: "中国水墨画"},
        {en: "brush", zh: "画笔，刷子，刷"},
        {en: "paints", zh: "绘画颜料"},
        {en: "artist", zh: "艺术家，（尤指）画家"},
        {en: "unhappy", zh: "不高兴的"},
        {en: "carefully", zh: "仔细地"}
    ],
    unit5: [
        {en: "craft", zh: "手艺，工艺"},
        {en: "crown", zh: "王冠，皇冠"},
        {en: "scissors", zh: "剪刀"},
        {en: "tape", zh: "胶带"},
        {en: "glue", zh: "胶水"},
        {en: "saw", zh: "锯"},
        {en: "craftsman", zh: "工匠，手艺人"},
        {en: "tool", zh: "工具"},
        {en: "easily", zh: "容易地"},
        {en: "model house", zh: "房子模型"}
    ],
    unit6: [
        {en: "long race", zh: "长跑"},
        {en: "short race", zh: "短跑"},
        {en: "win", zh: "获胜，赢"},
        {en: "long jump", zh: "跳远"},
        {en: "high jump", zh: "跳高"},
        {en: "swimsuit", zh: "游泳衣"},
        {en: "swimming cap", zh: "游泳帽"},
        {en: "swimming pool", zh: "游泳池"},
        {en: "warm-up", zh: "准备活动，热身练习"},
        {en: "swimming goggles", zh: "游泳镜"}
    ],
    unit7: [
        {en: "bell", zh: "铃铛"},
        {en: "neck", zh: "脖子"},
        {en: "ago", zh: "以前"},
        {en: "gatekeeper", zh: "门卫"},
        {en: "praise", zh: "赞扬，称赞"}
    ],
    unit8: [
        {en: "sign", zh: "标识"},
        {en: "middle", zh: "中间，中部，中心"},
        {en: "special", zh: "特别的"},
        {en: "path", zh: "小路，小径"},
        {en: "may", zh: "可能，可以"},
        {en: "lost", zh: "迷路的，迷失的"},
        {en: "worry", zh: "担心"},
        {en: "follow", zh: "跟随，跟着"},
        {en: "look out", zh: "小心，当心"},
        {en: "no smoking", zh: "禁止吸烟"}
    ],
    unit9: [
        {en: "reuse", zh: "重新利用"},
        {en: "can", zh: "金属罐"},
        {en: "rubber", zh: "橡皮"},
        {en: "vase", zh: "花瓶"},
        {en: "pen holder", zh: "笔筒"},
        {en: "envelope", zh: "信封"},
        {en: "plastic", zh: "塑料制的，塑料的"},
        {en: "rubbish bin", zh: "垃圾桶"},
        {en: "piece", zh: "碎片，碎块"},
        {en: "throw away", zh: "扔掉"}
    ],
    unit10: [
        {en: "fairy tale", zh: "童话（故事）"},
        {en: "adult", zh: "成年人"},
        {en: "well-known", zh: "众所周知的，著名的"},
        {en: "stronger", zh: "更强大的"},
        {en: "scarf", zh: "围巾"},
        {en: "blow off", zh: "吹掉"},
        {en: "take off", zh: "脱掉"}
    ],
    unit11: [
        {en: "Western", zh: "西方的"},
        {en: "turkey", zh: "火鸡"},
        {en: "moment", zh: "时光，时刻"},
        {en: "decorate", zh: "装饰，布置"},
        {en: "bright", zh: "明亮的，鲜艳的"},
        {en: "laugh at", zh: "嘲笑"}
    ],
    unit12: [
        {en: "pea", zh: "豌豆"},
        {en: "pod", zh: "豆荚"},
        {en: "forever", zh: "永远"},
        {en: "bigger", zh: "更大的"},
        {en: "excited", zh: "兴奋的"},
        {en: "bullet", zh: "子弹"},
        {en: "lazy", zh: "懒惰的"},
        {en: "roof", zh: "屋顶"},
        {en: "yard", zh: "院子"},
        {en: "hit", zh: "碰撞，撞击"}
    ]
};

// 全局变量
let currentUnit = null;
let currentGame = null;
const gameBoard = document.getElementById('gameBoard');
const gameStatus = document.getElementById('gameStatus');

// 更新游戏状态显示
function updateGameStatus(message) {
    gameStatus.textContent = message;
}

// 初始化单元选择按钮
function initUnitButtons() {
    const container = document.getElementById('unitButtons');
    
    // 清空现有按钮避免重复
    container.innerHTML = '';
    
    // 使用文档片段提高性能
    const fragment = document.createDocumentFragment();
    
    Object.keys(wordData).forEach(unit => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.id = `unit-btn-${unit}`; // 添加唯一ID便于后续查找
        btn.textContent = `Unit ${unit.replace('unit', '')}`;
        
        // 如果是当前选中的单元，添加active类
        if (currentUnit === unit) {
            btn.classList.add('active');
        }
        
        // 直接绑定事件
        btn.onclick = () => selectUnit(unit);
        
        fragment.appendChild(btn);
    });
    
    container.appendChild(fragment);
}

// 清理游戏资源
function cleanupCurrentGame() {
    gameBoard.innerHTML = '';
    currentGame = null;
}

// 选择单元
function selectUnit(unit) {
    cleanupCurrentGame();
    currentUnit = unit;
    
    // 清除所有单元按钮的active类
    const allUnitButtons = document.querySelectorAll('#unitButtons .btn');
    allUnitButtons.forEach(btn => btn.classList.remove('active'));
    
    // 为当前选中的按钮添加active类
    const selectedButton = document.getElementById(`unit-btn-${unit}`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    updateGameStatus(`已选择 Unit ${unit.replace('unit', '')}，请选择游戏模式`);
}

// 洗牌算法 - Fisher-Yates
function shuffleArray(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// 生成位置随机偏移
function getRandomOffset() {
    return {
        x: Math.random() * 10 - 5, // -5px to 5px
        y: Math.random() * 10 - 5  // -5px to 5px
    };
}

// 单词消消乐游戏
function startMatchingGame() {
    if (!currentUnit) {
        alert('请先选择单元！');
        return;
    }
    
    cleanupCurrentGame();
    
    // 获取当前单元的单词
    const words = wordData[currentUnit];
    
    // 创建卡片
    let cards = [];
    words.forEach(word => {
        cards.push({id: 'en_' + word.en, text: word.en, type: 'en', matched: false, word: word});
        cards.push({id: 'zh_' + word.en, text: word.zh, type: 'zh', matched: false, word: word});
    });
    
    // 洗牌
    cards = shuffleArray(cards);
    
    // 创建游戏界面
    const container = document.createElement('div');
    container.className = 'cards-container';
    
    // 添加匹配对数显示
    const matchedPairsEl = document.createElement('div');
    matchedPairsEl.className = 'matched-pairs';
    matchedPairsEl.textContent = `0/${words.length}`;
    gameBoard.appendChild(matchedPairsEl);
    
    // 为每个卡片添加随机位置偏移
    cards.forEach(card => {
        const offset = getRandomOffset();
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card.text;
        cardElement.dataset.id = card.id;
        
        // 根据类型添加不同样式
        if (card.type === 'en') {
            cardElement.style.fontFamily = 'Nunito, sans-serif';
            cardElement.style.fontSize = '130%'; // 放大英语单词字体30%
        }
        
        // 应用随机位置偏移
        cardElement.style.transform += ` translate(${offset.x}px, ${offset.y}px)`;
        
        container.appendChild(cardElement);
    });
    
    // 添加到游戏板
    gameBoard.appendChild(container);
    
    // 游戏状态
    let selected = null;
    let matchedCount = 0;
    let canClick = true;
    
    // 点击事件
    container.addEventListener('click', function(e) {
        if (!canClick) return;
        
        const cardElement = e.target.closest('.card');
        if (!cardElement) return;
        
        // 找到对应的卡片数据
        const cardId = cardElement.dataset.id;
        const card = cards.find(c => c.id === cardId);
        
        // 如果已匹配或已选择，忽略
        if (card.matched || (selected && cardId === selected.id)) return;
        
        if (!selected) {
            // 第一次点击
            selected = card;
            cardElement.classList.add('selected');
            
            // 添加选中动画
            cardElement.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(1.1)' },
                { transform: 'scale(1.05)' }
            ], {
                duration: 300,
                easing: 'ease-out',
                fill: 'forwards'
            });
        } else {
            // 第二次点击，检查是否匹配
            canClick = false; // 防止连续快速点击
            const isMatch = selected.word === card.word;
            
            // 添加选中动画
            cardElement.classList.add('selected');
            
            setTimeout(() => {
                if (isMatch) {
                    // 匹配成功
                    card.matched = true;
                    selected.matched = true;
                    
                    // 更新UI
                    cardElement.classList.remove('selected');
                    cardElement.classList.add('matched');
                    const selectedElement = document.querySelector(`.card[data-id="${selected.id}"]`);
                    selectedElement.classList.remove('selected');
                    selectedElement.classList.add('matched');
                    
                    // 播放匹配成功动画，然后让卡片消失
                    [cardElement, selectedElement].forEach(el => {
                        el.animate([
                            { transform: 'scale(1)' },
                            { transform: 'scale(1.2) rotate(5deg)' },
                            { transform: 'scale(1.05)' }
                        ], {
                            duration: 500,
                            easing: 'ease-out'
                        }).onfinish = () => {
                            // 动画播放完成后淡出卡片
                            el.animate([
                                { opacity: 1 },
                                { opacity: 0 }
                            ], {
                                duration: 300,
                                easing: 'ease-out',
                                fill: 'forwards'
                            });
                        };
                    });
                    
                    matchedCount++;
                    matchedPairsEl.textContent = `${matchedCount}/${words.length}`;
                    updateGameStatus(`太棒了！已匹配: ${matchedCount}/${words.length} 对`);
                    
                    if (matchedCount === words.length) {
                        // 所有卡片匹配成功，庆祝动画
                        const allCards = document.querySelectorAll('.card');
                        allCards.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('celebrate');
                            }, i * 50);
                        });
                        
                        setTimeout(() => {
                            alert('恭喜你完成了本单元！');
                            startMatchingGame(); // 重新开始游戏
                        }, 1000);
                    }
                } else {
                    // 不匹配
                    setTimeout(() => {
                        cardElement.classList.remove('selected');
                        document.querySelector(`.card[data-id="${selected.id}"]`).classList.remove('selected');
                        updateGameStatus('不匹配，请重试');
                    }, 800);
                }
                
                // 重置选择
                selected = null;
                canClick = true;
            }, 500);
        }
    });
    
    updateGameStatus(`已匹配: ${matchedCount}/${words.length} 对`);
}

// 记忆翻牌游戏
function startMemoryGame() {
    if (!currentUnit) {
        alert('请先选择单元！');
        return;
    }

    cleanupCurrentGame();
    
    // 获取当前单元的单词
    const words = wordData[currentUnit];
    
    // 创建卡片
    let cards = [];
    words.forEach(word => {
        cards.push({id: 'en_' + word.en, text: word.en, type: 'en', flipped: false, matched: false, word: word});
        cards.push({id: 'zh_' + word.en, text: word.zh, type: 'zh', flipped: false, matched: false, word: word});
    });
    
    // 洗牌
    cards = shuffleArray(cards);
    
    // 添加匹配对数显示
    const matchedPairsEl = document.createElement('div');
    matchedPairsEl.className = 'matched-pairs';
    matchedPairsEl.textContent = `0/${words.length}`;
    gameBoard.appendChild(matchedPairsEl);
    
    // 创建游戏界面
    const container = document.createElement('div');
    container.className = 'cards-container';
    
    cards.forEach(card => {
        const offset = getRandomOffset();
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = '?';
        cardElement.dataset.id = card.id;
        cardElement.dataset.text = card.text;
        
        // 根据类型添加不同样式
        if (card.type === 'en') {
            cardElement.style.fontFamily = 'Nunito, sans-serif';
            cardElement.style.fontSize = '130%'; // 放大英语单词字体30%
        }
        
        // 应用随机位置偏移
        cardElement.style.transform += ` translate(${offset.x}px, ${offset.y}px)`;
        
        container.appendChild(cardElement);
    });
    
    // 添加到游戏板
    gameBoard.appendChild(container);
    
    // 游戏状态
    let flipped = [];
    let matchedCount = 0;
    let canFlip = true;
    
    // 点击事件
    container.addEventListener('click', function(e) {
        if (!canFlip) return;
        
        const cardElement = e.target.closest('.card');
        if (!cardElement) return;
        
        // 找到对应的卡片数据
        const cardId = cardElement.dataset.id;
        const card = cards.find(c => c.id === cardId);
        
        // 如果已匹配或已翻开，忽略
        if (card.matched || card.flipped) return;
        
        // 翻开卡片
        card.flipped = true;
        cardElement.textContent = card.text;
        cardElement.classList.add('flipped');
        
        // 对于英语单词卡片设置字体
        if (card.type === 'en') {
            cardElement.style.fontSize = '130%'; // 放大英语单词字体30%
        }
        
        // 翻牌动画
        cardElement.animate([
            { transform: 'scale(1) rotateY(0deg)' },
            { transform: 'scale(1.1) rotateY(90deg)', offset: 0.5 },
            { transform: 'scale(1.05) rotateY(0deg)' }
        ], {
            duration: 400,
            easing: 'ease-out'
        });
        
        flipped.push({card, element: cardElement});
        
        if (flipped.length === 2) {
            canFlip = false;
            const [first, second] = flipped;
            const isMatch = first.card.word === second.card.word;
            
            setTimeout(() => {
                if (isMatch) {
                    // 匹配成功
                    first.card.matched = second.card.matched = true;
                    first.element.classList.add('matched');
                    second.element.classList.add('matched');
                    
                    // 播放匹配成功动画，但不让卡片消失
                    [first.element, second.element].forEach(el => {
                        el.animate([
                            { transform: 'scale(1.05)' },
                            { transform: 'scale(1.2) rotate(5deg)' },
                            { transform: 'scale(1.05)' }
                        ], {
                            duration: 500,
                            easing: 'ease-out'
                        });
                    });
                    
                    matchedCount++;
                    matchedPairsEl.textContent = `${matchedCount}/${words.length}`;
                    updateGameStatus(`太棒了！已匹配: ${matchedCount}/${words.length} 对`);
                    
                    if (matchedCount === words.length) {
                        // 所有卡片匹配成功，庆祝动画
                        const allCards = document.querySelectorAll('.card');
                        allCards.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('celebrate');
                            }, i * 50);
                        });
                        
                        setTimeout(() => {
                            alert('恭喜你完成了本单元！');
                            startMemoryGame(); // 重新开始游戏
                        }, 1000);
                    }
                } else {
                    // 不匹配，翻回
                    first.card.flipped = second.card.flipped = false;
                    
                    // 翻回动画
                    [first.element, second.element].forEach(el => {
                        el.animate([
                            { transform: 'scale(1.05) rotateY(0deg)' },
                            { transform: 'scale(1.1) rotateY(90deg)', offset: 0.5 },
                            { transform: 'scale(1) rotateY(0deg)' }
                        ], {
                            duration: 400,
                            easing: 'ease-in'
                        });
                    });
                    
                    setTimeout(() => {
                        first.element.textContent = second.element.textContent = '?';
                        first.element.classList.remove('flipped');
                        second.element.classList.remove('flipped');
                        updateGameStatus('不匹配，请重试');
                    }, 200);
                }
                
                flipped = [];
                canFlip = true;
            }, 800);
        }
    });
    
    updateGameStatus(`已匹配: ${matchedCount}/${words.length} 对`);
}

// 拼写练习游戏
function startSpellingGame() {
    if (!currentUnit) {
        alert('请先选择单元！');
        return;
    }

    cleanupCurrentGame();
    
    // 获取当前单元的单词并洗牌
    const words = shuffleArray(wordData[currentUnit]);
    let currentWordIndex = 0;
    let correctCount = 0;
    
    // 创建游戏界面
    function renderGame() {
        gameBoard.innerHTML = '';
        const container = document.createElement('div');
        container.className = 'spelling-container';
        
        const prompt = document.createElement('div');
        prompt.className = 'spelling-prompt';
        prompt.textContent = words[currentWordIndex].zh;
        
        const input = document.createElement('input');
        input.className = 'spelling-input';
        input.type = 'text';
        input.placeholder = '请输入英文单词';
        input.autocomplete = 'off';
        input.spellcheck = false;
        
        // 提示区域
        const hint = document.createElement('div');
        hint.style.marginTop = '10px';
        hint.style.fontSize = '0.9rem';
        hint.style.color = 'var(--neutral-dark)';
        hint.textContent = `提示: ${words[currentWordIndex].en.charAt(0)}...`;
        
        // 按钮
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn';
        submitBtn.textContent = '检查';
        submitBtn.style.marginTop = '20px';
        
        // 进度显示
        const progress = document.createElement('div');
        progress.style.marginTop = '20px';
        progress.style.fontSize = '0.9rem';
        progress.textContent = `进度: ${currentWordIndex + 1}/${words.length}`;
        
        container.appendChild(prompt);
        container.appendChild(input);
        container.appendChild(hint);
        container.appendChild(submitBtn);
        container.appendChild(progress);
        gameBoard.appendChild(container);
        
        // 确保输入框获得焦点
        setTimeout(() => input.focus(), 100);
        
        // 事件处理
        function checkAnswer() {
            const userInput = input.value.trim();
            if (!userInput) return;
            
            const currentWord = words[currentWordIndex];
            if (userInput.toLowerCase() === currentWord.en.toLowerCase()) {
                correctCount++;
                
                // 正确动画
                prompt.animate([
                    { transform: 'scale(1)', color: 'var(--primary-dark)' },
                    { transform: 'scale(1.1)', color: 'var(--success-color)' },
                    { transform: 'scale(1)', color: 'var(--primary-dark)' }
                ], {
                    duration: 500,
                    easing: 'ease-out'
                });
                
                updateGameStatus(`正确！`);
                
                if (currentWordIndex === words.length - 1) {
                    const percentCorrect = Math.round(correctCount/words.length*100);
                    
                    setTimeout(() => {
                        const resultMessage = `恭喜你完成了本单元！\n正确率: ${percentCorrect}%`;
                        alert(resultMessage);
                        
                        // 重新开始
                        currentWordIndex = 0;
                        correctCount = 0;
                        renderGame();
                    }, 500);
                } else {
                    currentWordIndex++;
                    setTimeout(() => renderGame(), 800);
                }
            } else {
                updateGameStatus(`错误！正确答案是: ${currentWord.en}`);
                
                // 错误动画
                input.animate([
                    { borderColor: 'var(--primary-light)' },
                    { borderColor: 'red' },
                    { borderColor: 'var(--primary-light)' }
                ], {
                    duration: 500,
                    easing: 'ease-out'
                });
                
                input.value = '';
                input.focus();
            }
        }
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
        
        submitBtn.addEventListener('click', checkAnswer);
        
        updateGameStatus(`请拼写单词（${currentWordIndex + 1}/${words.length}）`);
    }
    
    renderGame();
}

// 初始化游戏
window.onload = function() {
    try {
        initUnitButtons();
        updateGameStatus('请选择单元开始游戏');
    } catch (error) {
        console.error('初始化游戏时出错:', error);
    }
}; 