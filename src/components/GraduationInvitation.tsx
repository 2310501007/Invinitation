"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

interface GraduationInvitationProps {
  recipient: string;
}

// Helper function for asset paths in production
const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Invinitation' : '';
  return `${basePath}${path}`;
};

export default function GraduationInvitation({ recipient }: GraduationInvitationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleOpenWithMusic = () => {
    setIsOpen(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("1697519435");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    {/* Desktop View - Newspaper Layout */}
    <div className="min-h-screen hidden md:flex overflow-hidden bg-[#f5f0e8] relative">
      {/* LEFT SIDE - Large Cover Preview */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-[#f5f0e8] to-[#e8dcc8]">
        {/* Decorative newspaper background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 gap-4 p-8">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-8 bg-[#2c1810] rounded"></div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top ornamental border */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2c1810]"></div>
            <span className="text-2xl">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2c1810]"></div>
          </motion.div>

          {/* Top text - Volume */}
          <motion.p
            className="text-sm font-serif text-[#5c4a3a] mb-2 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Volume MMXXV • Edisi Khusus
          </motion.p>

          {/* Newspaper icon */}
          <motion.div
            className="text-7xl mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            📰
          </motion.div>
          
          {/* Main masthead */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="border-y-4 border-double border-[#2c1810] py-4 mb-4">
              <h1
                className="text-7xl font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2c1810",
                  letterSpacing: "0.05em"
                }}
              >
                WARTA WISUDA
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-px bg-[#2c1810]"></div>
                <span className="text-xs font-serif text-[#5c4a3a]">EST. 2025</span>
                <div className="w-16 h-px bg-[#2c1810]"></div>
              </div>
            </div>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl font-bold font-serif text-[#2c1810] mb-2 uppercase tracking-wide">
              Dalam Rangka Memperingati Hari
            </p>
            <p className="text-xl text-[#5c4a3a] font-serif italic">
              Momen Bersejarah Perjalanan Akademik
            </p>
          </motion.div>

          {/* Edition badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="border-4 border-double border-[#2c1810] bg-[#f5f0e8] px-8 py-3">
              <p className="text-sm font-serif text-[#2c1810] uppercase tracking-wider font-bold">⚜ Edisi Spesial Wisuda ⚜</p>
              <p className="text-xs font-serif text-[#5c4a3a] mt-1">Klik tombol di sebelah kanan untuk membaca</p>
            </div>
          </motion.div>

          {/* Bottom ornamental border */}
          <motion.div 
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2c1810]"></div>
            <span className="text-2xl">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2c1810]"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT SIDE - Newspaper Card Full Right */}
      <div className="absolute top-0 right-0 w-[500px] h-screen relative bg-[#f5f0e8]">
        <motion.div
          className="w-full h-full bg-[#faf8f3] shadow-2xl overflow-hidden relative flex flex-col border-l-4 border-[#2c1810]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
            <div className={`relative z-10 flex flex-col transition-all duration-500 ${isOpen ? 'h-full overflow-y-auto' : 'h-screen overflow-hidden'}`}>
              {/* Newspaper Header */}
              <div className="border-b-4 border-double border-[#2c1810] py-6 px-8 bg-[#f5f0e8] relative">
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#2c1810]"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#2c1810]"></div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Top banner */}
                  <div className="flex items-center justify-between mb-3 text-xs font-serif text-[#5c4a3a]">
                    <span>Vol. I</span>
                    <span className="flex-1 text-center uppercase tracking-widest">⚜ Edisi Spesial ⚜</span>
                    <span>2025</span>
                  </div>

                  <p className="text-sm text-[#5c4a3a] mb-3 font-serif uppercase tracking-wider">Dalam rangka memperingati hari</p>
                  
                  {/* Main title with decorative elements */}
                  <div className="mb-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-12 h-px bg-[#2c1810]"></div>
                      <span className="text-lg">✦</span>
                      <div className="w-12 h-px bg-[#2c1810]"></div>
                    </div>
                    
                    <h1 
                      className="text-5xl font-bold mb-2"
                      style={{
                        fontFamily: "'UnifrakturMaguntia', 'Playfair Display', serif",
                        color: "#2c1810",
                        letterSpacing: "0.05em"
                      }}
                    >
                      Warta Wisuda
                    </h1>
                    
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="w-12 h-px bg-[#2c1810]"></div>
                      <span className="text-lg">✦</span>
                      <div className="w-12 h-px bg-[#2c1810]"></div>
                    </div>
                  </div>

                  <div className="border-y-2 border-[#2c1810] py-2 my-3">
                    <p className="text-xs text-[#2c1810] font-serif font-bold uppercase tracking-widest">Berita Utama Hari Ini</p>
                  </div>
                  
                  <p className="text-sm text-[#5c4a3a] font-serif italic">Liputan Eksklusif • Dokumentasi Lengkap</p>
                </motion.div>
              </div>

              {/* Open Button - Only shows when not open */}
              {!isOpen && (
                <motion.div
                  className="flex-1 flex flex-col items-center justify-center py-12 px-8 bg-gradient-to-b from-[#faf8f3] to-[#f5f0e8]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {/* Decorative text above button */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-20 h-px bg-[#2c1810]"></div>
                      <span className="text-2xl">📰</span>
                      <div className="w-20 h-px bg-[#2c1810]"></div>
                    </div>
                    <p className="text-lg font-bold font-serif text-[#2c1810] uppercase tracking-wider mb-2">Breaking News</p>
                    <p className="text-sm font-serif text-[#5c4a3a] italic">Klik tombol di bawah untuk membaca selengkapnya</p>
                  </motion.div>

                  {/* Main button */}
                  <motion.button
                    onClick={handleOpenWithMusic}
                    className="relative px-12 py-5 bg-[#2c1810] hover:bg-[#1a0f08] text-[#f5f0e8] font-serif text-base uppercase tracking-widest border-4 border-double border-[#2c1810] transition-all duration-300 shadow-2xl"
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(44, 24, 16, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -8, 0]
                    }}
                    transition={{ 
                      opacity: { delay: 0.8 },
                      scale: { delay: 0.8 },
                      y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <span className="text-2xl mr-3">📰</span>
                    Buka Berita
                    <span className="text-2xl ml-3">📰</span>
                  </motion.button>

                  {/* Decorative text below button */}
                  <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-16 h-px bg-[#2c1810]"></div>
                      <span className="text-lg">✦</span>
                      <div className="w-16 h-px bg-[#2c1810]"></div>
                    </div>
                    <p className="text-xs font-serif text-[#5c4a3a] italic">&ldquo;Momen yang ditunggu-tunggu&rdquo;</p>
                  </motion.div>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 px-8 py-6"
                  >

              {/* Date & Info Bar */}
              <div className="flex justify-between items-center mb-6 pb-3 border-b-2 border-[#2c1810]">
                <div className="text-left">
                  <p className="text-xs font-serif text-[#5c4a3a]">21.4.25</p>
                  <p className="text-xs font-serif text-[#5c4a3a]">Bedel </p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-sm font-bold font-serif text-[#2c1810] uppercase tracking-wider">
                    MEMPERSEMBAHKAN
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-serif text-[#5c4a3a]">Selamat Wisuda</p>
                </div>
              </div>

              {/* Main Headline */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h2 
                  className="text-4xl font-bold text-center mb-6 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2c1810",
                    letterSpacing: "0.02em"
                  }}
                >
                  PERAYAAN WISUDA
                </h2>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                className="mb-6 border-4 border-[#2c1810] p-2 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-full h-64 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                  {/* Sepia filter effect for vintage newspaper look */}
                  <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                  <Image
                    src={getAssetPath("/graduation-photo.jpg")}
                    alt="Foto Wisuda"
                    fill
                    className="object-cover grayscale-[30%] sepia-[20%]"
                    priority
                  />
                </div>
                <p className="text-xs font-serif text-center mt-2 text-[#2c1810] italic">
                  Momen bersejarah: Dokumentasi acara wisuda
                </p>
              </motion.div>

              {/* Quote Section */}
              <motion.div
                className="mb-6 border-l-4 border-[#2c1810] pl-4 py-3 bg-[#f5f0e8]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <p 
                  className="text-2xl font-bold text-center mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2c1810",
                  }}
                >
                  &ldquo;wisuda dulu, deploy karier nanti&rdquo;
                </p>
                <p className="text-xs font-serif text-center text-[#5c4a3a] italic">
                  - Pepatah Mahasiswa it
                </p>
              </motion.div>

              {/* Article Body */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <div className="border-2 border-[#2c1810] p-4 bg-white">
                  <h3 className="font-bold text-lg mb-3 font-serif text-[#2c1810] text-center border-b-2 border-[#2c1810] pb-2">
                    Warta Wisuda
                  </h3>
                  <div className="space-y-4 text-justify">
                    <p className="text-sm font-serif text-[#2c1810] leading-relaxed">
                      Akhirnya sampai juga di titik ini. Dari awal masuk kuliah sampai sekarang, pasti banyak proses yang nggak gampang. 
                      Tugas, revisi, deadline, dan segala drama kampus berhasil lu lewatin satu per satu.
                      Gue tahu ini bukan cuma soal gelar, tapi soal usaha dan konsistensi yang lu jaga selama ini. 
                      Bangga banget bisa lihat lu sampai di tahap ini..
                    </p>
                    <p className="text-sm font-serif text-[#2c1810] leading-relaxed">
                      Semoga setelah ini langkah lu makin lancar, rencana-rencananya berjalan baik, dan apa yang lu kejar bisa tercapai.
                      Nikmatin momennya, kamu pantas dapet itu.
                      Selamat atas pencapaiannya
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Photo Gallery - 4 Photos */}
              <motion.div
                className="mb-6 border-4 border-double border-[#2c1810] p-5 bg-[#f5f0e8]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
              >
                <h3 className="font-bold text-xl mb-4 font-serif text-[#2c1810] text-center">
                  GALERI FOTO
                </h3>
                
                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Photo 1 */}
                  <div className="border-2 border-[#2c1810] p-1 bg-white">
                    <div className="w-full h-40 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-1.jpg")}
                        alt="Foto Wisuda 1"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                    <p className="text-[8px] font-serif text-center mt-1 text-[#5c4a3a] italic">
                      Momen wisuda
                    </p>
                  </div>

                  {/* Photo 2 */}
                  <div className="border-2 border-[#2c1810] p-1 bg-white">
                    <div className="w-full h-40 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-2.jpg")}
                        alt="Foto Wisuda 2"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                    <p className="text-[8px] font-serif text-center mt-1 text-[#5c4a3a] italic">
                      Kebersamaan
                    </p>
                  </div>

                  {/* Photo 3 */}
                  <div className="border-2 border-[#2c1810] p-1 bg-white">
                    <div className="w-full h-40 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-3.jpg")}
                        alt="Foto Wisuda 3"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                    <p className="text-[8px] font-serif text-center mt-1 text-[#5c4a3a] italic">
                      Dokumentasi
                    </p>
                  </div>

                  {/* Photo 4 */}
                  <div className="border-2 border-[#2c1810] p-1 bg-white">
                    <div className="w-full h-40 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-4.jpg")}
                        alt="Foto Wisuda 4"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                    <p className="text-[8px] font-serif text-center mt-1 text-[#5c4a3a] italic">
                      Perayaan
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Recipient Section
              <motion.div
                className="mb-6 border-2 border-[#2c1810] p-4 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-xs font-serif uppercase tracking-wider text-center text-[#5c4a3a] mb-2">
                  Dari : 
                </p>
                <p className="font-bold font-serif text-center text-[#2c1810] text-lg">
                  {recipient.replace(/\+/g, " ")}
                </p>
              </motion.div> */}

              {/* Graduation Gift Section */}
              <motion.div
                className="mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h3 className="font-bold text-2xl mb-4 font-serif text-[#8b4545] tracking-wide">
                  Graduation Gift
                </h3>
                
                {/* Amplop Online Button */}
                <button
                  onClick={() => setShowCard(!showCard)}
                  className="inline-flex items-center gap-2 bg-[#6b2c2c] hover:bg-[#8b4545] text-white px-6 py-2.5 rounded-md font-serif text-sm transition-colors mb-6"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Gift Online
                </button>

                {/* Bank Card - CIMB Niaga */}
                <AnimatePresence>
                  {showCard && (
                    <motion.div 
                      className="max-w-sm mx-auto aspect-[1.586/1] w-full max-w-[340px]"
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 shadow-2xl relative overflow-hidden h-full">
                        {/* Card Background Pattern */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
                          {/* Glossy overlay effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                        </div>
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          {/* BNI Logo */}
                          <div className="flex justify-end items-start">
                            <div className="text-right">
                              <div className="flex items-center gap-2">
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded flex items-center gap-2">
                                  <div className="text-white text-3xl font-bold tracking-tight">BNI</div>
                                  <div className="bg-white text-orange-600 text-xs font-bold px-1.5 py-0.5 rounded">46</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Chip */}
                          <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md flex items-center justify-center shadow-lg">
                            <div className="w-8 h-6 border-2 border-yellow-600 rounded-sm"></div>
                          </div>

                          {/* Account Number */}
                          <div>
                            <p className="text-white text-2xl font-mono tracking-widest mb-4">
                              1697519435
                            </p>

                            {/* Copy Button */}
                            <button 
                              onClick={copyAccountNumber}
                              className="flex items-center gap-2 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded border border-white/40 transition-colors backdrop-blur-sm"
                            >
                              {copied ? (
                                <>
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                  </svg>
                                  Tersalin!
                                </>
                              ) : (
                                <>
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                  </svg>
                                  Salin No. Rekening
                                </>
                              )}
                            </button>
                          </div>

                          {/* Valid Thru - Bottom Right */}
                          <div className="flex justify-end">
                            <div className="text-white/80 text-xs text-right">
                              <p className="text-[10px] mb-0.5">VALID</p>
                              <p className="text-[10px]">THRU</p>
                              <p className="font-mono">01/30</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="text-center border-t-4 border-double border-[#2c1810] pt-5 pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <p className="text-xs font-serif text-[#5c4a3a] italic mb-3 leading-relaxed">
                 Merupakan kebanggaan dan kebahagiaan bagi kami atas pencapaian yang telah diraih.
                 Semoga ilmu yang diperoleh menjadi berkah dan membawa kesuksesan di masa depan.
                </p>
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="font-bold font-serif text-[#2c1810] text-sm mb-1">
                    SELAMAT ATAS WISUDA ANDA
                  </p>
                  <p className="font-bold font-serif text-[#2c1810] text-lg">
                    Turut Bangga dan Berbahagia,
                  </p>
                  <p className="font-bold font-serif text-[#2c1810] text-lg">
                    Dari {recipient.replace(/\+/g, " ")}
                  </p>
                </motion.div>

                <div className="mt-4 pt-4 border-t border-[#2c1810]">
                  <p className="text-xs font-serif text-[#5c4a3a]">
                    Terima kasih atas perhatiannya
                  </p>
                </div>
              </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
      </div>
    </div>

    {/* Mobile View - Newspaper Style */}
    <div className="md:hidden min-h-screen flex items-center justify-center p-4 bg-[#f5f0e8]">
      <div className="w-full max-w-md bg-[#faf8f3] border-4 border-[#2c1810] shadow-2xl">
        {/* Newspaper Header - Mobile */}
        <div className="border-b-4 border-double border-[#2c1810] py-4 px-4 bg-[#f5f0e8] relative">
          {/* Decorative corners */}
          <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-[#2c1810]"></div>
          <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-[#2c1810]"></div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Top banner */}
            <div className="flex items-center justify-between mb-2 text-xs font-serif text-[#5c4a3a]">
              <span>Vol. I</span>
              <span className="flex-1 text-center">⚜ SPESIAL ⚜</span>
              <span>2025</span>
            </div>

            <p className="text-xs text-[#5c4a3a] mb-2 font-serif uppercase tracking-wider">Edisi Spesial</p>
            
            {/* Title with decorations */}
            <div className="mb-2">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-8 h-px bg-[#2c1810]"></div>
                <span className="text-sm">✦</span>
                <div className="w-8 h-px bg-[#2c1810]"></div>
              </div>
              
              <h1 
                className="text-3xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2c1810",
                  letterSpacing: "0.05em"
                }}
              >
                Warta Wisuda
              </h1>
              
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="w-8 h-px bg-[#2c1810]"></div>
                <span className="text-sm">✦</span>
                <div className="w-8 h-px bg-[#2c1810]"></div>
              </div>
            </div>

            <div className="border-y border-[#2c1810] py-1 my-2">
              <p className="text-xs text-[#2c1810] font-serif font-bold uppercase">Berita Hari Ini</p>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          {!isOpen ? (
            // Cover View
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Decorative top */}
              <motion.div
                className="flex items-center justify-center gap-2 mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-12 h-px bg-[#2c1810]"></div>
                <span className="text-xl">📰</span>
                <div className="w-12 h-px bg-[#2c1810]"></div>
              </motion.div>

              <motion.div
                className="text-6xl mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
              >
                📰
              </motion.div>

              <motion.h2 
                className="text-2xl font-bold mb-3 uppercase tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2c1810",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Breaking News
              </motion.h2>

              <motion.p 
                className="text-lg font-bold font-serif text-[#2c1810] mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Perayaan Wisuda
              </motion.p>

              <motion.p 
                className="text-sm font-serif text-[#5c4a3a] mb-6 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Klik tombol di bawah untuk membaca selengkapnya
              </motion.p>

              <motion.button
                onClick={handleOpenWithMusic}
                className="px-10 py-4 bg-[#2c1810] hover:bg-[#1a0f08] text-[#f5f0e8] font-serif text-sm uppercase tracking-wider border-4 border-double border-[#2c1810] transition-all shadow-lg"
                whileHover={{ scale: 1.08, boxShadow: "0 10px 30px rgba(44, 24, 16, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -6, 0] 
                }}
                transition={{ 
                  opacity: { delay: 0.7, duration: 0.5 },
                  y: { delay: 1, duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-xl mr-2">📰</span>
                Buka
                <span className="text-xl ml-2">📰</span>
              </motion.button>

              {/* Decorative bottom */}
              <motion.div
                className="flex items-center justify-center gap-2 mt-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="w-10 h-px bg-[#2c1810]"></div>
                <span className="text-sm">✦</span>
                <div className="w-10 h-px bg-[#2c1810]"></div>
              </motion.div>
            </motion.div>
          ) : (
            // Full Content View
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[70vh] overflow-y-auto"
            >
              {/* Date Bar */}
              <motion.div 
                className="text-center mb-4 pb-2 border-b-2 border-[#2c1810]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-xs font-serif text-[#5c4a3a]">21.4.25</p>
              </motion.div>

              {/* Headline */}
              <motion.h2 
                className="text-2xl font-bold text-center mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#2c1810",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
              >
                PERAYAAN WISUDA
              </motion.h2>

              {/* Image Placeholder */}
              <motion.div 
                className="mb-4 border-2 border-[#2c1810] p-1 bg-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-full h-48 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                  {/* Sepia filter for vintage look */}
                  <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                  <Image
                    src={getAssetPath("/graduation-photo.jpg")}
                    alt="Foto Wisuda"
                    fill
                    className="object-cover grayscale-[30%] sepia-[20%]"
                    priority
                  />
                </div>
                <p className="text-xs font-serif text-center mt-1 text-[#2c1810] italic">
                  Momen bersejarah wisuda
                </p>
              </motion.div>

              {/* Quote */}
              <motion.div 
                className="mb-4 border-l-2 border-[#2c1810] pl-3 py-2 bg-[#f5f0e8]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-lg font-bold font-serif text-[#2c1810]">
                  &ldquo;wisuda dulu, deploy karier nanti&rdquo;
                </p>
                <p className="text-xs font-serif text-[#5c4a3a] italic">- R.A. Kartini</p>
              </motion.div>

              {/* Article Body */}
              <motion.div 
                className="mb-4 border-2 border-[#2c1810] p-3 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-xs font-serif text-[#2c1810] text-justify leading-relaxed mb-2">
                  Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir 
                  dalam acara wisuda kami.
                </p>
              </motion.div>

              {/* Photo Gallery - Mobile */}
              <motion.div 
                className="mb-4 border-2 border-[#2c1810] p-3 bg-[#f5f0e8]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="font-bold text-sm mb-3 font-serif text-[#2c1810] text-center">
                  GALERI FOTO
                </h3>
                
                {/* 2x2 Grid Mobile */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Photo 1 */}
                  <motion.div 
                    className="border border-[#2c1810] p-1 bg-white"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    <div className="w-full h-28 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-1.jpg")}
                        alt="Foto 1"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                  </motion.div>

                  {/* Photo 2 */}
                  <motion.div 
                    className="border border-[#2c1810] p-1 bg-white"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <div className="w-full h-28 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-2.jpg")}
                        alt="Foto 2"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                  </motion.div>

                  {/* Photo 3 */}
                  <motion.div 
                    className="border border-[#2c1810] p-1 bg-white"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                  >
                    <div className="w-full h-28 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-3.jpg")}
                        alt="Foto 3"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                  </motion.div>

                  {/* Photo 4 */}
                  <motion.div 
                    className="border border-[#2c1810] p-1 bg-white"
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.0, duration: 0.4 }}
                  >
                    <div className="w-full h-28 relative overflow-hidden bg-gradient-to-br from-[#d4c8b8] to-[#a89880]">
                      <div className="absolute inset-0 z-10 mix-blend-multiply bg-[#e8dcc8] opacity-30"></div>
                      <Image
                        src={getAssetPath("/gallery-4.jpg")}
                        alt="Foto 4"
                        fill
                        className="object-cover grayscale-[30%] sepia-[20%]"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Recipient */}
              <motion.div 
                className="mb-4 border-2 border-[#2c1810] p-3 bg-white text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <p className="text-xs font-serif text-[#5c4a3a] mb-1">Kepada Yth.</p>
                <p className="font-bold font-serif text-[#2c1810]">
                  {recipient.replace(/\+/g, " ")}
                </p>
              </motion.div>

              {/* Graduation Gift Section - Mobile */}
              <motion.div 
                className="mb-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <h3 className="font-bold text-lg mb-3 font-serif text-[#8b4545] tracking-wide">
                  Graduation Gift
                </h3>
                
                {/* Amplop Online Button */}
                <motion.button
                  onClick={() => setShowCard(!showCard)}
                  className="inline-flex items-center gap-2 bg-[#6b2c2c] hover:bg-[#8b4545] text-white px-4 py-2 rounded-md font-serif text-xs transition-colors mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Gift Online
                </motion.button>

                {/* Bank Card - CIMB Niaga Mobile */}
                <AnimatePresence>
                  {showCard && (
                    <motion.div 
                      className="mx-auto aspect-[1.586/1] w-full"
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-4 shadow-xl relative overflow-hidden h-full">
                        {/* Card Background Pattern */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                          {/* Glossy overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                        </div>
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          {/* BNI Logo */}
                          <div className="flex justify-end items-start">
                            <div className="text-right">
                              <div className="flex items-center gap-1.5">
                                <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1.5">
                                  <div className="text-white text-xl font-bold tracking-tight">BNI</div>
                                  <div className="bg-white text-orange-600 text-[10px] font-bold px-1 py-0.5 rounded">46</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Chip */}
                          <div className="w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded flex items-center justify-center shadow-md">
                            <div className="w-7 h-5 border-2 border-yellow-600 rounded-sm"></div>
                          </div>

                          {/* Account Number */}
                          <div>
                            <p className="text-white text-base font-mono tracking-wider mb-3">
                              1697519435
                            </p>

                            {/* Copy Button */}
                            <button 
                              onClick={copyAccountNumber}
                              className="flex items-center gap-1.5 text-[10px] bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded border border-white/40 transition-colors backdrop-blur-sm"
                            >
                              {copied ? (
                                <>
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                  </svg>
                                  Tersalin!
                                </>
                              ) : (
                                <>
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                  </svg>
                                  Salin No. Rekening
                                </>
                              )}
                            </button>
                          </div>

                          {/* Valid Thru - Bottom Right */}
                          <div className="flex justify-end">
                            <div className="text-white/80 text-[9px] text-right">
                              <p className="text-[8px]">VALID THRU</p>
                              <p className="font-mono text-[10px]">01/30</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Footer */}
              <motion.div 
                className="text-center border-t-2 border-[#2c1810] pt-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <motion.p 
                  className="text-xs font-serif text-[#5c4a3a] italic mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Merupakan kehormatan bagi kami<br />apabila berkenan hadir
                </motion.p>
                <motion.p 
                  className="font-bold font-serif text-[#2c1810] text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
                >
                  KAMI YANG BERBAHAGIA
                </motion.p>
                <motion.p 
                  className="font-bold font-serif text-[#2c1810]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7, type: "spring", stiffness: 100 }}
                >
                  Dari {recipient.replace(/\+/g, " ")}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>

    {/* Audio Element */}
    <audio ref={audioRef} loop>
      <source src={getAssetPath("/music.mp3")} type="audio/mpeg" />
    </audio>

    {/* Vinyl Music Player - Fixed Bottom Right */}
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="relative w-16 h-16 md:w-20 md:h-20"
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{
          rotate: {
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear"
          }
        }}
      >
        {/* Vinyl Disc */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border-4 border-gray-700 relative overflow-hidden">
          {/* Vinyl grooves effect */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-gray-600/30"
                style={{
                  width: `${85 - i * 10}%`,
                  height: `${85 - i * 10}%`,
                  top: `${7.5 + i * 5}%`,
                  left: `${7.5 + i * 5}%`,
                }}
              />
            ))}
          </div>
          
          {/* Center label */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 border-2 border-red-900 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black"></div>
            </div>
          </div>
        </div>

        {/* Play/Pause indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
          {isPlaying ? (
            <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </div>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isPlaying ? "Klik untuk matikan musik" : "Klik untuk putar musik"}
      </motion.div>
    </motion.div>
    </>
  );
}
