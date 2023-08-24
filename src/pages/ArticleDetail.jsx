import { useParams, Link } from "react-router-dom";
import { articlesData } from "../data";
import Article from "../components/child/Article";

const ArticleDetail = () => {
    const params = useParams()

    const currentArticle = articlesData.filter((article, index) => (index + 1) == params.id)
    const curr = currentArticle[0]
    const { id, name, date, profile, articles } = curr

    let articleCount = 0
    return (
        <main className="article-detail">
            <section className='article-detail__head'>
                <div className="container">
                    <div className="article-detail__head-info">
                        <h4>{name}</h4>
                        <div className="article-detail__head-profile">
                            <img src={'/eatly/src/assets/' + profile.img + '.png'} alt={profile.name} />
                            <p>Written By</p>
                            <h6>{profile.name}</h6>
                        </div>
                        <div className="article-detail__head-img" style={{backgroundImage: 'url("/eatly/src/assets/articles/' + params.id + '.png")'}}></div>
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
                                        <h5>{article.heading}</h5>
                                        <p>{article.paragraph}</p>
                                        <ul>
                                            {article.list.map(elem => {
                                                return (
                                                    <li key={elem.id}>
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
            </section>
            <section className="article-detail__controls">
                <div className="container">
                    <Link className="button__simple" to={`/eatly/blog/${--params.id}`}>
                        <svg style={{transform:"rotate(180deg)" }} xmlns="http:/www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" ill="none">
                            <path d="M4.70605 10.0762H15.946" stroke="white" strokeWidth="1.6055" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3242 4.4574L15.9442 10.0774L10.3242 15.6973" stroke="white" strokeWidth="1.6055"strokeLinecap="round"strokeLinejoin="round"/>
                        </svg>
                        Previous
                    </Link>
                    <Link className="button__simple" to={`/eatly/blog/${++params.id}`}>
                        Next
                        <svg xmlns="http:/www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.70605 10.0762H15.946" stroke="white" strokeWidth="1.6055" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3242 4.4574L15.9442 10.0774L10.3242 15.6973" stroke="white" strokeWidth="1.6055"strokeLinecap="round"strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ArticleDetail;