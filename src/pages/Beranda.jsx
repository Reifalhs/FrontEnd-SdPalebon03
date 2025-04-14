import React from 'react';
import Navbar from '../components/Navbar';
import Img1 from '../assets/carousel1.jpg'
import Img2 from '../assets/carousel2.png'
import kSekolah from '../assets/kepalaSekolah.jpeg'
import Footer from '../components/Footer';




const Beranda = () => {
  return (
    <div className="bg-white w-full">
      <Navbar />

      <div className="carousel w-full mt-30">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={Img1}
            className="w-90% mx-auto rounded-md" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={Img2}
            className="w-90% mx-auto rounded-md" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>


      <div className="contain w-full px-10">
      <a href="#" class="flex flex-col items-center p-2 mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  hover:bg-gray-100 ">
            <img class="object-cover w-50% rounded-t-lg h-96 md:h-autol md:rounded-none md:rounded-s-lg" src={kSekolah} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-800 ">Sambutan Kepala Sekolah</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Assalamualaikum Wr. Wb.

Puji syukur alhamdulillah senantiasa kami panjatkan ke hadirat Allah SWT, Tuhan Yang Maha Esa atas limpahan karunia dan rahmat-Nya sehingga website SDN Palebon 03, Pedurungan Semarang dapat aktif kembali. Saya menyadari bahwa website sekolah ini sangatlah penting di era global saat ini. Cepatnya perkembangan pengetahuan dan teknologi informasi saat ini tidak dapat dipungkiri bahwa keberadaan website sangatlah penting. Website dapat digunakan sebagai sarana informasi dan komunikasi pihak sekolah dengan siswa, orang tua/wali murid, komite sekolah, alumni, dan stake holder secara luas.


Selain memberikan informasi tentang SDN Palebon 03, website ini juga digunakan untuk memfasilitasi civitas academia di SDN Palebon 03 untuk selalu mengembangkan kompetensinya melalui pembuatan website ini. Tentu saja hal ini dilakukan dengan harapan semua stake holder di SDN Palebon 03 untuk dapat mendarma baktikan semua potensi yang ada demi kemajuan dunia pendidikan. Saya percaya apapun bentuk dan sumbangsih yang diberikan jika dilandasi dengan niat yang tulus tanpa mengharapkan imbalan akan menghasilkan generasi penerus bangsa yang lebih siap dan insya Allah merupakan bagian dari ibadah, Aamiin.



        </p>
            </div>
        </a>

      </div>
      <div className="contain w-full px-10 mb-20">
      <a href="#" class="flex flex-col items-center p-2 mx-auto mt-2 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  hover:bg-gray-100 ">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dalam sistem Manajemen Berbasis Sekolah (MBS) atau ketatakelolaan sekolah berbasis manajemen, kami berusaha terus meningkatkan kinerja dan profesionalisme demi terwujudnya pelayanan prima dalam cakupan Lembaga Pendidikan SDN Palebon 03. Kami mencoba menerapkan sistem teknologi komputerisasi agar transparansi pengelolaan pendidikan terwujud secara optimal. Tentu saja sebuah sistem akan bermanfaat dan berdaya guna tinggi jika didukung dan direalisasikan oleh semua komponen di SDN Palebon 03, baik sistem manajerial, akademik, pelayanan publik, prestasi, moralitas, dan semua hal yang berinteraksi di dalamnya. Oleh karena itu, saya berharap semua komponen SDN Palebon 03 : PTK, siswa, komite sekolah, orang tua/wali siswa, alumni, dan stake holder lainnya mendukung dan berkontribusi dalam website ini.

Akhirnya, kami mengharapkan masukan berupa saran, kritik yang membangun terhadap website ini agar kami terus belajar dan meng-update diri sehingga tampilan, isi, dan mutu website akan terus berkembang lebih baik sekaligus dapat dimanfaatkan dan bermanfaat bagi PTK, siswa, komite sekolah, orang tua/wali siswa, alumni, stake holder berkait, dan masyarakat luas pada umumnya. Aamiin Ya Robbal ‘Alamin.

Wassalamualaikum Wr. Wb.</p>
            </div>
        </a>

      </div>

      <Footer />

    </div>
  );
};

export default Beranda;
