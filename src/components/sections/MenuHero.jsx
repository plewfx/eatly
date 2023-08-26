import Slider from '@mui/material/Slider';

import { categoryData } from '../../data'
import Category from '../child/Category'

import Sort from '../child/Sort'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useState } from 'react';

const MenuHero = () => {
    const sort = [
        {id: 1, text: 'Recomended'},
        {id: 2, text: 'Fast Delivery'}, 
        {id: 3, text: 'Most Popular'}
    ]

    const categoryList = categoryData.map(cat => {
        return (
            <Category
                key={cat.id}
                id={cat.id}
                name={cat.name}
                img={cat.img}
            />
        )
    })

    const marks = [
        {
          value: 0,
          label: '$0',
        },
        {
          value: 25,
          label: '$25',
        },
        {
          value: 50,
          label: '$50',
        },
        {
          value: 100,
          label: '$100',
        },
        {
          value: 500,
          label: '$500',
        },
        {
          value: 1000,
          label: '$1000',
        },
      ];
      
    function valuetext(value) {
        return `$${value}`;
    }

    const [activeButton, setActiveButton] = useState(1)

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__banners">
                    <svg data-aos='fade-left' xmlns="http:/www.w3.org/2000/svg" width="43" height="36" viewBox="0 0 43 36" fill="none">
                        <path d="M16.749 7.74478C12.2404 11.8023 8.41586 16.1642 4.18022 20.3494" stroke="#685BB8" strokeWidth="2.72368" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M37.0643 8.45488C27.0652 13.0255 17.6147 18.4398 8.71608 24.0177" stroke="#685BB8" strokeWidth="2.72368" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M38.5293 23.1181C30.393 23.5896 19.3126 26.7545 11.298 28.6542" stroke="#685BB8" strokeWidth="2.72368" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div data-aos='fade-right' className="hero__banners-list">
                        <Carousel autoPlay={true} infiniteLoop={true}>
                            <div className="hero__banner">
                                <div className="hero__banner-desc">
                                    <h1>50% OFF</h1>
                                    <h1>WEEKENDS</h1>
                                </div>
                                <img data-aos='fade-up-left' data-aos-delay='150' src="src/assets/dishes/trending-swe-dish.png" alt="" />
                            </div>
                            <div className="hero__banner">
                                <div className="hero__banner-desc">
                                    <h1>100% OFF</h1>
                                    <h1>First delivery</h1>
                                </div>
                            </div>
                            <div className="hero__banner">
                                <div className="hero__banner-desc">
                                    <h1>25% OFF</h1>
                                    <h1>WEEKENDS</h1>
                                </div>
                                <img data-aos='fade-up-left' data-aos-delay='150' src="src/assets/dishes/healthy-chicken-hell.png" alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <form className="hero__sort">
                    <div className="hero__sort-category">
                        <h5 data-aos='fade-up' data-aos-delay='100'>Category</h5>
                        <div className="hero__sort-category-list">
                            {categoryList}
                        </div>
                    </div>
                    <div className="hero__sort-by">
                    <h5 data-aos='fade-up' data-aos-delay='200'>Sort By</h5>
                    <div className="hero__sort-by-list">
                        {sort.map(sor => {
                            return (
                                <Sort
                                    key={sor.id}
                                    id={sor.id}
                                    text={sor.text}
                                />
                            )
                        })}
                    </div>
                    </div>
                    <div className="hero__sort-price">
                        <h5 data-aos='fade-up' data-aos-delay='400'>Price</h5>
                        <div className="hero__sort-price-slider">
                            <Slider
                                data-aos='fade-up'
                                data-aos-delay='500'
                                aria-label="Custom marks"
                                defaultValue={25}
                                getAriaValueText={valuetext}
                                step={25}
                                valueLabelDisplay="auto"
                                marks={marks}
                            />
                        </div>
                    </div>
                    <button data-aos='fade-up' data-aos-delay='600'>Apply</button>
                </form>
                <form className="hero__search">
                    <div data-aos='fade-right' data-aos-delay='700' className="hero__search-input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <circle cx="15.1401" cy="15" r="9.37834" transform="rotate(-45 15.1401 15)" stroke="#C2C3CB" strokeWidth="2"/>
                            <path d="M22.5112 21.9678L27.2549 26.6003" stroke="#C2C3CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div data-aos='fade-right' data-aos-delay='800' className="hero__search-buttons">
                        <div onClick={() => setActiveButton(prev => prev = 0)} className={activeButton === 0 ? 'button active' : 'button'}>
                            Food
                        </div>
                        <div onClick={() => setActiveButton(prev => prev = 1)} className={activeButton === 1 ? 'button active' : 'button'}>
                            Resturent
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default MenuHero