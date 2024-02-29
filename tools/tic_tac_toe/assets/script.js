const messageElement = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function handleCellClick(event) {
    if (!gameActive) return;

    const clickedCell = event.target;
    const cellIndex = parseInt(clickedCell.dataset.index);

    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        const winner = checkWinner();
        if (winner) {
            messageElement.textContent = `Player ${winner} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            messageElement.textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageElement.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}