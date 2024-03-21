const cells = document.querySelectorAll(".game-grid img");
const label = document.querySelector("h2");
let turn = "x";

cells.forEach(cell => {
    cell.addEventListener("click", event => {
        if(turn === "x") {
            event.target.src = "./assets/x.png";
            event.target.id = "x";
            turn = "o";
            label.textContent = "O's turn";
        }
        else if(turn === "o") {
            event.target.src = "./assets/o.png";
            event.target.id = "o";
            turn = "x";
            label.textContent = "X's turn";
        }
        event.target.style.pointerEvents = "none";
        checkGame();
    });
});

function reset() {
    cells.forEach(cell => {
        cell.src = "assets/white-bg.png";
        cell.id = "";
        label.textContent = "New game! X's turn";
        turn = "x";
        cell.style.pointerEvents = "auto";
        label.style.color = "black";
    })
}

function checkGame() {

    //check for win
    if(cells[0].id == "x" &&
        cells[1].id == "x" &&
        cells[2].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[0].id == "o" &&
            cells[1].id == "o" &&
            cells[2].id == "o") {
                setWinner("o");
                return;
            }
    
    if(cells[0].id == "x" &&
        cells[4].id == "x" &&
        cells[8].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[0].id == "o" &&
            cells[4].id == "o" &&
            cells[8].id == "o") {
                setWinner("o");
                return;
            }

    if(cells[0].id == "x" &&
        cells[3].id == "x" &&
        cells[6].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[0].id == "o" &&
            cells[3].id == "o" &&
            cells[6].id == "o") {
                setWinner("o");
                return;
            }

    if(cells[1].id == "x" &&
        cells[4].id == "x" &&
        cells[7].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[1].id == "o" &&
            cells[4].id == "o" &&
            cells[7].id == "o") {
                setWinner("o");
                return;
            }

    if(cells[2].id == "x" &&
        cells[4].id == "x" &&
        cells[6].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[2].id == "o" &&
            cells[4].id == "o" &&
            cells[6].id == "o") {
                setWinner("o");
                return;
            }

    if(cells[2].id == "x" &&
        cells[5].id == "x" &&
        cells[8].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[2].id == "o" &&
            cells[5].id == "o" &&
            cells[8].id == "o") {
                setWinner("o");
                return;
            }

    if(cells[3].id == "x" &&
        cells[4].id == "x" &&
        cells[5].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[3].id == "o" &&
            cells[4].id == "o" &&
            cells[5].id == "o") {
                setWinner("o");
                return;
            }

    if(cells[6].id == "x" &&
        cells[7].id == "x" &&
        cells[8].id == "x") {
            setWinner("x");
            return;
        }
    else if(cells[6].id == "o" &&
            cells[7].id == "o" &&
            cells[8].id == "o") {
                setWinner("o");
                return;
            }
    else {
        checkTie();
    }

}

function setWinner(winner) {
    label.style.color = "crimson";
    label.textContent = `${winner.toUpperCase()} won!`;
    cells.forEach(cell => {
        cell.style.pointerEvents = "none";
    });
}

function checkTie() {
    let count = 0;

    cells.forEach(cell => {
        if(cell.style.pointerEvents == "none") {
        count++;
    }
    });

    if(count === 9) {
        label.textContent = "Tie!";
    }
}