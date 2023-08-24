import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container">
                <h1 data-aos='fade-up' data-aos-delay='50'>404</h1>
                <p data-aos='fade-up' data-aos-delay='150'>Page not found or On development</p>
                <Link data-aos='fade-up' data-aos-delay='250' to='/eatly/'>Return to Home page</Link>
            </div>
        </div>
    )
}

export default NotFound