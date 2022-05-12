import React from "react";
import "./Card.css";

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      {/*<img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p*/
      }
      <a href="chatea-nosotros.html" class="iitem item-style">
        <div class="iitem-icon">
          <img src={image} width="75" height="75" alt="PathSoft" />
          {/*<i class="material-icons material-icons-outlined md-48">support_agent</i> */}
        </div>
        <div class="iitem-icon-bg">
          <i class="material-icons material-icons-outlined">support_agent</i>
        </div>
        <h2 class="iitem-heading item-heading-large">{title}</h2>
        <div class="iitem-desc">{description}</div>
      </a>
    </div>
  );
}
