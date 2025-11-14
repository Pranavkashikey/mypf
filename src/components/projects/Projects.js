import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import pp1 from"../../images/pp1.png";
import ss from "../../images/ss.png";
import rtc from "../../images/rtc.png";
import pp from "../../images/pp.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import "./projects.css"

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start "
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                     The Book Nook
                    </h5>
                    <img src={pp1} alt={pp1} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/Pranavkashikey/BookMine"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A full-stack E-Commerce web application for books, featuring secure user authentication, persistent shopping cart, order management, fuzzy search, and an admin dashboard to manage products and customer orders.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                     React, Node.js, Express.js, MongoDB, JWT (JSON Web Token), Bcrypt.js, Axios
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      ChatterLy
                    </h5>
                    <img src={rtc} alt={rtc} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/Pranavkashikey/chatters.com"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A real-time chat web application with secure authentication, responsive UI, and instant messaging features, including online user tracking, unread message indicators, and admin controls for user management and activity monitoring.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                     React.js, Node.js, Express.js, Bcrypt.js, JSON Web Token, MongoDB, Multer, Socket.IO
                  </div>
                </div>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  
                
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Imperial Mess Relay
                    </h5>
                    <img src={ss} alt={ss} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/Vaibhavdev309/Mess_Relay"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     Mess Relay is a web application designed for student hostels to manage mess complaints. Students can submit complaints about food or services, and professors or admins can review and resolve them efficiently, streamlining communication and issue tracking.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    MERN STACK
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  
                
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Personal Portfolio
                    </h5>
                    <img src={pp} alt={pp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio. Explore my work, skills,
                      and achievements in a concise and visually appealing
                      format. Get a glimpse of my expertise and creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          
        </Container>
      </Container>
    </div>
  );
}
