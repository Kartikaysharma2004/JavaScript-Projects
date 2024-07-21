let btn = document.querySelectorAll(".button");
let emoji = document.querySelectorAll(".emoji");

const emojis = ["😊", "😃", "😁", "😆", "😇", "😉", "😌", "😍", "😘", "🤗"];

btn.forEach((element, index) =>{
    element.addEventListener("click", () => {
  console.log("button was clicked");
  
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                  if (emoji[index]) {
                      emoji[index].innerText = randomEmoji;
                  }
});
});