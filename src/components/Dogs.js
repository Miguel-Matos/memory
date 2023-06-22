import '../App.css';
import React, { useEffect, useState } from "react";
import dog1 from '../img/dog1.jpg'
import dog2 from '../img/dog2.jpg'
import dog3 from '../img/dog3.jpg'
import dog4 from '../img/dog4.jpg'
import dog5 from '../img/dog5.jpg'
import dog6 from '../img/dog6.jpg'
import dog7 from '../img/dog7.jpg'
import dog8 from '../img/dog8.jpg'
import dog9 from '../img/dog9.jpg'

import Count from '../components/Count';

export default function Dog() {
  const [dogs, setDogs] = useState([
    { dog: dog1, id: 1 },
    { dog: dog2, id: 2 },
    { dog: dog3, id: 3 },
    { dog: dog4, id: 4 },
    { dog: dog5, id: 5 },
    { dog: dog7, id: 7 },
    { dog: dog8, id: 8 },
    { dog: dog9, id: 9 }
  ]);
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [clickedDogs, setClickedDogs] = useState([]);

  function shuffleDogs() {
    const shuffledDogs = [...dogs];
    for (let i = shuffledDogs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffledDogs[i];
      shuffledDogs[i] = shuffledDogs[j];
      shuffledDogs[j] = temp;
    }

    setDogs(shuffledDogs);
  }

  function clickChange(clickedDogId) {
    if (clickedDogs.includes(clickedDogId)) {
      setScore(0);
      shuffleDogs();
      setClickedDogs([]);
      return;
    }

    setScore(prevScore => prevScore + 1);
    if (score >= high) {
      setHigh(prevHigh => prevHigh + 1);
    }

    setClickedDogs(prevClickedDogs => [...prevClickedDogs, clickedDogId]);
    shuffleDogs();
  }

  const dogMap = dogs.map(dog => (
    <img
      onClick={() => clickChange(dog.id)}
      className='dog'
      key={dog.id}
      src={dog.dog}
      alt='dog'
    />
  ));

  return (
    <div>
      <Count score={score} high={high} />
      <div id='dogContainer'>{dogMap}</div>
    </div>
  );
}
