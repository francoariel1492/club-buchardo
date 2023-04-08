import { useRef } from "react";

import emailjs from "@emailjs/browser";

import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d4gc84b",
        "template_icorr6r",
        form.current,
        "ao_6dRAKbCrW3AI06"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="Consultas">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">CONTACTANOS</span>
          <span>PARA</span>
        </div>
        <div>
          <span className="stroke-text">MÁS</span>
          <span>INFORMACIÓN</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="name" name="user_name" placeholder="Ingresa tu nombre" />
          <input
            type="email"
            name="user_email"
            placeholder="Ingresa tu email"
          />
          <input type="subject" name="user_subject" placeholder="Asunto" />
          <textarea type="message" name="user_message" placeholder="Mensaje" />
          <button className="btn btn-j">Sumate hoy</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
