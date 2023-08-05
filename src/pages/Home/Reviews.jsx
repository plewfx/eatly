import reviewsData from "../../reviewsData"
import Review from '../../elements/Review'
import { useEffect, useState } from 'react';

const Reviews = () => {
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
        <section className="reviews">
            <div className="container">
                <h3 data-aos='fade-up' data-aos-delay='100'><span>Customer</span> Say</h3>
                <div className="reviews__list">
                    {reviewsData.map(review => {
                        return (
                            <Review 
                                key={review.id}
                                id={review.id}
                                img={review.img}
                                name={review.name}
                                date={review.date}
                                text={review.text}
                                rating={review.rating}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Reviews