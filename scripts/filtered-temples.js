document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Alabang Philippines",
        location: "Alabang, Philippines",
        dedicated: "2026, January,18,",
        area: 35998,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-65306-main.jpg"
    },
    {
        templeName: "Bahía Blanca Argentina",
        location: "Bahía Blanca, Argentina",
        dedicated: "2025, November, 23",
        area: 23400,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
    },

    {
        templeName: "Manaus Brazil",
        location: "Manaus, Brazil",
        dedicated: "2012, June, 10",
        area: "32032",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
    }
];

createTempleCard(temples);

const navLinks = document.querySelectorAll(".navigation a");


navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");

        const menuSelection = link.textContent;
        console.log("Captured click for:", menuSelection);

        document.querySelector(".res-grid").innerHTML = "";

        if (menuSelection === "Old") {
            const oldTemples = temples.filter(temples => {
                const dateParts = temples.dedicated.split(",");
                const year = parseInt(dateParts[0]);
                return year < 1900;
            });
            
            createTempleCard(oldTemples);
        }
        else if (menuSelection === "New") {
            const newTemples = temples.filter(temples => {
                const dateParts = temples.dedicated.split(",");
                const year = parseInt(dateParts[0]);
                return year > 2000;
            });
            createTempleCard(newTemples);
        }
        else if (menuSelection === "Large") {
            const largeTemples = temples.filter(temples => {
                return parseInt(temples.area) > 90000;
            });
            createTempleCard(largeTemples);
        }

        else if (menuSelection === "Small") {
            const smallTemples = temples.filter(temples => {
                return parseInt(temples.area) < 10000;
            })
            createTempleCard(smallTemples);
        }
        else if (menuSelection === "Home") {
            createTempleCard(temples);
        }
         createTempleCard(temple)
            
    });
});

function createTempleCard(filteredTemples) {
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");


        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `Image of ${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "230");
        image.setAttribute("height", "auto");
        card.style.border = "1px solid grey";
        card.style.borderRadius = "8px";
        card.style.padding = "15px";
        card.style.textAlign = "center";
        card.style.backgroundColor = "#f0f0f0";
    

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".res-grid").appendChild(card);
    });}
        