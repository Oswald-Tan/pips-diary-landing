import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientLogo from "../assets/gradient_logo.png";

const PrivacyPolicy = () => {
  const lastUpdated = "1 Januari 2024";

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <Motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-md shadow-lg border-b border-orange-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={GradientLogo} alt="PipsDiary" className="w-8 h-8" />
              <span className="text-xl font-semibold bg-linear-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                PipsDiary
              </span>
            </Link>
            
            <Link
              to="/"
              className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </Motion.header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-orange-200 overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-500 to-cyan-500 p-8 text-center">
            <Motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Privacy Policy
            </Motion.h1>
            <p className="text-blue-100 text-lg">
              Terakhir diperbarui: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">1. Pengantar</h2>
              <p className="text-orange-700 leading-relaxed">
                Di PipsDiary, kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">2. Informasi yang Kami Kumpulkan</h2>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2">2.1 Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-orange-700 space-y-1 ml-4">
                    <li>Nama dan alamat email</li>
                    <li>Informasi profil akun</li>
                    <li>Data pembayaran (diproses oleh penyedia pembayaran pihak ketiga)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2">2.2 Data Trading</h3>
                  <ul className="list-disc list-inside text-orange-700 space-y-1 ml-4">
                    <li>Entri trading (pair, entry/exit, lot size, dll.)</li>
                    <li>Analisis performa trading</li>
                    <li>Grafik dan statistik trading</li>
                    <li>Catatan dan komentar trading</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2">2.3 Data Teknis</h3>
                  <ul className="list-disc list-inside text-orange-700 space-y-1 ml-4">
                    <li>Alamat IP dan informasi browser</li>
                    <li>Data penggunaan aplikasi</li>
                    <li>Cookies dan teknologi pelacakan serupa</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">3. Cara Kami Menggunakan Informasi</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>3.1 Menyediakan Layanan:</strong> Untuk mengoperasikan dan memelihara platform PipsDiary.</p>
                <p><strong>3.2 Analisis dan Pengembangan:</strong> Untuk meningkatkan fitur dan pengalaman pengguna.</p>
                <p><strong>3.3 Komunikasi:</strong> Untuk mengirim pembaruan, notifikasi, dan dukungan pelanggan.</p>
                <p><strong>3.4 Keamanan:</strong> Untuk melindungi akun dan mencegah penipuan.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">4. Perlindungan Data Trading</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>4.1 Enkripsi:</strong> Semua data trading dienkripsi selama transmisi dan penyimpanan.</p>
                <p><strong>4.2 Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat mengakses data untuk tujuan pemeliharaan sistem.</p>
                <p><strong>4.3 Backup Rutin:</strong> Data dicadangkan secara teratur untuk mencegah kehilangan.</p>
                <p><strong>4.4 Tidak Dijual:</strong> Kami tidak akan pernah menjual data trading spesifik Anda kepada pihak ketiga.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">5. Berbagi Informasi</h2>
              <p className="text-orange-700 leading-relaxed">
                Kami tidak membagikan informasi pribadi Anda dengan pihak ketiga, kecuali dalam keadaan berikut:
              </p>
              <ul className="list-disc list-inside text-orange-700 space-y-2 ml-4">
                <li>Dengan persetujuan Anda</li>
                <li>Untuk mematuhi kewajiban hukum</li>
                <li>Dengan penyedia layanan yang membantu operasi kami (dengan perjanjian kerahasiaan)</li>
                <li>Dalam merger atau akuisisi perusahaan</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">6. Penyimpanan Data</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>6.1 Lokasi:</strong> Data disimpan di server aman yang berlokasi di Indonesia.</p>
                <p><strong>6.2 Retensi:</strong> Kami menyimpan data selama akun Anda aktif. Anda dapat menghapus akun kapan saja.</p>
                <p><strong>6.3 Ekspor Data:</strong> Anda dapat mengekspor data trading Anda kapan saja dalam format CSV.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">7. Hak Anda</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">Hak Akses</h3>
                  <p className="text-green-700 text-sm">Anda dapat mengakses data pribadi Anda kapan saja.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">Hak Perbaikan</h3>
                  <p className="text-green-700 text-sm">Anda dapat memperbaiki data yang tidak akurat.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">Hak Penghapusan</h3>
                  <p className="text-green-700 text-sm">Anda dapat meminta penghapusan data pribadi.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">Hak Oposisi</h3>
                  <p className="text-green-700 text-sm">Anda dapat menolak pemrosesan data tertentu.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">8. Cookies</h2>
              <p className="text-orange-700 leading-relaxed">
                Kami menggunakan cookies untuk meningkatkan pengalaman pengguna, menganalisis traffic, dan personalisasi konten. Anda dapat mengontrol pengaturan cookies melalui browser Anda.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">9. Keamanan</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>9.1 Enkripsi SSL:</strong> Semua data ditransmisikan melalui koneksi terenkripsi.</p>
                <p><strong>9.2 Autentikasi:</strong> Sistem autentikasi multi-faktor tersedia untuk keamanan tambahan.</p>
                <p><strong>9.3 Audit Keamanan:</strong> Sistem kami secara rutin diaudit untuk kerentanan keamanan.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">10. Perubahan Kebijakan</h2>
              <p className="text-orange-700 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan dikomunikasikan melalui email atau pemberitahuan dalam aplikasi.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">Kontak</h2>
              <p className="text-orange-700 leading-relaxed">
                Untuk pertanyaan tentang privasi atau untuk menggunakan hak privasi Anda, hubungi:
              </p>
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200">
                <p className="text-blue-700">
                  <strong>Data Protection Officer:</strong><br/>
                  <strong>Email:</strong> privacy@pipsdiary.com<br/>
                  <strong>Telepon:</strong> +62 851-724-6048<br/>
                  <strong>Waktu Respon:</strong> 2-3 hari kerja
                </p>
              </div>
            </section>

            <section className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h2 className="text-xl font-bold text-amber-900 mb-3">Peringatan Penting</h2>
              <p className="text-amber-700">
                <strong>PipsDiary adalah alat jurnal trading, bukan penasihat finansial.</strong> Kami tidak bertanggung jawab atas keputusan trading yang Anda buat berdasarkan analisis dari platform kami. Trading mengandung risiko kerugian finansial.
              </p>
            </section>
          </div>
        </Motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-900 text-orange-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>© {new Date().getFullYear()} PipsDiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;