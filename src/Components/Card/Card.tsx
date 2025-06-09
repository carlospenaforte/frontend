import React from 'react'
import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({ companyName, ticker, price}: Props) => {
  return (
    <div className="card">
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJM4boFhlw6iVen_RoNJM-otzbFMSaIjXxA&s'
        alt='image'
        />
        <div className='details'>
            <h2>
              {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui et laudantium consequuntur. Quos voluptatibus, dolorem quidem ullam vel, natus dolor officiis non nemo, a labore hic quibusdam blanditiis iusto.</p>
        </div>
  )
}

export default Card