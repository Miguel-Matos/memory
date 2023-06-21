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
  const [dogs, setDogs] = useState([{dog: dog1, id: 1}, {dog: dog2, id: 2}, {dog: dog3, id: 3}, {dog: dog4, id: 4}, {dog: dog5, id: 5}, {dog: dog7, id: 7}, {dog: dog8, id: 8}, {dog: dog9, id: 9}]);

    function shuffleDogs()  {
      const shuffledDogs = [...dogs]
      for (var i = shuffledDogs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffledDogs[i];
        shuffledDogs[i] = shuffledDogs[j];
        shuffledDogs[j] = temp;
    }

      setDogs(shuffledDogs)
    }
 

  const dogMap = dogs.map(dog => <img onClick={shuffleDogs} className='dog' key={dog.id} src={dog.dog} alt='dog' />)
  return(
    <div>
      <Count />
      <div id='dogContainer'>{dogMap}</div>
    </div>

  )
}