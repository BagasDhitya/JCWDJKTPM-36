export default function TailwindExamples() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Tailwind CSS Examples</h1>

            {/* Margin Examples */}
            <section className="mb-8 p-4 border rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Margin Examples</h2>
                <div className="bg-blue-100 p-2">
                    <div className="bg-blue-200 m-2 p-2">m-2 (margin:0.5rem)</div>
                    <div className="bg-blue-200 mt-4 p-2">mt-4 (margin-top:1rem)</div>
                    <div className="bg-blue-200 mb-4 p-2">mb-4 (margin-bottom:1rem)</div>
                    <div className="bg-blue-200 ml-4 p-2">ml-4 (margin-left:1rem)</div>
                    <div className="bg-blue-200 mr-4 p-2">mr-4 (margin-right:1rem)</div>
                    <div className="bg-blue-200 mx-auto p-2 w-1/2">mx-auto (horizontal margin auto)</div>
                </div>
            </section>

            {/* Padding Examples */}
            <section className="mb-8 p-4 border rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Padding Examples</h2>
                <div className="bg-blue-100 p-2">
                    <div className="bg-blue-200 mb-2 p-4">p-4 (padding:0.5rem)</div>
                    <div className="bg-blue-200 mb-2 pt-4">pt-4 (padding-top:1rem)</div>
                    <div className="bg-blue-200 mb-2 pb-4">pb-4 (padding-bottom:1rem)</div>
                    <div className="bg-blue-200 mb-2 pl-4">pl-4 (padding-left:1rem)</div>
                    <div className="bg-blue-200 mb-2 pr-4">pr-4 (padding-right:1rem)</div>
                </div>
            </section>

            {/* FlexBox Examples */}
            <section className="mb-8 p-4 border rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">FlexBox Examples</h2>
                <div className="flex flex-row gap-2 mb-4">
                    <div className="bg-purple-200 p-4">flex item 1</div>
                    <div className="bg-purple-300 p-4">flex item 2</div>
                    <div className="bg-purple-400 p-4">flex item 3</div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <div className="bg-purple-200 p-4">flex column item 1</div>
                    <div className="bg-purple-300 p-4">flex column item 2</div>
                    <div className="bg-purple-400 p-4">flex column item 3</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {
                        Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="bg-purple-200 p-4 w-32">flex-wrap item {index + 1}</div>
                        ))
                    }
                </div>
                <div className="flex justify-between items-center bg-gray-200 p-2 h-20">
                    <div className="bg-purple-200 p-2">justify-between</div>
                    <div className="bg-purple-300 p-2">items-center</div>
                </div>
                <div className="flex justify-evenly items-center bg-gray-200 p-2 h-20">
                    <div className="bg-purple-200 p-2">justify-evenly</div>
                    <div className="bg-purple-300 p-2">items-center</div>
                </div>
                <div className="flex justify-center items-center bg-gray-200 p-2 h-20">
                    <div className="bg-purple-200 p-2">justify-center</div>
                    <div className="bg-purple-300 p-2">items-center</div>
                </div>
            </section>

            {/* Grid Examples */}
            <section className="mb-8 p-4 border rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Grid Examples</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-orange-200 p-4">grid col 1</div>
                    <div className="bg-orange-300 p-4">grid col 2</div>
                    <div className="bg-orange-400 p-4">grid col 3</div>
                    <div className="bg-orange-200 p-4">grid col 1</div>
                    <div className="bg-orange-300 p-4 col-span-2">col-span-2</div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-2 mb-6">
                    <div className="bg-orange-200 p-2 row-span-2">row-span-2</div>
                    <div className="bg-orange-300 p-2">row 1</div>
                    <div className="bg-orange-400 p-2">row 2</div>
                    <div className="bg-orange-300 p-2">row 3</div>
                    <div className="bg-orange-400 p-2">row 1</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-yellow-600 p-4 text-black">responsive</div>
                    <div className="bg-yellow-700 p-4 text-black">grid</div>
                    <div className="bg-yellow-800 p-4 text-black">column</div>
                    <div className="bg-yellow-900 p-4 text-black">example</div>
                </div>
            </section>
        </div>
    )
}
