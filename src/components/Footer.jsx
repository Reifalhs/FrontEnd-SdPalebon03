import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Logo2 from '../assets/logo2.png'


const Footer = () => {
  return (
    <div className="w-full">
            <div className='w-full flex flex-col sm:flex-row justify-between bg-blue-400 px-50 pt-20 pb-15'>
        <div className="cont flex flex-col">
            <h3 className='border-b-1 text-xl font-bold mb-1'>Tautan</h3>
            <a href="">{"> Kemendikbud"}</a>
            <a href="">{"> Dinas Pendidikan"}</a>
        </div>
        <div className="cont flex flex-col">
            <h3 className='border-b-1 text-xl font-bold mb-1'>Ikuti Kami</h3>
            <div className="flex flex-row">
                <a href="" className='text-4xl mr-2'><FaInstagramSquare /></a>
                <a href="" className='text-4xl'><IoLogoYoutube /></a>
            </div>
        </div>
        <div className="cont flex flex-col">
            <h3 className='border-b-1 text-xl font-bold mb-1'>Tautan</h3>
            <a href="" className=' flex flex-row'><MdEmail className='mt-1.5 mr-2 mb-1'/> sdnpalebontiga@gmail.com</a>
            <p href="" className=' flex flex-row'><BsFillTelephoneFill className='mt-1.5 mr-2 mb-1'/> (024) 6724037</p>
            <p href="" className=' flex flex-row'><MdLocationOn className='mt-1.5 mr-2'/> Jl. Brigjen S. Sudiarto No. 330 Semarang Palebon Pedurungan</p>

        </div>
        
    </div>
    <div className="w-full text-center bg-blue-800 text-xl font-bold py-2">SDN PALEBON 03</div>
    </div>
    
  )
}

export default Footer