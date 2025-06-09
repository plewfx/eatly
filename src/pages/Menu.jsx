import MenuHero from "../components/sections/MenuHero"
import Restaurants from "../components/sections/Restaurants"
import Dishes from "../components/sections/Dishes"
import FAQ from '../components/sections/FAQ'

const Menu = () => {
    return (
        <main className="menu">
            <MenuHero />
            <Restaurants />
            <Dishes />
            <FAQ />
        </main>
    )
}

export default Menu