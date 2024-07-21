const btn = document.querySelectorAll("button");

function Changebgcolor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;

    document.body.style.backgroundColor = randomColor;
    document.body.style.transition = '0.3s ease';
}

btn.forEach(button => {

    button.addEventListener('click', Changebgcolor);
})
