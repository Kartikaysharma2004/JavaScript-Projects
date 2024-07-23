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
