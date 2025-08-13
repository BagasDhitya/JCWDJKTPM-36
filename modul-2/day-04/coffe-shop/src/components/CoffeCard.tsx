interface ICoffe {
    id_coffe: string,
    title: string,
    image: string,
    description: string,
    price: number,
    onClick: () => void
}

export default function CoffeCard({ id_coffe, title, image, description, price, onClick }: ICoffe) {
    return (
        <div id={id_coffe} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="relative h-80 w-full">
                <img
                    src={image}
                    alt={title}
                    className="object-fit w-full h-full"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
                <p className="text-gray-700 text-base line-clamp-2 mb-3">{description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-lg">${price.toFixed(2)}</span>
                    <button
                        onClick={onClick}
                        className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
