const quotes = [
    {
        quote: "Code your life with purpose; every line you write should build towards your goals."
    },
    {
        quote: "Just like in development, life’s bugs are inevitable; it’s how you debug them that defines you."
    },
    {
        quote: "Optimize your time and energy; unnecessary complexity leads to burnout."
    },
    {
        quote: "Handle your challenges like exceptions; with the right try-catch, you can manage anything."
    },
    {
        quote: "In both life and web development, sometimes a refresh is all you need to see things clearly."
    },
    {
        quote: "Consistency is key; keep pushing code, keep improving, keep growing."
    },
    {
        quote: "Responsive living means adapting gracefully to life’s different viewports and screen sizes."
    },
    {
        quote: "Collaboration is crucial; great projects and great lives are often built with the help of others."
    },
    {
        quote: "Your personal growth, like good SEO, should be organic and driven by quality content."
    },
    {
        quote: "Always validate your inputs; what you allow into your life affects your overall output."
    },
    {
        quote: "Embrace the iterative process; life, like web development, is about continuous improvement."
    },
    {
        quote: "Life’s stylesheet should be simple but effective; good design is good living."
    },
    {
        quote: "Don’t fear failure; every error is an opportunity to learn and refactor."
    },
    {
        quote: "Keep your life’s code DRY (Don’t Repeat Yourself); streamline your efforts and avoid redundancy."
    },
    {
        quote: "In both web development and life, sometimes you need to clear the cache to see the latest changes."
    }
];

function loadQuote(index) {
    const quoteElement = document.querySelector(".quote p");
    quoteElement.textContent = quotes[index].quote;
}
loadQuote(0);

let currentIndex = 0;

function loadNextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    loadQuote(currentIndex);
}

loadQuote(currentIndex);

let btn = document.querySelectorAll(".button");
btn.forEach((button) => {
    button.addEventListener("click", loadNextQuote);
});