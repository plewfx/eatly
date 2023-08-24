Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}

const date = new Date()

export const cartData = [
    {
        id: 1,
        img: 'healthy-chicken-hell',
        name: 'Chicken Hell',
        status: 'On the way',
        date: date.timeNow()
    },
    {
        id: 2,
        img: 'trending-swe-dish',
        name: 'Swe Dish',
        status: 'Delivered',
        date: 'Yesterday'
    },
    {
        id: 3,
        img: 'supreme-swe-dish',
        name: 'Fish Hell Veg',
        status: 'Cancelled',
        date: 'Yesterday'
    },
]

export const categoryData = [
    {
        id: 1,
        name: 'Pizza',
        img: 'Pizza',
        // backgroundColor: '#FFDE8A',
        // color: '#D69900',
        // stroke: 'rgba(176, 124, 0, 0.5)',
    },
    {
        id: 2,
        name: 'Asian',
        img: 'Hotdog',
        // backgroundColor: '#F7C5BA',
        // color: '#FB471D',
        // stroke: 'rgba(251, 71, 29, 0.50)',
    },
    {
        id: 3,
        name: 'Donat',
        img: 'Doughnut',
        // backgroundColor: '#EDB66B',
        // color: '#E28B14',
        // stroke: '#FF8A00',
    },
    {
        id: 4,
        name: 'Ice',
        img: 'Icecream',
        // backgroundColor: '#5A85FF',
        // color: '#002073',
        // stroke: '#0047FF',
    },
]

export const dishesData = [
    {
        id: 1,
        img: 'healthy-chicken-hell',
        name: 'Chicken Hell',
        highlight: 'healthy',
        time: '24',
        rating: '4.8',
        price: '12.99',
    },
    {
        id: 2,
        img: 'trending-swe-dish',
        name: 'Swe Dish',
        highlight: 'trending',
        time: '34',
        rating: '4.9',
        price: '19.99',
    },
    {
        id: 3,
        img: 'supreme-swe-dish',
        name: 'Fish Hell Veg',
        highlight: 'supreme',
        time: '34',
        rating: '4.9',
        price: '19.99',
    },
    {
        id: 4,
        img: 'healthy-chicken-hell',
        name: 'Chicken Hell',
        highlight: 'healthy',
        time: '24',
        rating: '4.8',
        price: '12.99',
    },
    {
        id: 5,
        img: 'trending-swe-dish',
        name: 'Swe Dish',
        highlight: 'trending',
        time: '34',
        rating: '4.9',
        price: '19.99',
    },
]

export const restaurantData = [
    {
        id: 1,
        name: 'The Chicken King',
        highlight: 'healthy',
        img: 'the-chicken-king',
        time: '24',
        rating: '4.8'
    },
    {
        id: 2,
        name: 'The Burger King',
        highlight: 'trending',
        img: 'the-burger-king',
        time: '24',
        rating: '4.9'
    },
    {
        id: 3,
        name: 'The Chicken King',
        highlight: 'healthy',
        img: 'the-chicken-king',
        time: '24',
        rating: '4.8'
    },
]

export const reviewsData = [
    {
        id: 1,
        img: 'alex',
        name: 'Alexander R.',
        date: '01 Year',
        text: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time',
        rating: 5
    },
    {
        id: 2,
        img: 'alex',
        name: 'Alexander R.',
        date: '01 Year',
        text: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time',
        rating: 3
    },
    {
        id: 3,
        img: 'alex',
        name: 'Alexander R.',
        date: '01 Year',
        text: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time',
        rating: 5
    }
]

export const articlesData = [
    {
        id: 1,
        name: 'How To Order Food ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        },
        articles: [
            {
                id: 1,
                heading: 'Browse restaurants and menus',
                paragraph: `Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.`,
                list: [
                    {
                        id: 1,
                        name: 'It was popularized in the 1960s with the release'
                    },
                    {
                        id: 2,
                        name: 'Lorem Ipsum passages, and more recently'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Select your items',
                paragraph: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
                list: []
            },
            {
                id: 3,
                heading: 'Place your order',
                paragraph: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. `,
                list: []
            },
        ]
    },
    {
        id: 2,
        name: 'How To Track The Order ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        },
        articles: [
            {
                id: 1,
                heading: 'Browse restaurants and menus',
                paragraph: `Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.`,
                list: [
                    {
                        id: 1,
                        name: 'It was popularized in the 1960s with the release'
                    },
                    {
                        id: 2,
                        name: 'Lorem Ipsum passages, and more recently'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Select your items',
                paragraph: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
                list: []
            },
            {
                id: 3,
                heading: 'Place your order',
                paragraph: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. `,
                list: []
            },
        ]
    },
    {
        id: 3,
        name: 'How To Manage Cards ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        },
                articles: [
            {
                id: 1,
                heading: 'Browse restaurants and menus',
                paragraph: `Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.`,
                list: [
                    {
                        id: 1,
                        name: 'It was popularized in the 1960s with the release'
                    },
                    {
                        id: 2,
                        name: 'Lorem Ipsum passages, and more recently'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Select your items',
                paragraph: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
                list: []
            },
            {
                id: 3,
                heading: 'Place your order',
                paragraph: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. `,
                list: []
            },
        ]
    },
    {
        id: 4,
        name: 'Tips & Tricks For Business',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        },
                articles: [
            {
                id: 1,
                heading: 'Browse restaurants and menus',
                paragraph: `Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.`,
                list: [
                    {
                        id: 1,
                        name: 'It was popularized in the 1960s with the release'
                    },
                    {
                        id: 2,
                        name: 'Lorem Ipsum passages, and more recently'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Select your items',
                paragraph: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
                list: []
            },
            {
                id: 3,
                heading: 'Place your order',
                paragraph: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. `,
                list: []
            },
        ]
    },
    {
        id: 5,
        name: 'How To Control Money ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        },
                articles: [
            {
                id: 1,
                heading: 'Browse restaurants and menus',
                paragraph: `Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.`,
                list: [
                    {
                        id: 1,
                        name: 'It was popularized in the 1960s with the release'
                    },
                    {
                        id: 2,
                        name: 'Lorem Ipsum passages, and more recently'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Select your items',
                paragraph: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
                list: []
            },
            {
                id: 3,
                heading: 'Place your order',
                paragraph: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. `,
                list: []
            },
        ]
    },
    {
        id: 6,
        name: 'Top 5 Business Ideas',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        },
                articles: [
            {
                id: 1,
                heading: 'Browse restaurants and menus',
                paragraph: `Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.`,
                list: [
                    {
                        id: 1,
                        name: 'It was popularized in the 1960s with the release'
                    },
                    {
                        id: 2,
                        name: 'Lorem Ipsum passages, and more recently'
                    },
                ]
            },
            {
                id: 2,
                heading: 'Select your items',
                paragraph: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
                list: []
            },
            {
                id: 3,
                heading: 'Place your order',
                paragraph: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. `,
                list: []
            },
        ]
    },
]