import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import profile from "../../assets/manolo.jpg";
import "./about-styles.css";

const About = () => {
  return (
    <div className=".container-xl">
      <Navbar />
      <section className="about-me-picture">
        <img
          src={profile}
          alt="Manolo Profile Picture"
          className="profile-picture"
        />
      </section>
      <section className="about-me">
        <p className="about-me-text">
          Con más de 33 años de experiencia profesional, Juan Manuel Cortés
          (Manolo) se ha especializado en la práctica de la Arquitectura de
          Paisaje que se enfoca en la comprensión intelectual, artística y el
          proceso de diseño colectivo que cada proyecto demanda. <br></br>Como
          líder de grupos de Arquitectos de Paisaje trata de buscar el balance
          perfecto entre experiencia y composición creativa de los equipos
          conformados para llegar a lograr un producto final que sea de completa
          satisfacción del Cliente. Manolo siempre busca lograr el balance entre
          lo construido y la vegetación que lo rodea. <br></br> <br></br>En cada
          proyecto, Manolo se involucra desde la visita al sitio del Proyecto
          hasta la revisión de los Documentos de Construcción y en caso
          necesario, realiza visitas a la obra para verificar que la ejecución
          de la misma sea acorde con lo plasmado en los planos. <br></br>{" "}
          <br></br>El ejercicio al aire libre, la lectura, la música y la
          convivencia con sus equipos son un complemento de las actividades de
          Manolo que le permiten llegar a realizar su actividad profesional con
          gran apasionamiento. <br></br> <br></br>La pasión por cada etapa en la
          elaboración de los proyectos le ha llevado a la realización de diseños
          a gran escala, desde Hoteles, Desarrollos con campos de golf hasta
          Parques Industriales, Centros Comerciales, Usos Mixtos, Parques y
          Plazas. <br></br> <br></br>A través de los años, Manolo ha colaborado
          con empresas como GVA, Peridian Group (CA), Peridian Int´l (CA), TOPIA
          (CA), Desing Work Shop (AZ), entre otras firma y ha desarrollado
          Proyectos en México, República Dominicana, España, Colombia y el
          Caribe. <br></br> <br></br>Manolo, cuando la carga de trabajo se lo
          permite, le gusta conocer nuevos lugares acompañado de sus dos hijas,
          Bea y Ale.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
