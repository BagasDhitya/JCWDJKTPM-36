'use client'
import { useState, useRef } from "react"

export default function UseRefExample() {

    const [count, setCount] = useState<number>(0)
    const countRef = useRef<number>(0)

    function handleStateClick() {
        setCount(count + 1)
        console.log('state count : ', count + 1)
    }

    function handleRefClick() {
        countRef.current += 1
        console.log('ref count : ', countRef.current)
    }

    function showRefValue() {
        alert(`Nilai saat ini di ref : ${countRef.current}`)
    }

    return (
        <div className={`container mx-auto py-8 space-y-12`}>
            <h1 className="text-3xl font-bold text-center mb-8">React Hooks Demo</h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2">useRef</h2>

                {/* Contoh 1 : Counting System */}
                <div className="p-6 space-y-8 bg-gray-50 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-blue-600">Counting System</h2>
                    <div className="flex flex-col space-y-5 mt-10">
                        <p>Count: {count}</p>
                        <button
                            onClick={handleStateClick}
                            className="px-3 py-1 bg-blue-500 text-white rounded"
                        >
                            Tambah State Count
                        </button>
                        <p>Ref Count: {countRef.current}</p>
                        <button
                            onClick={handleRefClick}
                            className="px-3 py-1 bg-red-500 text-white rounded"
                        >
                            Tambah Ref Count
                        </button>
                        <button onClick={showRefValue} className="p-3 bg-green-500">Trigger Ref</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
