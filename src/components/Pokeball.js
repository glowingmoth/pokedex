import React from "react";
import './pokeball.css'

export default function Pokeball () {
  return (
    <div className="item">
      <div className="ball"></div>
      <div className="half-ball-top"></div>
      <div className="half-ball-bottom"></div>
      <div className="big-button"></div>
      <div className="small-button"></div>
      <div className="horizon"></div>
    </div>
  );
};
