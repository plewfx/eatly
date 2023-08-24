const CartDish = ({ id, img, name, status, date }) => {
    return (
        <div className="dish" data-aos='fade-right' data-aos-delay={`${id * 100}`}>
            <img src={'/eatly/assets/dishes/' + img + '.png'} alt={name} className="dish__img" />
            <div className="dish__info">
                <h6>{name}</h6>
                <p>{status}</p>
            </div>
            <p className="dish__time">{date}</p>
        </div>
    )
}

export default CartDish