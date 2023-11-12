import React from 'react';
const strains= [
	{
	  product: "Raw Flower",
	  detail: "R4",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "ACDC",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "MW",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "DD",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "MW/DHDS",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "LemD",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "Sativa",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "Indica",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "Cotton candy",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "Cheese",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "Lilac diesel",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Raw Flower",
	  detail: "Citral glue",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "-",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Gummies",
	  detail: "Sleep CBG",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "1 oz per pack-packs",
	  unitsAvailable: "12.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Gummies",
	  detail: "Sleep CBD/ACDC",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "1 oz per pack-packs",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Gummies",
	  detail: "Sleep Indica",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "1 oz per pack-packs",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Gummies",
	  detail: "Lift",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "1 oz per pack-packs",
	  unitsAvailable: "8.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Gummies",
	  detail: "Recovery",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "1 oz per pack-packs",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Gummies",
	  detail: "Daytime CBG",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "1 oz per pack-packs",
	  unitsAvailable: "14.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Candies",
	  detail: "CBD/CBN",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "4.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Candies",
	  detail: "Lemongrass",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "34.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Candies",
	  detail: "Watermelon",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "26.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Candies",
	  detail: "Woe",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "34.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Candies",
	  detail: "CBG",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "11.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Tinctures-Base Oil",
	  detail: "Indica glycerin",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Tinctures-Base Oil",
	  detail: "Sativa",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "9.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Tinctures-Base Oil",
	  detail: "Union custom",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "11.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Tinctures-Base Oil",
	  detail: "CBN MCT",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Tinctures-Base Oil",
	  detail: "Chaga",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Garden of Bloom",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Garden of Peace",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "5.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Lip Lover",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "50.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Massage Oil Cream",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "No 10",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Therapeutic Touch",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "2.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Topicals",
	  detail: "Soaps",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "each",
	  unitsAvailable: "12.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "TLC Cream Small",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "22.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "TLC Cream Large",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Bath Balms sm",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "1.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Topicals",
	  detail: "Bath Balms lg",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "oz",
	  unitsAvailable: "",
	  unitCost: "-",
	  cost: "-",
	  recipe: ""
	},
	{
	  product: "Marshmallows",
	  detail: "Indica",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "each",
	  unitsAvailable: "44.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Marshmallows",
	  detail: "Sative",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "each",
	  unitsAvailable: "73.00",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	},
	{
	  product: "Marshmallows",
	  detail: "CBG",
	  image: "https://images.leafly.com/flower-images/acapulco.jpg",
	  unitMeasure: "each",
	  unitsAvailable: "",
	  unitCost: "-",
	  cost: "-",
	  recipe: "R"
	}
   ]

   
   export default function ImageGallery() {
	const listItems = strains.map(strain =>
	  <div
	    key={strain.id}
	    style={{
		 color: strain.recipe === "R" ? 'magenta' : 'darkgreen'
	    }}
	  >
	    {strain.image}
	  </div>
	);
   
	return (
	  <ul>{listItems}</ul>
	);
   }
