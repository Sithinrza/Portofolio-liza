import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, UserCheck, Camera, Check, Lightbulb, Eye, Wrench, Users, Send, Mail} from 'lucide-react';
// Custom luxurious easing
const smoothEasing = [0.16, 1, 0.3, 1];

// Stagger variant for parent containers
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

// Item variant for staggered children
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: smoothEasing } 
    }
};

// Two-way scroll viewport settings
const scrollSettings = { once: false, margin: "-50px" };

export default function App() {
    const [isIdFlipped, setIsIdFlipped] = useState(false);
    const idCardAreaRef = useRef(null);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-[#fafafa] text-slate-800 font-sans selection:bg-[#99b56b] selection:text-white">
            
            {/* Navbar */}
            <motion.nav 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: smoothEasing }}
                className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-black/5 transition-all duration-300"
            >
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <a href="#home" className="font-bold text-2xl tracking-tight text-slate-800 hover:text-[#808000] transition-colors">
                        Sithi Nurhaliza
                    </a>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="relative font-medium text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</a>
                        <a href="#about" className="relative font-medium text-sm text-slate-500 hover:text-slate-900 transition-colors">About</a>
                        <a href="#experience" className="relative font-medium text-sm text-slate-500 hover:text-slate-900 transition-colors">Experience</a>
                        <a href="#skills" className="relative font-medium text-sm text-slate-500 hover:text-slate-900 transition-colors">Skills</a>
                        <a href="#projects" className="relative font-medium text-sm text-slate-500 hover:text-slate-900 transition-colors">Projects</a>
                    </div>

                    <div className="hidden md:block">
                        <a href="#contact" className="px-5 py-2.5 bg-[#808000] hover:bg-[#656602] text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-[#808000]/20">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </motion.nav>

            <main className="flex-grow flex flex-col items-center w-full relative">
                <div className="max-w-6xl w-full px-6 overflow-hidden">
                    
                    {/* HOME SECTION */}
                    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center relative">
                        <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-[#f4f7ed] rounded-full blur-3xl -z-10 pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <motion.div 
                                className="w-full md:w-3/5 order-2 md:order-1 space-y-8"
                                initial="hidden"
                                whileInView="show"
                                viewport={scrollSettings}
                                variants={staggerContainer}
                            >
                                {/* <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e5ecd7] text-[#656602] text-xs font-semibold uppercase tracking-wider shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#99b56b] animate-pulse"></span>
                                    Informatics Engineering
                                </motion.div> */}
                                
                                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
                                    Hi, I'm Liza<br/>
                                    <span className="text-[#808000]">Informatics Engineering Graduate.</span>
                                </motion.h1>
                                
                                <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl max-w-xl font-normal leading-relaxed">
                                   An Informatics Engineering graduate with experience in web development, especially Laravel, PHP, and MySQL. I enjoy building practical applications with clean and user-friendly interfaces.
                                </motion.p>
                                
                                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
                                    <a href="#projects" className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium transition-colors shadow-lg shadow-slate-900/20">
                                        View Projects
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full font-medium transition-all flex items-center gap-2 shadow-sm">
                                        <Code2 className="w-5 h-5 text-[#808000]" /> GitHub Profile
                                    </a>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div 
                                className="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={scrollSettings}
                                transition={{ duration: 0.8, ease: smoothEasing, delay: 0.2 }}
                            >
                                <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]">
                                    <div className="absolute inset-0 bg-[#808000]/10 rounded-full translate-x-4 translate-y-4"></div>
                                    <div className="absolute inset-0 bg-white border-8 border-white rounded-full overflow-hidden shadow-2xl z-10">
                                        <img src="/public/foto/3.JPG" alt="Liza" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-4 left-0 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                        <div className="bg-[#f4f7ed] text-[#808000] w-10 h-10 rounded-full flex items-center justify-center">
                                            <Code2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Focus</p>
                                            <p className="text-sm font-bold text-slate-800">Web & AI</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ABOUT SECTION */}
                    <section id="about" className="py-20">
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollSettings}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
                                <div className="w-12 h-1.5 bg-[#99b56b] mb-8 rounded-full"></div>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    I’m a D3 Informatics Engineering graduate with experience in programming and web-based application development. I’ve worked with technologies such as Laravel, PHP, MySQL, and Figma through my internship and academic projects.                        
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                     I enjoy learning new things, exploring technology, and creating practical solutions through programming. I’m currently looking for opportunities to grow, gain more experience, and contribute to meaningful projects.                        
                                </p>
                            </motion.div>
                            
                            <motion.div variants={fadeInUp} className="p-8 bg-[#f4f7ed]/60 backdrop-blur-sm rounded-3xl border border-[#e5ecd7] shadow-sm hover:shadow-md transition-shadow">
                              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                  <Lightbulb className="w-6 h-6 text-[#808000]" /> MY APPROACH
                              </h3>
                              <ul className="space-y-5">
                                  <li className="flex items-start gap-4 group">
                                      <div className="w-9 h-9 rounded-full bg-white text-[#808000] font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e5ecd7] group-hover:bg-[#808000] group-hover:text-white transition-colors">01</div>
                                      <div>
                                          <h4 className="font-semibold text-slate-900 text-base">Learn</h4>
                                          <p className="text-sm text-slate-600 mt-0.5">Always open to learning new technologies and gaining new experiences.</p>
                                      </div>
                                  </li>
                                  <li className="flex items-start gap-4 group">
                                      <div className="w-9 h-9 rounded-full bg-white text-[#808000] font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e5ecd7] group-hover:bg-[#808000] group-hover:text-white transition-colors">02</div>
                                      <div>
                                          <h4 className="font-semibold text-slate-900 text-base">Build</h4>
                                          <p className="text-sm text-slate-600 mt-0.5">Turning ideas into functional and practical applications.</p>
                                      </div>
                                  </li>
                                  <li className="flex items-start gap-4 group">
                                      <div className="w-9 h-9 rounded-full bg-white text-[#808000] font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e5ecd7] group-hover:bg-[#808000] group-hover:text-white transition-colors">03</div>
                                      <div>
                                          <h4 className="font-semibold text-slate-900 text-base">Grow</h4>
                                          <p className="text-sm text-slate-600 mt-0.5">Continuously improving skills and contributing to meaningful projects.</p>
                                      </div>
                                  </li>
                              </ul>
                          </motion.div>
                        </motion.div>
                    </section>

                    {/* EXPERIENCE / EDUCATION SECTION */}
                    <section id="experience" className="py-24">
                        <motion.div 
                            className="flex flex-col lg:flex-row items-center gap-16"
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollSettings}
                            variants={staggerContainer}
                        >
                            {/* Left Column: Education Image with Top-Down Curtain Reveal on Hover */}
                            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                                <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 group">
                                    <img src="/public/foto/edu.jpg" alt="Education" className="w-full h-full object-cover transition-transform duration-700" />
                                    
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#808000]/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 flex flex-col items-center justify-center text-white p-8 text-center">
                                        <span className="font-bold tracking-widest uppercase text-xl mb-2">Education Journey</span>
                                        <span className="text-sm opacity-80">Building logic step by step.</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Timeline */}
                            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education Background</h2>
                                <p className="text-slate-600 mb-8">My academic journey in software engineering and IT.</p>
                                <div className="w-12 h-1.5 bg-[#99b56b] mb-10 rounded-full"></div>

                                <div className="border-l-2 border-slate-200 ml-3 md:ml-2 pl-8 space-y-10 relative">
    
                                  {/* Poliban */}
                                  <div className="relative">
                                      <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#99b56b] ring-4 ring-[#fafafa]"></div>
                                      <span className="text-[#808000] font-bold text-xs tracking-wider uppercase mb-2 block">Graduated</span>
                                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Politeknik Negeri Banjarmasin</h3>
                                      <p className="text-slate-800 font-medium">D3 Informatics Engineering, GPA 3.91</p>
                                  </div>

                                  {/* SMK */}
                                  <div className="relative">
                                      <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-[#fafafa]"></div>
                                      <span className="text-slate-500 font-bold text-xs tracking-wider uppercase mb-2 block">Previous</span>
                                      <h3 className="text-xl font-bold text-slate-800 mb-1">SMKs ISFI Banjarmasin</h3>
                                      <p className="text-slate-700 font-medium">Software Engineering</p>
                                  </div>

                              </div>
                            </motion.div>
                        </motion.div>
                    </section>
        
                    {/* SKILLS SECTION */}
                    <section id="skills" className="py-20">
                        <motion.div 
                            className="flex flex-col md:flex-row justify-between items-end mb-12"
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollSettings}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tech Arsenal</h2>
                                <p className="text-slate-600 max-w-lg">The tools and technologies I use to bring ideas to life.</p>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollSettings}
                            variants={staggerContainer}
                        >
                            {/* Card 1: Web Development */}
                            <motion.div variants={fadeInUp} className="bg-white p-8 md:col-span-2 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-xl bg-[#f4f7ed] text-[#808000] flex items-center justify-center text-xl mb-6">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Web Development</h3>
                                <p className="text-slate-600 mb-8 max-w-md">Building robust backends, structuring databases, and crafting responsive interfaces.</p>
                                <div className="flex flex-wrap gap-3">
                                    {['Laravel', 'PHP', 'MySQL', 'HTML', 'Tailwind CSS'].map(tech => (
                                        <span key={tech} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 2: UI/UX Design (Replaced Computer Vision) */}
                            <motion.div variants={fadeInUp} className="bg-[#808000] p-8 rounded-3xl text-white shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-6">
                                    <PenTool className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                                <p className="text-[#e5ecd7] mb-8 text-sm leading-relaxed">Designing intuitive user interfaces and wireframing practical user experiences.</p>
                                <div className="flex flex-wrap gap-3">
                                    {['Figma', 'Adobe XD', 'Prototyping'].map(tech => (
                                        <span key={tech} className="px-3 py-1.5 bg-black/20 rounded-md text-sm font-medium">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 3: Tools & Workflow */}
                            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-xl mb-6">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Tools & Workflow</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['VS Code', 'XAMPP', 'phpMyAdmin', 'Git'].map(tool => (
                                        <span key={tool} className="px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-md text-sm text-slate-600">{tool}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Card 4: Personal Approach (Jalan Tengah) */}
                            <motion.div variants={fadeInUp} className="bg-white p-8 md:col-span-2 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-transform">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#f4f7ed] text-[#808000] flex items-center justify-center text-xl">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">Personal Approach</h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    I approach every project with a strong willingness to learn and a careful eye for detail. I adapt easily to new environments and believe that good communication and teamwork are the best ways to build great things together.
                                </p>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* PROJECTS SECTION */}
                    <section id="projects" className="py-20">
                        <motion.div 
                            className="text-center max-w-2xl mx-auto mb-16"
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollSettings}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Projects</h2>
                            <p className="text-slate-600">A collection of projects I've worked on during my studies and internships.</p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                            initial="hidden"
                            whileInView="show"
                            viewport={scrollSettings}
                            variants={staggerContainer}
                        >
                            {/* Project 1: Presence System */}
                            <motion.div variants={fadeInUp} className="relative h-[400px] bg-[#f4f7ed] rounded-[2rem] overflow-hidden group shadow-sm border border-[#e5ecd7] hover:shadow-xl transition-all duration-300">
                                
                                {/* Gambar Asli */}
                                <img 
                                    src="/public/foto/p1.png" 
                                    alt="SIPETANG" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-0"
                                />

                                {/* Badge Tahun */}
                                <div className="absolute top-0 left-0 bg-[#808000] text-white px-5 py-2 text-sm font-bold rounded-br-2xl z-20 shadow-sm">
                                    2026
                                </div>

                                {/* Tombol GitHub */}
                                <a href="https://github.com/Sithinrza/presensi-elektro.git" target="_blank" rel="noreferrer" className="absolute top-5 right-5 z-20 w-11 h-11 bg-white border border-[#e5ecd7] text-[#808000] rounded-full flex items-center justify-center hover:bg-[#808000] hover:text-white transition-colors shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>

                                {/* Konten Teks di Tengah */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                    {/* Sub-judul dipertegas sebagai Mobile-First Web */}
                                    {/* <span className="text-[#808000] font-bold text-xs tracking-widest uppercase mb-3"></span> */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Sistem Presensi Tendik Dan Anak Magang (SIPETANG)</h3>
                                    
                                    {/* Deskripsi diperjelas bahwa ini adalah sistem web */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm font-medium">
                                        Aplikasi pencatatan absensi digital untuk staf dan anak magang. Sistem ini secara otomatis melacak titik lokasi (GPS) dan memverifikasi keaslian wajah (Face Liveness Detection) untuk mencegah manipulasi absen dan memastikan keakuratan data kehadiran harian.                                    
                                    </p>
                                    
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {['Laravel', 'MediaPipe', 'Leaflet JS', 'Tailwind CSS', 'MySQL', 'Webcam.Js' ].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e5ecd7] text-[#808000] text-[11px] font-bold rounded uppercase tracking-wide shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project 2: Employee Management */}
                            <motion.div variants={fadeInUp} className="relative h-[400px] bg-[#f4f7ed] rounded-[2rem] overflow-hidden group shadow-sm border border-[#e5ecd7] hover:shadow-xl transition-all duration-300">
                                
                                {/* Gambar Asli */}
                                <img 
                                    src="/public/foto/p2.png" 
                                    alt="Employee Management UI/UX" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-0"
                                />

                                {/* Badge Tahun */}
                                <div className="absolute top-0 left-0 bg-[#808000] text-white px-5 py-2 text-sm font-bold rounded-br-2xl z-20 shadow-sm">
                                    2025
                                </div>

                                {/* Tombol GitHub */}
                                <a href="https://github.com/Sithinrza/presensi-digitaliz.git" target="_blank" rel="noreferrer" className="absolute top-5 right-5 z-20 w-11 h-11 bg-white border border-[#e5ecd7] text-[#808000] rounded-full flex items-center justify-center hover:bg-[#808000] hover:text-white transition-colors shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>

                                {/* Konten Teks di Tengah */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                    {/* Sub-judul dipertegas sebagai Responsive Web */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Presensi Karyawan</h3>
                                    
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm font-medium">
                                        Sistem informasi untuk mengelola agenda harian, penugasan, dan riwayat aktivitas pegawai. Aplikasi ini membantu merapikan operasional kantor agar seluruh jadwal kerja, riwayat pekerjaan, dan presensi tersimpan secara terpusat dan mudah dipantau.                                    
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {['Laravel', 'Tailwind CSS', 'Spatie', 'MySQL', 'Ngrok', 'PWA (Progressive Web App)', 'AOS'].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e5ecd7] text-[#808000] text-[11px] font-bold rounded uppercase tracking-wide shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project 3: Employee Management */}
                            <motion.div variants={fadeInUp} className="relative h-[400px] bg-[#f4f7ed] rounded-[2rem] overflow-hidden group shadow-sm border border-[#e5ecd7] hover:shadow-xl transition-all duration-300">
                                
                                {/* Gambar Asli */}
                                <img 
                                    src="/public/foto/p3.png" 
                                    alt="Employee Management UI/UX" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-0"
                                />

                                {/* Badge Tahun */}
                                <div className="absolute top-0 left-0 bg-[#808000] text-white px-5 py-2 text-sm font-bold rounded-br-2xl z-20 shadow-sm">
                                    2025
                                </div>

                                {/* Tombol GitHub */}
                                <a href="https://github.com/Sithinrza/Proyek-Mobile-PBL.git" target="_blank" rel="noreferrer" className="absolute top-5 right-5 z-20 w-11 h-11 bg-white border border-[#e5ecd7] text-[#808000] rounded-full flex items-center justify-center hover:bg-[#808000] hover:text-white transition-colors shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>

                                {/* Konten Teks di Tengah */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                    {/* Sub-judul dipertegas sebagai Responsive Web */}
                                    <span className="text-[#808000] font-bold text-xs tracking-widest uppercase mb-3">Mobile</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Sistem Informasi Poliban</h3>
                                    
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm font-medium">
                                        Merancang aplikasi mobile terintegrasi untuk menangani manajemen wewenang yang kompleks dalam satu platform. Mengimplementasikan logika Role-Based Access yang membedakan otoritas Dosen dalam mengelola kelas dengan alur presensi Pegawai Biasa.                                    
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {['Flutter', 'Dart', 'Role-Based Access', 'Mobile UI'].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-[#e5ecd7] text-[#808000] text-[11px] font-bold rounded uppercase tracking-wide shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </section>

                    {/* CONTACT SECTION WITH DRAGGABLE & FLIPPABLE ID CARD */}
                    <section id="contact" className="py-24 mb-12">
                        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative" ref={idCardAreaRef}>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#99b56b] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#99b56b] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 p-10 md:p-16 gap-12 relative z-10">
                                
                                <div className="h-[400px] flex justify-center items-center relative perspective-1000">
                                    <div className="absolute top-0 text-slate-400 text-xs font-mono tracking-widest uppercase animate-pulse">
                                        Drag to move • Click to flip
                                    </div>

                                    <motion.div 
                                        drag
                                        dragConstraints={idCardAreaRef}
                                        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                                        onClick={() => setIsIdFlipped(!isIdFlipped)}
                                        animate={{ rotateY: isIdFlipped ? 180 : 0 }}
                                        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                                        className="relative w-64 h-80 cursor-grab mt-6"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-10 bg-slate-700 rounded-t-lg z-20 shadow-xl border border-slate-600 flex justify-center" style={{ transform: "translateZ(10px)"}}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2"></div>
                                        </div>

                                        {/* FRONT OF ID CARD */}
                                            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col" style={{ backfaceVisibility: "hidden" }}>
                                                
                                                {/* Header Hijau sedikit diperkecil ukurannya (py-4) */}
                                                <div className="py-4 bg-[#808000] flex flex-col items-center justify-center text-white relative">
                                                    {/* <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80 mt-2">Alumni Poliban</div> */}
                                                    <div className="text-sm font-bold tracking-widest uppercase">Informatics Eng.</div>
                                                </div>
                                                
                                                <div className="flex-1 flex flex-col items-center pt-5 px-4 pb-4">
                                                    
                                                    {/* Foto normal, berada pas di bawah warna hijau */}
                                                    <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden">
                                                        <img src="/public/foto/5.png" alt="Liza Profile" className="w-full h-full object-cover" />
                                                    </div>
                                                    
                                                    <h3 className="text-xl font-bold text-slate-800 mt-4">Liza</h3>
                                                    {/* <p className="text-sm text-[#808000] font-bold uppercase tracking-wider mt-1">Web Developer</p> */}
                                                    {/* <p className="text-[10px] text-slate-500 font-mono mt-1">ID: ALUMNI-2026-01</p> */}
                                                    
                                                    <div className="mt-auto w-full border-t border-slate-100 pt-3 text-center">
                                                        <p className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">Status</p>
                                                        <p className="text-[11px] text-slate-800 font-bold tracking-widest mt-0.5">AVAILABLE FOR HIRE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* BACK OF ID CARD */}
                                        <div className="absolute inset-0 w-full h-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-700" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                                            <img src="/public/foto/4.JPG" alt="Liza Full Body" className="w-full h-full object-cover opacity-90" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                                                <div className="w-full flex justify-between items-end">
                                                    <div>
                                                        <p className="text-white text-lg font-bold">Liza</p>
                                                        <p className="text-[#99b56b] text-xs font-medium uppercase tracking-widest">Tech Explorer</p>
                                                    </div>
                                                    <Code2 className="w-6 h-6 text-white/50" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div 
                                    className="flex flex-col justify-center text-left"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={scrollSettings}
                                    variants={staggerContainer}
                                >
                                    <motion.div variants={fadeInUp}>
                                        <Send className="w-10 h-10 text-[#b6cc94] mb-6" />
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Interested in<br/>collaborating?</h2>
                                        <p className="text-slate-300 text-lg mb-10 font-light">
                                            I'm currently open for new opportunities, freelance work, and exciting tech projects. Let's build something logical and beautiful together.                                        </p>
                                    </motion.div>
                                    
                                    <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
                                        
                                        {/* Email */}
                                        <a href="mailto:sithinrza@gmail.com" className="p-4 bg-slate-800 hover:bg-[#99b56b] text-slate-300 hover:text-slate-900 rounded-full transition-all shadow-lg flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                        </a>
                                        
                                        {/* GitHub */}
                                        <a href="https://github.com/Sithinrza" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 hover:bg-[#99b56b] text-slate-300 hover:text-slate-900 rounded-full transition-all shadow-lg flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>

                                        {/* LinkedIn */}
                                        <a href="https://linkedin.com/in/sithi-nurhaliza" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 hover:bg-[#99b56b] text-slate-300 hover:text-slate-900 rounded-full transition-all shadow-lg flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>

                                        {/* Instagram */}
                                        <a href="https://instagram.com/sthlzz" target="_blank" rel="noreferrer" className="p-4 bg-slate-800 hover:bg-[#99b56b] text-slate-300 hover:text-slate-900 rounded-full transition-all shadow-lg flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                        </a>
                                        
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <footer className="w-full bg-white border-t border-slate-200 py-8 text-center mt-auto">
                <p className="text-sm text-slate-500 font-medium">
                    &copy; 2026 Haliza.
                </p>
            </footer>
        </div>
    );
}