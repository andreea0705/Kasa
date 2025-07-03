import React from "react";
import "../css/banner.css";
import Cliff from "../assets/images/Cliff.svg";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation(); //acces au chemin pour changer la hauteur de la banniere et montrer le texte de bienvenue qua sue la page d accueil
  return (
    <div
      className="home-banner"
      style={location.pathname === "/a-propos" ? { height: "211px" } : {}} //si je suis sur la page a propos, on change l'hauteur
    >
      <img src={Cliff} alt="banner kasa" />
      {(location.pathname === "/" || location.pathname === "/Kasa") && ( //condition si je suis sur la page d accueil ou casa on affiche h1
        <h1>
          Chez vous,
          <span className="line-break"></span> partout et ailleurs
        </h1>
      )}
    </div>
  );
};

export default Banner;
