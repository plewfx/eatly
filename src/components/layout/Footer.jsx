import Logo from "../UI/Logo"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__line1">
                    <Logo />
                    <div className="footer__nav">
                        <NavLink data-aos="fade-right" data-aos-delay="300" className='nav__link' to='/eatly/menu'>Menu</NavLink>
                        <NavLink data-aos="fade-right" data-aos-delay="400" className='nav__link' to='/eatly/blog'>Blog</NavLink>
                        <NavLink data-aos="fade-right" data-aos-delay="500" className='nav__link' to='/eatly/about'>About us</NavLink>
                        <NavLink data-aos="fade-right" data-aos-delay="600" className='nav__link' to='/eatly/contact'>Contact</NavLink>
                    </div>
                </div>
                <div className="stick"></div>
                <div className="footer__line2">
                    © 2023 EATLY All Rights Reserved.
                    <div className="footer__nav">
                        <NavLink className='nav__link' to='https:/instagram.com'><img src="/src/assets/icons/inst.svg" alt="" /></NavLink>
                        <NavLink className='nav__link' to='https:/linkedin.com'><img src="/src/assets/icons/linkedin.svg" alt="" /></NavLink>
                        <NavLink className='nav__link' to='https:/facebook.com'><img src="/src/assets/icons/fb.svg" alt="" /></NavLink>
                        <NavLink className='nav__link' to='https:/twitter.com'><img src="/src/assets/icons/tweet.svg" alt="" /></NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer