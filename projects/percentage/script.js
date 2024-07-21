let button = document.querySelector(".Converter");
let input = document.querySelectorAll(".subjects input");
let output = document.querySelector("#result");

function result() {
    let total = 0;
    let count = 0;
    input.forEach(input => {
        if (input.value != "") {
            total += parseFloat(input.value);
            count++;
        }
    });
    if (count > 0) {
        let percentage = (total / (count * 100)) * 100;
        output.textContent = `Total Percentage: ${percentage.toFixed(2)}%`;
    } else {
        output.textContent = "";
        alert("Please enter valid numbers in all fields.");
    }
}

button.addEventListener("click", () => {
    result();
});