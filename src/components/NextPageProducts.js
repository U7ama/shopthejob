import React, { useState, useEffect } from 'react';

export default function NextPageProducts() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                setApiData(data);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        if (apiData.length !== 0) {
            setIsLoading(false);
        }
    }, [apiData]);
    return (
        <div>
            <h1 className='text-center my-5 text-lg'>Products</h1>
            {isLoading ? (
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <a href='/' className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-pink-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-40 bg-pink-200 rounded col-span-2"></div>
                                        <div className="h-40 bg-pink-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-20 bg-pink-200 rounded"></div>
                                </div>
                                <div className="h-2 bg-pink-200 rounded col-span-2"></div>
                                <div className="h-2 bg-pink-200 rounded col-span-1"></div>
                                <div className="mt-[20px] grid grid-cols-3 gap-4">
                                    <div className="h-5 bg-pink-200 rounded col-span-2"></div>
                                    <div className="h-5 bg-pink-200 rounded col-span-2"></div>
                                </div>
                            </a>
                            <a href='/' className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-pink-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-40 bg-pink-200 rounded col-span-2"></div>
                                        <div className="h-40 bg-pink-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-20 bg-pink-200 rounded"></div>
                                </div>
                                <div className="h-2 bg-pink-200 rounded col-span-2"></div>
                                <div className="h-2 bg-pink-200 rounded col-span-1"></div>
                                <div className="mt-[20px] grid grid-cols-3 gap-4">
                                    <div className="h-5 bg-pink-200 rounded col-span-2"></div>
                                    <div className="h-5 bg-pink-200 rounded col-span-2"></div>
                                </div>
                            </a>
                            <a href='/' className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-pink-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-40 bg-pink-200 rounded col-span-2"></div>
                                        <div className="h-40 bg-pink-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-20 bg-pink-200 rounded"></div>
                                </div>
                                <div className="h-2 bg-pink-200 rounded col-span-2"></div>
                                <div className="h-2 bg-pink-200 rounded col-span-1"></div>
                                <div className="mt-[20px] grid grid-cols-3 gap-4">
                                    <div className="h-5 bg-pink-200 rounded col-span-2"></div>
                                    <div className="h-5 bg-pink-200 rounded col-span-2"></div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <div className="bg-white">
                            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <h2 className="sr-only">Products</h2>
                                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {apiData.slice(0, 6).map((data) => (
                                        <a key={data.id} href='/' className="group">
                                            <div className="w-full aspect-w-1 aspect-h-1 bg-pink-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                <img src={data.url} alt='products' className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                            </div>
                                            <h3 className="mt-4 text-sm text-pink-700">Mattress</h3>
                                            <p className="mt-1 text-lg font-medium text-pink-900">PKR 100K</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination />
                </div>
            )}
        </div>
    )
}

export function Pagination() {
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">2</span> to <span className="font-medium">2</span> of{' '}
                        <span className="font-medium">2</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        <a
                            href="/products/Matts"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >Previous
                            <span className="sr-only">Previous</span>
                            {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </a>
                        <a
                            href="/products"
                            aria-current="page"
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            1
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                            ...
                        </span>
                        <a
                            href="/moreproducts"
                            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            2
                        </a>
                        <a
                            href="/moreproducts"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >Next
                            <span className="sr-only">Next</span>
                            {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}