let btn = document.querySelectorAll(".button button");
let btn1 = document.querySelectorAll("#button");
let p = document.querySelectorAll("#p");
let input = document.querySelector(".input input")

btn.forEach(element => {
    element.addEventListener("click", () => {
        if (input.value === "") {
            alert("Please first add your task");
        }
        else {
            let ul = document.querySelector(".list ul");
            let li = document.createElement("li");
            li.textContent = input.value;
            ul.prepend(li);
            input.value = "";
        }
    });
});

btn1.forEach(element => {
    element.addEventListener("click", () => {
        let li = document.querySelectorAll("li");
        if (li.length === 0 && input.value === "") {
            alert("Please first add your task");
        } else {
            let li = document.querySelectorAll("li");
            li.forEach(element => {
                element.remove();
            });
            let p = document.querySelectorAll("#p");
            p.forEach(element => {
                element.style.display = "block";
            });
        }

    });
});