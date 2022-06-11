import React from 'react'
import './index.css'
import Column from './Column'
import image0 from './icon-sedan.svg'
import image1 from './icon-suvs.svg'
import image2 from './icon-luxury.svg'

function App() {
  const content = [{image: image0, header: 'Sedan', content: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'},
    {image: image1, header: 'SUVs' , content: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'},
    {image: image2, header: 'Luxury', content: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'}
  ]
  return (
    content.map((value, index) => {
      return <Column key={content[index].header} image={content[index].image} header={content[index].header} content={content[index].content}/>
    })
  )
}

export default App;
