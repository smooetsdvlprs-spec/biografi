'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, Menu, Play, Search, X } from 'lucide-react'

const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-STpXWrCVegbMREk8CkK0Xxxo8S0Na0.png'
const heroImageUrl = '/hero.png'

const navItems = [
  ['Tentang', '#tentang'],
  ['Perjalanan', '#perjalanan'],
  ['Keahlian', '#keahlian'],
  ['Portofolio', '#portofolio'],
  ['Karya', '#karya'],
  ['Insight', '#insight'],
  ['Media', '#media'],
  ['Kontak', '#kontak']
]

const timeline = [
  { year: 'SEKARANG', title: 'Membangun percakapan yang bermakna', text: 'Mengeksplorasi cara baru untuk menghubungkan ide, manusia, dan peluang kolaborasi.' },
  { year: '2021', title: 'Memperluas perspektif', text: 'Mengembangkan cara kerja yang lebih strategis melalui berbagai proyek lintas disiplin.' },
  { year: '2018', title: 'Memulai dengan rasa ingin tahu', text: 'Langkah awal yang mempertemukan saya dengan dunia profesional dan komunitas inspiratif.' },
]

const skills = [
  ['Strategi & Pertumbuhan', 'Menajamkan arah, menemukan peluang, dan menerjemahkan visi menjadi langkah nyata.', ['Strategi merek', 'Riset', 'Perencanaan']],
  ['Komunikasi', 'Menyederhanakan ide kompleks menjadi pesan yang jelas, relevan, dan mudah diingat.', ['Storytelling', 'Presentasi', 'Editorial']],
  ['Kolaborasi', 'Menciptakan ruang kerja yang terbuka untuk perspektif berbeda dan hasil yang lebih baik.', ['Facilitation', 'Kemitraan', 'Mentoring']],
  ['Kepemimpinan', 'Mendorong tim untuk bekerja dengan rasa percaya diri, empati, dan tujuan yang sama.', ['Visi', 'Budaya', 'Pengembangan']],
]

const projects = [
  ['01', 'Ruang Bertumbuh', 'Strategi', 'Menyusun fondasi narasi dan pengalaman untuk sebuah inisiatif baru.', heroImageUrl],
  ['02', 'Cerita yang Bergerak', 'Komunikasi', 'Menerjemahkan gagasan menjadi komunikasi yang dekat dengan audiens.', portraitUrl],
  ['03', 'Koneksi Baru', 'Kolaborasi', 'Merancang format kolaborasi yang membuka percakapan lintas komunitas.', heroImageUrl],
  ['04', 'Langkah Berikutnya', 'Kepemimpinan', 'Mendampingi proses refleksi menuju keputusan yang lebih terarah.', portraitUrl],
  ['05', 'Peta Kemungkinan', 'Strategi', 'Memetakan peluang agar setiap langkah terasa lebih relevan.', heroImageUrl],
  ['06', 'Ruang Suara', 'Komunikasi', 'Membangun platform kecil untuk berbagi perspektif dan pengalaman.', portraitUrl],
]

const works = [
  ['01', 'Catatan Perjalanan', 'Esai pendek', 'Kumpulan refleksi tentang kerja, proses, dan keberanian untuk memulai.'],
  ['02', 'Membuat Ruang', 'Panduan kolaborasi', 'Cara sederhana membangun percakapan yang memberi tempat untuk semua suara.'],
  ['03', 'Di Antara Baris', 'Serial editorial', 'Catatan tentang hal-hal kecil yang sering mengubah cara kita melihat dunia.'],
]

