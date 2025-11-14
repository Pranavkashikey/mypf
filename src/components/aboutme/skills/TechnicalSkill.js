import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";
import "./technical.css"; 

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "green" }}
                >
                  95%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="com"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "green" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "green" }}>
                    C++
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#fe3e57" }}
                >
                  85%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="pm"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "#fe3e57" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#fe3e57" }}>
                    C
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#39c4ff" }}
                >
                  80%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="cr"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%", backgroundColor: "#39c4ff" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#39c4ff" }}>
                    Python
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#f1f965" }}
                >
                  85%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="aa"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "81%", backgroundColor: "#f1f965" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#f1f965" }}>
                    Javascript
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#ff0173" }}
                >
                  90%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="org"
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "88%", backgroundColor: "#ff0173" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#ff0173" }}>
                    MySQL
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#ff8c2f" }}
                >
                  85%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="ps"
                      aria-valuenow="86"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "86%", backgroundColor: "#ff8c2f" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#ff8c2f" }}>
                    NodeJS
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#41f2ff" }}
                >
                  95%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="react"
                      aria-valuenow="86"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "86%", backgroundColor: "#41f2ff" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#41f2ff" }}>
                    React js
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#fe3e57" }}
                >
                  95%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="express"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "#fe3e57" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#fe3e57" }}>
                    ExpressJs
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "#54faae" }}
                >
                  75%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="java"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "#54faae" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "#54faae" }}>
                    JAVA
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "blue" }}
                >
                  90%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="mongodb"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "blue" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "blue" }}>
                    MongoDB
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "BlueViolet" }}
                >
                  95%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="dsa"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "BlueViolet" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "BlueViolet" }}>
                    DSA
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: "Orange" }}
                >
                  85%
                </h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="js"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%", backgroundColor: "Orange" }}
                    ></div>
                  </div>
                  <h2 className="skill-name" style={{ color: "Orange" }}>
                    JavaScript
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
