import {nanoid} from "nanoid";

export const foodProducts = [
    {
        id: nanoid(),
        category: "Momo",
        items: [
            {
                id: nanoid(),
                name: "Veg Momo",
                types: [
                    {
                        id: nanoid(),
                        label: "Steam",
                        price: 150
                    }, {
                        id: nanoid(),
                        label: "Kotheys",
                        price: 160
                    }, {
                        id: nanoid(),
                        label: "Fry",
                        price: 170
                    },
                ]
            }, {
                id: nanoid(),
                name: "Chicken Momo",
                types: [
                    {
                        id: nanoid(),
                        label: "Steam",
                        price: 200
                    }, {
                        id: nanoid(),
                        label: "Kotheys",
                        price: 220
                    }, {
                        id: nanoid(),
                        label: "Fry",
                        price: 240
                    },
                ]
            }, {
                id: nanoid(),
                name: "Buff Momo",
                types: [
                    {
                        id: nanoid(),
                        label: "Steam",
                        price: 180
                    }, {
                        id: nanoid(),
                        label: "Kotheys",
                        price: 200
                    }, {
                        id: nanoid(),
                        label: "Fry",
                        price: 220
                    },
                ]
            },
        ]
    }, {
        id: nanoid(),
        category: "Pizza",
        items: [
            {
                id: nanoid(),
                name: "Margherita Pizza",
                price: 450
            }, {
                id: nanoid(),
                name: "Pepperoni Pizza",
                price: 600
            }, {
                id: nanoid(),
                name: "Meat Lovers Pizza",
                price: 800
            }, {
                id: nanoid(),
                name: "Chicken Supreme",
                price: 800
            },
        ]
    }, {
        id: nanoid(),
        category: "Burger",
        items: [
            {
                id: nanoid(),
                name: "Ham Burger",
                price: 300
            }, {
                id: nanoid(),
                name: "Crunchy Chicken Burger",
                price: 350
            }, {
                id: nanoid(),
                name: "Ham Burger with Bacon and Cheese",
                price: 550
            }, {
                id: nanoid(),
                name: "Classic Grilled Chicken Burger",
                price: 500
            },
        ]
    },
];

export const beverageProducts = [
    {
        id: nanoid(),
        category: "HotDrink",
        items: [
            {
                id: nanoid(),
                name: "Green Tea",
                price: 110
            },
            {
                id: nanoid(),
                name: "Black Tea",
                price: 80
            },
            {
                id: nanoid(),
                name: "Milk Tea",
                price: 100
            },
            {
                id: nanoid(),
                name: "Masala Milk Tea",
                price: 120
            }, {
                id: nanoid(),
                name: "Americano",
                price: 150
            }, {
                id: nanoid(),
                name: "Expresso",
                price: 160
            }, {
                id: nanoid(),
                name: "Latte",
                price: 180
            }, {
                id: nanoid(),
                name: "Hot Chocolate",
                price: 200
            },
        ]
    },
    {
        id: nanoid(),
        category: "ColdDrink",
        items: [
            {
                id: nanoid(),
                name: "Ice Americano",
                price: 200
            }, {
                id: nanoid(),
                name: "Ice Latte",
                price: 200
            }, {
                id: nanoid(),
                name: "Iced Mocha",
                price: 200
            },
        ]
    },
    {
        id: nanoid(),
        category: "Soda",
        items: [
            {
                id: nanoid(),
                name: "Coca-Cola",
                price: 100
            }, {
                id: nanoid(),
                name: "Sprite",
                price: 100
            }, {
                id: nanoid(),
                name: "Fanta",
                price: 100
            },
        ]
    },
    {
        id: nanoid(),
        category: "Juice",
        items: [
            {
                id: nanoid(),
                name: "Orange Juice",
                price: 150
            }, {
                id: nanoid(),
                name: "Apple Juice",
                price: 150
            }, {
                id: nanoid(),
                name: "Watermelon Juice",
                price: 150
            },
        ]
    }, {
        id: nanoid(),
        category: "Whisky",
        items: [
            {
                id: nanoid(),
                name: "Jack Daniels",
                types: [
                    {
                        id: nanoid(),
                        label: "30ml",
                        price: 250
                    }, {
                        id: nanoid(),
                        label: "60ml",
                        price: 500
                    }, {
                        id: nanoid(),
                        label: "90ml",
                        price: 750
                    }, {
                        id: nanoid(),
                        label: "750ml",
                        price: 6300
                    },
                ]
            }, {
                id: nanoid(),
                name: "Jagermeister",
                types: [
                    {
                        id: nanoid(),
                        label: "30ml",
                        price: 225
                    }, {
                        id: nanoid(),
                        label: "60ml",
                        price: 450
                    }, {
                        id: nanoid(),
                        label: "90ml",
                        price: 675
                    }, {
                        id: nanoid(),
                        label: "750ml",
                        price: 5600
                    },
                ]
            }, {
                id: nanoid(),
                name: "Old Durbar",
                types: [
                    {
                        id: nanoid(),
                        label: "30ml",
                        price: 115
                    }, {
                        id: nanoid(),
                        label: "60ml",
                        price: 225
                    }, {
                        id: nanoid(),
                        label: "90ml",
                        price: 340
                    }, {
                        id: nanoid(),
                        label: "750ml",
                        price: 2800
                    },
                ]
            },
        ]
    }, {
        id: nanoid(),
        category: "Beer",
        items: [
            {
                id: nanoid(),
                name: "Tuborg",
                price: 300
            }, {
                id: nanoid(),
                name: "Barahsinghe",
                price: 350
            }, {
                id: nanoid(),
                name: "Gorkha Strong",
                price: 300
            },
        ]
    },
];
