import React from 'react';
import strains from '../MakeData';

const cards = strains.map((ele, idx) => {
	return (
		<div
			key={idx}
			name={ele.name}
			
			image={ele.image}
			></div>
		
	);
});

export default function ImageGallery() {
	return (
		<>
{cards}
          </>
	);
}