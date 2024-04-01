import React from "react";
import "./Feature.css";
import { ReactComponent as Divider } from "../../assets/images/divider.svg";

function Feature({ number, title, desc }) {
  return (
    <div className="feature">
      <Divider className="divider" />
      <div className="feature__info">
        <span className="feature__number">{number}</span>
        <h3 className="feature__title">{title}</h3>
        <div className="square" role="presentation"></div>
        <p className="feature__desc">{desc}</p>
      </div>
    </div>
  );
}

export default Feature;
