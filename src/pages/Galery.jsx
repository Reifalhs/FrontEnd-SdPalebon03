import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import galeryImg from '../assets/galeryImg.jpeg'

const Galery = () => {
    return (
        <div className="w-full bg-white">
            <Navbar />

            <div className="head w-70% pt-20">
                <p className='text-4xl font-semibold text-gray-800 text-center mb-5'>Galery</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4  px-3 pb-10">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src={galeryImg}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src={galeryImg}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src={galeryImg}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src={galeryImg}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src={galeryImg}
                        alt=""
                    />
                </div>
                
                
                
            </div>

            <Footer />
        </div>
    );
};

export default Galery;