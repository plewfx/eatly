import Restaurant from "../../elements/Restaurant";
import restaurantsData from "../../restaurantsData";
import ViewAll from "../../components/ViewAll";

const Restaurants = () => {
    const restaurantsList = restaurantsData.map(restaurant => {
        return (
            <Restaurant
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                highlight={restaurant.highlight}
                img={restaurant.img}
                time={restaurant.time}
                rating={restaurant.rating}
            />
        )
    })
    return (
        <section className="restaurants">
            <div className="container">
                <h3 data-aos='fade-up' data-aos-delay='100'>Our Top <span>Restaurants</span></h3>
                <div className="restaurants__list">
                    {restaurantsList}
                </div>
                <ViewAll />
            </div>
        </section>
    )
}

export default Restaurants