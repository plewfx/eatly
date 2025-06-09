import Restaurant from "../child/Restaurant";
import useRestaurantsStore from "../../useRestaurantStore";
import ViewAll from "../UI/ViewAll";
import useScreenSizeStore from "../../useScreenSizeStore";
import { useEffect} from "react";

const Restaurants = () => {
    const restaurants = useRestaurantsStore(set => set.restaurants)
    
    const restaurantList = restaurants.map(restaurant => {
        return (
            <Restaurant
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                highlight={restaurant.highlight}
                img={restaurant.img}
                time={restaurant.time}
                rating={restaurant.rating}
                marked={restaurant.marked}
                setMarked={restaurant.setMarked}
            />
        )
    })

    const { screenSize, updateScreenSize } = useScreenSizeStore();

    useEffect(() => {
      const updateDimension = () => {
        updateScreenSize();
      };
      window.addEventListener('resize', updateDimension);
  
      return () => {
        window.removeEventListener('resize', updateDimension);
      };
    }, []);

    return (
        <section className="restaurants">
            <div className="container">
                <div className="restaurants__text">
                    <h3 data-aos='fade-up' data-aos-delay='100'>Our Top {screenSize.width < 700 ? <br /> : null} <span>Restaurants</span></h3>
                    {screenSize.width > 700 ? <ViewAll /> : null}
                </div>
                <div className="restaurants__list">
                    {restaurantList}
                </div>
                {screenSize.width < 700 ? <ViewAll /> : null}
            </div>
        </section>
    )
}

export default Restaurants