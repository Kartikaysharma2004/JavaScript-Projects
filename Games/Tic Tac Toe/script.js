alert("This game is designed by Kartikay Sharma")

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        currmode = "light";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currmode);
});

let modetxt = document.querySelector("i");
modetxt.addEventListener("click", () => {
    if (currmode === "light") {
        modetxt.innerHTML = " Light Mode";
    } else {
        modetxt.innerHTML = " Dark Mode";
    }
    console.log(currmode);
});

let btn2 = document.querySelectorAll(".box");
btn2.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "X";
            turnO = false;
            box.disabled = true;
            box.style.backgroundColor = "none";
        } else {
            box.innerHTML = "O";
            turnO = true;
            box.disabled = true;
            box.style.backgroundColor = "none";
        }
        checkWin();
    });
});

function checkWin() {
    let boxes = document.querySelectorAll(".box");
    let values = Array.from(boxes).map(box => box.innerHTML);
    let winner = null;

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
            winner = values[a];
        }
    });

    if (winner) {
        alert(winner + " wins!");
        resetGame();
    } else if (values.every(value => value !== "")) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
        box.style.backgroundColor = "";
    });
    turnO = true;
}
