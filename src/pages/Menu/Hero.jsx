const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__banners">
                    <svg xmlns="http:/www.w3.org/2000/svg" width="43" height="36" viewBox="0 0 43 36" fill="none">
                        <path d="M16.749 7.74478C12.2404 11.8023 8.41586 16.1642 4.18022 20.3494" stroke="#685BB8" strokeWidth="2.72368" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M37.0643 8.45488C27.0652 13.0255 17.6147 18.4398 8.71608 24.0177" stroke="#685BB8" strokeWidth="2.72368" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M38.5293 23.1181C30.393 23.5896 19.3126 26.7545 11.298 28.6542" stroke="#685BB8" strokeWidth="2.72368" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="hero__banners-list">
                        <div className="hero__banner">
                            <div className="hero__banner-desc">
                                <h1>50% OFF</h1>
                                <h1>WEEKENDS</h1>
                            </div>
                            <img data-aos='fade-up-left' data-aos-delay='150' src="/dishes/trending-swe-dish.png" alt="" />
                        </div>
                    </div>
                    <div className="hero__banners-swiper">
                        <div className="active"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero