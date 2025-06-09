import HomeHero from "../components/sections/HomeHero"
import Features from "../components/sections/Features"
import Mobile from "../components/sections/Mobile"
import Restaurants from "../components/sections/Restaurants"
import Dishes from "../components/sections/Dishes"
import Dashboard from "../components/sections/Dashboard"
import Banner from "../components/sections/Banner"
import Reviews from "../components/sections/Reviews"

const Home = () => {
    return (
        <main className="home">
            <HomeHero />
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