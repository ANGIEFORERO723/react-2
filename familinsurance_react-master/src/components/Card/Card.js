import React from "react";
import "./Card.css";

export default function Card({Imagen, Nombre, Descripcion }) {
  return (
    <div className="card" > 
      {/*<img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p*/}
      <p>test</p>
      <a href="chatea-nosotros.html" class="iitem item-style">
        <div class="iitem-icon">
          <img src={Imagen} width="75" height="75" alt="PathSoft" />
          {/*<i class="material-icons material-icons-outlined md-48">support_agent</i> */}
        </div>
        <div class="iitem-icon-bg">
          <i class="material-icons material-icons-outlined">support_agent</i>
        </div>
        <h2 class="iitem-heading item-heading-large">{Nombre}</h2>
        <div class="iitem-desc">{Descripcion}</div>
      </a>
    </div>
  );
}
