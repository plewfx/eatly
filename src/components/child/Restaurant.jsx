import { Link } from "react-router-dom"
import useRestaurantsStore from "../../useRestaurantStore";

const Restaurant = ({ id, name, highlight, img, time, rating, marked }) => {
    const setMarked = useRestaurantsStore(set => set.setMarked)
    const toggleMarked = () => {
        setMarked(prev => !prev);
    };

    return (
        <div data-aos='fade-right' data-aos-delay={`${id * 100}`} className="restaurant">
            <Link to={`/eatly/menu/${name.toLowerCase().replace(/\s/g, '-')}`} className="restaurant__image">
                <img src={'/eatly/src/assets/restaurants/' + img + '.png'} alt={name} />
            </Link>
            <Link to={`/eatly/menu/${name.toLowerCase().replace(/\s/g, '-')}`} className="restaurant__info">
                <div className={highlight}>{highlight}</div>
                <div className="restaurant__desc">
                    <h5>{name}</h5>
                    <div className="restaurant__rating">
                        <p>{time}min •</p>
                        <img src="/eatly/src/assets/icons/star.svg" alt="" />
                        <p>{rating}</p>
                    </div>
                </div>
            </Link>
            <button onClick={toggleMarked}>
                <img src={'/eatly/src/assets/icons/bookmark' + (marked ? '-active.svg' : '.svg')} alt="Save" />
            </button>
        </div>
    )
}

export default Restaurant