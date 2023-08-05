Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}

const date = new Date()

export default [
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