//Variable for active player
let activePlayer = 'X';
//Array for moves to determine win conditions
let selectedSquares = [];

//Function for placing x or o in square
function placeXOorO(squareNumber) {
    //Condition to confirm square hasn't been selected. .some() will check and see if array square is clicked
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //variable to retrieve HTML id that was clicked
        let select = document.getElementById(squareNumber);
        //Condition to check whose turn
        if (activePlayer === 'X') {
            //Place x.png for player X in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //If player isn't X it's O, so...
        } else {
            //o.png placed for player O
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer concatenated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //Calls function to check for win condition
        checkWinConditions();
        //Switching Active Player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //Placement sound
        audio('./media/place.mp3');
        //Checks for computer's turn
        if (activePlayer === 'O') {
            //disable click on Computer's turn
            disableClick();
            //Waits 1 second before computer "clicks"
            setTimeout(function() { computersTurn(); }, 1000);
        }
        return true;
    }
    //Random sqaure from Computer
    function computersTurn() {
        let success = false;
        let pickASquare;
        //Condition to repeat computer's pick if square is taken
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOorO(pickASquare)) {
                placeXOorO(pickASquare);
                success = true;
            };
        }
    }
}

//Function to parse through array to look for wins
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '50')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        //Tie Game sound
        audio('./media/tie.mp3');
        //.3 second timer before resetGame is called
        setTimeout(function() { resetGame(); }, 500);
    }
    //checks if array has 3 strings, checks for win
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b == true && c === true) { return true; }
    }
}

//Function to make body unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    //makes body unclickable after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//Function takes string parameter of sound path
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//Function to utilize HTML to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    //beginning and ends of x and y axises
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    //Function to interact with canvas
    function animateLineDrawing() {
        //creates loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop
        c.clearRect(0, 0, 608, 608);
        //new path
        c.beginPath();
        //moves to starting point in line
        c.moveTo(x1, y1);
        //end point indication
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(10, 255, 33, .8)';
        c.stroke()
        //Checks for endpoints
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x+= 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //Function to clear canvas after win
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    //disable Click while win sound plays
    disableClick();
    //Win sound
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//Reset game when tied
function resetGame() {
    for (let i = 0; i < 9; i ++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    //Empties array so we can start over
    selectedSquares = [];
}