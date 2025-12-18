/*
    MenuItem.js
    Inititalizing the variable with menu item objects
    Displaying all the menu items on the menu page
*/

 const MENU_ITEMS = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic delight with 100% real mozzarella cheese",
        price: 8.99,
        image: "Images/margherita.jpg",
        category: "Pizza"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        description: "A classic favorite topped with pepperoni and cheese",
        price: 10.99,
        image: "Images/pepperoni.jpg",
        category: "Pizza"
    },
    {
        id: 3,
        name: "Veggie Supreme",
        description: "Loaded with fresh veggies and mozzarella cheese",
        price: 9.99,
        image: "Images/veggie.jpg",
        category: "Pizza"
    },
    {
        id: 4,
        name: "BBQ Chicken Pizza",
        description: "Grilled chicken with BBQ sauce and red onions",
        price: 11.99,
        image: "Images/bbq_chicken.jpg",
        category: "Pizza"
    },
    {
        id: 5,
        name: "Hawaiian Pizza",
        description: "A tropical mix of ham and pineapple",
        price: 10.49,
        image: "Images/hawaiian.jpg",
        category: "Pizza"
    },
    {
        id: 6,
        name: "Meat Lovers Pizza",
        description: "Loaded with pepperoni, sausage, ham, and bacon",
        price: 12.99,
        image: "Images/meat_lovers.jpg",
        category: "Pizza"
    },
    {
        id: 7,
        name: "Four Cheese Pizza",
        description: "A blend of mozzarella, cheddar, parmesan, and gouda",
        price: 11.49,
        image: "Images/four_cheese.jpg",
        category: "Pizza"
    },
    {
        id: 8,
        name: "Buffalo Chicken Pizza",
        description: "Spicy buffalo chicken with blue cheese dressing",
        price: 12.49,
        image: "Images/buffalo_chicken.jpg",
        category: "Pizza"
    },
    {
        id: 9,
        name: "Alfredo Fettuccine",
        description: "Creamy alfredo sauce with fettuccine pasta",
        price: 13.99,
        image: "Images/alfredo_fettuccine.jpg",
        category: "Pasta"
    },
    {
        id: 10, 
        name: "Spaghetti Bolognese",
        description: "Classic spaghetti with rich bolognese sauce",
        price: 12.99,
        image: "Images/spaghetti_bolognese.jpg",
        category: "Pasta"
    },
    {
        id: 11,
        name: "Penne Arrabbiata",
        description: "Penne pasta in a spicy tomato sauce",
        price: 11.99,
        image: "Images/penne_arrabbiata.jpg",
        category: "Pasta"
    },
    {
        id: 12,
        name: "Shrimp Scampi",
        description: "Shrimp cooked in garlic butter sauce with linguine",
        price: 14.99,
        image: "Images/shrimp_scampi.jpg",
        category: "Pasta"
    },
    {
        id: 13,
        name: "Lasagna",
        description: "Layers of pasta, meat sauce, and cheese baked to perfection",
        price: 13.49,
        image: "Images/lasagna.jpg",
        category: "Pasta"
    },
    {
        id: 14,
        name: "Chicken Parmigiana",
        description: "Breaded chicken breast topped with marinara sauce and melted cheese",
        price: 15.99,
        image: "Images/chicken_parmigiana.jpg",
        category: "Pasta"
    },
    {
        id: 15,
        name: "Ravioli Carbonara",
        description: "Ravioli stuffed with cheese in a creamy carbonara sauce",
        price: 14.49,
        image: "Images/ravioli_carbonara.jpg",
        category: "Pasta"
    },
    {
        id: 17,
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
        price: 8.99,
        image: "Images/caprese_salad.jpg",
        category: "Salad"
    },
    {
        id: 18,
        name: "Garden Salad",
        description: "Mixed greens with cucumbers, tomatoes, and carrots",
        price: 6.99,
        image: "Images/garden_salad.jpg",
        category: "Salad"
    },
    {
        id: 19,
        name: "Spinach Salad",
        description: "Fresh spinach with red onions, bacon bits, and boiled eggs",
        price: 7.99,
        image: "Images/spinach_salad.jpg",
        category: "Salad"
    },
    {
        id: 20,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing and croutons",
        price: 7.99,
        image: "Images/caesar_salad.jpg",
        category: "Salad"
    },
    {
        id: 21,
        name: "Greek Salad",
        description: "Fresh vegetables with feta cheese and olives",
        price: 8.49,
        image: "Images/greek_salad.jpg",
        category: "Salad"
    },
    {
        id: 22,
        name: "Tiramisu",
        description: "Layers of coffee-soaked ladyfingers and mascarpone cheese",
        price: 6.99,
        image: "Images/tiramisu.jpg",
        category: "Dessert"     
    },
    {
        id: 23,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center",
        price: 7.49,
        image: "Images/chocolate_lava_cake.jpg",
        category: "Dessert"
    },
    {
        id: 24, 
        name: "Black Tie Mousse cake",
        description: "Decadent layers of chocolate and vanilla mousse with chocolate shavings",
        price: 7.99,
        image: "Images/black_tie_mousse_cake.jpg",
        category: "Dessert"
    },
    {
        id: 25,
        name: "Strawberry cream cake",
        description: "Light and fluffy cake layered with fresh strawberries and whipped cream",
        price: 6.49,
        image: "Images/strawberry_cream_cake.jpg",
        category: "Dessert"
    },
    {
        id: 26,
        name: "Silican Cheese cake",
        description: "Rich and creamy cheesecake with a graham cracker crust",
        price: 7.49,
        image: "Images/silican_cheese_cake.jpg",
        category: "Dessert"
    },
    {
        id: 27,
        name: "Lemon Tart",
        description: "Tangy lemon filling in a buttery tart shell",
        price: 6.99,
        image: "Images/lemon_tart.jpg",
        category: "Dessert"
    }
];
