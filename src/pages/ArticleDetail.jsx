import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { articlesData } from "../data";
import Article from "../components/child/Article";

const ArticleDetail = () => {

    const params = useParams()

    const currentArticle = articlesData.filter((article, index) => (index + 1) == params.id)
    const curr = currentArticle[0]
    const { id, name, date, profile, articles } = curr

    const nextId = parseInt(params.id) + 1;
    const previousId = parseInt(params.id) -1

    let articleCount = 0
    return (
        <main className="article-detail">
            <section className='article-detail__head'>
                <div className="container">
                    <div className="article-detail__head-info">
                        <h4 data-aos='fade-right'>{name}</h4>
                        <div className="article-detail__head-profile">
                            <img data-aos='fade-right' data-aos-delay='100' src={'/eatly/src/assets/' + profile.img + '.png'} alt={profile.name} />
                            <p data-aos='fade-right' data-aos-delay='200'>Written By</p>
                            <h6  data-aos='fade-right' data-aos-delay='300'>{profile.name}</h6>
                        </div>
                        <div data-aos='fade-right' data-aos-delay='400' className="article-detail__head-img" style={{backgroundImage: 'url("/eatly/src/assets/articles/' + id + '.png")'}}></div>
                    </div>
                </div>
            </section>
            <section className="article-detail__main">
                <div className="container">
                    <div className="article-detail__main-headings">
                        {
                            articles.map(article => {
                                return (
                                    <div key={article.id} className="heading">
                                        <h5 data-aos='fade-right' data-aos-delay='150'>{article.heading}</h5>
                                        <p data-aos='fade-right' data-aos-delay='250'>{article.paragraph}</p>
                                        <ul>
                                            {article.list.map(elem => {
                                                return (
                                                    <li data-aos='fade-right' data-aos-delay='350' key={elem.id}>
                                                        {elem.name}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="article-detail__main-more">
                        <h4>Top Articles</h4>
                        <div className="article-detail__main-list">
                            {
                                articlesData.map(article => {
                                    articleCount++
                                    console.log(articleCount)

                                    if(articleCount <= 3) {
                                        return (
                                            <Article
                                                key={article.id}
                                                id={article.id}
                                                name={article.name}
                                                profile={article.profile}
                                                date={article.date}
                                            />
                                        )
                                    } else {
                                        return
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="article-detail__controls">
                <div className="container">
                    <Link className={(params.id == 1) ? "button__simple disabled" : "button__simple"} to={`/eatly/blog/${previousId}`}>
                        <svg style={{transform:'rotate(180deg)'}} xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
                            <path d="M5.39111 12.3735H18.0206" stroke="#F4F4F4" strokeWidth="1.80398" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.7056 5.26068L18.0203 12.3759L11.7056 19.4911" stroke="#F4F4F4" strokeWidth="1.80398" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> Previous Article
                    </Link>
                    <Link className={(params.id == articlesData.length) ? "button__simple disabled" : "button__simple"} to={`/eatly/blog/${nextId}`}>
                        Next Article
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
                            <path d="M5.39111 12.3735H18.0206" stroke="#F4F4F4" strokeWidth="1.80398" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.7056 5.26068L18.0203 12.3759L11.7056 19.4911" stroke="#F4F4F4" strokeWidth="1.80398" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ArticleDetail;