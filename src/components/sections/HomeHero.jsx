import HeroImage from './HeroImage'
import useScreenSizeStore from '../../useScreenSizeStore'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
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
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <p className="hero__subtitle">OVER 1000 USERS</p>
                        {screenSize.width < 700 ? 
                        <h1>Enjoy Foods Over <span>World</span></h1> :
                        <h1>Enjoy Foods All Over The <span>World</span></h1>}
                        <p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <Link to='menu'>$20 bonus.</Link></p>
                    </div>
                    <div className="hero__actions">
                        <div className="hero__buttons">
                            <Link to='/eatly/pricing' className="button__simple">
                                Get Started
                            </Link>
                            <Link to='/eatly/pricing' className="button__out">
                                Go Pro
                            </Link>
                        </div>
                        <div className="hero__certificate">
                            <Link to='https:/trustpilot.com'>
                                <img src="/eatly/assets/icons/trustpilot.svg" />
                                <img src="/eatly/assets/icons/stars.svg" />
                                <span>4900+</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <HeroImage />
            </div>
        </section>
    )
}

export default HomeHero