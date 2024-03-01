const words = ['hangman', 'javascript', 'developer', 'programming', 'html', 'css', 'code'];
const selectedWord = words[Math.floor(Math.random() * words.length)];
const wordDisplay = document.getElementById('word-display');
const guessInput = document.getElementById('guess-input');
const feedback = document.getElementById('feedback');
const attemptsLeft = document.getElementById('attempts-left');

let displayedWord = Array(selectedWord.length).fill('_');
let attempts = 6;
attemptsLeft.textContent = attempts;

function updateWordDisplay() {
    wordDisplay.textContent = displayedWord.join(' ');
}

function makeGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (guess.length !== 1 || !/^[a-z]$/.test(guess)) {
        feedback.textContent = 'Enter a valid single letter.';
        return;
    }

    if (selectedWord.includes(guess)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
                displayedWord[i] = guess;
            }
        }
    } else {
        attempts--;
        feedback.textContent = 'Incorrect guess. Try again.';
        attemptsLeft.textContent = attempts;
    }

    updateWordDisplay();

    if (displayedWord.join('') === selectedWord) {
        feedback.textContent = 'Congratulations! You guessed the word!';
        feedback.style.color = 'green';
        guessInput.disabled = true;
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } else if (attempts === 0) {
        feedback.textContent = `Game over. The word was "${selectedWord}".`;
        guessInput.disabled = true;
    }
}

updateWordDisplay();