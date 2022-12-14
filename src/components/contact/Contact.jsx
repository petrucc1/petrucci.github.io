import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e2g06ol",
      "template_ul7ipxq",
      form.current,
      "t3xgSA0CK5ScpU3D8"
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Fale comigo</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>petrucci_@outlook.com.br</h5>
            <a href="mailto:petrucci_@outlook.com.br" target="_blank">
              Envie uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+5511934055757</h5>
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5511934055757"
              target="_blank"
            >
              Envie uma mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Seu nome"
            required
          />
          <input type="email" name="user_email" placeholder="Seu e-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          />
          <button type="submit" value="Send" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
