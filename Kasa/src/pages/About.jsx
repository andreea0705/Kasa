//La page à propos avec le collapse
import React from "react";
import "../css/About.css";
import Collapse from "../components/collapse";
import Mountain from "../assets/images/Mountain.svg";

const About = () => {
  return (
    <div className="about-container">
      <img className="moutain" src={Mountain} alt=" montagne" />
      <div className="about-collapse-container">
        <Collapse
          width="77%"
          state={{
            title: "Fiabilité",
            description:
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
          }}
        />
        <Collapse
          width="77%"
          state={{
            title: "Respect",
            description:
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          }}
        />
        <Collapse
          width="77%"
          state={{
            title: "Service",
            description:
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          }}
        />
        <Collapse
          width="77%"
          state={{
            title: "Sécurité",
            description:
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité éCollapselis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          }}
        />
      </div>
    </div>
  );
};

export default About;
