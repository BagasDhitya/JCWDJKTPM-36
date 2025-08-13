import React from 'react'
import './ReusableComponent.css'

interface IReusableComponent {
    author: string,
    content: string
}

export default function ReusableComponent({ author, content }: IReusableComponent) {
    return (
        <div className='container'>
            <div className='sub-container'>
                <p>{content}</p>
                <p>Author by {author}</p>
            </div>
        </div>
    )
}
