import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home-styles.css";

const ProjectsCarousel = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <div
      id="multi-item-example"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      {/* Slides */}
      <div className="carousel-inner" role="listbox">
        First Row
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <Link to={`/projects/1`}>
                  <img
                    className="card-img-top"
                    /* eslint-disable */
                    src={require("./../../assets/projects/asuq1.jpg")}
                    alt="PROJECT"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <Link to={`/projects/6`}>
                  <img
                    className="card-img-top"
                    /* eslint-disable */
                    src={require("./../../assets/projects/ziva_cabos1.jpg")}
                    alt="PROJECT"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <Link to={`/projects/8`}>
                  <img
                    className="card-img-top"
                    /* eslint-disable */
                    src={require("./../../assets/projects/nuevo_guerrero1.jpg")}
                    alt="PROJECT"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <Link to={`/projects/2`}>
                  <img
                    className="card-img-top"
                    /* eslint-disable */
                    src={require("./../../assets/projects/parque_saki1.jpg")}
                    alt="PROJECT"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <Link to={`/projects/3`}>
                  <img
                    className="card-img-top"
                    /* eslint-disable */
                    src={require("./../../assets/projects/plaza_bicentenario1.jpg")}
                    alt="PROJECT"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <Link to={`/projects/11`}>
                  <img
                    className="card-img-top"
                    /* eslint-disable */
                    src={require("./../../assets/projects/now_jade1.jpg")}
                    alt="PROJECT"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Controls */}
      <div className="controls-top">
        <a
          className="btn-floating"
          href="#multi-item-example"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left"></i>
        </a>
        <a
          className="btn-floating"
          href="#multi-item-example"
          data-slide="next"
        >
          <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
