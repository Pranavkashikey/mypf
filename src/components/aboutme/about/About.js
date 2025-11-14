import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        
        <Row className="mt-5">
          <Col md={5}>
            
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                I am <b className="purple">Pranav Kashikey </b> 
                  and I am a <b className="purple">Mechanical Engineering </b> 
                    student at <b className="purple">MNNIT ALLAHABAD </b>
                      in Allahabad , UttarPradesh.
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    C++, Java, Python, C, SQL, HTML, CSS, and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    NodeJS, ReactJS, ExpressJS, Mongoose, Multer, BcryptJs, SocketIO, JWT.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks.
                  </b>
                <br />
                <br />In my free time, I love exploring modern technologies and{" "}
      <b className="purple">building real-world digital products</b> that solve meaningful problems.

              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
