let button = document.querySelector(".Converter");

function result() {

    let celsiusInput = document.getElementById("Celsius");
    let fahrenheitInput = document.getElementById("Fahrenheit");
    let kelvinInput = document.getElementById("Kelvin");
    let celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        let fahrenheit = (9/5 * celsius) + 32;
        let kelvin = celsius + 273.15;

        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);

    } else {
        alert("Please enter valid numbers in all fields.");
    }
}

button.addEventListener("click", () => {
    result();
});