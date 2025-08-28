import React from "react";
import "./Card.css";
const Card = ({
    image,
    author_image,
    author,
    date,
    title,
    description,
    readMore,
}) => {
    return (
        <div className="card_wrapper">
            <div className="card_img">
                <img src={image} alt="card_image" />
            </div>
            <div className="card_content">
                <div className="content_head">
                    <div className="content_author">
                        <img src={author_image} alt="" />
                    </div>
                    <div className="content_top_right">
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="content_title">{title}</div>
                <div className="content_description">{description}</div>
                <span className="readmore">
                    <a href={readMore}>
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </span>
                <div className="content_footer">
                    <span>
                        <i className="fas fa-eye"></i>20
                    </span>
                    <span>
                        <i className="far fa-star"></i>20
                    </span>
                    <span>
                        <i className="far fa-comment"></i>20
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
