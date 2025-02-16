class MenuModule {
    constructor(menuItems) {
        this.mainItemList = menuItems || [];
    }

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

    create() {
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
                        new MenuItemCard(menuItem).createMenuItemElement()
                    );
                    break;
                case "side":
                    sideMenuItemBox.appendChild(
                        new MenuItemCard(menuItem).createMenuItemElement()
                    );
                    break;
                case "beverage":
                    beverageMenuItemBox.appendChild(
                        new MenuItemCard(menuItem).createMenuItemElement()
                    );
                    break;
                default:
                    console.log("Skipping unknown menu type add");
            }
        });

        const contentWrapper = document.createElement("div");

        contentWrapper.replaceChildren(
            this.createMenuSection("Main Dishes", mainMenuItemBox),
            this.createMenuSection("Sides", sideMenuItemBox),
            this.createMenuSection("Beverages", beverageMenuItemBox)
        );
        return contentWrapper;
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
}

export { MenuModule, MenuItem };
