import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Menu, X, MapPin, GraduationCap, Briefcase, Book } from 'lucide-react';
import awsIcon from '/aws.svg'
import cxc from '/cxc.jpeg'
import github from '/github.svg'
import graduation from '/graduation.png'
import habit1 from '/habit1.jpeg'
import hero from '/hero.jpg'
import java from '/java.svg'
import linkedin from '/linkedin.svg'
import login from '/login.jpeg'
import me from '/me.jpeg'
import records from '/records.jpeg'
import sql from '/sql.svg'

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.15 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};




function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Lista de los IDs de tus secciones
      const sections = ['home', 'experience', 'projects', 'stack', 'education', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Detecta si la sección ya cruzó la mitad de la pantalla
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2.5) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
useEffect(() => {
    if (activeModal) {
      
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal])
  
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-blue selection:text-white">
      
<div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl z-50 animate-fade-in-up">
  <nav className="bg-[#0A192F] text-white rounded-full p-2 shadow-2xl opacity-60 hover:opacity-100 transition-opacity duration-500">
    
    {/* Contenedor Desktop */}
    <div className="hidden md:grid grid-cols-7 items-center justify-items-center w-full">
      
      <a href="#home" className={`px-8 py-2 rounded-full font-bold transition-all duration-300 ${activeSection === 'home' ? 'bg-white text-[#0A192F]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
        Home
      </a>
      
      <a href="#experience" className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeSection === 'experience' ? 'bg-white text-[#0A192F]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
        Experience
      </a>
      
      <a href="#projects" className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeSection === 'projects' ? 'bg-white text-[#0A192F]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
        Projects
      </a>

      {/* Logo Central: RR */}
      <a href="#home" className="bg-white text-[#0A192F] font-black text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-inner hover:scale-105 transition-transform">
        RR
      </a>

      <a href="#stack" className={`px-8 py-2 rounded-full font-bold transition-all duration-300 ${activeSection === 'stack' ? 'bg-white text-[#0A192F]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
        Stack
      </a>
      
      <a href="#education" className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeSection === 'education' ? 'bg-white text-[#0A192F]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
        Education
      </a>
      
      <a href="#contact" className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeSection === 'contact' ? 'bg-white text-[#0A192F]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
        Contact
      </a>
    </div>

    {/* Versión Móvil */}
    <div className="md:hidden flex items-center justify-between px-4 h-12">
      <div className="bg-white text-[#0A192F] font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center">
        RR
      </div>
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-white p-1 focus:outline-none"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </nav>

  {/* Menú Móvil */}
  {mobileMenuOpen && (
    <div className="md:hidden absolute top-16 left-0 w-full bg-[#0A192F] rounded-3xl p-6 flex flex-col gap-6 shadow-xl text-center animate-fade-in-up border border-white/10">
      <a href="#home" className={`font-bold ${activeSection === 'home' ? 'text-white' : 'text-white/60'}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
      <a href="#experience" className={`font-bold ${activeSection === 'experience' ? 'text-white' : 'text-white/60'}`} onClick={() => setMobileMenuOpen(false)}>Experience</a>
      <a href="#projects" className={`font-bold ${activeSection === 'projects' ? 'text-white' : 'text-white/60'}`} onClick={() => setMobileMenuOpen(false)}>Projects</a>
      <a href="#stack" className={`font-bold ${activeSection === 'stack' ? 'text-white' : 'text-white/60'}`} onClick={() => setMobileMenuOpen(false)}>Stack</a>
      <a href="#education" className={`font-bold ${activeSection === 'education' ? 'text-white' : 'text-white/60'}`} onClick={() => setMobileMenuOpen(false)}>Education</a>
      <a href="#contact" className={`font-bold ${activeSection === 'contact' ? 'text-white' : 'text-white/60'}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
    </div>
  )}
</div>
       <Reveal>
     <section id="home">
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-8 items-center min-h-[90vh]">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="lg:col-span-7 space-y-8 z-10 order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight opacity-0 animate-fade-in-left delay-100">
            I'm <span className="text-[#18348B]">Rafael Rico</span>,<br />
            Full Stack Developer
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-slate-800 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200">
            Cloud-specialized Computer Systems Engineer passionate about frontend development. Proven experience building applications with React, Express, and MongoDB, combined with a strong focus on UI/UX design.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300">
           <a href="#contact"
            className="bg-[#18348B] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-900/30">
              Contact Me
            </a>
            <a
            href="https://drive.google.com/file/d/1C-iCmDfoqb7C0ntupkcZHccm0HaRR0ZO/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18348B] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-900/30">
              View CV
            </a>
          </div>
        </div>

        {/* Columna Derecha: Imagen y Redes Sociales */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-right delay-400">
  
  {/* Contenedor de la foto corregido */}
  <div className="bg-brand-nav rounded-3xl w-full max-w-[320px] md:max-w-sm h-[400px] md:h-[550px] relative overflow-hidden shadow-2xl hover:shadow-brand-blue/20 transition-shadow duration-500">
    <img 
      src={hero}
      alt="Rafael Rico" 
      className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
    />
  </div>

  {/* Iconos de Contacto (Flotantes a la derecha) */}
  <div className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-100">
    <a 
      href="https://linkedin.com/in/rafael-rico-ayala" 
      target="_blank" 
      rel="noreferrer" 
      className="hover:scale-110 transition-transform block"
    >
      <img 
        src={linkedin}
        alt="LinkedIn" 
        className="w-7 h-7 object-contain" 
      /> 
    </a>
    
    <a href="mailto:rafarico08@gmail.com" className="text-brand-nav hover:text-brand-blue hover:scale-110 transition-transform">
      <Mail size={28} strokeWidth={2} />
    </a>
    
    <a href="tel:+524431078531" className="text-brand-nav hover:text-brand-blue hover:scale-110 transition-transform">
      <Phone size={28} strokeWidth={2} />
    </a>
  </div>

</div>
      </main>
      </section>
    </Reveal>
  <Reveal>
    <section id="experience" className="bg-[#032040] py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
        My Experience
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
      
      <Reveal delay={100}> 
        <div className="h-full bg-[#D1D5DB] rounded-3xl p-8 pt-12 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#083997] p-4 rounded-2xl text-white shadow-lg">
            <GraduationCap size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">Frontend Developer</h3>
          <div className="flex items-start gap-2 text-slate-700 mb-6">
            <MapPin size={18} className="mt-1 shrink-0" />
            <span className="text-sm font-semibold leading-tight">Instituto Tecnológico de Morelia</span>
          </div>
          <p className="text-slate-800 leading-relaxed mb-10">
            Created dynamic and interactive user interfaces focused on ensuring a seamless user experience (UX).
          </p>
          <button 
          onClick={() => setActiveModal('frontend')}
          className="absolute bottom-8 right-8 text-[#083997] font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Learn More <span className="text-xl">›</span>
          </button>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="h-full bg-[#D1D5DB] rounded-3xl p-8 pt-12 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#083997] p-4 rounded-2xl text-white shadow-lg">
            <Briefcase size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">Full Stack .NET Developer</h3>
          <div className="flex items-start gap-2 text-slate-700 mb-6">
            <MapPin size={18} className="mt-1 shrink-0" />
            <span className="text-sm font-semibold leading-tight">Arkinet S.A. de C.V.</span>
          </div>
          <p className="text-slate-800 leading-relaxed mb-10">
            Developed and optimized modules for an enterprise ERP system using ASP.NET and C#.
          </p>
          <button 
           onClick={() => setActiveModal('fullstack')}
          className="absolute bottom-8 right-8 text-[#083997] font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Learn More <span className="text-xl">›</span>
          </button>
        </div>
      </Reveal>

      <Reveal delay={500}>
        <div className="h-full bg-[#D1D5DB] rounded-3xl p-8 pt-12 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#083997] p-4 rounded-2xl text-white shadow-lg">
            <Book size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 mt-4">Computer Science Teacher</h3>
          <div className="flex items-start gap-2 text-slate-700 mb-6">
            <MapPin size={18} className="mt-1 shrink-0" />
            <span className="text-sm font-semibold leading-tight">Secundaria Particular Vasco de Quiroga</span>
          </div>
          <p className="text-slate-800 leading-relaxed mb-10">
            Translated core engineering and OS concepts into practical, accessible learning.
          </p>
          <button 
          onClick={() => setActiveModal('teacher')}
          className="absolute bottom-8 right-8 text-[#083997] font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Learn More <span className="text-xl">›</span>
          </button>
        </div>
      </Reveal>

    </div>
  </div>
    </section>
  </Reveal>
  
 <Reveal>
  <section id="projects" className="py-16 lg:py-24 px-4 lg:px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      
      {/* GRID MAESTRO */}
      <div className="grid grid-cols-2 lg:grid-cols-11 gap-4 lg:gap-8 items-start">
        
        {/* COLUMNA 1: Título */}
        <div className="col-span-2 lg:col-span-3 pt-2 mb-6 lg:mb-0">
          <h2 className="text-4xl lg:text-[3.5rem] font-black text-[#0B1221] leading-tight mb-4 lg:mb-6 tracking-tight">
            Explore My<br />Projects
          </h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-medium pr-2">
           A showcase of responsive platforms and full-stack applications. Explore the architecture, technologies, and problem-solving approach behind each digital solution.
          </p>
        </div>

        {/* WRAPPER 1 */}
        <div className="contents lg:flex lg:flex-col lg:col-span-4 lg:gap-8">
          
          {/* Tarjeta 1: Templo - El botón ahora tiene las clases de grid */}
          <button
            onClick={() => setActiveModal('project_templo')}
            className="col-span-2 order-1 lg:order-0 bg-[#0A192F] rounded-3xl lg:rounded-4xl p-4 lg:p-6 text-white h-35 sm:h-45 lg:h-65 flex items-center justify-between shadow-xl transition-transform hover:scale-[1.02] active:scale-95 text-left"
          >
            <div className="z-10 w-[55%] lg:w-[50%] pl-1 lg:pl-2">
              <h3 className="text-sm sm:text-base lg:text-xl font-bold leading-tight mb-2 lg:mb-4">Templo Misericordia Web Platform</h3>
              <div className="flex gap-2 lg:gap-3">
                <img src="https://cdn.simpleicons.org/react/white" className="w-4 h-4 lg:w-5 lg:h-5" alt="React" />
                <img src="https://cdn.simpleicons.org/tailwindcss/white" className="w-4 h-4 lg:w-5 lg:h-5" alt="Tailwind" />
              </div>
            </div>
            <div className="w-[40%] lg:w-[45%] h-full rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1659386774021-c1f76676bf7b?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover" alt="Stained Glass" />
            </div>
          </button>

          {/* Tarjeta 2: ERP */}
          <button
            onClick={() => setActiveModal('project_erp')}
            className="col-span-1 order-2 lg:order-0 bg-[#0A192F] rounded-3xl lg:rounded-4xl p-4 lg:p-6 text-white h-50 sm:h-60 lg:h-100 flex flex-col shadow-xl transition-transform hover:scale-[1.02] active:scale-95 text-left"
          >
            <div className="z-10 text-center mb-3 lg:mb-6 pt-1 lg:pt-2 w-full">
              <h3 className="text-[0.7rem] sm:text-sm lg:text-xl font-bold mb-2 lg:mb-4 leading-tight">Corporate ERP System Integrations</h3>
              <div className="flex justify-center items-center gap-1.5 lg:gap-3">
                <span className="text-[10px] lg:text-sm font-bold">C#</span>
                <img src="https://cdn.simpleicons.org/bootstrap/white" className="w-3 h-3 lg:w-5 lg:h-5" alt="Bootstrap" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              </div>
            </div>
            <div className="flex-1 w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover" alt="Networking" />
            </div>
          </button>
        </div>

        {/* WRAPPER 2 */}
        <div className="contents lg:flex lg:flex-col lg:col-span-4 lg:gap-8">
          
          {/* Tarjeta 3: POS */}
          <button
            onClick={() => setActiveModal('project_pos')}
            className="col-span-1 order-3 lg:order-0 bg-[#0A192F] rounded-3xl lg:rounded-4xl p-4 lg:p-6 text-white h-50 sm:h-60 lg:h-110 flex flex-col shadow-xl transition-transform hover:scale-[1.02] active:scale-95 text-left"
          >
            <div className="z-10 text-center mb-3 lg:mb-6 pt-1 lg:pt-2 w-full">
              <h3 className="text-[0.7rem] sm:text-sm lg:text-xl font-bold mb-2 lg:mb-4 leading-tight">Full-Stack Retail POS System</h3>
              <div className="flex justify-center flex-wrap gap-1.5 lg:gap-3 mb-1 lg:mb-2">
                <img src="https://cdn.simpleicons.org/react/white" className="w-3 h-3 lg:w-5 lg:h-5" alt="React" />
                <img src="https://cdn.simpleicons.org/tailwindcss/white" className="w-3 h-3 lg:w-5 lg:h-5" alt="Tailwind" />
                <img src="https://cdn.simpleicons.org/mongodb/white" className="w-3 h-3 lg:w-5 lg:h-5" alt="MongoDB" />
                <img src="https://cdn.simpleicons.org/nodedotjs/white" className="w-3 h-3 lg:w-5 lg:h-5" alt="Node" />
              </div>
            </div>
            <div className="flex-1 w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1611703624394-2681b86b0e5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="Retail POS" />
            </div>
          </button>

          {/* Tarjeta 4: Productivity */}
          <button
            onClick={() => setActiveModal('project_productivity')}
            className="col-span-2 order-4 lg:order-0 bg-[#0A192F] rounded-3xl lg:rounded-4xl p-4 lg:p-6 text-white h-35 sm:h-45 lg:h-55 relative shadow-xl flex items-center lg:items-start justify-between lg:justify-start transition-transform hover:scale-[1.02] active:scale-95 text-left"
          >
            <div className="z-10 w-[55%] relative pl-1 lg:pl-2 lg:pt-2">
              <h3 className="text-sm sm:text-base lg:text-[1.15rem] font-bold leading-tight mb-2 lg:mb-4">Productivity & Habit Tracking App</h3>
              <div className="flex gap-2 lg:gap-3">
                <img src="https://cdn.simpleicons.org/react/white" className="w-4 h-4 lg:w-5 lg:h-5" alt="React" />
                <img src="https://cdn.simpleicons.org/tailwindcss/white" className="w-4 h-4 lg:w-5 lg:h-5" alt="Tailwind" />
                <img src="https://cdn.simpleicons.org/vite/white" className="w-4 h-4 lg:w-5 lg:h-5" alt="Vite" />
              </div>
            </div>
            <div className="w-[40%] h-full relative lg:absolute lg:right-6 lg:bottom-6 lg:w-[40%] lg:h-[60%] rounded-xl lg:rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1626957902611-81189024dd78?q=80&w=1503&auto=format&fit=crop" className="w-full h-full object-cover lg:absolute lg:inset-0" alt="Mountain" />
            </div>
          </button>
        </div>

      </div>
    </div>
  </section>
</Reveal>

 <Reveal>
<section id="stack" className="py-24 px-6 bg-[#032040]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">My Tech Stack</h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
   {/* Tu lista de tecnologías */}
{[
  { name: 'React', slug: 'react' },
  { name: 'Vue.js', slug: 'vuedotjs' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Bootstrap', slug: 'bootstrap' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'ASP.NET', slug: 'dotnet' },
  { name: 'Laravel', slug: 'laravel' },
  { name: 'Java', customUrl: java},
  { name: 'Python', slug: 'python' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'SQL Server', customUrl: sql}, // Importación local
  { name: 'AWS', customUrl: awsIcon},       // Importación local
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'Git', slug: 'git' },
  { name: 'Figma', slug: 'figma' }
].map((tech, index) => (
  <Reveal key={tech.name} delay={index * 100}>
  <div key={tech.name} className="group flex flex-col items-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-white/30 transition-all">
    <img 
      src={tech.customUrl ? tech.customUrl : `https://cdn.simpleicons.org/${tech.slug}/white`} 
      alt={tech.name} 
      /* AQUÍ ESTÁ LA MAGIA: Si tiene customUrl, le inyectamos brightness-0 e invert */
      className={`w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity ${tech.customUrl ? 'brightness-0 invert' : ''}`} 
    />
    <span className="text-white/60 group-hover:text-white font-medium transition-colors">{tech.name}</span>
  </div>
  </Reveal>
))}
    </div>
  </div>
</section>
</Reveal>

<Reveal>
<section id="education" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl lg:text-[4rem] font-black text-[#0B1221] text-center mb-16 tracking-tight">
      Education
    </h2>
    
    {/* Grid Principal: 1 Columna en móvil, 2 en Desktop */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      
      {/* TARJETA IZQUIERDA (Universidad) */}
      <div className="bg-[#F3F4F8] rounded-4xl overflow-hidden flex flex-col shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow">
        {/* Contenedor de Imagen */}
        <div className="h-70 w-full bg-slate-200">
          <img 
            src={graduation} 
            className="w-full h-full object-cover" 
            alt="Graduation Ceremony" 
          />
        </div>
        
        {/* Contenido Texto */}
        <div className="p-8 flex flex-col justify-center flex-1">
          <div className="flex items-center gap-4 mb-4">
            {/* Icono Cuadrado Azul con Círculo Blanco */}
            <div className="w-14 h-14 bg-[#0A192F] rounded-2xl flex items-center justify-center shrink-0">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-black text-slate-900">Oct 2025</span>
          </div>
          <h3 className="text-[1.65rem] font-bold text-slate-900 leading-tight pr-4">
            Bachelor of Engineering in Computer Systems Engineering.
          </h3>
        </div>
      </div>

      {/* COLUMNA DERECHA (3 Tarjetas) */}
      <div className="flex flex-col gap-6">
        
        {/* Tarjeta Superior (Licensure) */}
        <div className="bg-[#F3F4F8] rounded-4xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#0A192F] rounded-2xl flex items-center justify-center shrink-0">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-black text-slate-900">Oct 2025</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight pr-2">
              Professional<br className="hidden sm:block" /> Engineering Licensure
            </h3>
          </div>
          
          {/* Contenedor de Imagen Derecha */}
          <div className="w-full md:w-1/2 max-w-sm mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-4/3 bg-blue-100 shadow-md">
            <img 
              src={me}
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" 
              alt="Signing Document" 
            />
          </div>
        </div>

        {/* Fila Inferior (2 Tarjetas pequeñas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          
          {/* Tarjeta Inferior Izquierda (Google UX) */}
          <div className="bg-[#F3F4F8] rounded-4xl p-8 flex flex-col justify-center shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow text-center sm:text-left items-center sm:items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center shrink-0">
                <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
              </div>
              <span className="text-[1.35rem] font-black text-slate-900">Jul 2025</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              Google UX Design<br /> Professional<br /> Certificate
            </h3>
          </div>

          {/* Tarjeta Inferior Derecha (English) */}
          <div className="bg-[#F3F4F8] rounded-4xl p-8 flex flex-col justify-center shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow text-center sm:text-left items-center sm:items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center shrink-0">
                <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
              </div>
              <span className="text-[1.35rem] font-black text-slate-900">Jun 2023</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              B2 Conversational<br /> English Certification
            </h3>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
</Reveal>

<Reveal>
<section id="contact" className="bg-[#0A192F] py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Me!</h2>
    
    {/* Línea separadora delgada */}
    <hr className="border-t border-white/20 mb-12" />

    {/* Grid de 3 columnas para alinear perfectamente los elementos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 text-white">
      
      {/* --- FILA 1 --- */}
      {/* Ubicación (Columna 1) */}
      <div className="flex items-center gap-4">
        <MapPin size={28} className="shrink-0" />
        <a href='https://maps.app.goo.gl/mekLBUifTT8DkUWAA'
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xl font-medium">Morelia, Michoacán, México</a>
      </div>

      {/* Teléfono (Columna 2) */}
      <div className="flex items-center gap-4">
        <Phone size={28} className="shrink-0" />
        {/* Enlace listo: Puedes dejar 'tel:' para que abra la app de llamadas en celulares */}
        <a href="tel:+524431078531" className="text-xl font-medium hover:text-blue-400 transition-colors">
          +52 44-31-07-85-31
        </a>
      </div>

      {/* Columna 3 vacía en la primera fila para mantener el grid igual a tu imagen */}
      <div className="hidden md:block"></div>


      {/* --- FILA 2 --- */}
      {/* LinkedIn (Columna 1) */}
      <div className="flex items-center gap-4">
      <a href="https://www.linkedin.com/in/rafael-rico-ayala/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-xl font-medium hover:text-blue-400 transition-colors">
          <img 
            src={linkedin}
            alt="Linkedin" 
            className="w-7 h-7 brightness-0 invert group-hover:invert-0 group-hover:brightness-100 group-hover:sepia group-hover:hue-rotate-190 group-hover:saturate-500 transition-all" 
          />
          rafael-rico-ayala
        </a>
      </div>

      {/* GitHub (Columna 2) */}
      <div className="flex items-center gap-4">
       <a href="https://github.com/rafarico30" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-xl font-medium hover:text-blue-400 transition-colors">
          <img 
            src={github} 
            alt="GitHub" 
            className="w-7 h-7 brightness-0 invert group-hover:invert-0 group-hover:brightness-100 group-hover:sepia group-hover:hue-rotate-190 group-hover:saturate-500 transition-all" 
          />
          rafarico30
        </a>
      </div>

      {/* Correo (Columna 3) */}
      <div className="flex items-center gap-4">
        <Mail size={28} className="shrink-0" />
        {/* Enlace listo: 'mailto:' abrirá el gestor de correos del usuario */}
        <a href="mailto:rafarico08@gmail.com" className="text-xl font-medium hover:text-blue-400 transition-colors">
          rafarico08@gmail.com
        </a>
      </div>

    </div>
  </div>
</section>
</Reveal>

{/* ---------------- MODALES DE EXPERIENCIA ---------------- */}
      {activeModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          {/* Fondo oscuro clickeable para cerrar */}
          <div 
            className="absolute inset-0 bg-[#032040]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          
          {/* Contenedor principal del Modal */}
          <div className="bg-[#F3F4F8] w-full max-w-3xl rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl z-10 animate-fade-in-up max-h-[90vh] overflow-y-auto border border-white/50">
            
            {/* Botón de Cerrar (X) */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 md:top-8 md:right-8 bg-white text-slate-400 hover:text-[#083997] shadow-sm hover:shadow-md p-2 rounded-full transition-all"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

          {activeModal === 'frontend' && (
            <>
              <div className="bg-[#083997] p-4 rounded-2xl text-white inline-block mb-6 shadow-md">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Frontend Developer</h3>
              <div className="flex items-center gap-2 mb-8">
                <MapPin size={18} className="text-[#083997]" />
                <p className="text-lg text-[#083997] font-bold">Instituto Tecnológico de Morelia</p>
                <p className="text-slate-500 font-medium">Jan 2024 — Dec 2024</p>
              </div>
              
              {/* Textos optimizados para Tech Resume */}
              <div className="space-y-5 text-slate-600 leading-relaxed font-medium text-lg">
                <p>
                  Contributed to the development of the <strong className="text-slate-800">ITM SIM</strong> system, a comprehensive institutional platform designed to streamline and modernize academic management processes.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-slate-700">
                  <li>
                    <strong className="text-slate-800">Modern Frontend Architecture:</strong> Engineered dynamic, responsive interfaces and Single Page Applications (SPAs) utilizing Laravel Livewire and PHP.
                  </li>
                  <li>
                    <strong className="text-slate-800">API Integration:</strong> Seamlessly integrated backend services to enable real-time data rendering and synchronization across the platform.
                  </li>
                  <li>
                    <strong className="text-slate-800">Agile Methodologies:</strong> Operated within a Scrum framework, actively participating in delivery sprints and rigorous code reviews to ensure maintainability and high-quality standards.
                  </li>
                </ul>
              </div>
            </>
          )}

                    {/* --- CONTENIDO: FULL STACK --- */}
        {activeModal === 'fullstack' && (
          <>
            <div className="bg-[#083997] p-4 rounded-2xl text-white inline-block mb-6 shadow-md">
              <Briefcase size={28} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Full Stack .NET Developer</h3>
            <div className="flex items-center gap-2 mb-8">
              <MapPin size={18} className="text-[#083997]" />
              <p className="text-lg text-[#083997] font-bold">Arkinet S.A. de C.V.</p>
               <p className="text-slate-500 font-medium">Jan 2025 — Aug 2025</p>
            </div>
            
            {/* Textos optimizados para Tech Resume */}
            <div className="space-y-5 text-slate-600 leading-relaxed font-medium text-lg">
              <p>
                Contributed to the development and enhancement of an enterprise-level ERP system, focusing on the optimization of critical business processes and collaborating closely with the engineering team.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>
                  <strong className="text-slate-800">Backend Architecture:</strong> Implemented complex business logic and engineered secure, scalable modules utilizing C# and ASP.NET.
                </li>
                <li>
                  <strong className="text-slate-800">Database Optimization:</strong> Designed and refined advanced queries and Stored Procedures in SQL Server, significantly improving data retrieval and reporting performance.
                </li>
                <li>
                  <strong className="text-slate-800">Responsive UI/UX:</strong> Developed intuitive, cross-device compatible user interfaces using Bootstrap to ensure a seamless end-user experience.
                </li>
                <li>
                  <strong className="text-slate-800">Continuous Improvement:</strong> Actively participated in code refactoring, maintenance of legacy modules, and rigorous code reviews to uphold high software quality standards.
                </li>
              </ul>
            </div>
          </>
        )}
           
{activeModal === 'teacher' && (
  <>
    <div className="bg-[#083997] p-4 rounded-2xl text-white inline-block mb-6 shadow-md">
      <Book size={28} />
    </div>
    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Computer Science Teacher</h3>
    <div className="flex items-center gap-2 mb-8">
      <MapPin size={18} className="text-[#083997]" />
      <p className="text-lg text-[#083997] font-bold">Secundaria Particular Vasco de Quiroga</p>
       <p className="text-slate-500 font-medium">Oct 2025 — Present</p>
    </div>
    
    {/* Textos optimizados para Tech Resume y ajustados a la realidad del rol */}
    <div className="space-y-5 text-slate-600 leading-relaxed font-medium text-lg">
      <p>
        Instructed middle school students in foundational technology and computer science concepts, seamlessly blending classroom education with the engineering of custom technical solutions for automated student assessment.
      </p>
      <ul className="list-disc pl-5 space-y-3 text-slate-700">
        <li>
          <strong className="text-slate-800">Leadership & Communication:</strong> Managed large classroom environments and designed comprehensive curricula across three academic grade levels, honing public speaking and technical knowledge transfer skills.
        </li>
        <li>
          <strong className="text-slate-800">Educational Software Development:</strong> Architected and programmed a custom diagnostic system to automate the measurement and evaluation of student competencies in Cybersecurity, Operating Systems, and Office Automation.
        </li>
        <li>
          <strong className="text-slate-800">Technical Instruction:</strong> Taught core engineering fundamentals and computational logic, successfully translating complex software and hardware concepts into accessible, engaging learning materials.
        </li>
      </ul>
    </div>
  </>
)}

            {activeModal === 'project_pos' && (
              <div className="text-slate-800">
                
                {/* Título Principal */}
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  🏪 Cremería Soco - POS System
                </h2>

                {/* Badges de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className="h-6 object-contain" />
                </div>

                {/* Blockquote (Cita de introducción) */}
                <blockquote className="border-l-4 border-[#083997] bg-blue-50/50 p-4 text-slate-700 italic rounded-r-lg mb-8">
                  A comprehensive, full-stack Point of Sale (POS) & ERP solution tailored for retail businesses. It streamlines inventory, sales, and stakeholder management with a modern, user-friendly interface.
                </blockquote>

                {/* Línea Separadora */}
                <hr className="border-slate-200 mb-8" />

                {/* --- SECCIÓN: KEY FEATURES --- */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  🚀 Key Features
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">⚡ Core POS Operations</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-600">
                      <li><strong className="text-slate-800">Efficient Sales Interface:</strong> Quick product lookup via search bar or visual categories (Cold Cuts, Dairy, etc.) for high-speed checkout.</li>
                      <li><strong className="text-slate-800">Smart Transaction Handling:</strong> Real-time subtotal calculation, dynamic change calculation, and receipt generation.</li>
                      <li><strong className="text-slate-800">Inventory CRUD:</strong> Complete stock management system to track quantities, pricing (Purchase vs. Sale), and low-stock alerts.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">👥 Management Modules (CRM & ERP)</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-600">
                      <li><strong className="text-slate-800">🛒 Customer Management:</strong> Maintain a directory of loyal customers to speed up checkout and track purchase history.</li>
                      <li><strong className="text-slate-800">🚛 Supplier Management:</strong> Organize vendor details (contact info, catalog) to streamline re-stocking processes.</li>
                      <li><strong className="text-slate-800">🛡️ Employee Administration:</strong> Manage staff profiles and control system access (Security & Role management).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">📊 Analytics & Reporting</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-600">
                      <li><strong className="text-slate-800">Visual Dashboard:</strong> Interactive charts showing daily/monthly revenue trends.</li>
                      <li><strong className="text-slate-800">Exportable Reports:</strong> Generate detailed PDF/Excel reports for accounting and auditing purposes.</li>
                    </ul>
                  </div>
                </div>

                {/* --- SECCIÓN: SYSTEM OVERVIEW (IMÁGENES) --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6 pb-2 border-b border-slate-200">
                  📸 System Overview
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Imagen 1 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Main POS Interface</p>
                    <a 
                      href="https://github.com/user-attachments/assets/dc0158b6-9c7f-4671-bdae-7e94c9b14484" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src="https://github.com/user-attachments/assets/dc0158b6-9c7f-4671-bdae-7e94c9b14484" 
                        alt="Main POS" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>

                  {/* Imagen 2 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Smart Payment & Change</p>
                    <a 
                      href="https://github.com/user-attachments/assets/5201ff4d-053d-49ff-8f4b-18a89d372312" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src="https://github.com/user-attachments/assets/5201ff4d-053d-49ff-8f4b-18a89d372312" 
                        alt="Payment" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>

                  {/* Imagen 3 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Inventory Management</p>
                    <a 
                      href="https://github.com/user-attachments/assets/da268676-a4f8-4fcb-9693-e4c07a3a0ca8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src="https://github.com/user-attachments/assets/da268676-a4f8-4fcb-9693-e4c07a3a0ca8" 
                        alt="Inventory" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>

                  {/* Imagen 4 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Sales Reports & Analytics</p>
                    <a 
                      href="https://github.com/user-attachments/assets/6fd72954-ffec-4dda-9a9d-52adbea19ac2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src="https://github.com/user-attachments/assets/6fd72954-ffec-4dda-9a9d-52adbea19ac2" 
                        alt="Analytics" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>
                </div>

                {/* --- SECCIÓN: TECH STACK --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200">
                  🏗️ Tech Stack
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                  <li><strong className="text-slate-800">Frontend:</strong> React.js (Hooks, Context API), Styled Components.</li>
                  <li><strong className="text-slate-800">Backend:</strong> Node.js, Express.js (RESTful API).</li>
                  <li><strong className="text-slate-800">Database:</strong> MongoDB (Complex relationships between Sales, Products, and Users).</li>
                  <li><strong className="text-slate-800">Tools:</strong> Git, GitHub, Postman (API Testing).</li>
                </ul>

              </div>
            )}
{/* --- CONTENIDO: PROYECTO TEMPLO (ESTILO GITHUB README) --- */}
            {activeModal === 'project_templo' && (
              <div className="text-slate-800">
                
                {/* Título Principal */}
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  ⛪ Templo Misericordia Website
                </h2>

                {/* Badges de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" className="h-6 object-contain" />
                </div>

                {/* Blockquote (Cita de introducción) */}
                <blockquote className="border-l-4 border-[#083997] bg-blue-50/50 p-4 text-slate-700 italic rounded-r-lg mb-6">
                  A modern, responsive web platform tailored to connect the religious community with daily services and real-time updates.
                </blockquote>

                {/* Live Demo Button */}
                <div className="mb-8">
                  <a 
                    href="https://rafarico30.github.io/templo-misericordia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#083997] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 hover:-translate-y-1 transition-all shadow-lg shadow-blue-900/20"
                  >
                    🚀 Visit Live Demo
                  </a>
                </div>

                {/* Línea Separadora */}
                <hr className="border-slate-200 mb-8" />

                {/* --- SECCIÓN: KEY FEATURES --- */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  ⚡ Key Features
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-10">
                  <li><strong className="text-slate-800">Mobile-First Design:</strong> Fully adapted for mobile devices & tablets using <strong className="text-[#083997]">Tailwind CSS</strong>.</li>
                  <li><strong className="text-slate-800">Architecture:</strong> Modular & reusable component structure using <strong className="text-[#083997]">React</strong>.</li>
                  <li><strong className="text-slate-800">Performance:</strong> High-performance website with an optimized Lighthouse Score.</li>
                  <li><strong className="text-slate-800">CI/CD:</strong> Automated deployment pipeline using <strong className="text-[#083997]">GitHub Pages</strong>.</li>
                </ul>

                {/* --- SECCIÓN: PREVIEW (IMÁGENES) --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6 pb-2 border-b border-slate-200">
                  📸 Preview
                </h3>
                
                <div className="flex flex-col gap-8 mb-10">
                  {/* Imagen 1 */}
                  <div className="flex flex-col items-center">
                    <a 
                      href="https://github.com/user-attachments/assets/bca9f37b-0a37-44b0-bdc4-914af621fb03" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src="https://github.com/user-attachments/assets/bca9f37b-0a37-44b0-bdc4-914af621fb03" 
                        alt="Preview of Templo Misericordia" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Hero Section (Click to view full size)</p>
                  </div>

                  {/* Imagen 2 */}
                  <div className="flex flex-col items-center">
                    <a 
                      href="https://github.com/user-attachments/assets/0d696651-d34b-4435-a87b-ed6a3c9a4972" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <img 
                        src="https://github.com/user-attachments/assets/0d696651-d34b-4435-a87b-ed6a3c9a4972" 
                        alt="About Us Section" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">About Us Section (Click to view full size)</p>
                  </div>
                </div>

                {/* --- SECCIÓN: TECH STACK --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200">
                  🛠️ Tech Stack
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-10">
                  <li><strong className="text-slate-800">Frontend:</strong> React, Vite</li>
                  <li><strong className="text-slate-800">Styling:</strong> Tailwind CSS</li>
                  <li><strong className="text-slate-800">Deployment:</strong> GitHub Pages</li>
                  <li><strong className="text-slate-800">Version Control:</strong> Git & GitHub</li>
                </ul>

              

              </div>
            )}

            {/* --- CONTENIDO: PROYECTO PRODUCTIVITY APP --- */}
            {activeModal === 'project_productivity' && (
              <div className="text-slate-800">
                
                {/* Título Principal */}
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  ⏱️ Productivity App
                </h2>

                {/* Badges de Tecnologías (Ajusta según las que usaste) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" className="h-6 object-contain" />
                </div>

                {/* Blockquote (Cita de introducción) */}
                <blockquote className="border-l-4 border-[#083997] bg-blue-50/50 p-4 text-slate-700 italic rounded-r-lg mb-8">
                  A sleek and intuitive productivity application designed to help users manage tasks, track time, and optimize their daily workflow.
                </blockquote>

                <hr className="border-slate-200 mb-8" />

                {/* --- SECCIÓN: MY ROLE & CONTRIBUTIONS (NUEVO Y MUY IMPORTANTE) --- */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  👤 My Role & Contributions
                </h3>
                <p className="text-slate-600 mb-4">
                  As a collaborator on this project, my primary focus was on developing the frontend interface and integrating core features. My specific contributions include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                  <li><strong className="text-slate-800">UI/UX Implementation:</strong></li>
                  <li><strong className="text-slate-800">Feature Integration:</strong></li>
                  <li><strong className="text-slate-800">Optimization:</strong></li>
                </ul>

                {/* --- SECCIÓN: KEY FEATURES --- */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  ⚡ Key Features
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-10">
                  <li><strong className="text-slate-800">Task Management:</strong> Create, edit, and organize daily tasks efficiently.</li>
                  <li><strong className="text-slate-800">Time Tracking:</strong> Monitor focus sessions to maintain a steady workflow.</li>
                  <li><strong className="text-slate-800">Progress Dashboard:</strong> Visual indicators of daily and weekly productivity.</li>
                </ul>

                {/* --- SECCIÓN: PREVIEW (IMÁGENES) --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6 pb-2 border-b border-slate-200">
                  📸 Preview
                </h3>
                
                {/* Dejé el grid en 2 columnas para 2 imágenes. Si tienes más, puedes copiar y pegar un bloque de imagen */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  
                  
                  {/* Imagen 2 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Login</p>
                    <a 
                      href={login}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-slate-100 min-h-50"
                    >
                      <img 
                        src={login}
                        alt="Login" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>

                  {/* Imagen 1 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Dashboard View</p>
                    <a 
                      href={habit1}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-slate-100 min-h-50"
                    >
                      <img 
                        src={habit1} 
                        alt="Dashboard view" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>


                </div>

                {/* --- SECCIÓN: TECH STACK --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200">
                  🛠️ Tech Stack
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                  <li><strong className="text-slate-800">Frontend:</strong> React.js, Tailwind CSS</li>
                  <li><strong className="text-slate-800">Backend:</strong> Node.js, Express</li>
                  <li><strong className="text-slate-800">Database:</strong> MongoDB / Firebase</li>
                </ul>

              </div>
            )}

            {/* --- CONTENIDO: PROYECTO ERP EMPRESARIAL --- */}
            {activeModal === 'project_erp' && (
              <div className="text-slate-800">
                
                {/* Título Principal */}
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  🏢 Enterprise ERP System
                </h2>

                {/* Badges de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle" className="h-6 object-contain" />
                  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" className="h-6 object-contain" />
                </div>

                {/* Blockquote (Cita de introducción) */}
                <blockquote className="border-l-4 border-[#083997] bg-blue-50/50 p-4 text-slate-700 italic rounded-r-lg mb-8">
                  A robust Enterprise Resource Planning (ERP) solution designed to integrate core business processes, centralizing financial tracking, supplier management, and administrative workflows into a unified, secure platform.
                </blockquote>

                <hr className="border-slate-200 mb-8" />

                {/* --- SECCIÓN: MY ROLE & CONTRIBUTIONS --- */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  👤 My Role & Contributions
                </h3>
                <p className="text-slate-600 mb-4">
                  As part of the development team, I collaborated as a Full Stack Developer, playing a key role in migrating the system's architecture to a modern REST API and implementing multiple end-to-end modules. My specific contributions included:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                  <li><strong className="text-slate-800">API Development & Security:</strong> Engineered a scalable RESTful API using ASP.NET MVC and Entity Framework, implementing JWT authentication for secure access and documenting endpoints with Swagger.</li>
                  <li><strong className="text-slate-800">Frontend Implementation:</strong> Developed responsive, user-friendly interfaces using Bootstrap, HTML, and JavaScript for various modules like Mobile Accounts, Suppliers, and Accounts Receivable.</li>
                  <li><strong className="text-slate-800">UI/UX Design:</strong> Prototyped and designed intuitive screens in Figma to streamline user navigation, including a complete redesign of the system's main sidebar.</li>
                </ul>

                {/* --- SECCIÓN: KEY FEATURES --- */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  ⚡ Key Features
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-10">
                  <li><strong className="text-slate-800">Financial Management:</strong> Developed Accounts Receivable (CXC) and Collections modules to automate debt tracking, payment registration, and real-time synchronization.</li>
                  <li><strong className="text-slate-800">Comprehensive Module Suite:</strong> Built dedicated modules for Suppliers, Companies, Catalogs, and Document Management (Expedientes) to centralize operations.</li>
                  <li><strong className="text-slate-800">Modern Architecture:</strong> Replaced legacy WCF architecture with a custom REST API, improving maintainability, data security, and system scalability.</li>
                </ul>

                {/* --- SECCIÓN: PREVIEW (IMÁGENES) --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6 pb-2 border-b border-slate-200">
                  📸 System Overview
                </h3>
                
                {/* Te sugiero poner una captura de la interfaz de cobranza y otra de Swagger o Figma */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Imagen 1 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">Accounts Receivable (CXC)</p>
                    <a 
                      href={cxc} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-slate-50 min-h-45"
                    >
                      <img 
                        src={cxc} 
                        alt="Accounts Receivable Interface" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>

                  {/* Imagen 2 */}
                  <div className="flex flex-col items-center">
                    <p className="font-bold mb-3 text-slate-800">"Expedientes" Screen</p>
                    <a 
                      href={records}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-slate-50 min-h-45"
                    >
                      <img 
                        src={records} 
                        alt="'Expedientes' Screen" 
                        className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                      />
                    </a>
                    <p className="text-sm italic text-slate-500 text-center mt-3">Click to view full size</p>
                  </div>
                </div>

                {/* --- SECCIÓN: TECH STACK --- */}
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200">
                  🏗️ Tech Stack
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                  <li><strong className="text-slate-800">Backend:</strong> C#, ASP.NET MVC, Entity Framework</li>
                  <li><strong className="text-slate-800">Frontend:</strong> JavaScript, Bootstrap, HTML, CSS</li>
                  <li><strong className="text-slate-800">Database:</strong> Oracle SQL</li>
                  <li><strong className="text-slate-800">Tools & Security:</strong> Swagger, Postman, Figma, JWT Authentication</li>
                </ul>

              </div>
            )}
          </div>
        </div>
      )}    
    </div>
  );
}

export default App;