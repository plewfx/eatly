import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to='/' className="logo">
            <img data-aos="fade-right" data-aos-delay="100" src="/logo.svg" alt="eatly" />
            <span data-aos="fade-right" data-aos-delay="200">eatly</span>
        </Link>
    )
}

export default Logo