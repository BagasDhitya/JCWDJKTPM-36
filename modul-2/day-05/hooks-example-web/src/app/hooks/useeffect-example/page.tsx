'use client'
import { useState, useEffect } from "react"
import { useTheme } from "@/context/ThemeContext"

export default function UseEffectExample() {

    const { isDarkMode } = useTheme()
    const [count, setCount] = useState<number>(0)

    // 1. mounting -> kondisi ketika komponen pertama kali dirender
    // useEffect(() => {
    //     console.log('Mounting component ...')
    // }, [])

    // 2. unmounting -> kondisi ketika cleanup waktu komponen dihapus
    // useEffect(() => {
    //     console.log('Mounting component ...')

    //     return () => {
    //         console.log('Unmounting component ...') // clean up ketika use effect diatas dimatikan
    //     }
    // }, [])

    // 3. updating -> kondisi ketika state mengalami perubahan
    useEffect(() => {
        console.log('Count has been changed trigger by state count')

        return () => {
            console.log('Unmounting component ...') // clean up ketika use effect diatas dimatikan
        }
    }, [count]) // array dependencies


    return (
        <div className={`container mx-auto flex flex-col h-screen w-full ${isDarkMode === false ? 'bg-white' : 'bg-black'}`} onClick={() => setCount(count + 1)}>
            <button className="bg-blue-500 font-semibold p-3 rounded">Trigger Count</button>
        </div>
    )
}
