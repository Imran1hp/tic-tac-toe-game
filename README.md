# tic-tac-toe-game
Tic-Tac-Toe Game
This is a simple, interactive Tic-Tac-Toe game where two players can compete. The game features win detection and options to reset the game or start a new one.

How to Play
The game board consists of a 3x3 grid of empty boxes. ⬜️

Players take turns clicking on an empty box. 👆

The first player uses "O" and the second player uses "X". 🅾️❌

The goal is to get three of your marks in a row, column, or diagonal. Diagonal wins are also considered. 🏆

If a player achieves this, a "Congratulation, winner is [X or O]" message will appear. 🎉

If all boxes are filled and no player has won, the game is a draw (though a draw condition isn't explicitly shown in the win logic, it's the natural outcome if no winner is declared).

You can start a New Game at any time or Reset the current game. 🔄

Project Structure
tic-tac-toe.html: The main HTML file that sets up the game board and UI elements. 📄

style.css: Contains the CSS for styling the game's appearance, including the board, boxes, and messages. 🎨

tic-tac-toe.js: Implements the core game logic, including turn management, win checking, and UI updates. 💻

Features
Two-Player Mode: Players alternate turns. 🤝

Win Detection: Automatically identifies the winner based on winning patterns. 🏅

Visual Feedback: Displays "O" and "X" in the clicked boxes. ✨

New Game & Reset Options: Buttons to easily restart the game or clear the board. 🎲

Responsive Design: (Implicitly, as CSS units like vmin are used for sizing, which adapt to viewport size). 📱🖥️

Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Code Explanation
tic-tac-toe.html
Sets up the basic HTML structure with a title and links to style.css for styling.

The body contains a hidden msg-container div that displays winner messages.

A main section holds the h1 title "tic tac toe".

The game board is structured as a div with class container containing another div with class game.

Inside the game div, there are nine button elements, each with the class box, representing the individual cells of the Tic-Tac-Toe board.

A "Reset" button (#reset-btn) is included to clear the game.

A "New Game" button (#new-game) is part of the msg-container to start a fresh game after a win.

Links to tic-tac-toe.js at the end of the <body> to ensure HTML elements are loaded before the script interacts with them.

style.css
Applies basic styling to the body, centering content and setting a background color.

.container and .game are styled using flexbox for centering and grid or flex-wrap for arranging the boxes.

.box elements are styled to be square, with a background, rounded corners, shadow, and large font size for "X" and "O".

#reset-btn and #new-game are styled with padding, font size, dark background, white text, and rounded corners.

#msg (for the winner message) is styled with a specific color, font size, and bold weight.

.msg-container is designed to be hidden by default (.hide class) and displayed when a winner is found.

tic-tac-toe.js
DOM Element Selection: Selects all game boxes, the reset button, new game button, message container, and message paragraph.

turnO: A boolean variable initialized to true to track whose turn it is (true for 'O', false for 'X').

winPattern: An array of arrays defining all possible winning combinations on the 3x3 grid.

Event Listeners for Boxes: Iterates through each box and adds a click event listener.

On click, it places "O" or "X" based on turnO and then disables the clicked box to prevent further clicks.

It then calls checkWinner() after each move.

disableBoxes(): Disables all boxes on the board, typically called when a winner is found.

enableBoxes(): Enables all boxes and clears their text content, used for resetting the game.

ShowWinner(winner): Displays the winner message in the msgContainer and then calls disableBoxes().

checkWinner():

Iterates through each pattern in winPattern.

Checks the innerText of the three boxes corresponding to the current pattern.

If all three boxes in a pattern are non-empty and have the same value, ShowWinner() is called with the winning value.

resetGame(): Resets turnO to true, calls enableBoxes() to clear the board, and hides the message container.

Event listeners are attached to newGamebtn and resetBtn to call resetGame()
