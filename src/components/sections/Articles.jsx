import Article from "../child/Article"
import { articlesData } from "../../data"
import { useState } from "react"

const Articles = () => {
    const [activeButton, setActiveButton] = useState(1)

    return (
        <section className="articles">
            <div className="container">
                <h3  data-aos='fade-up' data-aos-delay='100'>Latest <span>Articles</span></h3>
                <div className="articles__list">
                    {
                        articlesData.map(article => {
                            return (
                                <Article
                                    key={article.id}
                                    id={article.id}
                                    name={article.name}
                                    date={article.date}
                                    profile={article.profile}
                                />
                            )
                        })
                    }
                </div>
                <div className="articles__controls">
                    <button onClick={() => setActiveButton(prev => prev = 0)}>
                        <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M45.2212 15.0003C45.2212 15.9208 44.475 16.667 43.5545 16.667L3.55311 16.667C2.63264 16.667 1.88645 15.9208 1.88645 15.0003C1.88645 14.0799 2.63264 13.3337 3.55311 13.3337L43.5545 13.3337C44.475 13.3337 45.2212 14.0799 45.2212 15.0003Z" fill={activeButton ? "#CECECE" : '#605E5E'}/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5099 29.6136C12.8028 30.2029 11.7519 30.1074 11.1626 29.4003L0.643893 16.7783C-0.214591 15.7482 -0.214588 14.2518 0.643894 13.2217L11.1626 0.59971C11.7519 -0.107407 12.8028 -0.202927 13.5099 0.38636C14.2171 0.975645 14.3126 2.02658 13.7233 2.7337L3.50098 15L13.7233 27.2663C14.3126 27.9734 14.2171 29.0244 13.5099 29.6136Z" fill={activeButton ? "#CECECE" : '#605E5E'}/>
                        </svg>
                    </button>
                    <button onClick={() => setActiveButton(prev => prev = 1)}>
                        <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.000427173 14.9997C0.000427213 14.0792 0.746617 13.333 1.66709 13.333L41.6685 13.333C42.589 13.333 43.3352 14.0792 43.3352 14.9997C43.3352 15.9201 42.589 16.6663 41.6685 16.6663L1.66709 16.6663C0.746617 16.6663 0.000427133 15.9201 0.000427173 14.9997Z" fill={!activeButton ? "#CECECE" : '#605E5E'}/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M31.7117 0.386359C32.4188 -0.202926 33.4697 -0.107406 34.059 0.599709L44.5777 13.2217C45.4362 14.2518 45.4362 15.7482 44.5777 16.7783L34.059 29.4003C33.4697 30.1074 32.4188 30.2029 31.7117 29.6136C31.0046 29.0244 30.909 27.9734 31.4983 27.2663L41.7206 15L31.4983 2.7337C30.909 2.02658 31.0046 0.975644 31.7117 0.386359Z" fill={!activeButton ? "#CECECE" : '#605E5E'}/>
                        </svg>

                    </button>
                </div>
            </div>
        </section>
    )
}

export default Articles