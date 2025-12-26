# ⚡ Type Speed Test

A modern, user-friendly typing speed test application. Measure your typing speed (WPM) and accuracy, track your progress with high scores, and improve your typing skills!

[![Created by Serkanby](https://img.shields.io/badge/Created%20by-Serkanby-blue?style=flat-square)](https://serkanbayraktar.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Serkanbyx-181717?style=flat-square&logo=github)](https://github.com/Serkanbyx)

## Features

- **3 Difficulty Levels**: Choose from Easy, Medium, and Hard levels with varying text complexity
- **Customizable Duration**: Select test duration (30s, 60s, 90s, or 120s) based on your preference
- **Real-Time Statistics**: Live WPM (Words Per Minute), accuracy percentage, and countdown timer
- **Visual Feedback**: Instant character-by-character highlighting showing correct (green) and incorrect (red) typing
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable typing in any environment
- **Sound Effects**: Audio feedback for keystrokes, errors, and completion with toggle option
- **High Score System**: Local storage saves your top 10 scores per difficulty level
- **Progressive Web App (PWA)**: Install on mobile or desktop for offline use
- **Responsive Design**: Optimized for all devices from mobile phones to large desktop screens
- **Celebration Effects**: Confetti animation on successful test completion

## Live Demo

[🎮 View Live Demo](https://serkanbyx.github.io/s1.3_Type-Speed-Test/)

## Technologies

- **HTML5**: Semantic and accessible markup structure
- **CSS3**: Modern CSS features including Grid, Flexbox, CSS Variables, and smooth animations
- **Vanilla JavaScript (ES6+)**: Pure JavaScript with modern features like arrow functions, template literals, and modules
- **LocalStorage API**: Persistent data storage for high scores and user preferences
- **Service Worker**: PWA support for offline functionality and app-like experience
- **Web Audio API**: Custom synthesized sound effects without external audio files
- **Canvas Confetti**: Celebration particle effects on test completion

## Installation

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/Serkanbyx/s1.3_Type-Speed-Test.git
```

2. Navigate to the project directory:

```bash
cd s1.3_Type-Speed-Test
```

3. Open with a local server:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**

```bash
npx serve
```

**Using VS Code:**

- Install "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

4. Open your browser and navigate to `http://localhost:8000` (or the port shown by your server)

## Usage

1. **Select Difficulty**: Choose Easy, Medium, or Hard based on your skill level
2. **Set Duration**: Pick your preferred test duration (30s, 60s, 90s, or 120s)
3. **Click Difficulty Button**: Start the game by clicking on your chosen difficulty
4. **Start Typing**: Click the input area and begin typing the displayed text
5. **Track Progress**: Watch your WPM and accuracy update in real-time
6. **Complete Test**: Finish when timer ends or complete the text perfectly
7. **View Results**: See your final WPM, accuracy, total characters, and error count
8. **Check High Scores**: View your best performances in the High Scores section

## How It Works?

### WPM Calculation

Words Per Minute is calculated using the standard formula where 5 characters equal one word:

```javascript
const wordsTyped = correctCharacters / 5;
const elapsedMinutes = elapsedTime / 60000; // Convert milliseconds to minutes
const wpm = Math.round(wordsTyped / elapsedMinutes);
```

### Accuracy Calculation

Accuracy percentage is based on correctly typed characters versus total typed characters:

```javascript
const accuracy = Math.round((correctCharacters / totalTypedCharacters) * 100);
```

### Character Validation

Each character is validated in real-time as you type:

```javascript
if (inputValue[i] === targetText[i]) {
  // Mark as correct (green)
} else {
  // Mark as incorrect (red)
}
```

## Customization

### Add Your Own Texts

Edit the `textCollections` object in `script.js` to add custom sentences:

```javascript
const textCollections = {
  easy: ["Your custom easy text here.", "Another simple sentence."],
  medium: ["Your medium difficulty text with more complexity."],
  hard: ["Your challenging text with advanced vocabulary and structure."],
};
```

### Change Theme Colors

Modify CSS variables in `style.css` to customize the color scheme:

```css
:root {
  --primary-color: #6366f1; /* Main accent color */
  --success-color: #10b981; /* Correct character color */
  --error-color: #ef4444; /* Incorrect character color */
  --bg-color: #0f172a; /* Background color */
}
```

### Adjust Sound Settings

Customize sound frequencies in the `playSound` function in `script.js`:

```javascript
case 'keypress':
    oscillator.frequency.value = 800;  // Pitch (Hz)
    gainNode.gain.value = 0.05;        // Volume (0-1)
    break;
```

## Features in Detail

### Completed Features

✅ Three difficulty levels with appropriate text complexity  
✅ Four customizable test durations  
✅ Real-time WPM and accuracy calculation  
✅ Character-by-character visual feedback  
✅ Dark and light theme support  
✅ Toggleable sound effects  
✅ High score leaderboard with local storage  
✅ PWA support for offline use  
✅ Responsive design for all devices  
✅ Confetti celebration on completion  
✅ Keyboard sound feedback  
✅ Error sound indication

### Future Features

- [ ] Custom text input mode
- [ ] Multiplayer racing mode
- [ ] Cloud sync for high scores
- [ ] Typing lessons and tutorials
- [ ] Detailed analytics and progress charts
- [ ] Multiple language support
- [ ] Keyboard heatmap visualization

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** your feature branch:

```bash
git checkout -b feat/amazing-feature
```

3. **Commit** your changes with descriptive messages:

```bash
git commit -m "feat: add amazing feature"
```

4. **Push** to the branch:

```bash
git push origin feat/amazing-feature
```

5. **Open** a Pull Request

### Commit Message Format

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developer

**Serkan Bayraktar**

- 🌐 Website: [serkanbayraktar.com](https://serkanbayraktar.com/)
- 💻 GitHub: [@Serkanbyx](https://github.com/Serkanbyx)
- 📧 Email: [serkanbyx1@gmail.com](mailto:serkanbyx1@gmail.com)

## Acknowledgments

- [Canvas Confetti](https://github.com/catdad/canvas-confetti) - Celebration particle effects
- [Shields.io](https://shields.io/) - README badges
- [Lucide Icons](https://lucide.dev/) - SVG icon inspiration
- [Inter Font](https://rsms.me/inter/) - Typography

## Contact

Have questions or suggestions? Feel free to reach out!

- 🐛 [Open an Issue](https://github.com/Serkanbyx/s1.3_Type-Speed-Test/issues)
- 📧 Email: [serkanbyx1@gmail.com](mailto:serkanbyx1@gmail.com)
- 🌐 Website: [serkanbayraktar.com](https://serkanbayraktar.com/)

---

⭐ If you like this project, don't forget to give it a star!
