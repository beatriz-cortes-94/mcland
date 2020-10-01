import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import ProyectsInformation from "./projects-info";
import "./project-styles.css";

const Projects = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <div className=".container-xl">
      <Navbar />
      <section>
        <div className="row projects-grid">
          {ProyectsInformation.map((p) => {
            return (
              <div key={p.id} className="column">
                <Link to={`/projects/${p.id}`}>
                  <div className="portafolio-img">
                    <img
                      /* eslint-disable */
                      src={require(`./../../assets/projects/${p.srcs[0]}`)}
                      alt={p.title}
                    />
                    <div className="content">
                      <p className="text">{p.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
