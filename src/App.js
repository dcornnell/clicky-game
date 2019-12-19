import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Imagecard from "./components/Imagecard";
import "./App.css";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import image12 from "./images/12.png";
import image13 from "./images/13.png";
import image14 from "./images/14.png";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: [
      { src: image1, clicked: false },
      { src: image2, clicked: false },
      { src: image3, clicked: false },
      { src: image4, clicked: false },
      { src: image5, clicked: false },
      { src: image6, clicked: false },
      { src: image7, clicked: false },
      { src: image8, clicked: false },
      { src: image9, clicked: false },
      { src: image10, clicked: false },
      { src: image11, clicked: false },
      { src: image12, clicked: false },
      { src: image13, clicked: false },
      { src: image14, clicked: false }
    ]
  };
  render() {
    return (
      <>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Container>
          {this.state.images.map(image => {
            return <Imagecard image={image.src} key={image.key} />;
          })}
        </Container>
      </>
    );
  }
}

export default App;
