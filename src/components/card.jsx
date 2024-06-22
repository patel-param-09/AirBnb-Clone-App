import React, { Fragment } from "react";

function Card({ img, price, content, num, rating, CardBadge }) {
  return (
    <div className="card">
      <div className="card-badges">{CardBadge}</div>
      <img src={img} alt="" srcset="" className="hero-img" />
      <div className="hero-div">
        <img
          src="src\img\Star 1.png"
          alt=""
          srcset=""
          height="14px"
          width="14px"
        />
        <span className="rating">{rating}</span>
        <span className="hero-num">({num})</span>
        <span className="hero-coun">
          <img
            src="src\img\Ellipse 6.png"
            alt=""
            srcset=""
            className="hero-ellipse"
          />
          USA
        </span>
        <p className="hero-para">{content}</p>
        <p className="hero-para2">
          <b>From {price} /</b> person
        </p>
      </div>
    </div>
  );
}

export default Card;
