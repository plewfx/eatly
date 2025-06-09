import { useState } from "react"

const Category = ({ id, name, img }) => {
    const [selected, setSelected] = useState(false)

    return (
        <div data-aos='fade-left' data-aos-delay={id * 100} onClick={() => setSelected(prev => !prev)} className={selected ? 'category active ' + name : 'category ' + name}>
            <img src={'./src/assets/icons/' + img + '.svg'} alt="" />
            <h6>{name}</h6>
        </div>
    )
}

export default Category