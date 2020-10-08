import React from "react";
import marker from "../marker.jpg";

export class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: null,
      y: null
    };
  }

  render() {
    return (
      <div>
        <img style={{}} src={marker} alt="Vogel" />
      </div>
    );
  }
}
