import { useState } from "react"

const Sort = ({ id, text }) => {
    const [active, setActive] = useState(false)
    
    const color = '#6C5FBC'

    return (
        <p data-aos='fade-left' data-aos-delay={id * 150} onClick={() => setActive(prev => !prev)} style={active ? {color} : null}>{text}</p>
    )
}

export default Sort