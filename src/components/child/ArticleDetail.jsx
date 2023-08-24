import { useParams } from "react-router-dom";
import { articlesData } from "../../data";

const ArticleDetail = () => {
    const { id } = useParams()

    const currentArticle = articlesData.filter((article, index) => (index + 1) == id)
    console.log(id)
    console.log(articlesData)
    console.log(currentArticle)
    const curr = currentArticle[0]

    console.log(curr)
    return (
        <section className='article-detail'>
            <img src={'/src/assets/articles/' + curr.id + '.png'} alt="" />
        </section>
    );
};

export default ArticleDetail;