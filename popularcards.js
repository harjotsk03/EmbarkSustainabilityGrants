const popularGrantCards = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "Canadian Youth Climate Action Award",
    link: "pages/CanadianYouthClimateActionAward.html",
    amount: "$500-$5000",
    deadline: "October 1",
    amountTitle: "Amount",
    deadlineTitle: "Deadline",
  },
];

function createCard(data) {
  return `
                <div class="card" data-id="${data.id}">
                  <div class="grantCardHeroContainer">  
                    <div>
                      <h3 class="cardTitle">${data.title}</h3>
                      <p class="cardCategories">${data.categories ?? ""}</p>
                    </div>
                    <a class="cardViewButton" href="${
                      data.link
                    }">View Grant Information</a>
                  </div>
                  <div class="grantCardInfoContainer">
                    <div class="cardInfoContainer">
                      <h4 class="classLabel">${data.amountTitle ?? ""}</h4>
                      <p class="classInfo">${data.amount ?? ""}</p>
                    </div>
                    <div class="cardInfoContainer">
                      <h4 class="classLabel">${data.durationTitle ?? ""}</h4>
                      <p class="classInfo">${data.duration ?? ""}</p>
                    </div>
                    <div class="cardInfoContainer">
                      <h4 class="classLabel">${data.deadlineTitle ?? ""}</h4>
                      <p class="classInfo">${data.deadline ?? ""}</p>
                    </div>
                  </div>
                </div>
            `;
}

function renderCards() {
  const container = document.getElementById("cardsContainer");
  const cardsHTML = popularGrantCards.map((card) => createCard(card)).join("");
  container.innerHTML = cardsHTML;
}
renderCards();
