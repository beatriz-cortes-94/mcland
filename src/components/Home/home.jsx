import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import ProjectsCarousel from "./projects-carousel";
import "./home-styles.css";

const Home = () => {
  return (
    <div>
      <section>
        <div className="container-top">
          <Navbar />
        </div>
        <div className="jumbotron jumbotron-fluid vertical-center">
          <div className="container">
            <div className="inner">
              <div className="title">Manolo Cortés Landscape</div>
              <div className="subtitle">
                Experiencia. Creatividad. Profesionalismo.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="container-section" className="experience-section">
        <h2 className="experience-title">EXPERIENCIA</h2>
        <p className="experience-subtitle">
          A lo largo de más de 33 años, MCL ha acumulado una amplia experiencia
          en diferentes tipos de proyectos tanto en el ámbito público como en el
          privado, elaborándolos en sus diferentes etapas, desde Diseño
          Conceptual hasta los Documentos de Construcción. Los tipos de
          proyectos en que se ha colaborado son Hoteles Todo Incluido, Hoteles
          Resorts, Parques Recreativos, Parques Industriales, Edificios de
          Apartamentos, Edificios de Uso Mixto, Campus Universitarios, Centros
          Comerciales y Master Plan. Esta gama de Proyectos nos ha llevado a
          estar actualizándonos constantemente tanto en el Diseño como en la
          Tecnología para poder ofrecer a nuestros Clientes un producto
          satisfactorio e icónico.
        </p>
      </section>
      <section id="container-section" className="portfolio-section">
        <h2 className="portafolio-title">PORTAFOLIO</h2>
        <ProjectsCarousel />
        <a className="portafolio-button" href="#/projects">
          PROYECTOS
        </a>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
