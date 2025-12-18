# Basic HTML, CSS, and JavaScript Projects

A collection of beginner-friendly web development projects built with vanilla HTML, CSS, and JavaScript. These projects are perfect for learning front-end web development fundamentals and practicing core web technologies.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation Guide](#installation-guide)
- [Projects](#projects)
- [Usage Examples](#usage-examples)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 📌 Project Overview

This repository contains multiple beginner-level web projects that demonstrate practical applications of HTML5, CSS3, and vanilla JavaScript. Each project is self-contained and focuses on specific web development concepts and best practices.

**Key Learning Outcomes:**
- DOM manipulation with vanilla JavaScript
- Responsive design with CSS3
- HTML5 semantic markup
- Event handling and user interactions
- ES6 JavaScript concepts
- Web storage and persistence

## 🛠️ Tech Stack

### Core Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, flexbox, grid, and animations
- **JavaScript (ES6+)**: Vanilla JS without frameworks
- **LocalStorage**: For data persistence

### Development Tools
- Code Editor: VS Code, Sublime Text, or any text editor
- Browser: Chrome, Firefox, Safari, or Edge
- Version Control: Git & GitHub

### Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 💻 Installation Guide

### Prerequisites
- A modern web browser installed
- Basic knowledge of HTML, CSS, and JavaScript
- Code editor (optional, for viewing/editing source code)
- Git installed (optional, for cloning)

### Step 1: Clone the Repository

```bash
git clone https://github.com/CharanKocharla13/Basic-HTML-CSS-JavaScript-Projects.git
```

### Step 2: Navigate to Project Directory

```bash
cd Basic-HTML-CSS-JavaScript-Projects
```

### Step 3: Choose a Project

```bash
cd project-name
```

### Step 4: Run the Project

**Option A: Using a Local Server (Recommended)**

If you have Python installed:
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

**Option B: Direct File Opening**

Simply double-click the `index.html` file in your file explorer, or right-click and select "Open with" your preferred browser.

**Option C: Using Live Server (VS Code)**

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📂 Projects

### 1. **To-Do List Application**
A feature-rich task management application with add, delete, and mark complete functionality.

**Features:**
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- LocalStorage persistence
- Responsive design

**Technologies:** HTML5, CSS3, Vanilla JavaScript, LocalStorage

**Quick Start:**
```bash
cd todo-list
open index.html
```

---

### 2. **Calculator**
A fully functional calculator supporting basic arithmetic operations.

**Features:**
- Basic arithmetic operations (+, -, *, /)
- Decimal support
- Clear functionality
- Keyboard support
- Error handling

**Technologies:** HTML5, CSS3, Vanilla JavaScript

**Quick Start:**
```bash
cd calculator
open index.html
```

---

### 3. **Digital Clock**
A real-time digital clock displaying current time with various formats.

**Features:**
- Real-time clock display
- 12-hour and 24-hour format toggle
- Analog clock display (optional)
- Date display
- Auto-update every second

**Technologies:** HTML5, CSS3, Vanilla JavaScript, Date API

**Quick Start:**
```bash
cd digital-clock
open index.html
```

---

### 4. **Weather Application**
Displays current weather information based on user location or city search.

**Features:**
- Search weather by city name
- Display temperature, humidity, and wind speed
- Weather icons and descriptions
- Responsive layout
- Error handling for invalid cities

**Technologies:** HTML5, CSS3, Vanilla JavaScript, Weather API

**Quick Start:**
```bash
cd weather-app
open index.html
```

---

### 5. **Quiz Game**
An interactive quiz application with multiple-choice questions.

**Features:**
- Multiple choice questions
- Score tracking
- Progress indicator
- Immediate feedback
- Result summary
- LocalStorage for scores

**Technologies:** HTML5, CSS3, Vanilla JavaScript, LocalStorage

**Quick Start:**
```bash
cd quiz-game
open index.html
```

---

### 6. **Color Palette Generator**
Generate random color palettes with hex and RGB values.

**Features:**
- Generate random color palettes
- Copy color codes to clipboard
- Lock specific colors
- Export palette
- Multiple color formats (Hex, RGB, HSL)

**Technologies:** HTML5, CSS3, Vanilla JavaScript, Clipboard API

**Quick Start:**
```bash
cd color-palette
open index.html
```

---

### 7. **Stop Watch**
A functional stopwatch with start, pause, and reset controls.

**Features:**
- Start/Pause/Resume functionality
- Reset to zero
- Lap recording
- Millisecond precision
- Display lap times

**Technologies:** HTML5, CSS3, Vanilla JavaScript

**Quick Start:**
```bash
cd stopwatch
open index.html
```

---

### 8. **Tic Tac Toe Game**
A classic Tic Tac Toe game playable against AI or another player.

**Features:**
- Player vs Player mode
- Player vs AI mode
- Win detection
- Draw detection
- Reset game
- Score tracking

**Technologies:** HTML5, CSS3, Vanilla JavaScript, Game Logic

**Quick Start:**
```bash
cd tic-tac-toe
open index.html
```

---

## 📖 Usage Examples

### Example 1: Using the To-Do List

1. Open `todo-list/index.html` in your browser
2. Enter a task in the input field
3. Click "Add Task" or press Enter
4. Click the checkmark to mark as complete
5. Click the trash icon to delete a task
6. Tasks are automatically saved to your browser

```javascript
// Sample code snippet
const addTask = (taskText) => {
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };
  tasks.push(task);
  saveTasks();
};
```

### Example 2: Using the Calculator

1. Open `calculator/index.html` in your browser
2. Click numbers to input them
3. Click an operation button (+, -, *, /)
4. Enter the second number
5. Click "=" to see the result
6. Click "C" to clear

```javascript
// Sample code snippet
const calculate = (firstNum, operator, secondNum) => {
  switch(operator) {
    case '+': return firstNum + secondNum;
    case '-': return firstNum - secondNum;
    case '*': return firstNum * secondNum;
    case '/': return secondNum !== 0 ? firstNum / secondNum : 'Error';
  }
};
```

### Example 3: Using the Quiz Game

1. Open `quiz-game/index.html` in your browser
2. Read the question carefully
3. Select one of the four options
4. Click "Next" to proceed to the next question
5. View your final score at the end
6. Click "Restart" to play again

```javascript
// Sample code snippet
const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    score += 10;
    return true;
  }
  return false;
};
```

### Example 4: Using the Weather App

1. Open `weather-app/index.html` in your browser
2. Allow location access (for current location weather)
3. Or enter a city name in the search box
4. Press Enter or click Search
5. View current weather details

```javascript
// Sample code snippet
const fetchWeather = async (city) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}`);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 📁 Project Structure

```
Basic-HTML-CSS-JavaScript-Projects/
│
├── README.md
├── LICENSE
│
├── todo-list/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── calculator/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── digital-clock/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── weather-app/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── quiz-game/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── questions.js
│
├── color-palette/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── stopwatch/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── tic-tac-toe/
    ├── index.html
    ├── style.css
    └── script.js
```

## 🎯 Learning Outcomes

By exploring these projects, you will learn:

### HTML5
- Semantic markup
- Form elements
- Input validation
- Canvas and SVG basics

### CSS3
- Flexbox and Grid layouts
- Animations and transitions
- Responsive design
- CSS variables
- Media queries

### JavaScript
- DOM manipulation
- Event listeners
- Array and object methods
- LocalStorage API
- Async/Await and Fetch
- ES6 features (arrow functions, destructuring, etc.)
- Game logic and algorithms

## 🚀 Getting Started Tips

1. **Start Simple**: Begin with the Calculator or Digital Clock projects
2. **Read the Code**: Understand how each project works by examining the source code
3. **Experiment**: Modify the projects and see how changes affect the outcome
4. **Combine Concepts**: Try creating hybrid projects combining features from multiple projects
5. **Add Features**: Extend projects with new functionality

## 📝 Common Issues & Solutions

### Issue: "File not loading" when opening HTML directly
**Solution:** Use a local server instead of opening files directly in the browser

### Issue: "API not working" in Weather App
**Solution:** Check your internet connection and API key if using an external API

### Issue: "LocalStorage not persisting"
**Solution:** Make sure you're not in private/incognito mode and the browser allows storage

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some improvement'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

## 📚 Resources for Learning

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [HTML5 Spec](https://html.spec.whatwg.org/)
- [Web APIs Documentation](https://developer.mozilla.org/en-US/docs/Web/API)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Charan Kocharla**
- GitHub: [@CharanKocharla13](https://github.com/CharanKocharla13)

## 🙏 Acknowledgments

- Thanks to all learners and contributors
- Inspired by practical web development needs
- Built with ❤️ for the community

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the FAQ section above
2. Review the code comments in each project
3. Open an issue on GitHub
4. Feel free to reach out via GitHub discussions

---

**Happy Coding! 🎉**

Last Updated: December 18, 2025
