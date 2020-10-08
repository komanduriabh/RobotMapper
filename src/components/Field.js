import React from "react";
import "./Field.css";
import FieldPic from "../ChangeUpField.png";
import Circle from "react-shapes";

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

export default class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: []
    };

    this.returnCoord = this.returnCoord.bind(this);
  }

  returnCoord(e) {
    let imgWidth = document.getElementById("field").clientWidth;

    let clientX = clamp(e.clientX, 0, imgWidth);
    let clientY = clamp(e.clientY, 0, imgWidth);

    let x = Math.round((clientX / (imgWidth / 12)) * 100) / 100;
    let y = Math.round((clientY / (imgWidth / 12)) * 100) / 100;

    this.setState({
      nodes: [...this.state.nodes, { x: clientX, y: clientY }]
    });

    // console.log(`(${x}, ${y})`);
    console.log(this.state.nodes);
  }

  render() {
    return (
      <div id="field" className="field" onMouseDown={this.returnCoord}>
        <img className="field " src={FieldPic} alt="" />

        {/* {this.state.nodes.map((node, index) => (
          <Circle key={index} cx={node.x} cy={node.y} r="20" fill="cyan" />
        ))} */}
      </div>
    );
  }
}
