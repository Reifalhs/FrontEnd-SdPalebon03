import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import KepalaSekolah from '../assets/kepalaSekolah.jpeg'
import { Link } from 'react-router-dom'

const Guru = () => {
    return (
        <div className="w-full bg-white min-h-screen">
                <Navbar />

                <div className="head w-70% pt-20">
                        <p className="text-4xl font-semibold text-gray-700 border-b-1 border-gray-400 pt-2 text-center mb-5">Profile Guru</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-5 pb-10">
                        <Link className="w-full max-w-sm bg-white border border-gray-200 pt-4 rounded-lg shadow-sm hover:opacity-80">
                                <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={KepalaSekolah} alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900">vani</h5>
                                        <span className="text-md text-gray-500">Kepala Sekolah</span>
                                </div>
                        </Link>
                        <Link className="w-full max-w-sm bg-white border border-gray-200 pt-4 rounded-lg shadow-sm hover:opacity-80">
                                <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={KepalaSekolah} alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900">vani</h5>
                                        <span className="text-md text-gray-500">Kepala Sekolah</span>
                                </div>
                        </Link>
                        <Link className="w-full max-w-sm bg-white border border-gray-200 pt-4 rounded-lg shadow-sm hover:opacity-80">
                                <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={KepalaSekolah} alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900">vani</h5>
                                        <span className="text-md text-gray-500">Kepala Sekolah</span>
                                </div>
                        </Link>
                        <Link className="w-full max-w-sm bg-white border border-gray-200 pt-4 rounded-lg shadow-sm hover:opacity-80">
                                <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={KepalaSekolah} alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900">vani</h5>
                                        <span className="text-md text-gray-500">Kepala Sekolah</span>
                                </div>
                        </Link>
                        <Link className="w-full max-w-sm bg-white border border-gray-200 pt-4 rounded-lg shadow-sm hover:opacity-80">
                                <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={KepalaSekolah} alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900">vani</h5>
                                        <span className="text-md text-gray-500">Kepala Sekolah</span>
                                </div>
                        </Link>
                        <Link className="w-full max-w-sm bg-white border border-gray-200 pt-4 rounded-lg shadow-sm hover:opacity-80">
                                <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={KepalaSekolah} alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900">vani</h5>
                                        <span className="text-md text-gray-500">Kepala Sekolah</span>
                                </div>
                        </Link>
                        
                </div>

                <Footer />
        </div>
    )
}

export default Guru
