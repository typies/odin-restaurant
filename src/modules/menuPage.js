import "../styles/menuPage.css";

class MenuPage {
    mainItemList = [];
    sidesItemList = [];
    beverageItemList = [];
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    addMenuItem(menuItem) {
        switch (menuItem.itemType) {
            case "main":
                this.mainItemList.push(menuItem);
                break;
            case "side":
                this.mainItemList.push(menuItem);
                break;
            case "beverage":
                this.mainItemList.push(menuItem);
                break;
            default:
                console.log("Skipping unknown menu type add");
        }
        this.mainItemList.push(menuItem);
    }

    addMenuItems(menuItems) {
        menuItems.forEach((menuItem) => this.mainItemList.push(menuItem));
    }

    createMenuSection(sectionName, sectionMenuBox) {
        const sectionWrapper = document.createElement("div");
        sectionWrapper.classList.add("menu-section-wrapper");

        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("menu-section-header");
        sectionHeader.textContent = sectionName;

        sectionWrapper.replaceChildren(sectionHeader, sectionMenuBox);

        return sectionWrapper;
    }

    render() {
        const mainMenuItemBox = document.createElement("div");
        mainMenuItemBox.classList.add("menu-item-box");

        const sideMenuItemBox = document.createElement("div");
        sideMenuItemBox.classList.add("menu-item-box");

        const beverageMenuItemBox = document.createElement("div");
        beverageMenuItemBox.classList.add("menu-item-box");

        this.mainItemList.forEach((menuItem) => {
            switch (menuItem.type) {
                case "main":
                    mainMenuItemBox.appendChild(
                        new MenuItemCard(menuItem).render()
                    );
                    break;
                case "side":
                    sideMenuItemBox.appendChild(
                        new MenuItemCard(menuItem).render()
                    );
                    break;
                case "beverage":
                    beverageMenuItemBox.appendChild(
                        new MenuItemCard(menuItem).render()
                    );
                    break;
                default:
                    console.log("Skipping unknown menu type add");
            }
        });
        this.domElements.contentDiv.replaceChildren(
            this.createMenuSection("Main Dishes", mainMenuItemBox),
            this.createMenuSection("Sides", sideMenuItemBox),
            this.createMenuSection("Beverages", beverageMenuItemBox)
        );
    }
}

class MenuItem {
    constructor(
        itemName,
        price,
        type,
        description = "Description coming soon!"
    ) {
        this.itemName = itemName;
        this.price = price;
        this.type = type;
        this.description = description;
    }
}

class MenuItemCard {
    constructor(menuItem) {
        this.menuItem = menuItem;
        const menuItemCard = document.createElement("div");
        menuItemCard.classList.add("menu-item-card");
        this.domElement = menuItemCard;
    }

    createMenuItemElement() {
        const menuItemName = document.createElement("div");
        menuItemName.classList.add("menu-item-name");
        menuItemName.textContent = this.menuItem.itemName;
        this.domElement.appendChild(menuItemName);

        const menuItemDesciption = document.createElement("div");
        menuItemDesciption.classList.add("menu-item-desc");
        menuItemDesciption.textContent = this.menuItem.description;
        this.domElement.appendChild(menuItemDesciption);

        const menuItemPrice = document.createElement("div");
        menuItemPrice.classList.add("menu-item-price");
        menuItemPrice.textContent = `$${this.menuItem.price}`;
        this.domElement.appendChild(menuItemPrice);

        return this.domElement;
    }

    render() {
        return this.createMenuItemElement();
    }
}

const defaultMenuItemList = [
    new MenuItem(
        "Mega Nachos",
        15,
        "main",
        "Prepare for flavor detonation! Our Mega Nachos are a volcanic eruption of crispy tortilla chips, smothered in a molten river of cheddar and Monterey Jack cheeses, crowned with seasoned ground beef, pico de gallo fireworks, jalapeño rings of fire, and a dollop of sour cream clouds.  Warning: May cause spontaneous fiesta!"
    ),
    new MenuItem(
        "Dos Tacos",
        10,
        "main",
        "Two is better than one! Our Dos Tacos are a dynamic duo of flavor. Choose your protein adventure (beef, chicken, or veggie) nestled in warm corn tortillas, and topped with your favorite fixings.  They're so good, you'll want tres!"
    ),
    new MenuItem(
        "Chip + Salsa",
        8,
        "side",
        "The classic combo, elevated! Our crispy, golden tortilla chips are the perfect vessels for our zesty, house-made salsa. It's a flavor fiesta in every dip!  Warning: Highly addictive."
    ),
    new MenuItem(
        "Cup o' Guac",
        3,
        "side",
        "A verdant dream! Our Cup o' Guac is a creamy, dreamy blend of ripe avocados, lime juice, cilantro, and a touch of magic.  It's like a hug from a friendly avocado."
    ),

    new MenuItem(
        "Fountain Drink",
        2,
        "beverage",
        "Quench your thirst, unleash your inner hydration hero! Choose from our refreshing lineup of fizzy concoctions.  It's the perfect sidekick to any meal."
    ),
    new MenuItem(
        "Enchiladas",
        10,
        "main",
        "Rolled and ready to rumble! Our Enchiladas are a cheesy, saucy sensation.  Choose your filling, smothered in your favorite sauce, and baked to bubbly perfection. They're so good, they'll make you say 'Enchilada my heart!"
    ),
    new MenuItem(
        "Tamales",
        11,
        "main",
        "A taste of tradition! Our Tamales are hand-wrapped bundles of deliciousness, filled with savory goodness.  Steamed to perfection, they're a flavor journey you won't soon forget."
    ),
    new MenuItem(
        "Quesadilla",
        8,
        "main",
        "Folded and fabulous! Our Quesadilla is a cheesy masterpiece. Melted cheese, your choice of fillings, all snuggled between two warm tortillas. It's the perfect comfort food hug."
    ),
    new MenuItem(
        "Burrito",
        7,
        "main",
        "A flavor bomb wrapped in a tortilla! Our Burrito is a behemoth of deliciousness, packed with your favorite fillings, rice, beans, and all the fixings. It's a meal in itself!"
    ),
    new MenuItem(
        "Rice + Beans",
        4,
        "side",
        "The dynamic duo of deliciousness! Our fluffy rice and hearty beans are the perfect complement to any meal.  They're the sidekicks your taste buds have been waiting for."
    ),
    new MenuItem(
        "Cup o' Queso",
        6,
        "side",
        "Liquid gold! Our Cup o' Queso is a molten river of cheesy goodness. Perfect for dipping, drizzling, or just devouring with a spoon (we won't judge)."
    ),
    new MenuItem(
        "Mega Cup o' Queso",
        9,
        "side",
        "Go big or go queso! Our Mega Cup o' Queso is the ultimate cheese lover's dream.  It's a tidal wave of cheesy goodness, perfect for sharing (or not)."
    ),
    new MenuItem(
        "Cerveza",
        3,
        "beverage",
        "The perfect way to unwind!  Our selection of ice-cold cervezas are the perfect complement to a delicious meal.  Cheers to good times and great food!"
    ),
];

const defaultMenuPage = new MenuPage();
defaultMenuPage.addMenuItems(defaultMenuItemList);

export default defaultMenuPage;
