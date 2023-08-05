import Hero from "./Hero"
import Features from "./Features"
import Mobile from "./Mobile"
import Restaurants from "./Restaurants"
import Dishes from "./Dishes"
import Dashboard from "./Dashboard"
import Banner from "./Banner"
import Reviews from "./Reviews"

const Home = () => {
    return (
        <main className="home">
            <Hero />
            <Features />
            <Mobile />
            <Restaurants />
            <Dishes />
            <Dashboard />
            <Reviews />
            <Banner />
        </main>
    )
}

export default Home