import './Block.scss';
import React from "react";
export default function Block(props) {

  return(

    <div className="blocks">
      <p></p>
      <div className="container">
        <div className="block" id="block-one" onClick={props.onClick}>
          <div className="face front">{props.blockOne}</div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

    </div>

  )
};