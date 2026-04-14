/* ============================================
   Reconfigurable AI-Chip共創研究所 - Main JS
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  // --- Hamburger menu toggle ---
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      nav.classList.toggle("open");
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
      });
    });
  }

  // --- Active nav highlight on scroll ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a[href^='#']");

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // --- News "show more" toggle ---
  const btnMore = document.querySelector(".btn-more");

  if (btnMore) {
    btnMore.addEventListener("click", function () {
      const hiddenItems = document.querySelectorAll(".news-item.hidden");
      const isExpanding = hiddenItems.length > 0;

      if (isExpanding) {
        hiddenItems.forEach(function (item) {
          item.classList.remove("hidden");
        });
        btnMore.textContent = btnMore.dataset.labelLess || "Close";
      } else {
        const allItems = document.querySelectorAll(".news-item");
        allItems.forEach(function (item, index) {
          if (index >= 5) {
            item.classList.add("hidden");
          }
        });
        btnMore.textContent = btnMore.dataset.labelMore || "Show more";
      }
    });
  }
});
