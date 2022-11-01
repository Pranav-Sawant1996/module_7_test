import React from 'react'
import './ProductCard.css'
import Star1 from '../assets/productsSvg/Star1.svg'

function ProductCard({
id,
image,
oldPrice,
newPrice,
name
}) 
{
  return (
    <div className='card'>
        <div className='rectangle-1'>
        <img src={image} />
        <div className='details'>
        <p id='name'>{name}</p>
        <div className='details-2'>
        <div className='stars'>
        <img src={Star1} />
        <img src={Star1} />
        <img src={Star1} />
        <img src={Star1} />
        <img src={Star1} />
        </div>
        <div className='price'>
        <p id='oldPrice'>{oldPrice}/- </p>
        <p id='newPrice'>{newPrice}/- </p>
        </div>
        </div>
        </div>
        <div className='button'>
        <button>
            <h3>
            ADD TO CART
            </h3>
            </button>
        </div>
        </div>

    </div>
  )
}

export default ProductCard