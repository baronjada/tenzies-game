# Tenzies

Tenzies is a single-player dice game built in React as a personal project to sharpen my frontend development skills through a fun, interactive use case.

![Tenzies gameplay demo](assets/tenzies-live-demo.gif)

## 🔗 Live Demo

[View it live](https://tenzies-baronjada.netlify.app/)

## 📖 About

The goal is simple - roll 10 dice and hold the ones you want to keep, rerolling the rest until all 10 show the same number. I built this as a way to practise React fundamentals like state management, component architecture and handling user interactions in a fun, game-based context.

## 🛠 Tech Stack

- **React** – UI framework
- **Vite** – build tool
- **nanoid** – Unique ID generation for die components

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/baronjada/tenzies-game

# Navigate into the project
cd tenzies-game

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173` (or the port shown in your terminal).

## 📁 Project Structure

tenzies-game/
├── assets/
│ └── tenzies-live-demo.gif # Gameplay demo recording
├── components/
│ └── Die.jsx # Individual die component — handles display and hold state styling
├── App.jsx # Main game logic — state management, roll/hold/win logic
├── index.jsx # Entry point — renders App to the DOM
├── index.css # Global styles — game board layout, die styling, responsive design
├── index.html # HTML shell
├── vite.config.js # Vite configuration
├── eslint.config.js # Linting rules
└── package.json # Dependencies and scripts

## 🧠 What I Learned

- **State management with `useState`** - managing an array of die objects, each with their own `value` and `isHeld` properties, and updating individual dice immutably using spread syntax and `.map()`
- **Side effects with `useEffect`** - checking for a win condition every time the dice state changes by evaluating whether all dice are held and share the same value
- **Component architecture** - extracting the `Die` component to keep rendering logic separate from game logic, and passing data and event handlers down as props
- **Conditional rendering** - toggling button text between "Roll" and "New Game" based on win state, and applying dynamic styling to held vs unheld dice
- **Lazy state initialisation** - using a function to generate the initial dice array so it only runs once on mount rather than on every render
- **Accessibility considerations** - ensuring interactive elements are keyboard-accessible and the game state is communicated clearly

## 🔮 Future Improvements

- Roll counter to track how many rolls it takes to win
- Timer to track how quickly a player can complete the game
- Best score tracking using localStorage
- Animated dice roll transitions
- Convert to TypeScript for type safety

## 📄 License

MIT © [Jada Baron](https://github.com/baronjada)
