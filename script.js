// ==================== TEXT COLLECTIONS ====================
const textCollections = {
    easy: [
        "Güneş bugün çok güzel parlıyor.",
        "Sabah kahvaltısı çok önemlidir.",
        "Kitap okumak güzel bir alışkanlıktır.",
        "Müzik dinlemek ruhu rahatlatır.",
        "Spor yapmak sağlığa faydalıdır.",
        "Su içmek vücut için önemlidir.",
        "Arkadaşlarla vakit geçirmek keyiflidir.",
        "Yürüyüş yapmak iyi gelir.",
        "Çiçekler bahçeyi güzelleştirir.",
        "Gülümsemek insanı mutlu eder."
    ],
    medium: [
        "Teknoloji hayatımızı her geçen gün daha fazla etkiliyor ve değiştiriyor.",
        "Düzenli uyku uyumak hem fiziksel hem de zihinsel sağlık için çok önemlidir.",
        "Programlama öğrenmek sabır ve sürekli pratik gerektiren bir süreçtir.",
        "İyi bir kitap okumak insanı farklı dünyalara götürebilir ve hayal gücünü geliştirir.",
        "Sağlıklı beslenme ve düzenli egzersiz yaşam kalitesini önemli ölçüde artırır.",
        "İletişim becerileri geliştirmek kişisel ve profesyonel hayatta başarının anahtarıdır.",
        "Zaman yönetimi becerisi kazanmak verimliliği artırır ve stresi azaltır.",
        "Yeni bir dil öğrenmek beyin gelişimine katkı sağlar ve farklı kültürleri anlamaya yardımcı olur.",
        "Pozitif düşünmek ve iyimser olmak hayatın zorluklarıyla başa çıkmayı kolaylaştırır.",
        "Meditasyon ve nefes egzersizleri zihinsel sağlığı korumak için etkili yöntemlerdir."
    ],
    hard: [
        "Yapay zeka ve makine öğrenimi teknolojileri, endüstrileri dönüştürüyor ve iş yapış şekillerimizi köklü bir biçimde değiştirerek yeni fırsatlar yaratırken bazı zorlukları da beraberinde getiriyor.",
        "Sürdürülebilir kalkınma hedefleri, çevresel, ekonomik ve sosyal boyutları bir araya getirerek gelecek nesillerin ihtiyaçlarını karşılayabilmelerini sağlamayı amaçlayan kapsamlı bir çerçeve sunmaktadır.",
        "Kuantum bilgisayarlar, klasik bilgisayarların çözemeyeceği karmaşık problemleri çözme potansiyeline sahip olup, kriptografi, ilaç geliştirme ve yapay zeka alanlarında devrim yaratması beklenmektedir.",
        "İklim değişikliği, küresel ısınma, biyoçeşitlilik kaybı ve doğal kaynakların tükenmesi gibi çevresel sorunlar, insanlığın karşı karşıya olduğu en acil ve kritik meseleler arasında yer almaktadır.",
        "Nörobilim ve psikoloji alanındaki ilerlemeler, insan beyninin karmaşık yapısını ve bilinç fenomenini anlamamıza yardımcı olurken, yapay zeka ile insan zekası arasındaki ilişkiyi yeniden düşünmemizi sağlamaktadır.",
        "Blockchain teknolojisi ve merkezi olmayan sistemler, geleneksel finansal yapıları dönüştürme potansiyeline sahip olup, güvenlik, şeffaflık ve veri bütünlüğü konularında yeni paradigmalar oluşturmaktadır.",
        "Genetik mühendisliği ve CRISPR teknolojisi, hastalıkların tedavisinde ve tarımsal verimliliğin artırılmasında büyük umut vaat etmekle birlikte, etik ve güvenlik konularında ciddi tartışmaları da beraberinde getirmektedir.",
        "Uzay araştırmaları ve kolonizasyon projeleri, insanlığın çok gezegenli bir tür haline gelmesi vizyonunu gerçekleştirmeyi hedeflerken, teknolojik, ekonomik ve etik açıdan pek çok soruyu da gündeme getirmektedir.",
        "Dijital dönüşüm süreçleri, işletmelerin operasyonel verimliliğini artırırken, çalışanların beceri setlerini yeniden tanımlamayı ve sürekli öğrenme kültürünü benimsemeyi zorunlu kılmaktadır.",
        "Nörolinguistik programlama ve bilişsel davranışçı terapi gibi yaklaşımlar, kişisel gelişim ve zihinsel sağlık alanlarında bireylerin düşünce kalıplarını değiştirmelerine ve daha etkili başa çıkma stratejileri geliştirmelerine yardımcı olmaktadır."
    ]
};

