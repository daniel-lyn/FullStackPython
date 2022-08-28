import React from "react";
import { Button, Container } from "react-bootstrap";

const Welcome = () => {
return(
  <Container>
    <h1>Images Gallery</h1>
    <p>
      Welcome to Images Gallery and this is a web application that returns you
      images using Unsplash API. You can seacrh images by typing.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Container>
  )
};

export default Welcome;
