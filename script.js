// Core game values
const GOAL = 100; // Number of pumps needed to win
let score = 0;

// Cached DOM elements
const scoreEl = document.getElementById('score');
const percentEl = document.getElementById('percent');
const tankFillEl = document.getElementById('tankFill');
const pumpButton = document.getElementById('pumpButton');
const resetButton = document.getElementById('resetButton');
const winMessage = document.getElementById('winMessage');

/**
 * Update the score display and the tank fill progress.
 */
function updateUI() {
  scoreEl.textContent = score;

  const percent = Math.min(100, Math.round((score / GOAL) * 100));
  percentEl.textContent = `${percent}%`;
  tankFillEl.style.width = `${percent}%`;

  // Show win message when goal reached
  if (score >= GOAL) {
    winMessage.style.display = 'block';
    pumpButton.disabled = true;
    pumpButton.textContent = 'Goal reached!';
  } else {
    winMessage.style.display = 'none';
    pumpButton.disabled = false;
    pumpButton.textContent = 'Pump Water 💧';
  }
}

/**
 * Handle a single pump action.
 */
function handlePump() {
  if (score >= GOAL) return;

  score += 1;
  updateUI();
}

/**
 * Reset the game back to the starting state.
 */
function handleReset() {
  score = 0;
  updateUI();
}

// Wire up event listeners
pumpButton.addEventListener('click', handlePump);
resetButton.addEventListener('click', handleReset);

// Initialize the UI the first time
updateUI();