// ==================== GAME STATE ====================
let gameState = {
    currentLevel: null,
    currentText: "",
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeLeft: 60,
    isGameActive: false,
    typedChars: 0,
    correctChars: 0,
    incorrectChars: 0,
    currentIndex: 0
};

// ==================== DOM ELEMENTS ====================
const difficultySection = document.getElementById('difficultySection');
const gameSection = document.getElementById('gameSection');
const resultsSection = document.getElementById('resultsSection');
const highscoresSection = document.getElementById('highscoresSection');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');

const restartBtn = document.getElementById('restartBtn');
const changeLevelBtn = document.getElementById('changeLevelBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');

const finalWpm = document.getElementById('finalWpm');
const finalAccuracy = document.getElementById('finalAccuracy');
const totalChars = document.getElementById('totalChars');
const errorCount = document.getElementById('errorCount');

const tabButtons = document.querySelectorAll('.tab-btn');
const highscoresList = document.getElementById('highscoresList');

// ==================== INITIALIZE APP ====================
function initApp() {
    setupEventListeners();
    loadAndDisplayHighscores('easy');
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Difficulty selection
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            startGame(level);
        });
    });

    // Text input
    textInput.addEventListener('input', handleInput);
    textInput.addEventListener('paste', (e) => e.preventDefault());

    // Action buttons
    restartBtn.addEventListener('click', () => restartGame());
    changeLevelBtn.addEventListener('click', () => backToMenu());
    tryAgainBtn.addEventListener('click', () => startGame(gameState.currentLevel));
    backToMenuBtn.addEventListener('click', () => backToMenu());

    // Highscore tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            switchHighscoreTab(level);
        });
    });
}

// ==================== GAME FLOW ====================
function startGame(level) {
    gameState.currentLevel = level;
    gameState.currentText = getRandomText(level);
    resetGameState();
    
    difficultySection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
    
    renderText();
    textInput.value = '';
    textInput.disabled = false;
    textInput.focus();
}

function resetGameState() {
    gameState.startTime = null;
    gameState.endTime = null;
    gameState.timeLeft = 60;
    gameState.isGameActive = false;
    gameState.typedChars = 0;
    gameState.correctChars = 0;
    gameState.incorrectChars = 0;
    gameState.currentIndex = 0;
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    updateStats();
}

function restartGame() {
    startGame(gameState.currentLevel);
}

function backToMenu() {
    gameSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    difficultySection.classList.remove('hidden');
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
}

function endGame() {
    gameState.isGameActive = false;
    gameState.endTime = Date.now();
    textInput.disabled = true;
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    calculateFinalStats();
    saveScore();
    showResults();
}

