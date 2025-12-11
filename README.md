# ⚡ Type Speed Test

A modern, user-friendly typing speed test application. Measure your typing speed (WPM) and accuracy, track your progress across multiple difficulty levels!

[![Created by Serkanby](https://img.shields.io/badge/Created%20by-Serkanby-blue?style=flat-square)](https://serkanbayraktar.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Serkanbyx-181717?style=flat-square&logo=github)](https://github.com/Serkanbyx)

## Features

- **3 Difficulty Levels**: Choose from Easy, Medium, and Hard levels with 10 unique texts each
- **Real-Time Statistics**: Live WPM (Words Per Minute), accuracy percentage, and time tracking
- **Visual Feedback**: Instant character-by-character highlighting (green for correct, red for incorrect)
- **Score System**: Persistent local storage keeps your top 10 scores per difficulty level
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, minimal interface with smooth animations and gradient theme
- **Detailed Results**: Comprehensive performance analysis after each test

## Live Demo

[🎮 View Live Demo](https://type-speed-testt.netlify.app/)

## Screenshots

### Main Screen

Modern and intuitive difficulty level selection interface

### Game Screen

Real-time statistics display with character-by-character feedback

### Results Screen

Detailed performance analysis with WPM, accuracy, and error metrics

## Technologies

- **HTML5**: Semantic and accessible markup
- **CSS3**: Modern CSS features including Grid, Flexbox, and smooth Animations
- **Vanilla JavaScript (ES6+)**: Pure JavaScript with modern features, no dependencies
- **LocalStorage API**: Client-side data persistence for high scores

## Installation

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/Serkanbyx/type-speed-test.git
cd type-speed-test
```

2. Run with a web server:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**

```bash
npx http-server -p 8000
```

**Using VS Code Live Server** extension: Simply right-click on `index.html` and select "Open with Live Server"

3. Open in your browser: `http://localhost:8000`

## Usage

1. **Select Difficulty**: Choose Easy, Medium, or Hard difficulty level
2. **Start Typing**: Begin typing the displayed text in the input area
3. **Real-Time Feedback**: Watch your WPM and accuracy update as you type
4. **Complete Test**: Finish within 60 seconds or complete the entire text
5. **View Results**: See your detailed performance metrics and saved scores

## How It Works?

### WPM (Words Per Minute) Calculation

```
WPM = (Correct Characters / 5) / Elapsed Minutes
```

Standard: 5 characters = 1 word

### Accuracy Calculation

```
Accuracy (%) = (Correct Characters / Total Typed Characters) × 100
```

### Difficulty Levels

- **🟢 Easy**: Short and simple daily sentences (15-40 characters)
- **🟡 Medium**: Normal length texts (50-100 characters)
- **🔴 Hard**: Long and complex technical sentences (150-300 characters)

## Customization

### Add Your Own Texts

Edit the `textCollections` object in `script.js` to add custom texts:

```javascript
const textCollections = {
  easy: [
    "Your easy sentence...",
    // Add more
  ],
  medium: ["Your medium sentence..."],
  hard: ["Your hard sentence..."],
};
```

### Change Timer Duration

Modify the `timeLeft` value in `script.js` to adjust test duration:

```javascript
resetGameState() {
    // ...
    gameState.timeLeft = 60; // Time in seconds
    // ...
}
```

### Customize Color Theme

Edit the `:root` variables in `style.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --success-color: #10b981;
  --error-color: #ef4444;
  /* ... */
}
```

## Features in Detail

### ✅ Completed Features

- ✅ Difficulty level selection (Easy/Medium/Hard)
- ✅ 60-second timer with automatic game state management
- ✅ Real-time WPM calculation
- ✅ Accuracy percentage tracking
- ✅ Character-by-character correct/incorrect highlighting
- ✅ LocalStorage score persistence
- ✅ Level-based top 10 leaderboards
- ✅ Responsive design for all devices
- ✅ Detailed results screen
- ✅ Accessibility features (semantic HTML, keyboard navigation)

### 🔮 Future Features (Optional)

- [ ] Multi-language support
- [ ] Custom test durations (30s, 60s, 120s)
- [ ] Dark/Light theme toggle
- [ ] Sound effects
- [ ] Keyboard keystroke animations
- [ ] Progress tracking with charts
- [ ] Multiple user profiles
- [ ] Social media sharing

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Format

- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code improvement
- `docs:` Documentation changes
- `style:` Code formatting
- `chore:` Other changes

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Developer

**Serkan Bayraktar**

- Website: [serkanbayraktar.com](https://serkanbayraktar.com/)
- GitHub: [@Serkanbyx](https://github.com/Serkanbyx)
- Email: serkanbyx1@gmail.com

## Acknowledgments

Resources used in developing this project:

- Fonts: System Fonts (Inter, SF Pro, Segoe UI)
- Icons: Unicode Emoji
- Color Palette: Tailwind CSS Inspired

## Contact

For questions or suggestions:

- Open an issue: [GitHub Issues](https://github.com/Serkanbyx/type-speed-test/issues)
- Email: serkanbyx1@gmail.com
- Website: [serkanbayraktar.com](https://serkanbayraktar.com/)

---

⭐ If you like this project, don't forget to give it a star!
