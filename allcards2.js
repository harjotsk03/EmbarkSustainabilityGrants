const allGrantCards = [
  {
    id: 1,
    title: "Vancity EnviroFund",
    categories: "Categories: Climate, Community",
    link: "pages/VancityEnviroFund.html",
    amount: "$25,000",
    deadline: "October 1",
    durationTitle: "Duration",
    duration: "3 months",
    amountTitle: "Amount",
    deadlineTitle: "Deadline",
  },
  {
    id: 2,
    title: "LEVEL BIPOC Grant",
    categories: "Categories: Youth",
    link: "pages/LEVELBIPOCGrant.html",
    amount: "$150,000",
    duration: "36 months",
    deadline: "August 15",
    amountTitle: "Amount",
    durationTitle: "Duration",
    deadlineTitle: "Deadline",
  },
  {
    id: 3,
    title: "BC Hydro Grassroots Grant",
    link: "pages/HydroGrassrootsGrant.html",
    amount: "$2000",
    duration: "11 months",
    deadline: "March 31",
    categories: "Categories: Clean Energy, Youth, Emergency/Safety",
    amountTitle: "Amount",
    durationTitle: "Duration",
    deadlineTitle: "Deadline",
  },
  {
    id: 4,
    title: "Ocean Action Grant",
    categories: "Categories: Youth, Climate, Community",
    link: "pages/OceanActionGrant.html",
    amount: "$250-$3000",
    duration: "3 months",
    deadline: "October 1",
    amountTitle: "Amount",
    durationTitle: "Duration",
    deadlineTitle: "Deadline",
  },
  {
    id: 5,
    title: "Eco-Action Accelerator",
    categories: "Categories: Youth, Climate, Community",
    link: "pages/EcoActionAccelerator.html",
    amount: "$5000",
    duration: "6 months",
    deadline: "August 5",
    amountTitle: "Amount",
    durationTitle: "Duration",
    deadlineTitle: "Deadline",
  },
  {
    id: 6,
    title: "Canadian Youth Climate Action Award",
    link: "pages/CanadianYouthClimateActionAward.html",
    amount: "$500-$5000",
    categories: "Categories: Youth, Climate",
    deadline: "October 1",
    amountTitle: "Amount",
    deadlineTitle: "Deadline",
  },
];

function createCard(data) {
  return `
    <div class="card" data-id="${
      data.id
    }" data-category="${data.categories.toLowerCase()}">
      <div class="cardLeft">
        <div class="cardTitleContainer">
          <h3 class="cardTitle">${data.title}</h3>
          <p class="cardCategories">${data.categories ?? ""}</p>
        </div>
        <a class="large cardButton" href="${
          data.link
        }">View Grant Information</a>
      </div>
      <div class="cardRight">
        <div>
          <h4 class="cardHeader">${data.amountTitle ?? ""}</h4>
          <p class="cardInfo">${data.amount ?? ""}</p>
        </div>
        <div>
          <h4 class="cardHeader">${data.durationTitle ?? ""}</h4>
          <p class="cardInfo">${data.duration ?? ""}</p>
        </div>
        <div>
          <h4 class="cardHeader">${data.deadlineTitle ?? ""}</h4>
          <p class="cardInfo">${data.deadline ?? ""}</p>
        </div>
        <a class="small cardButton" href="${
          data.link
        }">View Grant Information</a>
      </div>
    </div>
  `;
}

function renderCards(cardsToRender = allGrantCards) {
  const container = document.getElementById("AllCardsContainer");
  const cardsHTML = cardsToRender.map((card) => createCard(card)).join("");
  container.innerHTML = cardsHTML;
}

document
  .getElementById("grantSearchInput")
  .addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCards = allGrantCards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm)
    );
    renderCards(filteredCards);
  });

renderCards();
