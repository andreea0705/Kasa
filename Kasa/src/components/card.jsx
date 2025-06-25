import React from "react";
import "../css/card.css";

const card = ({ props }) => {
  return (
    <article className="home-card">
      <img src={props.url} alt={props.title} />
      <h3>{props.title}</h3>
    </article>
  );
};

export default card;