function SocialIcons() {
  return (
    <div className="flex gap-3">
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 bg-white text-[#1c1b1b] rounded-full flex items-center justify-center hover:bg-[#f2c265] hover:-translate-y-1 transition-all duration-300 shadow-md group">
        <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-white text-[#1c1b1b] rounded-full flex items-center justify-center hover:bg-[#f2c265] hover:-translate-y-1 transition-all duration-300 shadow-md group">
        <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 bg-white text-[#1c1b1b] rounded-full flex items-center justify-center hover:bg-[#f2c265] hover:-translate-y-1 transition-all duration-300 shadow-md group">
        <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="w-9 h-9 bg-white text-[#1c1b1b] rounded-full flex items-center justify-center hover:bg-[#f2c265] hover:-translate-y-1 transition-all duration-300 shadow-md group">
        <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      </a>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[#f2c265] text-xs font-bold tracking-[0.25em] uppercase mb-8">
      <span className="w-6 h-[2px] bg-[#f2c265]"></span>
      <span>{children}</span>
    </div>
  )
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return visible ? (
    <button
      className="fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full bg-[#f2c265] text-[#1c1b1b] flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#e0b255] transition-all"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Kembali ke atas"
    >
      <ArrowUpRight size={22} className="-rotate-45" />
    </button>
  ) : null
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [project, setProject] = useState<(typeof projects)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [disclaimer, setDisclaimer] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#1c1b1b] text-white selection:bg-[#f2c265] selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-[6vw] py-6 bg-[#1c1b1b]/90 backdrop-blur-md border-b border-white/10" aria-label="Navigasi utama">
        <a href="#top" className="flex items-center gap-3 font-bold text-lg tracking-wider">
          <div className="w-9 h-9 bg-[#f2c265] rounded-md flex justify-center items-center text-[#1c1b1b] rotate-45 shrink-0 hover:rotate-90 transition-transform duration-500">
            <div className="-rotate-45 font-black text-sm">EV</div>
          </div>
          <div className="flex flex-col leading-tight">
            <span>ERLIN</span>
            <span className="text-[10px] text-gray-400 font-medium tracking-[0.2em]">VERONICA</span>
          </div>
        </a>

        <div className={`flex gap-8 text-xs font-semibold tracking-wider uppercase ${menuOpen ? 'flex-col absolute top-full left-0 right-0 bg-[#1c1b1b] p-8 border-b border-white/10 shadow-2xl' : 'hidden lg:flex'}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-[#f2c265] transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href="#kontak" className="hidden sm:inline-flex items-center gap-2 bg-[#f2c265] text-[#1c1b1b] px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase hover:bg-[#e0b255] hover:scale-105 transition-all">
            Hubungi <ArrowUpRight size={14} />
          </a>
          <button className="lg:hidden text-white hover:text-[#f2c265]" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Hero Section matching the image */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 md:px-[6vw] py-16 overflow-hidden" id="top">
        {/* Left Content */}
        <div className="flex-1 max-w-[540px] z-20 reveal mt-6 md:mt-0">
          <div className="inline-block text-[#f2c265] text-xs font-extrabold tracking-[0.25em] mb-4 uppercase">
            BIOGRAFI PERSONAL
          </div>
          <h1 className="text-[clamp(42px,11vw,105px)] font-black leading-[0.95] tracking-tight mb-8">
            <span className="text-[#f2c265]">PERSONAL</span><br />
            <span key={wordIndex} className="animate-typewriter min-w-[280px]">
              {heroWords[wordIndex]}
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-[440px]">
            Merangkai ide, membuka kemungkinan, dan menciptakan ruang untuk pertumbuhan. Saya percaya pekerjaan yang baik dimulai dari kemauan untuk mendengar.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="#tentang" className="bg-[#f2c265] text-[#1c1b1b] font-extrabold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-[#e0b255] hover:-translate-y-1 transition-all shadow-[0_10px_25px_rgba(242,194,101,0.25)] flex items-center justify-center gap-2">
              BACA CERITA <ArrowUpRight size={16} />
            </a>
            <a href="#kontak" className="border border-white/30 text-white font-bold px-7 py-4 rounded-full text-xs tracking-widest uppercase hover:border-[#f2c265] hover:text-[#f2c265] transition-all flex items-center justify-center">
              KENALI ERLIN
            </a>
          </div>

          <div className="mt-20 md:mt-24">
            <div className="mb-4">
              <SocialIcons />
            </div>
            <p className="text-gray-400 text-xs max-w-[320px] leading-relaxed">
              Jalur yang tidak selalu lurus, tetapi selalu membawa saya ke perspektif yang baru.
            </p>
          </div>
        </div>

        {/* Center Image & Glow */}
        <div className="absolute bottom-0 right-[-30%] sm:right-[-10%] md:left-1/2 md:-translate-x-[42%] w-[150vw] sm:w-[90vw] md:w-auto h-[65vh] md:h-[88vh] md:max-w-[55vw] lg:max-w-[60vw] flex justify-center z-0 md:z-10 pointer-events-none opacity-50 md:opacity-95">
          <div className="relative w-full h-full flex justify-center transition-transform duration-75 ease-out" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
            {/* Subtle White Glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] bg-white/10 rounded-full blur-[100px] md:blur-[150px] -z-10"></div>

            <img src={heroImageUrl} alt="Erlin Veronica" className="h-full w-auto max-w-full object-contain object-bottom relative z-10 drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] opacity-95" />
          </div>
        </div>

        {/* Right Large Outlined Vertical Wordmark */}
        <div className="hidden md:flex absolute right-[6vw] top-1/2 -translate-y-1/2 flex-col items-center justify-center text-transparent font-black text-[clamp(100px,13vw,190px)] leading-[0.8] select-none pointer-events-none z-0" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.12)' }}>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>F</span>
          <span>I</span>
          <span>L</span>
          <span>E</span>
        </div>

        {/* Right Yellow Accent Shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-40 bg-[#f2c265] rounded-l-2xl z-20 hidden xl:block shadow-[-10px_0_30px_rgba(242,194,101,0.2)]"></div>

        {/* Navigation Arrows Bottom Right */}
        <div className="absolute bottom-12 right-[6vw] hidden lg:flex gap-3 z-20">
          <button onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })} className="w-11 h-11 rounded-full bg-[#2a2a2a] text-gray-400 flex items-center justify-center hover:bg-[#f2c265] hover:text-[#1c1b1b] transition-all hover:scale-105 shadow-lg">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })} className="w-11 h-11 rounded-full bg-[#2a2a2a] text-gray-400 flex items-center justify-center hover:bg-[#f2c265] hover:text-[#1c1b1b] transition-all hover:scale-105 shadow-lg">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="border-y border-white/10 bg-[#161616] py-4 overflow-hidden relative">
        <div className="flex gap-12 whitespace-nowrap animate-marquee font-bold text-xs tracking-[0.25em] text-gray-400">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-12 shrink-0">
              <span>RASA INGIN TAHU</span> <span className="text-[#f2c265]">✦</span>
              <span>KOLABORASI</span> <span className="text-[#f2c265]">✦</span>
              <span>PERSPEKTIF</span> <span className="text-[#f2c265]">✦</span>
              <span>PERTUMBUHAN</span> <span className="text-[#f2c265]">✦</span>
              <span>KOMUNIKASI</span> <span className="text-[#f2c265]">✦</span>
              <span>KEPEMIMPINAN</span> <span className="text-[#f2c265]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 bg-[#232222] border-b border-white/10 py-10 px-6 md:px-[6vw]">
        {[
          ['∞', 'Rasa ingin tahu'],
          ['01', 'Perspektif personal'],
          ['∞', 'Ruang kolaborasi'],
          ['24/7', 'Terus bertumbuh']
        ].map(([stat, label], i) => (
          <div key={i} className={`flex flex-col gap-2 py-4 px-6 ${i !== 3 ? 'border-r border-white/10' : ''}`}>
            <strong className="text-4xl md:text-5xl font-black text-[#f2c265]">{stat}</strong>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{label}</span>
          </div>
        ))}
      </section>

      {/* 01 / Tentang Erlin */}
      <section className="px-6 md:px-[6vw] py-28 border-b border-white/10" id="tentang">
        <SectionLabel>01 / TENTANG ERLIN</SectionLabel>
        <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <Reveal className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-3 bg-[#f2c265]/20 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={portraitUrl} alt="Potret Erlin Veronica" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Yang saya bawa adalah <i className="text-[#f2c265] not-italic">rasa.</i>
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              Saya percaya pekerjaan yang baik dimulai dari kemauan untuk mendengar. Dari sana, ide dapat tumbuh menjadi sesuatu yang lebih <strong className="text-white font-bold">jelas, relevan, dan manusiawi.</strong>
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Perjalanan saya dibentuk oleh banyak pertanyaan, percakapan, dan keberanian untuk mencoba. Setiap pengalaman menjadi cara baru untuk memahami bagaimana kita bisa bergerak bersama.
            </p>
            <blockquote className="border-l-4 border-[#f2c265] pl-6 py-2 my-2 text-xl font-medium text-gray-200 italic leading-snug">
              “Kita tidak harus memiliki semua jawaban untuk memulai percakapan yang tepat.”
            </blockquote>
            <a className="inline-flex items-center gap-3 text-sm font-bold text-[#f2c265] hover:translate-x-2 transition-transform w-max" href="#perjalanan">
              Baca perjalanan saya <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 02 / Perjalanan */}
      <section className="px-6 md:px-[6vw] py-28 bg-[#161616] border-b border-white/10" id="perjalanan">
        <SectionLabel>02 / PERJALANAN</SectionLabel>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Beberapa titik<br /><span className="text-[#f2c265]">yang membentuk.</span>
          </h2>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Jalur yang tidak selalu lurus, tetapi selalu membawa saya ke perspektif yang baru.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col divide-y divide-white/10">
          {timeline.map((item, i) => (
            <Reveal key={item.year}>
              <article className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group cursor-pointer hover:bg-white/[0.02] px-4 rounded-lg transition-colors">
                <span className={`md:col-span-3 text-xs font-black tracking-widest ${i === 0 ? 'text-[#f2c265]' : 'text-gray-400'}`}>
                  {item.year}
                </span>
                <div className="md:col-span-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#f2c265] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight size={22} className="text-gray-600 group-hover:text-[#f2c265] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 / Keahlian */}
      <section className="px-6 md:px-[6vw] py-28 border-b border-white/10" id="keahlian">
        <SectionLabel>03 / KEAHLIAN</SectionLabel>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Cara saya <span className="text-[#f2c265]">bekerja.</span>
          </h2>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Empat cara pandang yang saya bawa ke setiap ruang dan percakapan.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map(([title, text, tags], i) => (
            <Reveal key={title}>
              <article className="bg-[#242323] p-8 rounded-xl border border-white/10 hover:border-[#f2c265] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <span className="text-xs font-black text-[#f2c265] tracking-widest">0{i + 1}</span>
                  <h3 className="text-2xl font-bold mt-6 mb-4 group-hover:text-[#f2c265] transition-colors">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{text}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {(tags as string[]).map(tag => (
                    <span key={tag} className="text-[11px] font-semibold text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 / Portofolio */}
      <section className="px-6 md:px-[6vw] py-28 bg-[#161616] border-b border-white/10" id="portofolio">
        <SectionLabel>04 / PORTOFOLIO</SectionLabel>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Hal-hal yang<br /><span className="text-[#f2c265]">pernah dibuat.</span>
          </h2>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Contoh ruang, cerita, dan kolaborasi yang dirancang dengan teliti.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(item => (
            <article
              key={item[0]}
              onClick={() => setProject(item)}
              className="bg-[#222121] rounded-xl border border-white/10 overflow-hidden hover:border-[#f2c265] hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="h-52 bg-[#1c1b1b] relative overflow-hidden">
                <img src={item[4]} alt={item[1]} className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute top-4 left-4 bg-[#1c1b1b]/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-[#f2c265]">
                  {item[0]}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <small className="text-xs font-bold text-[#f2c265] uppercase tracking-wider">{item[2]}</small>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-[#f2c265] transition-colors">{item[1]}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item[3]}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#f2c265] group-hover:text-[#1c1b1b] transition-all">
                    <ExternalLink size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 05 / Karya */}
      <section className="px-6 md:px-[6vw] py-28 border-b border-white/10" id="karya">
        <SectionLabel>05 / KARYA</SectionLabel>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Yang tertinggal<br /><span className="text-[#f2c265]">di antara baris.</span>
          </h2>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Karya kecil untuk merawat proses berpikir dan berbagi cerita.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {works.map((work, i) => (
            <article key={work[0]} className="bg-[#242323] p-8 rounded-xl border border-white/10 hover:border-[#f2c265] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#2a2929] to-[#1a1919] p-6 flex flex-col justify-between border border-white/5 shadow-inner mb-6">
                <span className="text-xs font-bold text-[#f2c265] tracking-widest">{work[0]}</span>
                <strong className="text-2xl font-black leading-tight text-white group-hover:text-[#f2c265] transition-colors">{work[1]}</strong>
                <small className="text-xs text-gray-400 uppercase tracking-wider">{work[2]}</small>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{work[1]}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{work[3]}</p>
                <a className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#f2c265] uppercase hover:underline" href="#kontak">
                  Selengkapnya <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 06 / Insight */}
      <section className="px-6 md:px-[6vw] py-28 bg-[#161616] border-b border-white/10" id="insight">
        <SectionLabel>06 / INSIGHT</SectionLabel>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Catatan untuk<br /><span className="text-[#f2c265]">dipikirkan ulang.</span>
          </h2>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
            Potongan ide tentang kerja, manusia, dan kemungkinan yang ada di antaranya.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <article className="lg:col-span-6 bg-[#232222] p-10 rounded-xl border border-white/10 flex flex-col justify-between hover:border-[#f2c265] transition-all group">
            <div>
              <small className="text-xs font-bold text-[#f2c265] tracking-widest uppercase">12 SEPTEMBER 2024 · ESSAY</small>
              <h3 className="text-3xl md:text-4xl font-black mt-6 mb-4 leading-tight group-hover:text-[#f2c265] transition-colors">
                Berani memberi ruang untuk <i className="text-[#f2c265] not-italic">belum tahu.</i>
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Tentang bagaimana ketidakpastian dapat menjadi awal dari pertanyaan yang lebih baik, mengasah empati, dan menemukan cara baru untuk menciptakan solusi.
              </p>
            </div>
            <a className="inline-flex items-center gap-3 text-sm font-bold text-[#f2c265] mt-10 hover:translate-x-2 transition-transform" href="#kontak">
              Baca tulisan lengkap <ArrowUpRight size={18} />
            </a>
          </article>
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {[
              'Mengapa perspektif selalu penting?',
              'Mendengarkan sebagai bentuk kepemimpinan.',
              'Kecil, konsisten, dan berarti.',
              'Cara menemukan ritme kerja sendiri.'
            ].map((title, i) => (
              <article key={title} className="bg-[#201f1f] p-6 rounded-lg border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group cursor-pointer">
                <div>
                  <small className="text-[10px] font-bold text-[#f2c265] tracking-widest uppercase">0{i + 1} · CATATAN</small>
                  <h3 className="text-lg font-bold mt-1 group-hover:text-[#f2c265] transition-colors">{title}</h3>
                </div>
                <a href="#kontak" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#f2c265] group-hover:text-[#1c1b1b] transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 / Media & News */}
      <section className="px-6 md:px-[6vw] py-28 border-b border-white/10" id="media">
        <SectionLabel>07 / MEDIA & NEWS</SectionLabel>
        <div className="grid md:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
              Perspektif yang<br /><span className="text-[#f2c265]">dibagikan.</span>
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {['MEDIA', 'JOURNAL', 'FORUM', 'STUDIO'].map(tag => (
                <span key={tag} className="border border-white/10 px-4 py-2 text-xs font-bold tracking-widest text-gray-400 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <ul className="flex flex-col divide-y divide-white/10">
              {[
                'Percakapan tentang membangun ruang kerja yang lebih manusiawi',
                'Mencari makna di balik proses kreatif',
                'Erlin Veronica: sebuah profil personal'
              ].map((x, i) => (
                <li key={x} className="py-5 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <small className="text-xs font-bold text-[#f2c265] mt-1">0{i + 1}</small>
                    <div>
                      <span className="text-base font-semibold group-hover:text-[#f2c265] transition-colors block">{x}</span>
                      <em className="text-xs text-gray-500 not-italic">Publikasi contoh</em>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-gray-600 group-hover:text-[#f2c265] transition-colors" />
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#2b2a2a] to-[#151515] border border-white/10 flex flex-col items-center justify-center p-8 group cursor-pointer hover:border-[#f2c265] transition-all shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-[#f2c265] text-[#1c1b1b] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg z-10">
                <Play fill="currentColor" size={26} className="ml-1" />
              </div>
              <span className="mt-5 text-sm font-bold text-gray-300 tracking-wider z-10">Video profil · 03:24</span>
              <div className="absolute inset-0 bg-[#f2c265]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 / Kontak */}
      <section className="px-6 md:px-[6vw] py-28 bg-[#161616]" id="kontak">
        <div className="grid md:grid-cols-12 gap-12 max-w-6xl mx-auto">
          <div className="md:col-span-5">
            <SectionLabel>08 / KONTAK</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Hubungi<br /><span className="text-[#f2c265]">Erlin Veronica.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
              Untuk percakapan, kolaborasi, atau sekadar bertukar perspektif. Pintu selalu terbuka untuk ide-ide baru.
            </p>
            <SocialIcons />
          </div>
          <div className="md:col-span-7">
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="bg-[#222121] p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Nama
                  <input required placeholder="Nama lengkap" className="bg-[#191919] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2c265] transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Email
                  <input required type="email" placeholder="nama@email.com" className="bg-[#191919] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2c265] transition-colors" />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Organisasi
                  <input placeholder="Nama organisasi (opsional)" className="bg-[#191919] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2c265] transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Jenis permintaan
                  <select defaultValue="" className="bg-[#191919] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2c265] transition-colors">
                    <option value="" disabled>Pilih kebutuhan</option>
                    <option>Pembicara</option>
                    <option>Konsultasi</option>
                    <option>Kemitraan</option>
                    <option>Media</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Pesan
                <textarea required placeholder="Ceritakan sedikit tentang kebutuhan Anda" rows={4} className="bg-[#191919] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f2c265] transition-colors resize-y" />
              </label>
              <button type="submit" className="bg-[#f2c265] text-[#1c1b1b] font-black px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-[#e0b255] transition-all flex items-center justify-center gap-3 self-start">
                {submitted ? <><Check size={18} /> PESAN TERKIRIM</> : <>KIRIM PESAN <ArrowUpRight size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#121212] px-6 md:px-[6vw] py-16">
        <div className="grid md:grid-cols-12 gap-10 max-w-6xl mx-auto">
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-3 font-bold text-lg tracking-wider">
              <div className="w-8 h-8 bg-[#f2c265] rounded-md flex justify-center items-center text-[#1c1b1b] rotate-45 shrink-0">
                <div className="-rotate-45 font-black text-xs">EV</div>
              </div>
              <span>ERLIN VERONICA</span>
            </a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Merangkai ide, membuka kemungkinan, dan menciptakan ruang kolaborasi bermakna.
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-semibold tracking-wider uppercase">
            {navItems.slice(0, 4).map(([label, href]) => (
              <a key={href} href={href} className="text-gray-400 hover:text-[#f2c265] transition-colors">{label}</a>
            ))}
          </div>
          <div className="md:col-span-3 flex flex-col gap-4 text-xs">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#f2c265] transition-colors font-semibold" onClick={() => setDisclaimer(!disclaimer)}>
              Disclaimer <ChevronDown size={14} className={disclaimer ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
            {disclaimer && (
              <p className="text-[11px] text-gray-500 leading-normal">
                Konten ini bersifat informasional dan tidak dimaksudkan sebagai nasihat profesional atau hukum resmi.
              </p>
            )}
            <small className="text-gray-600 block mt-auto">© 2026 Erlin Veronica. All rights reserved.</small>
          </div>
        </div>
      </footer>

      <ScrollToTop />

      {/* Project Modal Backdrop */}
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" onClick={() => setProject(null)}>
          <div className="bg-[#242323] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl text-white" onClick={e => e.stopPropagation()}>
            <button onClick={() => setProject(null)} aria-label="Tutup" className="absolute top-5 right-5 text-gray-400 hover:text-[#f2c265]">
              <X size={22} />
            </button>
            <small className="text-xs font-bold text-[#f2c265] uppercase tracking-wider">{project[2]}</small>
            <h2 className="text-3xl font-black my-4">{project[1]}</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {project[3]} Proyek ini mencerminkan pendekatan strategis dan kolaboratif dalam menerjemahkan visi menjadi pengalaman nyata.
            </p>
            <a className="inline-flex items-center gap-2 bg-[#f2c265] text-[#1c1b1b] font-bold px-6 py-3 rounded-full text-xs tracking-wider uppercase hover:bg-[#e0b255] transition-colors" href="#kontak" onClick={() => setProject(null)}>
              Mari berdiskusi <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Marquee and reveal CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  )
}