// ==================== TEXT HANDLING ====================
function getRandomText(level) {
    const texts = textCollections[level];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function renderText() {
    textDisplay.innerHTML = '';
    for (let i = 0; i < gameState.currentText.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        charSpan.textContent = gameState.currentText[i];
        charSpan.setAttribute('data-index', i);
        textDisplay.appendChild(charSpan);
    }
}

// ==================== INPUT HANDLING ====================
function handleInput(e) {
    if (!gameState.isGameActive) {
        startTimer();
        gameState.isGameActive = true;
        gameState.startTime = Date.now();
    }
    
    const inputValue = e.target.value;
    const inputLength = inputValue.length;
    
    gameState.currentIndex = inputLength;
    gameState.typedChars = inputLength;
    
    // Reset all character classes
    const chars = textDisplay.querySelectorAll('.char');
    chars.forEach(char => {
        char.classList.remove('correct', 'incorrect', 'current');
    });
    
    // Mark typed characters
    let correctCount = 0;
    let incorrectCount = 0;
    
    for (let i = 0; i < inputLength; i++) {
        if (i < gameState.currentText.length) {
            if (inputValue[i] === gameState.currentText[i]) {
                chars[i].classList.add('correct');
                correctCount++;
            } else {
                chars[i].classList.add('incorrect');
                incorrectCount++;
            }
        }
    }
    
    // Mark current character
    if (inputLength < gameState.currentText.length) {
        chars[inputLength].classList.add('current');
    }
    
    gameState.correctChars = correctCount;
    gameState.incorrectChars = incorrectCount;
    
    updateStats();
    
    // Check if text is completed
    if (inputLength === gameState.currentText.length && incorrectCount === 0) {
        endGame();
    }
}

// ==================== TIMER ====================
function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        timerElement.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// ==================== STATISTICS ====================
function updateStats() {
    // Update timer
    timerElement.textContent = gameState.timeLeft;
    
    // Calculate WPM (words per minute)
    const elapsedMinutes = gameState.startTime 
        ? (Date.now() - gameState.startTime) / 60000 
        : 0;
    const wordsTyped = gameState.correctChars / 5; // Standard: 5 chars = 1 word
    const currentWpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;
    wpmElement.textContent = currentWpm;
    
    // Calculate accuracy
    const totalTyped = gameState.typedChars;
    const accuracy = totalTyped > 0 
        ? Math.round((gameState.correctChars / totalTyped) * 100) 
        : 100;
    accuracyElement.textContent = `${accuracy}%`;
}

function calculateFinalStats() {
    const elapsedMinutes = (gameState.endTime - gameState.startTime) / 60000;
    const wordsTyped = gameState.correctChars / 5;
    const finalWpmValue = Math.round(wordsTyped / elapsedMinutes);
    
    const totalTyped = gameState.typedChars;
    const accuracyValue = totalTyped > 0 
        ? Math.round((gameState.correctChars / totalTyped) * 100) 
        : 100;
    
    // Store final stats
    gameState.finalWpm = finalWpmValue;
    gameState.finalAccuracy = accuracyValue;
}

function showResults() {
    gameSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    finalWpm.textContent = gameState.finalWpm;
    finalAccuracy.textContent = gameState.finalAccuracy;
    totalChars.textContent = gameState.correctChars;
    errorCount.textContent = gameState.incorrectChars;
}

// ==================== LOCAL STORAGE ====================
function saveScore() {
    const score = {
        wpm: gameState.finalWpm,
        accuracy: gameState.finalAccuracy,
        correctChars: gameState.correctChars,
        incorrectChars: gameState.incorrectChars,
        level: gameState.currentLevel,
        date: new Date().toISOString(),
        timestamp: Date.now()
    };
    
    // Get existing scores
    const scores = getScores();
    
    // Add new score
    scores.push(score);
    
    // Sort by WPM (descending), then by accuracy
    scores.sort((a, b) => {
        if (b.wpm !== a.wpm) {
            return b.wpm - a.wpm;
        }
        return b.accuracy - a.accuracy;
    });
    
    // Keep only top 10 scores per level
    const levelScores = scores.filter(s => s.level === gameState.currentLevel);
    const topLevelScores = levelScores.slice(0, 10);
    
    // Get scores from other levels
    const otherScores = scores.filter(s => s.level !== gameState.currentLevel);
    
    // Combine and save
    const finalScores = [...topLevelScores, ...otherScores];
    localStorage.setItem('typeSpeedScores', JSON.stringify(finalScores));
    
    // Update highscores display
    loadAndDisplayHighscores(gameState.currentLevel);
}

function getScores() {
    const scoresJson = localStorage.getItem('typeSpeedScores');
    return scoresJson ? JSON.parse(scoresJson) : [];
}

function getScoresByLevel(level) {
    const scores = getScores();
    return scores
        .filter(score => score.level === level)
        .sort((a, b) => {
            if (b.wpm !== a.wpm) {
                return b.wpm - a.wpm;
            }
            return b.accuracy - a.accuracy;
        })
        .slice(0, 10);
}

// ==================== HIGHSCORES DISPLAY ====================
function loadAndDisplayHighscores(level) {
    const scores = getScoresByLevel(level);
    displayHighscores(scores);
}

function displayHighscores(scores) {
    if (scores.length === 0) {
        highscoresList.innerHTML = '<p class="no-scores">Henüz skor bulunmuyor. İlk skorunu kaydet!</p>';
        return;
    }
    
    highscoresList.innerHTML = '';
    
    scores.forEach((score, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.classList.add('score-item');
        
        const date = new Date(score.date);
        const formattedDate = date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
        scoreItem.innerHTML = `
            <div class="score-rank">#${index + 1}</div>
            <div class="score-details">
                <div class="score-detail">
                    <span class="score-detail-label">WPM</span>
                    <span class="score-detail-value">${score.wpm}</span>
                </div>
                <div class="score-detail">
                    <span class="score-detail-label">Doğruluk</span>
                    <span class="score-detail-value">${score.accuracy}%</span>
                </div>
                <div class="score-detail">
                    <span class="score-detail-label">Doğru</span>
                    <span class="score-detail-value">${score.correctChars}</span>
                </div>
                <div class="score-detail">
                    <span class="score-detail-label">Hata</span>
                    <span class="score-detail-value">${score.incorrectChars}</span>
                </div>
            </div>
            <div class="score-date">${formattedDate}</div>
        `;
        
        highscoresList.appendChild(scoreItem);
    });
}

function switchHighscoreTab(level) {
    // Update tab buttons
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-level') === level) {
            btn.classList.add('active');
        }
    });
    
    // Load and display scores for selected level
    loadAndDisplayHighscores(level);
}

// ==================== INITIALIZE APP ON LOAD ====================
document.addEventListener('DOMContentLoaded', initApp);

