import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";

const resumeLink =
  "https://drive.google.com/file/d/1Fi5mBrplNkIhVuLuRMoyjDaYRGTEt5RC/preview";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1Fi5mBrplNkIhVuLuRMoyjDaYRGTEt5RC";
    link.download = "Pranav_Kashikey_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
            </Zoom>
          </div>

          <div className="certificate-section">
            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" onClick={handleDownload}>
                <AiOutlineDownload /> &nbsp;Download Resume
              </Button>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <iframe
                src={resumeLink}
                width="80%"
                height="900px"
                title="Resume"
                style={{ border: "none" }}
              />
            </div>

            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" onClick={handleDownload}>
                <AiOutlineDownload /> &nbsp;Download Resume
              </Button>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Resume;
