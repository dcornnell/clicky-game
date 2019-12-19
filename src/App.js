import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Imagecard from "./components/Imagecard";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: [
      { id: 1, src: "./images/1.png", clicked: false },
      { id: 2, src: "./images/2.png", clicked: false },
      { id: 3, src: "./images/3.png", clicked: false },
      { id: 4, src: "./images/4.png", clicked: false },
      { id: 5, src: "./images/5.png", clicked: false },
      { id: 6, src: "./images/6.png", clicked: false },
      { id: 7, src: "./images/7.png", clicked: false },
      { id: 8, src: "./images/8.png", clicked: false },
      { id: 9, src: "./images/9.png", clicked: false },
      { id: 10, src: "./images/10.png", clicked: false },
      { id: 11, src: "./images/11.png", clicked: false },
      { id: 12, src: "./images/12.png", clicked: false },
      { id: 13, src: "./images/13.png", clicked: false },
      { id: 14, src: "./images/14.png", clicked: false }
    ]
  };
  updateClicked(index, array) {
    array[index].clicked = true;
    this.setState({ images: array });
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i].id === input) {
    //     this.setState({
    //       [this.state.images[i]]: { ...array[i], clicked: true }
    //     });
    //   }
    // }
  }
  handleClick = id => {
    this.updateClicked(id, this.state.images);
  };

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  componentDidMount() {
    this.setState({ images: this.shuffle(this.state.images) });
  }
  render() {
    return (
      <>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Container>
          {this.state.images.map((image, i) => {
            console.log(image);

            return (
              <Imagecard
                id={i}
                image={image.src}
                key={image.src}
                onClick={() => this.handleClick(i)}
              />
            );
          })}
        </Container>
      </>
    );
  }
}

export default App;
