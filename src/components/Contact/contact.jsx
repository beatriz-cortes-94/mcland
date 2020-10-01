import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import "./contact-styles.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Click");
    event.preventDefault();
    const emailTrue = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      ? false
      : true;

    //This templateId is created in EmailJS.com
    const templateId = "template_6h18pxa";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    if (
      name.trim !== "" &&
      email.trim !== "" &&
      emailTrue &&
      subject.trim !== "" &&
      message.trim !== ""
    ) {
      console.log("IN");
      sendFeedback(templateId, {
        message_html: message,
        from_name: name,
        from_email: email,
        subject: subject,
      });
    }
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables, "user_lQhM2S4IqBdEQ01Ued9OY")
      // eslint-disable-next-line
      .then((res) => {})
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      });
  };

  return (
    <div className="header">
      <Navbar />
      <section className="row">
        <div className="full-window col-xl-6 col-lg-6 col-md-12 col-12">
          <div className="contact-vertical-center contact-inner info-section">
            <div>
              <div className="contact-titles info-title">Contáctanos</div>
              <div className="info-data">
                <div className="info-text">
                  MCL trabaja desde la Cd. de Guadalajara, Jal. elaborando
                  proyectos de Arquitectura de Paisaje, Diseño Urbano y
                  Planeación. Creemos en la combinación de la Creatividad y la
                  Tecnología para lograr espacios armónicos construidos que
                  vayan acorde con la sensibilidad humana. Si tienes algún
                  proyecto en mente, contáctanos para poder ofrecerte la mejor
                  solución.
                </div>
                <div className="info-subtitle">mclandarq@gmail.com</div>
                <div className="info-subtitle">(+52 1) 33.2706.4674</div>
              </div>
              <a
                className="whatsapp-btn"
                href="https://wa.me/523327064674"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
                Envia Mensaje
              </a>
            </div>
          </div>
        </div>
        <div className="full-window col-xl-6 col-lg-6 col-md-12 col-12">
          <div className="contact-inner contact-section contact-vertical-center">
            <form
              autoComplete="off"
              action="mailto:mclandarq@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="contact-titles contact-title">Escríbenos</div>
              <div className="contact-form">
                <input
                  type="text"
                  name="contact-name"
                  className="contact-form-text"
                  placeholder="NOMBRE"
                  required
                  onChange={handleName}
                />{" "}
                <br />
              </div>
              <div className="contact-form">
                <input
                  type="email"
                  name="contact-email"
                  className="contact-form-text"
                  placeholder="CORREO"
                  required
                  onChange={handleEmail}
                />{" "}
                <br />
              </div>
              <div className="contact-form">
                <input
                  type="text"
                  name="contact-subject"
                  className="contact-form-text"
                  placeholder="ASUNTO"
                  required
                  onChange={handleSubject}
                />{" "}
                <br />
              </div>
              <div className="contact-form">
                <textarea
                  className="contact-form-text"
                  name="contact-message"
                  cols="30"
                  rows="10"
                  placeholder="MENSAJE"
                  required
                  onChange={handleMessage}
                ></textarea>
                <br />
              </div>
              <div className="action-button">
                <a
                  className="send-btn"
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                >
                  Enviar
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
