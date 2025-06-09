import { useState } from "react"
import { Link } from "react-router-dom"

const Dish = ({ id, img, name, highlight, time, rating, price }) => {
    const [added, setAdded] = useState(false)

    const createPricingBeforeDot = (price) => {
        let beforeDot = []
        for (let i = 0; i < price.length; i++) {
            if (price[i] !== '.') {
                beforeDot.push(price[i])
                beforeDot.push(price[i + 1])
                break
            }
        }

        return beforeDot.join('')
    }

    const createPricingAfterDot = (price) => {
        let afterDot = []
        for (let i = 0; i < price.length; i++) {
            if (price[i] === '.') {
                afterDot.push(price[i + 1])
                afterDot.push(price[i + 2])
            }
        }

        return afterDot.join('')
    }

    if (added) {
        alert('Added to favorites')
    }

    return (
        <div className="dish" data-aos='fade-right' data-aos-delay={`${id * 150}`}>
            <button onClick={() => setAdded(prev => !prev)} className="dish__add">
                <svg xmlns="http:/www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.0214844 6.66277C0.0214844 3.27527 2.99334 0.666992 6.48165 0.666992C8.2798 0.666992 9.86206 1.51012 10.9975 2.60107C12.1329 1.51012 13.7152 0.666992 15.5133 0.666992C19.0016 0.666992 21.9735 3.27527 21.9735 6.66277C21.9735 8.98325 20.9839 11.0239 19.6129 12.7488C18.2443 14.4707 16.4541 15.9322 14.74 17.1197C14.0852 17.5732 13.4229 17.9917 12.8167 18.3004C12.2475 18.5903 11.593 18.8558 10.9975 18.8558C10.402 18.8558 9.74747 18.5903 9.17827 18.3004C8.57208 17.9917 7.90974 17.5732 7.25503 17.1197C5.54091 15.9322 3.75066 14.4707 2.38204 12.7488C1.01106 11.0239 0.0214844 8.98325 0.0214844 6.66277ZM6.48165 2.54859C3.87344 2.54859 1.90309 4.4667 1.90309 6.66277C1.90309 8.42332 2.65044 10.0625 3.85505 11.578C5.06202 13.0966 6.68602 14.4365 8.32655 15.573C8.94732 16.003 9.53203 16.369 10.0322 16.6237C10.5693 16.8972 10.8804 16.9742 10.9975 16.9742C11.1146 16.9742 11.4257 16.8972 11.9628 16.6237C12.463 16.369 13.0477 16.003 13.6684 15.573C15.309 14.4365 16.933 13.0966 18.1399 11.578C19.3445 10.0625 20.0919 8.42332 20.0919 6.66277C20.0919 4.4667 18.1215 2.54859 15.5133 2.54859C14.0154 2.54859 12.6167 3.44351 11.7433 4.57937C11.5652 4.81098 11.2896 4.94671 10.9975 4.94671C10.7053 4.94671 10.4298 4.81098 10.2517 4.57937C9.37831 3.44351 7.97959 2.54859 6.48165 2.54859Z" fill={added ? 'red' : "#323142"} />
                </svg>
            </button>
            <Link to='menu'><img src={'/src/assets/dishes/' + img + '.png'} alt={name} className="dish__img" /></Link>
            <Link to='menu' className="dish__text">
                <div className="dish__info">
                    <div className="dish__info-title">
                        <p className={highlight}>{highlight}</p>
                        <h5 className="dish__info-name">{name}</h5>
                    </div>
                    <div className="dish__info-rating">
                        <p>{time}min •</p>
                        <img src="/src/assets/icons/star.svg" alt="" />
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="dish__price">
                    <div className="prices">
                        <p className="prices-main">{'$' + createPricingBeforeDot(price)}</p>
                        <p className="prices-lil">{'.' + createPricingAfterDot(price)}</p>
                    </div>
                    <svg xmlns="http:/www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
                        <rect x="0.34082" y="0.573242" width="28.6688" height="25.9811" rx="5.84127" fill="#323142" />
                        <mask id="path-2-inside-1_1_5351" fill="white">
                            <path d="M19.2294 14.3583H15.0827V18.5634H13.428V14.3583H9.30078V12.8593H13.428V8.63477H15.0827V12.8593H19.2294V14.3583Z" />
                        </mask>
                        <path d="M19.2294 14.3583H15.0827V18.5634H13.428V14.3583H9.30078V12.8593H13.428V8.63477H15.0827V12.8593H19.2294V14.3583Z" fill="black" />
                        <path d="M19.2294 14.3583V17.046H21.9171V14.3583H19.2294ZM15.0827 14.3583V11.6706H12.395V14.3583H15.0827ZM15.0827 18.5634V21.2511H17.7704V18.5634H15.0827ZM13.428 18.5634H10.7403V21.2511H13.428V18.5634ZM13.428 14.3583H16.1157V11.6706H13.428V14.3583ZM9.30078 14.3583H6.61308V17.046H9.30078V14.3583ZM9.30078 12.8593V10.1716H6.61308V12.8593H9.30078ZM13.428 12.8593V15.547H16.1157V12.8593H13.428ZM13.428 8.63477V5.94707H10.7403V8.63477H13.428ZM15.0827 8.63477H17.7704V5.94707H15.0827V8.63477ZM15.0827 12.8593H12.395V15.547H15.0827V12.8593ZM19.2294 12.8593H21.9171V10.1716H19.2294V12.8593ZM19.2294 11.6706H15.0827V17.046H19.2294V11.6706ZM12.395 14.3583V18.5634H17.7704V14.3583H12.395ZM15.0827 15.8757H13.428V21.2511H15.0827V15.8757ZM16.1157 18.5634V14.3583H10.7403V18.5634H16.1157ZM13.428 11.6706H9.30078V17.046H13.428V11.6706ZM11.9885 14.3583V12.8593H6.61308V14.3583H11.9885ZM9.30078 15.547H13.428V10.1716H9.30078V15.547ZM16.1157 12.8593V8.63477H10.7403V12.8593H16.1157ZM13.428 11.3225H15.0827V5.94707H13.428V11.3225ZM12.395 8.63477V12.8593H17.7704V8.63477H12.395ZM15.0827 15.547H19.2294V10.1716H15.0827V15.547ZM16.5417 12.8593V14.3583H21.9171V12.8593H16.5417Z" fill="white" mask="url(#path-2-inside-1_1_5351)" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}

export default Dish