import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Kontak = () => {
    return (
        <div className='w-full bg-white h-screen'>
                <Navbar />

                <section class="bg-white pt-20">
        <div class="container px-6 py-12 mx-auto">
                <div>

                        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl border-b-1 border-gray-300">Kontak Kami</h1>

                        <p class="mt-3 text-gray-500">Senin - Kamis : Pukul 07.30 - 15.30 WIB.</p>
                        <p class="mt-1 text-gray-500">Jumat : Pukul 07.00 - 11.30 WIB.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                                <div className='border-1 rounded-md shadow p-3'>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800">Email</h2>
                                        <p class="mt-2 text-sm text-gray-500">Hubungi email kami dibawah ini.</p>
                                        <p class="mt-2 text-sm text-blue-500">sdnpalebontiga@gmail.com</p>
                                </div>

                                <div className='border-1 rounded-md shadow p-3'>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                        </span>
                                        
                                        <h2 class="mt-4 text-base font-medium text-gray-800">Alamat</h2>
                                        <p class="mt-2 text-sm text-blue-500">Jl. Brigjen S. Sudiarto No. 330 Kel. Palebon Kec. Pedurungan, Kota Semarang Jawa Tengah 50246</p>
                                </div>

                                <div className='border-1 rounded-md shadow p-3'>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                        </span>
                                        
                                        <h2 class="mt-4 text-base font-medium text-gray-800">Phone</h2>
                                        <p class="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                        <p class="mt-2 text-sm text-blue-500">+62246724037</p>
                                </div>
                        </div>

                        <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                                <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0034077096047!2d110.4638564131393!3d-7.008880570595546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cf961a1fed1%3A0x37a0f9b8581baa5!2sSDN%20Palebon%2003!5e0!3m2!1sid!2sid!4v1623383791164!5m2!1sid!2sid"></iframe>
                        </div>
                </div>
        </div>
</section>


                <Footer />
        </div>
    )
}

export default Kontak