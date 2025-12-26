// ==================== TEXT COLLECTIONS ====================
const textCollections = {
    easy: [
        "The sun is shining beautifully today.",
        "Breakfast is an important meal.",
        "Reading books is a great habit.",
        "Listening to music relaxes the soul.",
        "Exercise is beneficial for health.",
        "Drinking water is important for the body.",
        "Spending time with friends is enjoyable.",
        "Taking a walk is good for you.",
        "Flowers make the garden beautiful.",
        "Smiling makes people happy."
    ],
    medium: [
        "Technology is affecting and changing our lives more and more every day.",
        "Getting regular sleep is very important for both physical and mental health.",
        "Learning programming is a process that requires patience and consistent practice.",
        "Reading a good book can take you to different worlds and develop your imagination.",
        "Healthy eating and regular exercise significantly improve quality of life.",
        "Developing communication skills is the key to success in personal and professional life.",
        "Gaining time management skills increases productivity and reduces stress.",
        "Learning a new language contributes to brain development and helps understand different cultures.",
        "Thinking positively and being optimistic makes it easier to cope with life's challenges.",
        "Meditation and breathing exercises are effective methods for maintaining mental health."
    ],
    hard: [
        "Artificial intelligence and machine learning technologies are transforming industries and fundamentally changing the way we work, creating new opportunities while also bringing some challenges.",
        "Sustainable development goals provide a comprehensive framework that brings together environmental, economic, and social dimensions, aiming to ensure that future generations can meet their needs.",
        "Quantum computers have the potential to solve complex problems that classical computers cannot, and are expected to revolutionize fields such as cryptography, drug development, and artificial intelligence.",
        "Environmental issues such as climate change, global warming, biodiversity loss, and depletion of natural resources are among the most urgent and critical challenges facing humanity.",
        "Advances in neuroscience and psychology help us understand the complex structure of the human brain and the phenomenon of consciousness, while also making us rethink the relationship between AI and human intelligence.",
        "Blockchain technology and decentralized systems have the potential to transform traditional financial structures, creating new paradigms in security, transparency, and data integrity.",
        "Genetic engineering and CRISPR technology hold great promise for treating diseases and increasing agricultural productivity, while also raising serious ethical and safety debates.",
        "Space exploration and colonization projects aim to realize the vision of humanity becoming a multi-planetary species, while also raising many technological, economic, and ethical questions.",
        "Digital transformation processes increase the operational efficiency of businesses while requiring employees to redefine their skill sets and embrace a culture of continuous learning.",
        "Approaches such as neurolinguistic programming and cognitive behavioral therapy help individuals change their thought patterns and develop more effective coping strategies in personal development and mental health."
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
    selectedDuration: 60,
    isGameActive: false,
    typedChars: 0,
    correctChars: 0,
    incorrectChars: 0,
    currentIndex: 0
};

// ==================== APP SETTINGS ====================
let appSettings = {
    theme: 'dark',
    soundEnabled: true
};

// ==================== AUDIO CONTEXT ====================
let audioContext = null;

// ==================== DOM ELEMENTS ====================
const difficultySection = document.getElementById('difficultySection');
const gameSection = document.getElementById('gameSection');
const resultsSection = document.getElementById('resultsSection');
const highscoresSection = document.getElementById('highscoresSection');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const durationButtons = document.querySelectorAll('.duration-btn');
const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');

const themeToggle = document.getElementById('themeToggle');
const soundToggle = document.getElementById('soundToggle');

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
    loadSettings();
    applyTheme();
    updateSoundIcon();
    setupEventListeners();
    loadAndDisplayHighscores('easy');
    registerServiceWorker();
}

// ==================== SERVICE WORKER REGISTRATION ====================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then((registration) => {
                    console.log('ServiceWorker registered:', registration.scope);
                })
                .catch((error) => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
}

// ==================== THEME MANAGEMENT ====================
function loadSettings() {
    const savedTheme = localStorage.getItem('typeSpeedTheme');
    const savedSound = localStorage.getItem('typeSpeedSound');
    
    if (savedTheme) {
        appSettings.theme = savedTheme;
    }
    
    if (savedSound !== null) {
        appSettings.soundEnabled = savedSound === 'true';
    }
}

