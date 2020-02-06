import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Imagecard from "./components/Imagecard";
import Modal from "./components/Modal/Modal";
import "./App.css";

const defalt_images = [
  { id: 1, src: "./images/1.png" },
  { id: 2, src: "./images/2.png" },
  { id: 3, src: "./images/3.png" },
  { id: 4, src: "./images/4.png" },
  { id: 5, src: "./images/5.png" },
  { id: 6, src: "./images/6.png" },
  { id: 7, src: "./images/7.png" },
  { id: 8, src: "./images/8.png" },
  { id: 9, src: "./images/9.png" },
  { id: 10, src: "./images/10.png" },
  { id: 11, src: "./images/11.png" },
  { id: 12, src: "./images/12.png" },
  { id: 13, src: "./images/13.png" },
  { id: 14, src: "./images/14.png" },
  { id: 15, src: "./images/15.png" },
  { id: 15, src: "./images/16.png" },
  { id: 17, src: "./images/17.png" },
  { id: 18, src: "./images/18.png" }
];

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: [],
    clicked: [],
    gameOver: false,
    help: true
  };

  showModal = modalId => {
    this.setState({ [modalId]: true });
  };

  hideModal = modalId => {
    this.setState({ [modalId]: false });
    this.setState({ score: 0, clicked: [] });
  };

  handleClick = id => {
    const tempArray = this.state.clicked;
    if (tempArray.indexOf(id) === -1) {
      tempArray.push(id);
      this.setState({ score: this.state.score + 1, clicked: tempArray });
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 });
      }
      this.shuffle(this.state.images);
    } else {
      this.showModal("gameOver");
    }
  };

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  componentDidMount() {
    this.setState({ images: this.shuffle(defalt_images) });
  }
  render() {
    return (
      <>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Container>
          {this.state.images.map(image => {
            return (
              <Imagecard
                id={image.id}
                image={image.src}
                key={image.src}
                onClick={() => this.handleClick(image.id)}
              />
            );
          })}
        </Container>
        <Modal
          show={this.state.help}
          handleClose={() => this.hideModal("help")}
        >
          <h2>Instructions</h2>
          <h5>
            Click on the images. But be careful, if you click on the same image
            twice the game is over! once you click on a image they shift so make
            sure you pay attention!
          </h5>
        </Modal>
        <Modal
          show={this.state.gameOver}
          handleClose={() => this.hideModal("gameOver")}
          score={this.state.score}
        >
          <h2>Game Over!</h2>
          <h5>
            your score was: <b>{this.state.score}</b>
          </h5>
        </Modal>
      </>
    );
  }
}

export default App;
