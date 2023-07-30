import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Marvelous Obiji",
      bio: "Full-Stack web developer || Creative Director|| Content creator || Leather craftsmanr",
      imgSrc: "/Image.jpeg",
      profession: "Software Engineer",
    },
    show: false,
    timeInterval: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.updateTimeInterval, 1000); // Update timeInterval every second
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is unmounted
  }

  updateTimeInterval = () => {
    this.setState((prevState) => ({
      timeInterval: prevState.timeInterval + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <div className="image">
              <img src={imgSrc} alt={fullName} />
            </div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time Interval since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
