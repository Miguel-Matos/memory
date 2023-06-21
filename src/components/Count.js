import { useState } from "react";

export default function Count() {
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);

  return(
    <div className="score">
      <p>Score: {score}</p>
      <p>High Score: {high}</p>
    </div>
  )
}