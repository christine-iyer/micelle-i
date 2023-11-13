import { useState } from 'react';
import { strains } from '../MakeData';
import '../index.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < strains.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = strains[index];
  return (
    <>
      <button className="button" style={{borderColor: 'red'}}onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.detail} </i>
        by {sculpture.product}
      </h2>
      <h3>
        ({index + 1} of {strains.length})
      </h3>
      <button onClick={handleMoreClick} style={{borderStyle: "double"}}>
        {showMore ? 'Hide' : 'Show'} Details
      </button>
      {showMore && <p>{sculpture.unitMeasure}</p>}
      <img
        src={sculpture.image}
        alt={sculpture.product}
      />
    </>
  );
}
