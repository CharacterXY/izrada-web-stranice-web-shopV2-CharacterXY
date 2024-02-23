const searchIcon = document.getElementById("mobile-search-icon");
const searchForm = document.getElementById("mobile-search-form");

document.addEventListener("DOMContentLoaded", function () {
  fetchHeaderAndFooter();

  async function fetchHeaderAndFooter() {
    const header = await fetch("partials/header.html");
    const footer = await fetch("partials/footer.html");

    if (header.ok && footer.ok) {
      document.getElementById("header-container").innerHTML =
        await header.text();
      document.getElementById("footer-container").innerHTML =
        await footer.text();
    } else {
      console.error("Failed to load header or footer");
    }
  }
});
