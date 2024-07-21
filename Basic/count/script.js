let incre = document.querySelectorAll(".incre");
let decre = document.querySelectorAll(".decre");

incre.forEach(element => {
    element.addEventListener("click", () => {
        console.log("Plus icon is clicked")
        let counterElement = element.previousElementSibling;
        counterElement.innerHTML++;
    });
});

decre.forEach(element => {
    element.addEventListener("click", () => {
        console.log("Minus icon is clicked")
        let counterElement = element.nextElementSibling;
        counterElement.innerHTML--;
    });
});