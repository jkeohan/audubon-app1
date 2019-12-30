import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Img from 'react-image';

import '../Bird/Bird';
import './BirdGrid.css';

function BirdGrid(props) {
  return (
    <div className="BirdGrid">
      {/* {console.log(props)} */}
      {props.birds.map(b => {
        return <Link to={"/birds/" + b.name}>
                  <Img src={b.image} />
                </Link>;
      })}
    </div>
  );
}

export default BirdGrid;
