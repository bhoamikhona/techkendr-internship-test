import React from "react";
import "./HowRow.css";
import { Link } from "react-router-dom";

function HowRow({ title, desc, img, to, align, border }) {
  return (
    <div className={`row ${align === "left" ? "left" : "right"}`}>
      <div className={`row__img-container ${border ? "border" : ""}`}>
        <img className="row__img" src={img} alt={`${title} Illustration`} />
      </div>
      <div className="row__info-container">
        <h3 className="row__title">{title}</h3>
        <p className="row__desc">{desc}</p>
        <Link to={to} className="row__link">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default HowRow;
