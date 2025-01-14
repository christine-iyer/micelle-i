import { useState, useEffect } from 'react';
import { strains } from '../MakeData.js';
import '../App.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [ fadeClass, setFadeClass]= useState('')

  const hasNext = index < strains.length - 1;

  useEffect(() => {
    // Add the fade-out class before the image changes
    setFadeClass('fade-out');

    const timeout = setTimeout(() => {
      setFadeClass('fade-in');
    }, 500); // Match the duration of the CSS transition

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [index]);


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
      <button 
      className="button" 
      style={{borderColor: 'red'}}
      onClick={handleNextClick}>
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

      <div className="image-container">
      <img
        src={sculpture.image}
        alt={sculpture.product}
        className={fadeClass}
      />
      </div>
    </>
  );
}
