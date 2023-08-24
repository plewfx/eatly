import { Link } from "react-router-dom";

const Article = ({ id, name, date, profile }) => {
  return (
    <Link to={`${id}`} className='article'>
        <img className="article__img" src={'/eatly/assets/articles/' + id + '.png'} alt={name} />
        <div className="article__detail">
            <h6>{name}</h6>
            <div className="article__detail-more">
                <div className="article__detail-profile">
                    <img src={'/eatly/assets/' + profile.img + '.png'} alt={profile.name} />
                    <p>Written By</p>
                    <h6>{profile.name}</h6>
                </div>
                <span>{date}</span>
            </div>
        </div>
    </Link>
  );
};

export default Article;