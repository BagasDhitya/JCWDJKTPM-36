'use client'
import { useState } from "react"
import data from '@/data/shoppings.json'
import { useTheme } from "@/context/ThemeContext"
import { useRouter } from "next/navigation"

interface IShopping {
    id: number,
    name: string,
    item: string,
    stock: number
}

export default function UseStateExample() {

    // define router
    const router = useRouter()

    // pemanggilan theme context
    const { isDarkMode, toggleTheme } = useTheme()

    // contoh 1 : counting system
    const [count, setCount] = useState<number>(0)

    // contoh 2 : shopping list
    const [shoppingList, setShoppingList] = useState<IShopping[]>(data)
    const [newItem, setNewItem] = useState<IShopping>({
        id: shoppingList.length > 0 ? Math.max(...shoppingList.map((item) => item.id)) + 1 : 1,
        name: '',
        item: '',
        stock: 0
    })

    // contoh 3 : dark mode
    const [mode, setMode] = useState<boolean>(false)

    function addItem() {
        if (newItem.name && newItem.item) {
            setShoppingList([...shoppingList, newItem])
            setNewItem({
                id: newItem.id + 1,
                name: "",
                item: "",
                stock: 0
            })
        }
    }

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
        if (count <= 0) {
            alert('Count cannot be negative')
        }
    }

    return (
        <div className={`container mx-auto py-8 space-y-12 ${isDarkMode === false ? 'bg-white' : 'bg-black'}`}>
            <h1 className="text-3xl font-bold text-center mb-8">React Hooks Demo</h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2">useState</h2>

                {/* Contoh 1 : Counting System */}
                <div className="p-6 space-y-8 bg-gray-50 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-blue-600">Counting System</h2>
                    <div className="flex justify-evenly w-full mb-10">
                        <button
                            onClick={increment}
                            className="p-3 w-40 bg-green-500 hover:bg-green-600 font-semibold text-white cursor-pointer">+</button>
                        <input
                            className="p-3 border rounded-sm text-black"
                            value={count}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value))}
                        />
                        <button
                            onClick={decrement}
                            className="p-3 w-40 bg-red-500 hover:bg-red-600 font-semibold text-white cursor-pointer">-</button>
                    </div>
                </div>

                {/* Contoh 2 : Shopping List */}
                <div className="p-6 space-y-8 bg-gray-50 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-blue-600">Shopping List</h2>

                    {/* Form untuk menambahkan item */}
                    <div className="p-4 bg-white rounded-lg shadow mb-8">
                        <h3 className="text-lg font-semibold mb-4">Add New Item</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newItem.name}
                                    className="border p-3 text-black"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem({ ...newItem, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Item</label>
                                <input
                                    type="text"
                                    name="item"
                                    value={newItem.item}
                                    className="border p-3 text-black"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem({ ...newItem, item: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                                <input
                                    type="text"
                                    name="stock"
                                    value={newItem.stock}
                                    className="border p-3 text-black"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItem({ ...newItem, stock: Number(e.target.value) })}
                                />
                            </div>
                            <div className="flex items-end">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={addItem}
                                >Add Item</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-10 w-full mb-10">
                        {
                            shoppingList.map((item: IShopping) => {
                                return (
                                    <div className="p-3 rounded-lg shadow-sm w-60">
                                        <p>Name : {item.name}</p>
                                        <p>Item : {item.item}</p>
                                        <p>Stock : {item.stock}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Contoh 3 : Dark mode */}
                <div className="p-6 space-y-8 bg-gray-50 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-blue-600">Dark/Light Mode</h2>
                    <button
                        onClick={toggleTheme}
                        className={`${isDarkMode === false ? 'bg-white text-black' : 'bg-black text-white'} p-3 rounded font-semibold`}
                    >{isDarkMode === false ? 'Light Mode' : 'Dark Mode'}</button>
                    <button onClick={() => router.push('/hooks/useeffect-example')}>Navigate to useeffect-example</button>
                </div>
            </section>
        </div>
    )
}
