import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Warta = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
                <Navbar />
                
                <div className="container  w-full flex-wrap flex flex-col sm:flex-row justify-between px-2 sm:px-30  pt-20 pb-20 mt-5">
                        
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-500 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5">
                                <div className="flex flex-col justify-between p-2 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight bg-red-600 rounded-t-md p-2 text-gray-100">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-500 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5">
                                <div className="flex flex-col justify-between p-2 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight bg-red-600 rounded-t-md p-2 text-gray-100">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-500 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5">
                                <div className="flex flex-col justify-between p-2 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight bg-red-600 rounded-t-md p-2 text-gray-100">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-500 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5">
                                <div className="flex flex-col justify-between p-2 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight bg-red-600 rounded-t-md p-2 text-gray-100">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        
                </div>

                <Footer />
        </div>
  )
}

export default Warta