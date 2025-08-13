'use client'
import { useState } from 'react'

import { motion } from 'framer-motion'
import CoffeCard from "@/components/CoffeCard"
import data from '@/data/coffee.json'

export default function Menu() {

    const [card, setCard] = useState<string>("")

    function handlePopUp(title: string) {
        setCard(title)
        if (card) {
            alert(`You clicked card ${title}`)
        }
    }

    // animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-orange-200">
            <h2 className="text-2xl font-bold mb-8">Our Coffe Menu</h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial='hidden'
                animate='show'
            >
                {
                    data.map((item, key) => {
                        return (
                            <motion.div
                                key={item.id_coffe}
                                variants={cardVariants}
                            >
                                <CoffeCard
                                    key={key}
                                    id_coffe={item.id_coffe}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    onClick={() => handlePopUp(item.title)}
                                />
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}
