import { useState } from "react"

const Sort = ({text}) => {
    const [active, setActive] = useState(false)
    
    const color = '#6C5FBC'

    return (
        <p onClick={() => setActive(prev => !prev)} style={active ? {color} : null}>{text}</p>
    )
}

export default Sort