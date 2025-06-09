import { Link } from "react-router-dom";

const Article = ({ id, name, date, profile }) => {
  return (
    <Link data-aos='fade-right' data-aos-delay={id * 100} to={`/blog/${id}`} className='article'>
      <img className="article__img" src={'/src/assets/articles/' + id + '.png'} alt={name} />
      <div className="article__detail">
        <h6>{name}</h6>
        <div className="article__detail-more">
          <div className="article__detail-profile">
            <img src={'/src/assets/' + profile.img + '.png'} alt={profile.name} />
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