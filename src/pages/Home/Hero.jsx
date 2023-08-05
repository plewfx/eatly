import { Link } from 'react-router-dom'
import HeroImage from './HeroImage'
import { useEffect, useState } from 'react';

const Hero = () => {
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
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <div data-aos="fade-right" data-aos-delay="200" className="hero__subtitle">OVER 1000 USERS</div>
                        {
                        screenSize.width > 700 ? 
                        <h1 data-aos="fade-up" data-aos-delay="300" >Enjoy Foods All<br />Over The <span>World</span></h1> :
                        <h1 data-aos="fade-up" data-aos-delay="300" >Enjoy Foods Over <span>World</span></h1>
                        }
                        <p data-aos="fade-up" data-aos-delay="400" className='hero'>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <Link to='/menu'><span>$20 bonus.</span></Link></p>
                    </div>
                    <div className="hero__actions">
                        <div className="hero__buttons">
                            <Link to="/sign-up" className="button__simple"><Link to="/sign-up">Get Started</Link></Link>
                            <Link to="/pricing" className="button__out"><Link to='/pricing'>Go Pro</Link></Link>
                        </div>
                        <Link to='https:/www.trustpilot.com' className="hero__certificate">
                            <img data-aos="fade-up" data-aos-delay="100" src="/icons/trustpilot.svg" alt="Trustpilot" />
                            <img data-aos="fade-up" data-aos-delay="200" src="/icons/stars.svg" alt="" />
                            <span data-aos="fade-up" data-aos-delay="300" >4900+</span>
                        </Link>
                    </div>
                </div>
                <HeroImage />
            </div>
        </section>
    )
}

export default Hero