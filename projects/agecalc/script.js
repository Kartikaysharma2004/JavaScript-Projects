let button = document.querySelector(".Converter");
let input = document.querySelector(".box input");
let output = document.querySelector("#result");

function agecalculate() {
    if (input.value == '') {
        output.textContent = "Please set the values first";
        
    } else {
        
    
    const birthDate = new Date(input.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        months += 12;
    }

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    output.textContent = `You are ${age} years ${months} months ${days} days old`;
}
}

button.addEventListener("click", agecalculate);