function saveSettings() {
    localStorage.setItem('typeSpeedTheme', appSettings.theme);
    localStorage.setItem('typeSpeedSound', String(appSettings.soundEnabled));
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', appSettings.theme);
    const moonIcon = themeToggle.querySelector('.icon-moon');
    const sunIcon = themeToggle.querySelector('.icon-sun');
    
    if (appSettings.theme === 'dark') {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}

function toggleTheme() {
    appSettings.theme = appSettings.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveSettings();
    playSound('click');
}

// ==================== SOUND MANAGEMENT ====================
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function updateSoundIcon() {
    const volumeOn = soundToggle.querySelector('.icon-volume-on');
    const volumeOff = soundToggle.querySelector('.icon-volume-off');
    
    if (appSettings.soundEnabled) {
        volumeOn.classList.remove('hidden');
        volumeOff.classList.add('hidden');
    } else {
        volumeOn.classList.add('hidden');
        volumeOff.classList.remove('hidden');
    }
    soundToggle.classList.toggle('muted', !appSettings.soundEnabled);
}

function toggleSound() {
    appSettings.soundEnabled = !appSettings.soundEnabled;
    updateSoundIcon();
    saveSettings();
    
    if (appSettings.soundEnabled) {
        playSound('click');
    }
}

function playSound(type) {
    if (!appSettings.soundEnabled) return;
    
    try {
        const ctx = initAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        switch (type) {
            case 'keypress':
                oscillator.frequency.value = 800;
                gainNode.gain.value = 0.05;
                oscillator.type = 'sine';
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.05);
                break;
                
            case 'error':
                oscillator.frequency.value = 200;
                gainNode.gain.value = 0.1;
                oscillator.type = 'square';
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.1);
                break;
                
            case 'success':
                oscillator.frequency.value = 523.25; // C5
                gainNode.gain.value = 0.1;
                oscillator.type = 'sine';
                oscillator.start();
                
                setTimeout(() => {
                    const osc2 = ctx.createOscillator();
                    const gain2 = ctx.createGain();
                    osc2.connect(gain2);
                    gain2.connect(ctx.destination);
                    osc2.frequency.value = 659.25; // E5
                    gain2.gain.value = 0.1;
                    osc2.type = 'sine';
                    osc2.start();
                    osc2.stop(ctx.currentTime + 0.15);
                }, 100);
                
                setTimeout(() => {
                    const osc3 = ctx.createOscillator();
                    const gain3 = ctx.createGain();
                    osc3.connect(gain3);
                    gain3.connect(ctx.destination);
                    osc3.frequency.value = 783.99; // G5
                    gain3.gain.value = 0.1;
                    osc3.type = 'sine';
                    osc3.start();
                    osc3.stop(ctx.currentTime + 0.2);
                }, 200);
                
                oscillator.stop(ctx.currentTime + 0.15);
                break;
                
            case 'click':
                oscillator.frequency.value = 600;
                gainNode.gain.value = 0.05;
                oscillator.type = 'sine';
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.05);
                break;
                
            default:
                oscillator.frequency.value = 440;
                gainNode.gain.value = 0.05;
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.05);
        }
    } catch (e) {
        console.log('Audio not supported:', e);
    }
}

// ==================== CONFETTI ====================
function triggerConfetti() {
    if (typeof confetti === 'undefined') return;
    
    // First burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Left side
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
    }, 200);
    
    // Right side
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 400);
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Sound toggle
    soundToggle.addEventListener('click', toggleSound);
    
    // Difficulty selection
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            playSound('click');
            startGame(level);
        });
    });
    
    // Duration selection
    durationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const duration = parseInt(btn.getAttribute('data-duration'));
            selectDuration(duration);
            playSound('click');
        });
    });

    // Text input
    textInput.addEventListener('input', handleInput);
    textInput.addEventListener('paste', (e) => e.preventDefault());

    // Action buttons
    restartBtn.addEventListener('click', () => {
        playSound('click');
        restartGame();
    });
    changeLevelBtn.addEventListener('click', () => {
        playSound('click');
        backToMenu();
    });
    tryAgainBtn.addEventListener('click', () => {
        playSound('click');
        startGame(gameState.currentLevel);
    });
    backToMenuBtn.addEventListener('click', () => {
        playSound('click');
        backToMenu();
    });

    // Highscore tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            playSound('click');
            switchHighscoreTab(level);
        });
    });
}

// ==================== DURATION SELECTION ====================
function selectDuration(duration) {
    gameState.selectedDuration = duration;
    
    durationButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.getAttribute('data-duration')) === duration) {
            btn.classList.add('active');
        }
    });
}

// ==================== GAME FLOW ====================
function startGame(level) {
    gameState.currentLevel = level;
    gameState.currentText = getRandomText(level);
    gameState.timeLeft = gameState.selectedDuration;
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
    
    // Play success sound and trigger confetti
    playSound('success');
    triggerConfetti();
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
let lastInputLength = 0;

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
    let hasNewError = false;
    
    for (let i = 0; i < inputLength; i++) {
        if (i < gameState.currentText.length) {
            if (inputValue[i] === gameState.currentText[i]) {
                chars[i].classList.add('correct');
                correctCount++;
            } else {
                chars[i].classList.add('incorrect');
                incorrectCount++;
                // Check if this is a new error
                if (i === inputLength - 1 && inputLength > lastInputLength) {
                    hasNewError = true;
                }
            }
        }
    }
    
    // Play sound based on last character
    if (inputLength > lastInputLength) {
        if (hasNewError) {
            playSound('error');
        } else {
            playSound('keypress');
        }
    }
    
    lastInputLength = inputLength;
    
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
    timerElement.textContent = gameState.timeLeft;
    
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
    const finalWpmValue = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;
    
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
        duration: gameState.selectedDuration,
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
        highscoresList.innerHTML = '<p class="no-scores">No scores yet. Save your first score!</p>';
        return;
    }
    
    highscoresList.innerHTML = '';
    
    scores.forEach((score, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.classList.add('score-item');
        
        const date = new Date(score.date);
        const formattedDate = date.toLocaleDateString('en-US', {
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
                    <span class="score-detail-label">Accuracy</span>
                    <span class="score-detail-value">${score.accuracy}%</span>
                </div>
                <div class="score-detail">
                    <span class="score-detail-label">Correct</span>
                    <span class="score-detail-value">${score.correctChars}</span>
                </div>
                <div class="score-detail">
                    <span class="score-detail-label">Errors</span>
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
