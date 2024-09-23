// Scroll animation for UI reveal
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-reveal");
  elements.forEach((el) => {
    const topPos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (topPos < windowHeight - 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
});

// Scroll effect on hover for event, news, and calendar sections
const scrollBoxes = document.querySelectorAll(".scroll-box");

scrollBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.overflowY = "auto";
  });

  box.addEventListener("mouseleave", () => {
    box.style.overflowY = "hidden";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelectorAll('.navbar li');

  dropdown.forEach(item => {
    item.addEventListener('click', function(e) {
      const dropdownContent = this.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation(); // Prevent click event from bubbling up
      }
    });
  });

  // Hide dropdowns when clicking outside
  document.addEventListener('click', function() {
    dropdown.forEach(item => {
      const dropdownContent = item.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = 'none';
      }
    });
  });
});
document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', event => {
    const dropdownContent = item.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
});

// Optionally, close dropdown if clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown > a')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }
});
