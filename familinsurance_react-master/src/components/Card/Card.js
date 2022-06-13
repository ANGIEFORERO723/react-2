import React from "react";
import "./Card.css";

export default function Card({Imagen, Nombre, Descripcion }) {
  return (
    <div className="card" > 
      <p>test</p>
      <a href="chatea-nosotros.html" class="iitem item-style">
        <div class="iitem-icon">
          <img src={Imagen} width="75" height="75" alt="PathSoft" />
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
