import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ImgCard = ({ img ,deleteImage}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img.urls.small} />
      <Card.Body>
        <Card.Title>{img.title.toUpperCase()}</Card.Title>
        <Card.Text>{img.description || img.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(img.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ImgCard;
