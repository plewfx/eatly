import { useParams, Link } from "react-router-dom";
import { restaurantData, dishesData } from "../data";
import { useState } from "react";
import useScreenSizeStore from '../useScreenSizeStore'
import Dish from '../components/child/Dish'
import FAQ from '../components/sections/FAQ'

const RestaurantDetail = () => {
    const screenSize = useScreenSizeStore(set => set.screenSize)

    let dishCount = 1

    const params = useParams()

    const [bookMarked, setBookMarked] = useState(false)

    const currentRestaurant = restaurantData.filter((restaurant) => restaurant.name.toLowerCase().replace(/\s/g, '-') == params.id)
    const { id, name, highlight, img, time, rating } = currentRestaurant[0]

    return (
        <main className='restaurant-detail'>
            <section className="restaurant-info">
                <div className="container">
                    <div data-aos='fade-up' data-aos-delay='100' className="restaurant-info__image" style={{ backgroundImage: 'url("/src/assets/restaurants/' + name.toLowerCase().replace(/\s/g, '-') + '.png")' }}></div>
                    <div className="restaurant-info__text">
                        {screenSize.width < 700 ? <div className={highlight}>{highlight}</div> : null}
                        <h4 data-aos='fade-right' data-aos-delay='200'>{name}</h4>
                        <div className="restaurant-info__rating">
                            <p data-aos='fade-right' data-aos-delay='300'>{time}min •</p>
                            <img data-aos='fade-right' data-aos-delay='400' src='../assets/icons/star.svg' alt="" />
                            <p data-aos='fade-right' data-aos-delay='500'>{rating}</p>
                        </div>
                        <button onClick={() => setBookMarked(prev => !prev)} className={bookMarked && 'active'}>
                            <img src={'/src/assets/icons/bookmark' + (bookMarked ? '-active.svg' : '.svg')} alt="Save" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="popular-dishes">
                <div className="container">
                    <h3>Popular 🔥</h3>
                    <div className="dishes__list">
                        {
                            dishesData.map(dish => {
                                return (
                                    <Dish
                                        key={dish.id}
                                        id={dish.id}
                                        name={dish.name}
                                        img={dish.img}
                                        highlight={dish.highlight}
                                        time={dish.time}
                                        rating={dish.rating}
                                        price={dish.price}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="chicken">
                <div className="container">
                    <h3>Chicken Veg{screenSize.width > 700 ? 'etables' : null}</h3>
                    <div className="dishes__list">
                        {
                            dishesData.map(dish => {
                                dishCount++

                                if (dishCount <= 3) {
                                    return (
                                        <Dish
                                            key={dish.id}
                                            id={dish.id}
                                            name={dish.name}
                                            img={dish.img}
                                            highlight={dish.highlight}
                                            time={dish.time}
                                            rating={dish.rating}
                                            price={dish.price}
                                        />
                                    )
                                } else {
                                    return
                                }
                            })
                        }
                    </div>
                </div>
            </section>
            <FAQ />
        </main>
    );
};

export default RestaurantDetail;