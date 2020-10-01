import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import "./services-styles.css";

const Services = () => {
  return (
    <div className="container-top">
      <Navbar />
      <section className="services">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 service-card">
            <div className="inner-card section">
              <i className="fas fa-lightbulb fa-7x"></i>
              <div className="tile">DISEÑO CONCEPTUAL</div>
              <p className="info">
                Para nosotros, esa etapa del Proyecto lo vemos como “EL QUÉ SE
                PUEDE HACER”. Es la idea rectora para llevar a cabo el fin
                deseado. Hacemos la presentación al Cliente donde mostramos la
                idea principal con planos coloreados a mano y vistas 3D.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 service-card">
            <div className="inner-card section">
              <i className="fas fa-pen-fancy fa-7x"></i>
              <div className="tile">DESARROLLO DEL DISEÑO (ANTEPROYECTO)</div>
              <p className="info">
                Esta etapa la entendemos como la parte de definición de acabados
                y medidas generales, el “CÓMO SE VA A VER” cada uno de los
                elementos que conforman el Diseño. Para mostrar cada uno de los
                elementos que conforman el Diseño, se elaboran planos 2D en CAD
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 service-card">
            <div className="inner-card section">
              <i className="fas fa-pencil-ruler fa-7x"></i>
              <div className="tile">
                DOCUMENTOS DE CONSTRUCCIÓN (PROYECTO EJECUTIVO)
              </div>
              <p className="info">
                Como su nombre indica, son los planos generados para poder
                construir la idea que se generó desde un principio. Es el “CÓMO
                SE VA A CONSTRUIR”. Elaboramos los planos necesarios con la
                información requerida para que en la obra no se tengan dudas de
                construcción.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 service-card">
            <div className="inner-card section">
              <i className="fas fa-hard-hat fa-7x"></i>
              <div className="tile">SUPERVISIÓN DE OBRA</div>
              <p className="info">
                Son las visitas periódicas al sitio de la obra para verificar
                que lo construido es conforme a los planos entregados y
                aprobados. Es el “CÓMO SE ESTÁ CONSTRUYENDO”. Se hace un
                calendario con anterioridad para programarlas dependiendo el
                tipo de Proyecto.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 service-card">
            <div className="inner-card section">
              <i className="fas fa-copy fa-7x"></i>
              <div className="tile">BOLETINES DE OBRA</div>
              <p className="info">
                En las obras siempre hay ajustes, por lo que no es necesario
                estar elaborando planos para dichos ajustes. Se elaboran los
                boletines de obra para una mayor facilidad de comunicación.
                Adicional a estos servicios, también podemos incorporar en los
                mismos el Diseño de Ingenierías en sus diferentes disciplinas.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 service-card">
            <div className="inner-card section">
              <i className="fas fa-smile fa-7x"></i>
              <div className="tile">SATISFACCIÓN DEL CLIENTE</div>
              <p className="info">
                El Cliente es la persona más importante para nosotros por lo que
                desde el primer momento mantenemos una comunicación con Él para
                poder ir evaluando en el proceso de Diseño, tiempos y
                presupuestos en conjunto. La atención personalizada con el
                Cliente es constante por lo que nuestra misión es que el Cliente
                quede satisfecho con nuestro trabajo y nos invite a colaborar
                nuevamente con Él y su equipo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
