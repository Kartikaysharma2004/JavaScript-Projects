let button = document.querySelector(".Converter");
let input = document.querySelector("input");
let output = document.querySelector("#result");

function result() {
    let total = parseFloat(input.value);
    if (total > 0) {
        let feet = total /30.48;
        output.textContent = `Your Height in feet is: ${feet.toFixed(2)}ft`;
    } else {
        output.textContent = "";
        alert("Please enter valid numbers in all fields.");
    }
}

button.addEventListener("click", () => {
    result();
});