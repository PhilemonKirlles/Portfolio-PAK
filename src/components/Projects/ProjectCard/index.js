import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";



function ProjectCard({ img, title, description, line, alt, website, repo }) {


  return (
    <Col className="CardCol">
      <Card
        className="text-center wholeCard"
        style={{ width: "27rem", height: "34rem" }}
      >
        <Card.Header className="cardHeader">
        
        </Card.Header>

        <Card.Img src={img} alt={alt} />

        <Card.Body>
          <Card.Subtitle>Technologies Used: {description}</Card.Subtitle>
          <br />
          <Card.Text>{line}</Card.Text>
          <>
          </>
        </Card.Body>
          <Card.Footer className="btnDiv">
            <Button className="AllBtn" as="a" href={website} target="_blank">
              Live App  
            </Button>
            <Button className="AllBtn" as="a" href={repo} target="_blank">
              Github Repo
            </Button>
          </Card.Footer>
         
          {/* )} */}
      </Card>
    </Col>
  );
}

export default ProjectCard;
