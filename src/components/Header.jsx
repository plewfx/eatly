import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'

const Header = () => {
    const [openBurger, setOpenBurger] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <nav className={openBurger ? "header__nav active" : "header__nav"}>
                    <NavLink data-aos="fade-right" data-aos-delay="300" className='nav__link' to='/menu'>Menu</NavLink>
                    <NavLink data-aos="fade-right" data-aos-delay="400" className='nav__link' to='/blog'>Blog</NavLink>
                    <NavLink data-aos="fade-right" data-aos-delay="500" className='nav__link' to='/pricing'>Pricing</NavLink>
                    <NavLink data-aos="fade-right" data-aos-delay="600" className='nav__link' to='/contact'>Contact</NavLink>
                </nav>
                <div className={openBurger ? "header__autho active" : 'header__autho'}>
                    <Link to='/login' className='button__login'><Link to='/login'>Login</Link></Link>
                    <Link to='/sign-up' className="button__simple"><Link to='/sign-up'>Sign Up</Link></Link>
                </div>
                <div className={openBurger ? 'header__burger-active' : 'header__burger'} onClick={() => setOpenBurger(prev => !prev)}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header