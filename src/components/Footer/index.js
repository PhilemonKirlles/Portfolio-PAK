import React from "react";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import './style.css'

function PageFooter() {
    return (
        <footer className="Footer">
      <Row>
      <Nav className="footerLink">
        <Nav.Item className="footerText footLink">Connection</Nav.Item>
        <Nav.Link className="footerText" href="mailto:philemon.kirlles@gmail.com">Email Me</Nav.Link>
        <Nav.Link className="footerText" target={'_blank'} rel="noreferrer" href="https://github.com/PhilemonKirlles">GitHub</Nav.Link>
        <Nav.Link className="footerText" target={'_blank'} rel="noreferrer" href="">LinkedIn</Nav.Link>

      </Nav>
      </Row>   
        </footer>
 )
}
export default PageFooter;

