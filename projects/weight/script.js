let button = document.querySelector(".Converter");

function result() {

    let KiloGramInput = document.getElementById("KiloGram");
    let PoundInput = document.getElementById("Pound");
    let GramInput = document.getElementById("Gram");
    let KiloGram = parseFloat(KiloGramInput.value);

    if (!isNaN(KiloGram)) {
        let Pound = KiloGram * 2.205;
        let Gram = KiloGram * 1000;

        PoundInput.value = Pound.toFixed(2);
        GramInput.value = Gram.toFixed(2);

    } else {
        alert("Please enter valid numbers in all fields.");
    }
}

button.addEventListener("click", () => {
    result();
});