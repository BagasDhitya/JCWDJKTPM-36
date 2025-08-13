import React from 'react'
import ReusableComponent from '@/components/reusable/ReusableComponent'
import FoodCard from '@/components/card/FoodCard'

export default function Menu() {
    return (
        <div>
            <ReusableComponent
                content='This is reusable component by ibnu'
                author='Ibnu'
            />
            <ReusableComponent
                content='This is reusable component by hylmi'
                author='Hylmi'
            />
            <ReusableComponent
                content='This is reusable component by evan'
                author='Evan'
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
                <FoodCard
                    id_product={1}
                    title='Grilled Chicken Salad'
                    image='https://i.pinimg.com/1200x/0c/88/dc/0c88dca4cae64af3728c5bed1969a5cb.jpg'
                    description='Fresh greens with perfectly grilled chicken breast and tangy dressing'
                    price={8.99}
                    rating={4.5}
                />
                <FoodCard
                    id_product={2}
                    title='Classic Beef Burger'
                    image='https://i.pinimg.com/1200x/67/54/2d/67542d5f476d6504046007f1d5637b74.jpg'
                    description='Juicy beef patty with melted cheese, lettuce, and homemade sauce'
                    price={10.5}
                    rating={4.7}
                />
                <FoodCard
                    id_product={3}
                    title='Margherita Pizza'
                    image='https://i.pinimg.com/1200x/5b/1f/cb/5b1fcb863bf150503d280ded1ecd36ad.jpg'
                    description='Thin crust pizza topped with fresh tomatoes, basil, and mozzarella'
                    price={9.24}
                    rating={4.6}
                />
            </div>
        </div>
    )
}
