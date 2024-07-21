let btn = document.querySelectorAll(".button")
let container = document.querySelector(".container")
let removebtn = document.querySelector(".remove");

btn.forEach(button => {
    button.addEventListener("click", () => {
        console.log("new note created");
        const notecontainer = document.createElement("div")
        const textarea = document.createElement("textarea")
        notecontainer.classList.add("note-container");
        textarea.classList.add("note");
        textarea.setAttribute("placeholder", "Make your note here");
        removebtn.style.display = "block";

        notecontainer.appendChild(textarea);
        container.appendChild(notecontainer);
    });
});

    removebtn.addEventListener("click", () => {
        let notecontainer = document.querySelectorAll(".note-container")
        let textareas = document.querySelectorAll(".note");
        textareas.forEach(textarea => {
        textarea.remove("note");
    });
         notecontainer.forEach(noteContainer => {
            noteContainer.remove();
        });
        removebtn.style.display = "none";

    });