document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.querySelector('.menu');

  function toggleMenuIcon() {
    if (menuToggle.checked) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    } else {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    }
  }

  menuToggle.addEventListener('change', function () {
    if (!menuToggle.checked) {
      // Show the menu when the toggle is unchecked
      menu.classList.remove('hide');
    }
    toggleMenuIcon();
  });

  function applyMobileMenuClick() {
    let menuItems = document.querySelectorAll(".menu a");

    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        menu.classList.add("hide");
        // Uncheck the menu toggle to close the menu
        menuToggle.checked = false;
        toggleMenuIcon();
      });
    });
  }

  function resetMenu() {
    menu.classList.remove("hide");
    applyMobileMenuClick(); // Reapply event listeners
  }

  if (window.innerWidth <= 858) {
    applyMobileMenuClick();
  } else {
    resetMenu(); // Reset menu when resizing to a wider view
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 858) {
      applyMobileMenuClick();
    } else {
      resetMenu(); // Reset menu when resizing to a wider view
    }
  });
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


const projects = [
  {
    id: 1,
    img: "images/todolist.JPG",
    name: "ToDo List",
    description: "This is a simple ToDo List that allows the user to add and delete tasks",
    livelink: "https://todoinlist.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/todo%20list"
  },
  {
    id: 2,
    img: "images/weight.JPG",
    name: "Weight Converter",
    description: "This is a simple weight converter that allows the user to convert from Kilograms to Pounds & Grams",
    livelink: "https://checkmyweight.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/weight"
  },
  {
    id: 3,
    img: "images/BS Generator.JPG",
    name: "Business Name Generator",
    description: "This is a simple business name generator that generates a random business name based on the user's input",
    livelink: "https://businessgen.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/business"
  },
  {
    id: 4,
    img: "images/calculator.JPG",
    name: "Simple Calculator",
    description: "This is a simple calculator that allows the user to perform basic arithmetic operations",
    livelink: "https://basiccalchub.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/calculator"
  },
  {
    id: 5,
    img: "images/DG Clock.JPG",
    name: "Digital Clock",
    description: "This is a simple digital clock that displays the current time",
    livelink: "https://dgtime.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/dgclock"
  },
  {
    id: 6,
    img: "images/Height converter.JPG",
    name: "Height Converter",
    description: "This is a simple height converter that converts the user's input from centimeters to feet",
    livelink: "https://heightfind.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/height"
  },
  {
    id: 7,
    img: "images/percentage.JPG",
    name: "Percentage Finder",
    description: "This is a simple percentage finder that allows the user to find the percentage by adding all subject's marks",
    livelink: "https://percentagefinder.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/percentage"
  },
  {
    id: 8,
    img: "images/mynotes.JPG",
    name: "MyNotes",
    description: "This is a simple note taking app that allows the user to create, edit, and delete notes",
    livelink: "https://ikeepmynotes.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/mynotes"
  },
  {
    id: 9,
    img: "images/quote.JPG",
    name: "Quote Generator",
    description: "This is a simple quote generator that generates a random quote from a list of quotes",
    livelink: "https://quotewaves.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/quote"
  },
  {
    id: 10,
    img: "images/temperature.JPG",
    name: "Temperature Converter",
    description: "This is a simple temperature converter that allows the user to convert from Celsius to Fahrenheit & Kelvin",
    livelink: "https://tempflex.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/temperature"
  },
  {
    id: 11,
    img: "images/stopwatch.JPG",
    name: "Simple Stopwatch",
    description: "This is a simple stopwatch that allows the user to start, stop, and reset the stopwatch",
    livelink: "https://stopwatchspace.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/stop%20watch"
  },
  {
    id: 12,
    img: "images/agecalc.JPG",
    name: "Age Calculator",
    description: "This is a simple age calculator that allows the user to calculate their age in days, months and years.",
    livelink: "https://agecalculatorhub.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/projects/agecalc"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const article = document.createElement("article");

  article.innerHTML = `
    <figure>
      <img loading="lazy" src="${project.img}" alt="${project.name}" title="${project.name}" />
    </figure>

    <div class="article-preview">
      <h2>${project.name}</h2>
      <p>${project.description}</p>

      <div class="button-container">
        <a href="${project.livelink}" target="_blank">
          <button class="view">
          <i class="fa-regular fa-eye"></i>View</button>
        </a>

        <a href="${project.codelink}" target="_blank">
          <button class="code"><i class="fa-solid fa-code"></i>Code</button>
        </a>
      </div>
    </div>
  `;

  container.appendChild(article);

});


const basicProjects = [
  {
    id: 1,
    img: "images/colorchanger.JPG",
    name: "Color Changer",
    description: "This is a simple color changer that allows the user to change the background color of the page",
    livelink: "https://colorcycle.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/Basic/ColorChanging"
  },
  {
    id: 2,
    img: "images/count.JPG",
    name: "Count",
    description: "This is a simple counter that allows the user to count up and down",
    livelink: "https://countpro.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/Basic/count"
  },
  {
    id: 3,
    img: "images/emoji.JPG",
    name: "Emoji Flicker",
    description: "This is a simple emoji flicker that allows the user to flicker between different emojis",
    livelink: "https://emojiflicker.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/Basic/emoji"
  }
];

const sc = document.getElementById("basicprojects-container");

basicProjects.forEach(project => {
  const article = document.createElement("article");

  article.innerHTML = `
    <figure>
      <img loading="lazy" src="${project.img}" alt="${project.name}" title="${project.name}" />
    </figure>

    <div class="article-preview">
      <h2>${project.name}</h2>
      <p>${project.description}</p>

      <div class="button-container">
        <a href="${project.livelink}" target="_blank">
          <button class="view">
          <i class="fa-regular fa-eye"></i>View</button>
        </a>

        <a href="${project.codelink}" target="_blank">
          <button class="code"><i class="fa-solid fa-code"></i>Code</button>
        </a>
      </div>
    </div>
  `;

  sc.appendChild(article);

});


const gameProjects = [
  {
    id: 1,
    img: "images/Quiz.JPG",
    name: "Quiz Game",
    description: "This is a simple quiz game that allows the user to answer questions and get a score",
    livelink: "https://quizplanet.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/Games/Quiz"
  },
  {
    id: 2,
    img: "images/RPS.JPG",
    name: "Rock Paper Scissor",
    description: "This is a simple rock paper scissor game that allows the user to play against the computer",
    livelink: "https://rpschamp.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/Games/Rock%20Paper%20Scissor"
  },
  {
    id: 3,
    img: "images/tictactoe.JPG",
    name: "Tic Tac Toe",
    description: "This is a simple tic tac toe game that allows the user to play with their friends",
    livelink: "https://tictactoechampions.netlify.app/",
    codelink: "https://github.com/Kartikaysharma2004/JavaScript-Projects/tree/main/Games/Tic%20Tac%20Toe"
  }
];


const gc = document.getElementById("gameprojects-container");

gameProjects.forEach(project => {
  const article = document.createElement("article");

  article.innerHTML = `
    <figure>
      <img loading="lazy" src="${project.img}" alt="${project.name}" title="${project.name}" />
    </figure>

    <div class="article-preview">
      <h2>${project.name}</h2>
      <p>${project.description}</p>

      <div class="button-container">
        <a href="${project.livelink}" target="_blank">
          <button class="view">
          <i class="fa-regular fa-eye"></i>View</button>
        </a>

        <a href="${project.codelink}" target="_blank">
          <button class="code"><i class="fa-solid fa-code"></i>Code</button>
        </a>
      </div>
    </div>
  `;

  gc.appendChild(article);

});