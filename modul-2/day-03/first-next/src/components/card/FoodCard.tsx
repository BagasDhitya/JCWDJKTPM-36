import React from 'react'
import './FoodCard.css'

interface IFoodCard {
    id_product: number,
    title: string,
    image: string,
    description: string,
    price: number,
    rating: number
}

export default function FoodCard({ id_product, title, image, description, price, rating }: IFoodCard) {
    return (
        <div className='card' key={id_product}>
            <img
                className='card-image'
                width={200}
                height={200}
                src={image}
                alt={title}
            />
            <div className='card-content'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-description'>{description}</p>
                <p className='card-price'>{price.toFixed(2)}</p>
                <p className='card-rating'> ⭐ {rating} / 5</p>
            </div>
        </div>
    )
}
