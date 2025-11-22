import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientLogo from "../assets/gradient_logo.png";

const TermsConditions = () => {
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
          <div className="bg-linear-to-r from-orange-500 to-amber-500 p-8 text-center">
            <Motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Terms & Conditions
            </Motion.h1>
            <p className="text-orange-100 text-lg">
              Terakhir diperbarui: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">1. Penerimaan Syarat</h2>
              <p className="text-orange-700 leading-relaxed">
                Dengan mengakses dan menggunakan PipsDiary ("Layanan"), Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat apa pun, Anda tidak boleh menggunakan Layanan kami.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">2. Definisi Layanan</h2>
              <p className="text-orange-700 leading-relaxed">
                PipsDiary adalah platform jurnal trading digital yang menyediakan alat untuk mencatat, menganalisis, dan melacak aktivitas trading. Layanan ini mencakup fitur-fitur seperti:
              </p>
              <ul className="list-disc list-inside text-orange-700 space-y-2 ml-4">
                <li>Pencatatan entri trading</li>
                <li>Analisis performa trading</li>
                <li>Visualisasi data trading</li>
                <li>Tools manajemen risiko</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">3. Akun Pengguna</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>3.1 Registrasi:</strong> Anda harus mendaftar akun untuk mengakses fitur premium. Informasi yang diberikan harus akurat dan lengkap.</p>
                <p><strong>3.2 Keamanan Akun:</strong> Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun dan semua aktivitas yang terjadi under akun Anda.</p>
                <p><strong>3.3 Usia Minimum:</strong> Anda harus berusia minimal 18 tahun untuk menggunakan Layanan kami.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">4. Data Trading</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>4.1 Kepemilikan Data:</strong> Anda mempertahankan semua hak kepemilikan atas data trading yang Anda input ke dalam sistem.</p>
                <p><strong>4.2 Lisensi:</strong> Anda memberikan PipsDiary lisensi terbatas untuk memproses data Anda guna menyediakan Layanan.</p>
                <p><strong>4.3 Kerahasiaan:</strong> Kami tidak akan membagikan data trading spesifik Anda kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">5. Berlangganan dan Pembayaran</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>5.1 Model Berlangganan:</strong> Layanan kami menggunakan model berlangganan dengan opsi Free, Pro, dan Lifetime.</p>
                <p><strong>5.2 Pembayaran:</strong> Pembayaran dilakukan di muka dan berulang secara otomatis untuk paket Pro.</p>
                <p><strong>5.3 Pembatalan:</strong> Anda dapat membatalkan berlangganan kapan saja, dan akses akan tetap aktif hingga akhir periode billing.</p>
                <p><strong>5.4 Pengembalian Dana:</strong> Kami menawarkan garansi uang kembali 30 hari untuk pembelian pertama.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">6. Batasan Tanggung Jawab</h2>
              <div className="space-y-3 text-orange-700">
                <p><strong>6.1 Bukan Saran Finansial:</strong> PipsDiary adalah alat jurnal trading, bukan pemberi saran finansial. Kami tidak memberikan rekomendasi trading.</p>
                <p><strong>6.2 Keputusan Trading:</strong> Semua keputusan trading adalah tanggung jawab Anda sepenuhnya.</p>
                <p><strong>6.3 Kerugian Trading:</strong> Kami tidak bertanggung jawab atas kerugian finansial yang mungkin terjadi dari aktivitas trading Anda.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">7. Hak Kekayaan Intelektual</h2>
              <p className="text-orange-700 leading-relaxed">
                Semua hak kekayaan intelektual terkait platform PipsDiary, termasuk namun tidak terbatas pada kode sumber, desain, logo, dan dokumentasi, adalah milik PipsDiary dan dilindungi oleh hukum hak cipta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">8. Penghentian Layanan</h2>
              <p className="text-orange-700 leading-relaxed">
                Kami berhak untuk menghentikan atau menangguhkan akses Anda ke Layanan jika melanggar syarat dan ketentuan ini. Dalam hal penghentian, Anda berhak untuk mengekspor data trading Anda.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">9. Perubahan Syarat</h2>
              <p className="text-orange-700 leading-relaxed">
                Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan signifikan akan dikomunikasikan melalui email atau pemberitahuan dalam aplikasi.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">10. Hukum yang Berlaku</h2>
              <p className="text-orange-700 leading-relaxed">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-orange-900">Kontak</h2>
              <p className="text-orange-700 leading-relaxed">
                Untuk pertanyaan mengenai Terms & Conditions ini, silakan hubungi kami di:
              </p>
              <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
                <p className="text-orange-700">
                  <strong>Email:</strong> legal@pipsdiary.com<br/>
                  <strong>Telepon:</strong> +62 851-7324-6048<br/>
                  <strong>Alamat:</strong> Jakarta, Indonesia
                </p>
              </div>
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

export default TermsConditions;