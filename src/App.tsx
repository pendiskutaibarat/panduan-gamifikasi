import React, { useState } from 'react';
import banner from '/Banner Gamifikasi.png';
import { BookOpen, Users, Trophy, PlayCircle, CheckCircle, ExternalLink, Menu, X, Star, Clock, Target, ArrowRight, Download, Settings, Eye, BarChart3, Share2, Gamepad2, Award, Zap, Play } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const sections = [
    { id: 'intro', label: 'Pengenalan', icon: BookOpen },
    { id: 'kahoot', label: 'Kahoot!', icon: PlayCircle },
    { id: 'quizizz', label: 'Quizizz', icon: Trophy },
    { id: 'wordwall', label: 'Wordwall', icon: Target },
    { id: 'tips', label: 'Tips & Trik', icon: Star }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Banner */}
      <div className="w-full">
        <img 
          src={banner} 
          alt="Kementerian Agama - Pendidikan Islam" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Panduan Gamifikasi</h1>
                <p className="text-sm text-gray-600">Untuk Guru Madrasah</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {sections.map(section => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {sections.map(section => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left hover:bg-gray-100"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Section */}
        <section id="intro" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformasi Kelas dengan Gamifikasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pelajari cara membuat pembelajaran yang menarik dan interaktif menggunakan platform gamifikasi populer. 
              Panduan lengkap ini akan membantu Anda menciptakan konten edukatif yang menyenangkan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meningkatkan Keterlibatan</h3>
              <p className="text-gray-600">Gamifikasi membuat pembelajaran menjadi menyenangkan dan interaktif, menjaga siswa tetap aktif berpartisipasi.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Retensi yang Lebih Baik</h3>
              <p className="text-gray-600">Permainan interaktif membantu siswa mengingat informasi lebih lama melalui pembelajaran aktif.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Umpan Balik Real-time</h3>
              <p className="text-gray-600">Dapatkan wawasan instan tentang pemahaman siswa dan sesuaikan pengajaran Anda.</p>
            </div>
          </div>
        </section>

        {/* Kahoot Section */}
        <section id="kahoot" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <PlayCircle className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Kahoot!</h2>
                  <p className="text-purple-100">Platform kuis interaktif yang paling populer di dunia</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Video Tutorial */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">📹 Video Tutorial Kahoot!</h4>
                  <button
                    onClick={() => setActiveVideo(activeVideo === 'kahoot' ? null : 'kahoot')}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {activeVideo === 'kahoot' ? 'Tutup Video' : 'Tonton Tutorial'}
                  </button>
                </div>
                {activeVideo === 'kahoot' && (
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/Bl7M4keRanw"
                      title="Tutorial Kahoot"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className="text-sm text-gray-600 mt-2 italic">
                      Credit to Ruang Edukator Channel
                    </p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Settings className="h-6 w-6 mr-2 text-purple-600" />
                    Langkah-langkah Memulai
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Daftar Akun</h4>
                        <p className="text-gray-600 mb-2">Kunjungi <a href="https://kahoot.com" className="text-purple-600 underline">kahoot.com</a> dan klik "Sign up for free"</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Pilih "Teacher" sebagai peran Anda</li>
                          <li>• Masukkan email dan buat password</li>
                          <li>• Verifikasi email Anda</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Buat Kahoot Pertama</h4>
                        <p className="text-gray-600 mb-2">Klik tombol "Create" di dashboard</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Pilih "Kahoot" untuk kuis standar</li>
                          <li>• Beri judul yang menarik</li>
                          <li>• Tambahkan deskripsi singkat</li>
                          <li>• Pilih gambar cover yang sesuai</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Tambahkan Pertanyaan</h4>
                        <p className="text-gray-600 mb-2">Klik "Add question" untuk mulai membuat soal</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Tulis pertanyaan yang jelas (max 120 karakter)</li>
                          <li>• Buat 2-4 pilihan jawaban</li>
                          <li>• Tandai jawaban yang benar</li>
                          <li>• Atur waktu (5-240 detik)</li>
                          <li>• Tambahkan gambar/video jika perlu</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Mainkan Kahoot</h4>
                        <p className="text-gray-600 mb-2">Klik "Play" untuk memulai sesi</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Pilih "Teach" untuk mode klasik</li>
                          <li>• Bagikan PIN game ke siswa</li>
                          <li>• Siswa join di kahoot.it</li>
                          <li>• Mulai permainan!</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Star className="h-6 w-6 mr-2 text-purple-600" />
                    Tips Membuat Kahoot Efektif
                  </h3>
                  <div className="bg-purple-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Pertanyaan yang Jelas</h4>
                        <p className="text-sm text-gray-600">Gunakan bahasa sederhana dan hindari pertanyaan yang ambigu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Gunakan Visual</h4>
                        <p className="text-sm text-gray-600">Tambahkan gambar, GIF, atau video untuk membuat pertanyaan lebih menarik</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Waktu yang Tepat</h4>
                        <p className="text-sm text-gray-600">10-30 detik untuk pertanyaan sederhana, 60+ detik untuk yang kompleks</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Variasi Tingkat Kesulitan</h4>
                        <p className="text-sm text-gray-600">Campurkan soal mudah, sedang, dan sulit untuk menjaga engagement</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Review Jawaban</h4>
                        <p className="text-sm text-gray-600">Selalu bahas jawaban setelah setiap pertanyaan untuk pembelajaran maksimal</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                      <h4 className="font-semibold text-yellow-800">Pro Tip</h4>
                    </div>
                    <p className="text-sm text-yellow-700 mt-1">
                      Gunakan mode "Team" untuk mendorong kolaborasi dan mengurangi kecemasan siswa yang pemalu!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-purple-600" />
                  Fitur-fitur Kahoot
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mode Permainan</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Classic (Live)</li>
                      <li>• Team Mode</li>
                      <li>• Challenge (Homework)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Jenis Pertanyaan</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Multiple Choice</li>
                      <li>• True/False</li>
                      <li>• Type Answer</li>
                      <li>• Puzzle</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Analitik</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Laporan detail</li>
                      <li>• Skor individu</li>
                      <li>• Analisis pertanyaan</li>
                      <li>• Export data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="https://kahoot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
                >
                  <span>Mulai dengan Kahoot!</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quizizz Section */}
        <section id="quizizz" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Trophy className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Quizizz</h2>
                  <p className="text-green-100">Platform kuis self-paced dengan elemen gamifikasi</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Video Tutorial */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">📹 Video Tutorial Quizizz</h4>
                  <button
                    onClick={() => setActiveVideo(activeVideo === 'quizizz' ? null : 'quizizz')}
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {activeVideo === 'quizizz' ? 'Tutup Video' : 'Tonton Tutorial'}
                  </button>
                </div>
                {activeVideo === 'quizizz' && (
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/tDggg1sran0"
                      title="Tutorial Quizizz"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className="text-sm text-gray-600 mt-2 italic">
                      Credit to Ruang Edukator Channel
                    </p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Settings className="h-6 w-6 mr-2 text-green-600" />
                    Panduan Lengkap Quizizz
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Registrasi Akun</h4>
                        <p className="text-gray-600 mb-2">Daftar di <a href="https://quizizz.com" className="text-green-600 underline">quizizz.com</a></p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Klik "Sign up" dan pilih "Teacher"</li>
                          <li>• Gunakan email sekolah jika memungkinkan</li>
                          <li>• Lengkapi profil dengan informasi sekolah</li>
                          <li>• Verifikasi email untuk akses penuh</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Membuat Quiz Baru</h4>
                        <p className="text-gray-600 mb-2">Klik "Create" di dashboard utama</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Pilih "Quiz" untuk kuis standar</li>
                          <li>• Beri nama quiz yang deskriptif</li>
                          <li>• Pilih mata pelajaran dan tingkat kelas</li>
                          <li>• Atur visibilitas (public/private)</li>
                          <li>• Tambahkan tags untuk pencarian</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Menambah Pertanyaan</h4>
                        <p className="text-gray-600 mb-2">Gunakan editor pertanyaan yang intuitif</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Tulis pertanyaan dengan jelas</li>
                          <li>• Tambahkan hingga 5 pilihan jawaban</li>
                          <li>• Pilih jawaban yang benar</li>
                          <li>• Atur waktu per pertanyaan</li>
                          <li>• Tambahkan penjelasan untuk jawaban</li>
                          <li>• Upload gambar atau audio jika diperlukan</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Mengatur Pengaturan Game</h4>
                        <p className="text-gray-600 mb-2">Kustomisasi pengalaman bermain</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Pilih mode: Live atau Homework</li>
                          <li>• Atur power-ups (bonus poin)</li>
                          <li>• Tentukan batas waktu keseluruhan</li>
                          <li>• Aktifkan/nonaktifkan musik</li>
                          <li>• Atur tampilan leaderboard</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Meluncurkan Quiz</h4>
                        <p className="text-gray-600 mb-2">Bagikan dengan siswa</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Klik "Play Live" untuk sesi langsung</li>
                          <li>• Bagikan kode join ke siswa</li>
                          <li>• Siswa masuk di joinmyquiz.com</li>
                          <li>• Monitor progress real-time</li>
                          <li>• Review hasil setelah selesai</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-green-600" />
                    Keunggulan Quizizz
                  </h3>
                  <div className="bg-green-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Self-Paced Learning</h4>
                        <p className="text-sm text-gray-600">Siswa dapat mengerjakan dengan kecepatan mereka sendiri, mengurangi tekanan</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Power-ups & Streak</h4>
                        <p className="text-sm text-gray-600">Fitur bonus yang membuat pembelajaran lebih menyenangkan dan kompetitif</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <BarChart3 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Analitik Mendalam</h4>
                        <p className="text-sm text-gray-600">Laporan detail per siswa, per pertanyaan, dan tren pembelajaran</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Share2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Mode Homework</h4>
                        <p className="text-sm text-gray-600">Berikan tugas dengan deadline, siswa bisa mengerjakan kapan saja</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Download className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Bank Soal Besar</h4>
                        <p className="text-sm text-gray-600">Akses jutaan pertanyaan dari komunitas guru di seluruh dunia</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-800">Fitur Unggulan</h4>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Quizizz memiliki fitur "Meme" yang menampilkan gambar lucu berdasarkan performa siswa, membuat suasana lebih ceria!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  Jenis Pertanyaan di Quizizz
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Multiple Choice</h4>
                    <p className="text-xs text-gray-600">Pilihan ganda klasik</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Checkbox</h4>
                    <p className="text-xs text-gray-600">Pilih beberapa jawaban</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Fill in the Blank</h4>
                    <p className="text-xs text-gray-600">Isi bagian kosong</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1">Poll</h4>
                    <p className="text-xs text-gray-600">Survei pendapat</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="https://quizizz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
                >
                  <span>Coba Quizizz Sekarang</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Wordwall Section */}
        <section id="wordwall" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Wordwall</h2>
                  <p className="text-orange-100">Platform aktivitas interaktif dengan 18+ template permainan</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Video Tutorial */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">📹 Video Tutorial Wordwall</h4>
                  <button
                    onClick={() => setActiveVideo(activeVideo === 'wordwall' ? null : 'wordwall')}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {activeVideo === 'wordwall' ? 'Tutup Video' : 'Tonton Tutorial'}
                  </button>
                </div>
                {activeVideo === 'wordwall' && (
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/E5bwQQjmdio"
                      title="Tutorial Wordwall"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className="text-sm text-gray-600 mt-2 italic">
                      Credit to Ruang Edukator Channel
                    </p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Settings className="h-6 w-6 mr-2 text-orange-600" />
                    Tutorial Lengkap Wordwall
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Membuat Akun</h4>
                        <p className="text-gray-600 mb-2">Registrasi di <a href="https://wordwall.net" className="text-orange-600 underline">wordwall.net</a></p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Klik "Sign up" di pojok kanan atas</li>
                          <li>• Pilih "Teacher" sebagai tipe akun</li>
                          <li>• Masukkan email dan password</li>
                          <li>• Verifikasi email untuk aktivasi</li>
                          <li>• Lengkapi profil dengan info sekolah</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Memilih Template</h4>
                        <p className="text-gray-600 mb-2">Klik "Create Activity" untuk melihat pilihan template</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Browse 18+ template yang tersedia</li>
                          <li>• Pilih berdasarkan tujuan pembelajaran</li>
                          <li>• Preview template sebelum memilih</li>
                          <li>• Pertimbangkan usia dan kemampuan siswa</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Input Konten</h4>
                        <p className="text-gray-600 mb-2">Masukkan materi sesuai template yang dipilih</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Untuk Quiz: tulis pertanyaan dan jawaban</li>
                          <li>• Untuk Match: buat pasangan kata/gambar</li>
                          <li>• Untuk Wordsearch: daftar kata kunci</li>
                          <li>• Gunakan fitur import dari Excel jika ada</li>
                          <li>• Preview konten sebelum publish</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Kustomisasi Tampilan</h4>
                        <p className="text-gray-600 mb-2">Personalisasi aktivitas Anda</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Pilih tema warna yang sesuai</li>
                          <li>• Upload gambar latar belakang</li>
                          <li>• Atur font dan ukuran teks</li>
                          <li>• Tambahkan musik latar (opsional)</li>
                          <li>• Set timer jika diperlukan</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Berbagi dengan Siswa</h4>
                        <p className="text-gray-600 mb-2">Publikasikan dan bagikan aktivitas</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Klik "Done" untuk menyimpan</li>
                          <li>• Copy link untuk dibagikan</li>
                          <li>• Embed di website/LMS sekolah</li>
                          <li>• Buat QR code untuk akses mudah</li>
                          <li>• Atur sebagai tugas dengan deadline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Gamepad2 className="h-6 w-6 mr-2 text-orange-600" />
                    Template Populer Wordwall
                  </h3>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Quiz</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Match Up</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Wordsearch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Crossword</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Anagram</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Random Wheel</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Hangman</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Balloon Pop</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Maze Chase</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Airplane</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Whack-a-mole</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="font-medium">Group Sort</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-white rounded border-l-4 border-orange-600">
                      <p className="text-sm text-gray-600">
                        <strong className="text-orange-800">Keunggulan Utama:</strong> Satu konten bisa diubah menjadi berbagai jenis permainan hanya dengan sekali klik!
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-orange-600" />
                      Rekomendasi Penggunaan
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded">
                        <h5 className="font-medium text-sm">Untuk Vocabulary Building</h5>
                        <p className="text-xs text-gray-600">Gunakan Match Up, Wordsearch, atau Anagram</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h5 className="font-medium text-sm">Untuk Review Materi</h5>
                        <p className="text-xs text-gray-600">Quiz, Crossword, atau Balloon Pop</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h5 className="font-medium text-sm">Untuk Ice Breaking</h5>
                        <p className="text-xs text-gray-600">Random Wheel, Whack-a-mole, atau Maze Chase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-orange-600" />
                  Fitur Premium vs Gratis
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">Akun Gratis</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 5 aktivitas per bulan</li>
                      <li>• Akses semua template</li>
                      <li>• Sharing via link</li>
                      <li>• Statistik dasar</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Akun Premium</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Unlimited aktivitas</li>
                      <li>• Fitur interaktif tambahan</li>
                      <li>• Analitik mendalam</li>
                      <li>• Tanpa watermark</li>
                      <li>• Bulk import dari Excel</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a
                  href="https://wordwall.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold"
                >
                  <span>Mulai dengan Wordwall</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Tricks Section */}
        <section id="tips" className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
              <Star className="h-8 w-8 mr-3" />
              Tips & Trik untuk Sukses Gamifikasi
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mulai dari Kecil</h3>
                <p className="text-indigo-100">Mulai dengan kuis sederhana 5-10 soal. Tingkatkan kompleksitas secara bertahap seiring siswa terbiasa.</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Libatkan Siswa</h3>
                <p className="text-indigo-100">Biarkan siswa membuat pertanyaan mereka sendiri. Ini meningkatkan engagement dan ownership terhadap pembelajaran.</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analisis Data</h3>
                <p className="text-indigo-100">Gunakan laporan untuk mengidentifikasi kesulitan belajar siswa dan sesuaikan strategi mengajar Anda.</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="h-6 w-6 mr-2" />
                Strategi Implementasi di Kelas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Sebelum Pembelajaran</h4>
                  <ul className="text-sm text-indigo-100 space-y-1">
                    <li>• Siapkan perangkat dan koneksi internet</li>
                    <li>• Test aktivitas sebelum digunakan</li>
                    <li>• Siapkan rencana backup jika ada masalah teknis</li>
                    <li>• Briefing singkat tentang cara bermain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Selama Pembelajaran</h4>
                  <ul className="text-sm text-indigo-100 space-y-1">
                    <li>• Monitor partisipasi semua siswa</li>
                    <li>• Berikan bantuan teknis jika diperlukan</li>
                    <li>• Diskusikan jawaban setelah setiap sesi</li>
                    <li>• Jaga suasana tetap positif dan supportif</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-yellow-600" />
            Best Practices Gamifikasi Pendidikan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Yang Harus Dilakukan</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Sesuaikan dengan Kurikulum</h4>
                    <p className="text-sm text-gray-600">Pastikan konten gamifikasi mendukung tujuan pembelajaran yang telah ditetapkan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Variasi Platform</h4>
                    <p className="text-sm text-gray-600">Gunakan berbagai platform untuk menghindari kebosanan dan menjangkau gaya belajar yang berbeda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Feedback Konstruktif</h4>
                    <p className="text-sm text-gray-600">Berikan penjelasan untuk setiap jawaban, baik yang benar maupun salah</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Inklusivitas</h4>
                    <p className="text-sm text-gray-600">Pastikan semua siswa dapat berpartisipasi, termasuk yang memiliki keterbatasan teknologi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">❌ Yang Harus Dihindari</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Overuse Gamifikasi</h4>
                    <p className="text-sm text-gray-600">Jangan gunakan game untuk setiap sesi. Seimbangkan dengan metode pembelajaran lain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Fokus Hanya pada Kompetisi</h4>
                    <p className="text-sm text-gray-600">Hindari menciptakan tekanan berlebihan. Fokus pada pembelajaran, bukan hanya menang</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Mengabaikan Persiapan</h4>
                    <p className="text-sm text-gray-600">Jangan langsung menggunakan tanpa testing. Selalu cek konten dan teknis terlebih dahulu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Mengabaikan Siswa Introvert</h4>
                    <p className="text-sm text-gray-600">Berikan opsi partisipasi yang nyaman untuk siswa yang tidak suka kompetisi terbuka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="bg-yellow-50 rounded-2xl p-8 mb-16 border border-yellow-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-yellow-800">
            <Settings className="h-6 w-6 mr-2" />
            Troubleshooting Masalah Umum
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-600 mb-2">🚫 Masalah: Siswa tidak bisa join game</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Solusi:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pastikan PIN/kode game benar</li>
                  <li>Cek koneksi internet siswa</li>
                  <li>Refresh browser atau restart app</li>
                  <li>Gunakan mode incognito/private browsing</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-600 mb-2">🐌 Masalah: Game berjalan lambat</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Solusi:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Kurangi jumlah peserta per sesi</li>
                  <li>Gunakan gambar dengan ukuran kecil</li>
                  <li>Pastikan bandwidth internet mencukupi</li>
                  <li>Tutup aplikasi lain yang tidak perlu</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-600 mb-2">📱 Masalah: Tampilan tidak responsif di mobile</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Solusi:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Gunakan browser terbaru</li>
                  <li>Aktifkan mode landscape untuk layar kecil</li>
                  <li>Zoom out jika teks terlalu besar</li>
                  <li>Gunakan app mobile jika tersedia</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-600 mb-2">📊 Masalah: Data hasil tidak tersimpan</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Solusi:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pastikan login dengan akun yang benar</li>
                  <li>Jangan tutup browser sebelum game selesai</li>
                  <li>Export data segera setelah sesi berakhir</li>
                  <li>Gunakan mode "Save results" jika tersedia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="h-8 w-8 mr-2" />
            <h3 className="text-xl font-bold">Panduan Gamifikasi Indonesia</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Panduan lengkap ini dirancang khusus untuk membantu guru-guru Indonesia mengintegrasikan gamifikasi 
            dalam praktik mengajar mereka. Selamat mengajar dengan cara yang lebih menyenangkan! 🎓
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>© 2024 Panduan Gamifikasi</span>
            <span>•</span>
            <span>Dibuat dengan ❤️ untuk Guru Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;