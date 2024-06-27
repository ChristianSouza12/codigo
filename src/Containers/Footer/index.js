import React from "react";
import { Footer2, Section } from "./styles";
import useScrollReveal from "../../Hooks/useScrollReveal"

const Footer = () => {
  useScrollReveal();

  return (
    <>
      <Section id="contact">
        <Footer2>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social_icon">
            <li>
              <a
                href="https://www.linkedin.com/in/christian-souzaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChristianSouza12"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5519982732281"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </li>
          </ul>

          <p>Todos os direitos reservados.</p>
        </Footer2>
      </Section>
    </>
  );
};

export default Footer;
