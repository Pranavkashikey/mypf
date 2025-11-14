import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import './personal.css'; // Import the CSS file

export default function PersonalSkill() {
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
      <LightSpeed left cascade>
        <h1 className="mt-4">Personal Skills</h1>
      </LightSpeed>
      <div className="mt-4">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: '#fe3e57' }}
                >
                  95%
                </h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="com"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '75%', backgroundColor: '#fe3e57' }}
                    ></div>
                  </div>
                  <h2
                    className="skill-name"
                    style={{ color: '#fe3e57' }}
                  >
                    Communication Skills
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: '#54faae' }}
                >
                  85%
                </h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="pm"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '85%', backgroundColor: '#54faae' }}
                    ></div>
                  </div>
                  <h2
                    className="skill-name"
                    style={{ color: '#54faae' }}
                  >
                    Team Management
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: '#ff8c2f' }}
                >
                  90%
                </h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="ps"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '81%', backgroundColor: '#ff8c2f' }}
                    ></div>
                  </div>
                  <h2
                    className="skill-name"
                    style={{ color: '#ff8c2f' }}
                  >
                    Problem Solving
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: '#f1f965' }}
                >
                  85%
                </h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="aa"
                      aria-valuenow="77"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '77%', backgroundColor: '#f1f965' }}
                    ></div>
                  </div>
                  <h2
                    className="skill-name"
                    style={{ color: '#f1f965' }}
                  >
                    Analytical Abilities
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: '#ff0173' }}
                >
                  90%
                </h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="org"
                      aria-valuenow="87"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '87%', backgroundColor: '#ff0173' }}
                    ></div>
                  </div>
                  <h2
                    className="skill-name"
                    style={{ color: '#ff0173' }}
                  >
                    Organization
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="skill-card">
                <h1
                  className="skill-percentage"
                  style={{ color: '#39c4ff' }}
                >
                  80%
                </h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      className="progress-bar-animated"
                      role="progressbar"
                      id="cr"
                      aria-valuenow="79"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '79%', backgroundColor: '#39c4ff' }}
                    ></div>
                  </div>
                  <h2
                    className="skill-name"
                    style={{ color: '#39c4ff' }}
                  >
                    Creativity
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
