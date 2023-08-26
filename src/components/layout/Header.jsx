import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../components/UI/Logo'

const Header = () => {
    const [openBurger, setOpenBurger] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <nav className={openBurger ? "header__nav active" : "header__nav"}>
                    <NavLink onClick={() => setOpenBurger(prev => !prev)} data-aos="fade-right" data-aos-delay="300" className='nav__link' to='/eatly/menu'>Menu</NavLink>
                    <NavLink onClick={() => setOpenBurger(prev => !prev)} data-aos="fade-right" data-aos-delay="400" className='nav__link' to='/eatly/blog'>Blog</NavLink>
                    <NavLink onClick={() => setOpenBurger(prev => !prev)} data-aos="fade-right" data-aos-delay="500" className='nav__link' to='/eatly/pricing'>Pricing</NavLink>
                    <NavLink onClick={() => setOpenBurger(prev => !prev)} data-aos="fade-right" data-aos-delay="600" className='nav__link' to='/eatly/contact'>Contact</NavLink>
                </nav>
                <div className={openBurger ? "header__autho active" : 'header__autho'}>
                    <Link onClick={() => setOpenBurger(prev => !prev)} to='/login' className='button__login'>Login</Link>
                    <Link onClick={() => setOpenBurger(prev => !prev)} to='/sign-up' className="button__simple">Sign Up</Link>
                </div>
                <div className={openBurger ? 'header__burger-active' : 'header__burger'} onClick={() => setOpenBurger(prev => !prev)}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header