const popularGrantCards = [
  {
    id: 1,
    title: "Eco-Action Accelerator",
    categories: "Categories: Youth, Climate, Community",
    link: "/pages/EcoActionAccelerator.html",
    amount: "$5000",
    duration: "6 months",
    deadline: "August 5",
    amountTitle: "Amount",
    durationTitle: "Duration",
    deadlineTitle: "Deadline",
  },
  {
    id: 2,
    title: "Canadian Youth Climate Action Award",
    link: "/pages/CanadianYouthClimateActionAward.html",
    amount: "$500-$5000",
    deadline: "October 1",
    amountTitle: "Amount",
    deadlineTitle: "Deadline",
  },
];

function createCard(data) {
  return `
                  <div class="card" data-id="${data.id}">
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

function renderCards() {
  const container = document.getElementById("oceanActionRelated");
  const cardsHTML = popularGrantCards.map((card) => createCard(card)).join("");
  container.innerHTML = cardsHTML;
}
renderCards();
