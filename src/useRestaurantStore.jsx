import { create } from "zustand";

const useRestaurantsStore = create((set => ({
    restaurants: [
        {
            id: 1,
            name: 'The Chicken King',
            highlight: 'healthy',
            img: 'the-chicken-king',
            time: '24',
            rating: '4.8',
            marked: false
        },
        {
            id: 2,
            name: 'The Burger King',
            highlight: 'trending',
            img: 'the-burger-king',
            time: '24',
            rating: '4.9',
            marked: false
        },
        {
            id: 3,
            name: 'The Chicken King',
            highlight: 'healthy',
            img: 'the-chicken-king',
            time: '24',
            rating: '4.8',
            marked: false
        },
    ],
    setMarked: (marked) => {
        set({ marked: !marked })
    }
})))

export default useRestaurantsStore