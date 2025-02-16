import { MenuModule, MenuItem } from "./MenuModule.js";
import "../styles/menu.css";

class MenuPage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };
    defaultMenuItemList = [
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

    render() {
        this.domElements.contentDiv.replaceChildren(
            new MenuModule(this.defaultMenuItemList).create()
        );
    }
}

export default new MenuPage();
