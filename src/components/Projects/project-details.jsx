import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import ProyectsInformation from "./projects-info";
import "./project-styles.css";

// eslint-disable-next-line
const ProjectDetails = ({ match }) => {
  const {
    // eslint-disable-next-line
    params: { projectId },
  } = match;

  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  const p = ProyectsInformation[projectId - 1];
  const pageId = parseInt(projectId);

  return (
    <div className=".container-xl">
      <Navbar />
      <section className="project-header row">
        <a
          className="project-button col-lg-2 col-md-2 col-2"
          href={pageId === 1 ? `#/projects/11` : `#/projects/${pageId - 1}`}
        >
          <i className="fa fa-chevron-left fa-2x"></i>
        </a>
        <div className="col-lg-8 col-md-8 col-8">
          <div className="project-title">{p.title}</div>
          <div className="project-location">{p.location}</div>
        </div>
        <a
          className="project-button col-lg-2 col-md-2 col-2"
          href={pageId === 11 ? `#/projects/1` : `#/projects/${pageId + 1}`}
        >
          <i className="fa fa-chevron-right fa-2x"></i>
        </a>
      </section>
      <section className="row project-details">
        {p.srcs.map((img) => {
          return (
            <div key={img} className="col-xl-4 col-lg-12 col-md-12 col-12">
              <img
                className="project-img"
                /* eslint-disable */
                src={require(`./../../assets/projects/${img}`)}
                alt={img}
              />
            </div>
          );
        })}
      </section>
      <section className="project-details row">
        <div className="col-lg-4 col-md-4 col-12">
          <p className="details">
            Tipo de proyecto:{" "}
            <span className="project-details-info">{p.description.type}</span>
          </p>
          <p className="details">
            {" "}
            Servicios:{" "}
            <span className="project-details-info">
              {p.description.services}
            </span>
          </p>
          <p className="details">
            Crédito de proyecto:{" "}
            <span className="project-details-info">
              {p.description.credits}
            </span>
          </p>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <p className="project-details-about">{p.description.about}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
