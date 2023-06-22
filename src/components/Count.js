import { useState } from "react";

export default function Count(props) {

  return(
    <div className="score">
      <p>Score: {props.score}</p>
      <p>High Score: {props.high}</p>
    </div>
  )
}