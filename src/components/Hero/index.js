import React from "react";
import Image from "../../assets/photos/NicePng_grid-background-png_1014345.png";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import './style.css'

const Hero = () => {
  return (
    <Container fluid className="Hero">
        <Row className="heroRow">
      <image id="animatedHero">
        <source src={Image} type="placeholder" />
      </image>
        </Row>
        </Container>
  );
};

export default Hero;
