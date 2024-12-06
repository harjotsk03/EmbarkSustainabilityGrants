const filterModal = document.getElementById("filterModal");
const filterButton = document.querySelector(".filterButton");
const closeModal = document.getElementById("closeModal");
const filterForm = document.getElementById("filterForm");
const allCardsContainer = document.getElementById("AllCardsContainer");

filterButton.addEventListener("click", () => {
  console.log("Filter button clicked");
  filterModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  filterModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === filterModal) {
    filterModal.style.display = "none";
  }
});

const activeFiltersContainer = document.getElementById("activeFilters");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(filterForm);
  const selectedCategories = formData.getAll("category");

  updateActiveFiltersDisplay(selectedCategories);

  const filteredCards = allGrantCards.filter((card) => {
    const cardCategories = card.categories
      .toLowerCase()
      .replace("categories: ", "")
      .split(", ");
    return selectedCategories.some((category) =>
      cardCategories.includes(category)
    );
  });

  renderCards(filteredCards);
  filterModal.style.display = "none";
});

function updateActiveFiltersDisplay(selectedCategories) {
  activeFiltersContainer.style.display =
    selectedCategories.length > 0 ? "block" : "none";

  activeFilters.innerHTML = selectedCategories
    .map((category) => {
      return `<span class="activeFilter">${
        category.charAt(0).toUpperCase() + category.slice(1)
      }</span>`;
    })
    .join(", ");
}

clearFiltersBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll('input[name="category"]');
  checkboxes.forEach((checkbox) => (checkbox.checked = false));

  activeFiltersContainer.style.display = "none";

  renderCards();
});
