import Dish from "../../elements/Dish"
import dishesData from "../../dishesData"
import ViewAll from "../../components/ViewAll"

const Dishes = () => {
    const dishesList = dishesData.map(dish => {
        return (
            <Dish
                key={dish.id}
                id={dish.id}
                img={dish.img}
                name={dish.name}
                highlight={dish.highlight}
                time={dish.time}
                rating={dish.rating}
                price={dish.price}
            />
        )
    }) 
    return (
        <section className="dishes">
            <div className="container">
                <h3 data-aos='fade-up' data-aos-delay='100'>Our Top <span>Dishes</span></h3>
                <div className="dishes__list">
                    {dishesList}
                </div>
                <ViewAll />
            </div>
        </section>
    )
}

export default Dishes