function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const food = document.createElement('div');
    food.classList.add('food');

    const foodLabel = document.createElement('h1');
    foodLabel.classList.add('foodLabel');
    foodLabel.textContent = "Food";
    food.appendChild(foodLabel);

    const drinks = document.createElement('div');
    drinks.classList.add('drinks');

    const drinkLabel = document.createElement('h1');
    drinkLabel.classList.add('drinkLabel');
    drinkLabel.textContent = "Drinks";
    drinks.appendChild(drinkLabel);

    food.appendChild(
      createFood(
          "Bread",
          "2cp",
          "Freshly baked sourdough"
      )
  )
  food.appendChild(
    createFood(
        "Cheese",
        "1sp",
        "Just a hunk of cheese"
    )
);
food.appendChild(
    createFood(
        "Scone",
        "5sp",
        "Flavored with orange and topped with orange icing"
    )

);
food.appendChild(
    createFood(
        "Soup",
        "1gp",
        "White meat chicken, chicken broth, curly egg noodles, celery, and carrots"
)
)

drinks.appendChild(
    createDrink(
        "Ale",
        "4cp",
        "Strong and bitter"
    )
);
drinks.appendChild(
    createDrink(
        "Wine",
        "2gp",
        "Cabernet Sauvignon"
    )
);
drinks.appendChild(
    createDrink(
        "Cider",
        "1sp",
        "Fermented apples"
    )
);
drinks.appendChild(
    createDrink(
        "Mimosa",
        "5gp",
        "Champagne and chilled orange juice - house special"
    )
);

    menu.appendChild(food);
    menu.appendChild(drinks);
return menu;
}

function createFood(name, price, description){
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');

    const foodLab = document.createElement('div');
    foodLab.classList.add('foodLab')

    const foodName = document.createElement('p');
    foodName.classList.add('foodName');
    foodName.textContent = name;


    const foodPrice = document.createElement('p');
    foodPrice.classList.add('foodPrice');
    foodPrice.textContent = price;

    const foodDescription = document.createElement('p')
    foodDescription.classList.add('foodDescription');
    foodDescription.textContent = description,


    foodLab.appendChild(foodName);
    foodLab.appendChild(foodPrice);
    foodItem.appendChild(foodLab);
    foodItem.appendChild(foodDescription);
 
    return foodItem;
}

function createDrink(name, price, description){
    const drinkItem = document.createElement('div');
    drinkItem.classList.add('drink-item');

    const drinkLab = document.createElement('div');
    drinkLab.classList.add('drinkLab')
    
    const drinkName = document.createElement('p');
    drinkName.classList.add('drinkName');
    drinkName.textContent = name;

    const drinkPrice = document.createElement('p');
    drinkPrice.classList.add('drinkPrice');
    drinkPrice.textContent = price;

    const drinkDescription = document.createElement('p');
    drinkDescription.classList.add('drinkDescription');
    drinkDescription.textContent = description;

    drinkLab.appendChild(drinkName);
    drinkLab.appendChild(drinkPrice);
    drinkItem.appendChild(drinkLab);
    drinkItem.appendChild(drinkDescription);

    return drinkItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;