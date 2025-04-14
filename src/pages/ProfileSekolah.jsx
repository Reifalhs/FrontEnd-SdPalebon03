import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LogoSekolah from '../assets/logo.png'

const ProfileSekolah = () => {
  return (
    <div className='w-full bg-white'>
        <Navbar />


            <img className='w-30% mx-auto ' src={LogoSekolah} alt="" />

        <div className="visi pb-10 flex flex-col sm:flex-row sm:px-50">
        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 mx-auto mb-5">
   <div class="flex justify-center mb-4 mt-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-purple-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    </div>
 
    <div class="flex justify-center mb-3">
      <h5 class="text-slate-800 text-2xl font-semibold">
        Visi Sekolah
      </h5>
    </div>
  <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
    <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
    Terwujudnya peserta didik yang :

“Mandiri, berprestasi, unggul dalam mutu, berbudaya, dan berakhlak mulia dilandasi iman dan takwa.”
    </p>
  </div>
</div>

        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 mx-auto">
   <div class="flex justify-center mb-4 mt-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-purple-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    </div>
 
    <div class="flex justify-center mb-3">
      <h5 class="text-slate-800 text-2xl font-semibold">
        Misi Sekolah
      </h5>
    </div>
  <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
    <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
    1. Menyelenggarakan pembelajaran dengan menanamkan nilai-nilai keagamaan dan akhlaq mulia dalam rangka meningkatkan ketaqwaan kepada Tuhan Yang Maha Esa sebagai cerminan profil Pelajar Pancasila.

2. Meningkatkan kemampuan peserta didik dalam literasi dan numerasi serta berpartisipasi dalam segala bidang melalui kegiatan intrakurikuler maupun kokurikuler sebagai cerminan profil Pelajar Pancasila.

3. Budi pekerti yang luhur dengan menumbuh kembangkan nilai religious, nasionalis, integritas, mandiri, dan gotong royong dengan kegiatan pembahasan sekolah dan berkesinambungan sebagai cerminan profil Pelajar Pancasila.

4. Mengaktualisasikan karya, kreatifitas, dan bakat dalam wujud nyata sebagai cerminan profil Pelajar Pancasila.

5. Mewujudkan semangat kompetetif yang sportif dalam meraih prestasi dengan bernalar kritis.

6. Peduli lingkungan meningkatkan sarana, prasarana Pendidikan berstandar nasional dan menciptakan lingkungan sekolah yang bersih, sehat, indah, aman, dan nyaman.
    </p>
  </div>
</div>
        </div>

        <Footer />
    </div>
  )
}

export default ProfileSekolah