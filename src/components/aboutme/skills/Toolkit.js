import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import pg from "../../../images/pg.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "./tool.css"; // Import the CSS file

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Developer Tools</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tool-icon-wrapper">
              <img src={vs} alt="Visual Studio Code" className="tool-icon" />
              <div className="tool-name">VS Code</div>
            </div>
          </Col>
          
          <Col xs={4} md={2} className="tech-icons">
            <div className="tool-icon-wrapper">
              <img src={git} alt="Git" className="tool-icon" />
              <div className="tool-name">Git</div>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tool-icon-wrapper">
              <img
                src={github}
                alt="GitHub"
                className="tool-icon github-icon"
                style={{
                  filter: "grayscale(1) invert(1)",
                }}
              />
              <div className="tool-name">GitHub</div>
            </div>
          </Col>
         
          <Col xs={4} md={2} className="tech-icons">
            <div className="tool-icon-wrapper">
              <img src={pg} alt="PostgreSQL" className="tool-icon" />
              <div className="tool-name">PostgreSQL</div>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="tool-icon-wrapper">
              <img src={pm} alt="Postman" className="tool-icon" />
              <div className="tool-name">Postman</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
