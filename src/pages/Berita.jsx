import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import galeryImg from '../assets/galeryImg.jpeg'

const Berita = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
                <Navbar />


                <div className="container  w-full flex-wrap flex flex-col sm:flex-row justify-between px-2 sm:px-30  pt-20 pb-20 mt-5">
                        
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5 p-2">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={galeryImg} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 mb-5">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Judul</h5>
                                        <p className="mb-3 font-normal text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, odit et animi maxime, consequuntur dolores nostrum magnam iste rerum sed veniam tempore nihil voluptas ut quas nam officiis, ratione ab!.</p>
                                        <p className="mb-3 font-normal text-right text-sm text-gray-600">20-2-20025.</p>
                                </div>
                        </a>
                        
    

                </div>

                <Footer />
        </div>
    )
}

export default Berita
