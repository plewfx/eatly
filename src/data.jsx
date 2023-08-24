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
        }
    },
    {
        id: 2,
        name: 'How To Track The Order ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        }
    },
    {
        id: 3,
        name: 'How To Manage Cards ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        }
    },
    {
        id: 4,
        name: 'Tips & Tricks For Business',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        }
    },
    {
        id: 5,
        name: 'How To Control Money ?',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        }
    },
    {
        id: 6,
        name: 'Top 5 Business Ideas',
        date: '15 DEC, 2022',
        profile: {
            img: 'perperzon',
            name: 'Perperzon'
        }
    },
]