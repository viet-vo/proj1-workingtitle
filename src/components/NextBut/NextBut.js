import React from "react";
import "./NextBut.css";

const NextBut = props => (
  <button type="button" className="btn btn-light" >
    {props.children}
  </button>
);

export default NextBut;
