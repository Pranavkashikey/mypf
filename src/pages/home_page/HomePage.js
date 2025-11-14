import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import { useState } from "react";

export default function Home() {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pranav Kashikey</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/Pranavkashikey"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/pranav-kashikey-042a96269"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>


                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                      <img
      src="my.png"
      alt="home pic"
      className="img-fluid"
      style={{
        borderRadius: "50%",
        objectFit: "cover",
        width: "550px",
        height: "450px",
        border: isHovered ? "4px solid #a855f7" : "4px solid transparent",
        boxShadow: isHovered
          ? "0 0 20px 4px rgba(168, 85, 247, 0.6)"
          : "0 0 0 rgba(0, 0, 0, 0)",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        transition: "all 0.4s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />

                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      
      <Projects />
      <Contactus />
    </section>
  );
}
