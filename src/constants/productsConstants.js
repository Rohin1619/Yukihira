import {nanoid} from "nanoid";

export const foodProducts = {
    momo: [
        {
            id: nanoid(),
            name: 'Veg Momo',
            type: [
                {
                    id: nanoid(),
                    typeLabel: 'Steam',
                    price: 150
                }, {
                    id: nanoid(),
                    typeLabel: 'Kotheys',
                    price: 160
                }, {
                    id: nanoid(),
                    typeLabel: 'Fry',
                    price: 170
                },
            ]

        }, {
            id: nanoid(),
            name: 'Chicken Momo',
            type: [
                {
                    id: nanoid(),
                    typeLabel: 'Steam',
                    price: 200
                }, {
                    id: nanoid(),
                    typeLabel: 'Kotheys',
                    price: 220
                }, {
                    id: nanoid(),
                    typeLabel: 'Fry',
                    price: 240
                },
            ]

        }, {
            id: nanoid(),
            name: 'Buff Momo',
            type: [
                {
                    id: nanoid(),
                    typeLabel: 'Steam',
                    price: 180
                }, {
                    id: nanoid(),
                    typeLabel: 'Kotheys',
                    price: 200
                }, {
                    id: nanoid(),
                    typeLabel: 'Fry',
                    price: 220
                },
            ]

        },
    ],
    pizza: [
        {
            id: nanoid(),
            name: 'Margherita Pizza',
            price: 450
        }, {
            id: nanoid(),
            name: 'Pepperoni Pizza',
            price: 600
        }, {
            id: nanoid(),
            name: 'Meat Lovers Pizza',
            price: 800
        }, {
            id: nanoid(),
            name: 'Chicken Supreme',
            price: 800
        }
    ],
    Burger: [
        {
            id: nanoid(),
            name: 'Ham Burger',
            price: 300
        }, {
            id: nanoid(),
            name: 'Crunchy Chicken Burger',
            price: 350
        }, {
            id: nanoid(),
            name: 'Ham Burger with Bacon and cheese',
            price: 550
        }, {
            id: nanoid(),
            name: 'Classic Grilled Chicken Burger',
            price: 500
        }
    ]
};

export const beverageProducts = {
    HotDrink: [
        {
            id: nanoid(),
            name: 'Green Tea',
            price: 110
        },
        {
            id: nanoid(),
            name: 'BLack Tea',
            price: 80
        },
        {
            id: nanoid(),
            name: 'Milk Tea',
            price: 100
        },
        {
            id: nanoid(),
            name: 'Masala Milk Tea',
            price: 120
        }, {
            id: nanoid(),
            name: 'Americano',
            price: 150
        }, {
            id: nanoid(),
            name: 'Expresso',
            price: 160
        }, {
            id: nanoid(),
            name: 'Latte',
            price: 180
        }, {
            id: nanoid(),
            name: 'Hot Chocolate',
            price: 200
        }
    ],
    ColdDrink: [
        {
            id: nanoid(),
            name: 'Ice Americano',
            price: 200
        }, {
            name: 'Ice Latte',
            price: 200
        }, {
            name: 'Iced Mocha',
            price: 200
        }
    ],
    soda: [
        {
            id: nanoid(),
            name: 'Coca-Cola',
            price: 100
        }, {
            id: nanoid(),
            name: 'Sprite',
            price: 100
        }, {
            id: nanoid(),
            name: 'Fanta',
            price: 100
        }
    ],
    juice: [
        {
            id: nanoid(),
            name: 'Orange Juice',
            price: 150
        }, {
            id: nanoid(),
            name: 'Apple Juice',
            price: 150
        }, {
            id: nanoid(),
            name: 'Watemelon Juice',
            price: 150
        }
    ],
    whisky: [
        {
            id: nanoid(),
            name: 'Jack Daniels',
            type: [
                {
                    id: nanoid(),
                    typeLabel: '30ml',
                    price: 250
                }, {
                    id: nanoid(),
                    typeLabel: '60ml',
                    price: 500
                }, {
                    id: nanoid(),
                    typeLabel: '90ml',
                    price: 750
                }, {
                    id: nanoid(),
                    typeLabel: '750ml',
                    price: 6300
                }
            ]
        }, {
            id: nanoid(),
            name: 'Jagermeister',
            type: [
                {
                    id: nanoid(),
                    typeLabel: '30ml',
                    price: 225
                }, {
                    id: nanoid(),
                    typeLabel: '60ml',
                    price: 450
                }, {
                    id: nanoid(),
                    typeLabel: '90ml',
                    price: 675
                }, {
                    id: nanoid(),
                    typeLabel: '750ml',
                    price: 5600
                }
            ]
        }, {
            id: nanoid(),
            name: 'Old Durbar',
            type: [
                {
                    id: nanoid(),
                    typeLabel: '30ml',
                    price: 115
                }, {
                    id: nanoid(),
                    typeLabel: '60ml',
                    price: 225
                }, {
                    id: nanoid(),
                    typeLabel: '90ml',
                    price: 340
                }, {
                    id: nanoid(),
                    typeLabel: '750ml',
                    price: 2800
                }
            ]
        }
    ],
    beer: [
        {
            id: nanoid(),
            name: 'Tuborg',
            price: 300
        }, {
            id: nanoid(),
            name: 'Barahsinghe',
            price: 350
        }, {
            id: nanoid(),
            name: 'GOrkha Strong',
            price: 300
        }
    ]
};
