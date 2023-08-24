import Dish from "../child/Dish"
import { dishesData } from "../../data";
import ViewAll from "../UI/ViewAll"

import { useState, useEffect } from "react"

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

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
    function getCurrentDimension(){
      return {
            width: window.innerWidth,
            height: window.innerHeight
      }
    }
    
    useEffect(() => {
          const updateDimension = () => {
                setScreenSize(getCurrentDimension())
          }
          window.addEventListener('resize', updateDimension);
    
      
          return(() => {
              window.removeEventListener('resize', updateDimension);
          })
    }, [screenSize])

    return (
        <section className="dishes">
            <div className="container">
                <div className="dishes__text">
                    <h3 data-aos='fade-up' data-aos-delay='100'>Our Top {screenSize.width < 700 ? <br /> : null} <span>Dishes</span></h3>
                    {screenSize.width > 700 ? <ViewAll /> : null}
                </div>
                <div className="dishes__list">
                    {dishesList}
                </div>
                {screenSize.width < 700 ? <ViewAll /> : null}
            </div>
        </section>
    )
}

export default Dishes