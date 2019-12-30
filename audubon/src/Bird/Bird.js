import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

import './Bird.css';

class Bird extends Component {

  componentDidMount() {
    const birdName = this.props.match.params.bird;
    const bird = this.props.birds.find(b =>
      b.name === birdName);
    this.props.setBird(bird);
  }

  render() {

    const selectedBird = this.props.selectedBird;

    if (selectedBird != null) {
      return (
        <div className="Bird">
          {/* {console.log(this.props)} */}
          <div className="birdImage">
            <Img src={selectedBird.image} />
          </div>
          <div className="birdData">
            <h1>{selectedBird.name}</h1>
            <h2>({selectedBird.genus})</h2>
            <h3>Conservation Status</h3>
            <p>{selectedBird.conservationStatus}</p>
            <a href={selectedBird.homepage}>Read More</a>
          </div>
        </div>
      );
    } else {
      return (<></>)
    }
  }
}

export default Bird;
