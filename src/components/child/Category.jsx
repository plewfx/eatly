import { useState } from "react"

const Category = ({ name, img }) => {
    const [selected, setSelected] = useState(false)

    return (
        <div onClick={() => setSelected(prev => !prev)} className={selected ? 'category active ' + name : 'category ' + name}>
            <img src={'/eatly/src/assets/icons/' + img + '.svg'} alt="" />
            <h6>{name}</h6>
        </div>
    )
}

export default Category