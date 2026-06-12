document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified

const menuBtn = document.getElementById("menu");
const navigatorMenu = document.querySelector(".navigator");

menuBtn.addEventListener("click", () => {
    navigatorMenu.classList.toggle("open");
});



const rabbitFoods = [
    {
        name: "Timothy Hay",
        category: "safe",
        icon: "🌾",
        description: "The absolute essential core of any rabbit's diet. Helps wear down their teeth naturally and keeps digestion moving smoothly."
    },
    

    {
        name: "Iceberg Lettuce",
        category: "unsafe",
        icon: "🚫",
        description: "Highly dangerous. It contains lactucarium, which can cause severe, life-threatening diarrhea and bloat in rabbits."
    },
    {
        name: "Romaine Lettuce",
        category: "safe",
        icon: "🥬",
        description: "A wonderful dark, leafy green loaded with nutrients. Always choose this over light-colored lettuces."
    },
    {
        name: "Cilantro / Coriander",
        category: "safe",
        icon: "🌿",
        description: "A fragrant herb that most rabbits absolutely love. Safe to feed daily as part of their fresh greens mix."
    },

    {
        name: "Apple Seeds",
        category: "unsafe",
        icon: "🍎",
        description: "While apple flesh is a safe sweet treat, the seeds contain trace amounts of cyanide and are highly toxic to bunnies."
    },
    {
        name: "Chocolate",
        category: "unsafe",
        icon: "🍫",
        description: "Extremely poisonous to rabbits. Contains compounds that their small hearts and digestive systems cannot process."
    },
    {
        name: "Onions & Garlic",
        category: "unsafe",
        icon: "🧄",
        description: "Can cause severe hemolytic anemia (destroying red blood cells) and dangerous stomach upset."
    },
    
    {
        name: "Mango Leaves",
        category: "safe",
        icon: "🥭",
        description: "An excellent crispy treat! High in fiber and perfectly safe for rabbits to chew on to keep their teeth healthy."
    }
];


function displayFoods(foodsToDisplay) {
    const foodGrid = document.getElementById("food-grid");
    foodGrid.innerHTML = "";

    foodsToDisplay.forEach(food => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
        <h3>${food.icon} ${food.name}</h3>
        <p>${food.description}</p>`;
        foodGrid.appendChild(card);
        
    });
}

displayFoods(rabbitFoods);


const allBtn = document.getElementById("all-btn");
const safeBtn = document.getElementById("safe-btn");
const unsafeBtn = document.getElementById("unsafe-btn");

allBtn.addEventListener("click", () => {
    displayFoods(rabbitFoods);

}
);

safeBtn.addEventListener("click", () => {
    const safeOnly = rabbitFoods.filter(food => food.category === "safe");
    displayFoods(safeOnly);
});


unsafeBtn.addEventListener("click", () => {
    const unsafeOnly = rabbitFoods.filter(food => food.category === "unsafe");
    displayFoods(unsafeOnly);
});

