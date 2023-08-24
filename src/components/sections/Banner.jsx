import { useState, useEffect } from "react";

const Banner = () => {
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
        <section className="banner">
            <div className="container">
                <div className="banner__block">
                    <h2 data-aos='fade-up' data-aos-delay='150'>GET 50%</h2>
                    <form data-aos='fade-up' data-aos-delay='250' action="#">
                        <input type="email" placeholder={screenSize.width > 700 ? "Enter Your Email Address" : "Email Address"}/>
                        <button className="button__simple">subscribe</button>
                    </form>
                    <img data-aos='fade-up-left' data-aos-delay='150' src="/eatly/src/assets/dishes/trending-swe-dish.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner