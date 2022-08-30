import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImgCard from "./components/ImgCard";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5050"

const App = () => {
  const [word, setWord] = useState("");
  const [img, setImg] = useState([]);

  console.log(img);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `${API_URL}/new-image?query=${word}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImg([{ ...data, title: word }, ...img]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImg(img.filter((image) => image.id !== id));
  };
  console.log(img.length);
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {img.length ? (
          <Row xs={1} md={2} lg={3}>
            {img.map((image,i) => (
              <Col key={i} className="pb-3">
                <ImgCard img={image} deleteImage = {handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
