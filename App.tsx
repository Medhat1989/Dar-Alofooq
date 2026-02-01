
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from './types';
import { NAV_ITEMS, APP_CONTENT, SOCIAL_LINKS } from './constants';
import { 
  Globe, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  MessageCircle, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Music2, 
  Ghost, 
  Quote, 
  Calendar, 
  ChevronDown, 
  Target, 
  BarChart3, 
  Layers, 
  Briefcase, 
  Users2, 
  MessageSquare, 
  Search, 
  CheckCircle2 
} from 'lucide-react';

const Logo: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const brandColor = scrolled ? '#1B365D' : '#FFFFFF';
  
  return (
    <div 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-4 ltr select-none group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
    >
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 group-hover:rotate-[10deg]">
        <path d="M50 8L86.37 29V71L50 92L13.63 71V29L50 8Z" stroke={brandColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 35L50 27L72 39V61L50 73L28 61V50" stroke={brandColor} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 50L72 39" stroke={brandColor} strokeWidth="6" strokeLinecap="round" />
      </svg>
      <div className="h-10 w-[1.5px] opacity-40 bg-current transition-all duration-500 group-hover:opacity-80 group-hover:h-12" style={{ color: brandColor }}></div>
      <div className="flex flex-col justify-center text-left" style={{ color: brandColor }}>
        <span className="text-xl md:text-2xl font-bold leading-[1] mb-1 transition-all duration-300 group-hover:tracking-wider" style={{ fontFamily: 'Tajawal, sans-serif' }}>دار الأفق</span>
        <span className="text-[9px] md:text-[11px] font-bold tracking-[0.25em] leading-none uppercase opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>DAR ALOFOOQ</span>
      </div>
    </div>
  );
};

const BackgroundLiquid: React.FC = () => (
  <div className="fixed inset-0 -z-10 bg-[#020817] overflow-hidden">
    {/* Liquid Orbs */}
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1B365D] rounded-full blur-[120px] opacity-40 animate-orb-1"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#2563eb] rounded-full blur-[120px] opacity-20 animate-orb-2"></div>
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#0f172a] rounded-full blur-[100px] opacity-60 animate-orb-3"></div>
    {/* Subtle Mesh Texture */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
  </div>
);

const TestimonialSlider: React.FC<{ lang: Language, glassStyle: string }> = ({ lang, glassStyle }) => {
  const [current, setCurrent] = useState(0);
  const testimonials = APP_CONTENT.testimonials;
  const isRtl = lang === 'ar';

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
      <div className={`relative overflow-hidden rounded-[3rem] p-12 md:p-16 ${glassStyle} border-white/20 transition-all duration-700 hover:shadow-blue-500/20 shadow-2xl group/slider`}>
        <div className="absolute top-8 right-8 text-blue-500/20 group-hover/slider:text-blue-500/40 transition-colors duration-500">
          <Quote size={80} />
        </div>
        
        <div className="relative z-10 min-h-[250px] flex flex-col justify-center">
          <div key={current} className="animate-in fade-in zoom-in-95 slide-in-from-bottom-5 duration-700">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-10 text-white/90 italic cursor-default">
              "{testimonials[current].text[lang]}"
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/40 p-1 bg-white/5">
                <img src={testimonials[current].img} alt={testimonials[current].name[lang]} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white">{testimonials[current].name[lang]}</h4>
                <p className="text-blue-400 font-bold text-sm tracking-widest uppercase">{testimonials[current].role[lang]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className={`absolute bottom-8 ${isRtl ? 'left-8' : 'right-8'} flex gap-4`}>
          <button 
            onClick={prev} 
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 active:scale-90"
          >
            {isRtl ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
          </button>
          <button 
            onClick={next} 
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 active:scale-90"
          >
            {isRtl ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
          </button>
        </div>

        {/* Dots */}
        <div className={`absolute bottom-12 ${isRtl ? 'right-12' : 'left-12'} flex gap-2`}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${current === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceIcon: React.FC<{ name: string, className?: string }> = ({ name, className }) => {
  const icons: Record<string, any> = {
    Target, BarChart3, Layers, Briefcase, Users2, MessageSquare, Search
  };
  const Icon = icons[name] || Target;
  return <Icon className={className} />;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const isRtl = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const iconMap: Record<string, any> = {
    MessageCircle: MessageCircle, Twitter: Twitter, Linkedin: Linkedin, Youtube: Youtube, Music2: Music2, Ghost: Ghost
  };

  const glassStyle = "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]";

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`${isRtl ? 'rtl' : 'ltr'} text-white min-h-screen transition-all duration-300 overflow-x-hidden font-['Tajawal',_'Inter',_sans-serif]`}
    >
      <BackgroundLiquid />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 pt-4`}>
        <div className={`max-w-7xl mx-auto rounded-3xl transition-all duration-500 ${scrolled ? glassStyle + ' py-2' : 'bg-transparent py-4'}`}>
          <div className="flex items-center h-16 px-6 lg:px-10">
            {/* Logo Section */}
            <div className="flex-1">
              <Logo scrolled={scrolled} />
            </div>

            {/* Centered Menu Section */}
            <div className="hidden lg:flex flex-none items-center justify-center gap-6 xl:gap-10">
              {NAV_ITEMS.filter(item => item.id !== 'book').map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm font-bold relative transition-all duration-300 group ${scrolled ? 'text-white' : 'text-white/80'} hover:text-blue-400 whitespace-nowrap`}
                >
                  {item.label[lang]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Language Toggle Section */}
            <div className="flex-1 hidden lg:flex justify-end items-center">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
              >
                <Globe size={16} className="transition-transform duration-500 group-hover:rotate-12" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Nav Trigger */}
            <div className="lg:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="text-sm font-bold bg-white/10 p-2.5 rounded-xl hover:bg-white/20 transition-all active:scale-90">{lang === 'ar' ? 'EN' : 'عربي'}</button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 hover:bg-white/10 rounded-xl transition-all active:scale-90">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 mx-2 rounded-3xl ${glassStyle} animate-in slide-in-from-top duration-300 border-white/20`}>
            <div className="px-6 py-8 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block text-xl font-bold transition-all hover:translate-x-2 ${item.id === 'book' ? 'text-blue-400' : 'text-white/90 hover:text-blue-400'}`}
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 scroll-mt-32">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block px-5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-pulse shadow-glow shadow-blue-500/20">
            {lang === 'ar' ? 'ريادة الأعمال المستقبلية' : 'Future of Entrepreneurship'}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight drop-shadow-2xl transition-all duration-700 hover:tracking-tight cursor-default">
            {APP_CONTENT.hero.title[lang]}
          </h1>
          <div className="flex items-center justify-center">
            <button 
              onClick={(e) => handleNavClick(e, 'book')}
              className="group relative bg-blue-600 text-white px-16 py-6 rounded-2xl text-xl font-bold transition-all duration-500 hover:bg-blue-700 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-110 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:tracking-wider">{APP_CONTENT.hero.cta[lang]}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer transition-all duration-1000"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-bold mb-6 uppercase tracking-[0.2em] text-blue-400">
              {lang === 'ar' ? 'حلولنا الإبداعية' : 'Our Creative Solutions'}
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              {NAV_ITEMS.find(i => i.id === 'services')?.label[lang]}
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              {lang === 'ar' 
                ? 'نقدم مجموعة شاملة من الخدمات الاستشارية والإدارية المصممة لتمكين رؤيتك.' 
                : 'We offer a comprehensive range of consulting and administrative services designed to empower your vision.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APP_CONTENT.services_detailed.map((service) => (
              <div key={service.id} className={`group relative p-10 rounded-[3rem] ${glassStyle} transition-all duration-500 hover:bg-white/10 hover:-translate-y-4 hover:border-blue-500/30 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]`}>
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:animate-icon-bounce">
                  <ServiceIcon name={service.icon} className="w-10 h-10 group-hover:animate-icon-pulse" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{service.title[lang]}</h3>
                <p className="text-white/60 mb-8 leading-relaxed font-medium">{service.desc[lang]}</p>
                
                <div className="space-y-3 pt-6 border-t border-white/5">
                  {service.points[lang].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-1 text-blue-500 shrink-0" />
                      <span className="text-sm font-bold text-white/40 group-hover:text-white/70 transition-colors">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-10 right-10 text-6xl font-black text-white/[0.03] select-none transition-all duration-700 group-hover:text-blue-500/10 group-hover:scale-125">
                  {(APP_CONTENT.services_detailed.indexOf(service) + 1).toString().padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="who-we-are" className="py-32 relative scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-[3rem] p-12 md:p-20 ${glassStyle} transition-all duration-700 hover:border-white/30 hover:shadow-blue-500/10 shadow-2xl`}>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="transition-all duration-500">
                <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-bold mb-6 uppercase tracking-[0.2em] text-blue-400">
                  {APP_CONTENT.about.title[lang]}
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight transition-all duration-500 hover:text-blue-50 cursor-default">
                  {lang === 'ar' ? 'التميز هو شغفنا، والنجاح هو هدفنا' : 'Excellence is our Passion'}
                </h2>
                <p className="text-xl text-white/60 leading-relaxed mb-10 transition-all duration-500 hover:text-white/80">
                  {APP_CONTENT.about.text[lang]}
                </p>
                <button 
                  onClick={(e) => { e.preventDefault(); const el = document.getElementById('services'); el?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="flex items-center gap-3 text-blue-400 font-black text-lg group transition-all duration-300 hover:text-blue-300"
                >
                  <span className="relative">
                    {lang === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight className={`${isRtl ? 'rotate-180 group-hover:-translate-x-3' : 'group-hover:translate-x-3'} transition-all duration-500`} size={24} />
                </button>
              </div>
              <div className="relative group/image">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 group-hover/image:scale-[1.05] group-hover/image:rotate-1 border border-white/10">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" alt="Saudi Tech Leadership" className="w-full h-auto transition-all duration-1000 group-hover/image:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/60 to-transparent opacity-60 transition-opacity duration-500 group-hover/image:opacity-30"></div>
                </div>
                <div className={`absolute -bottom-8 ${isRtl ? '-left-8' : '-right-8'} ${glassStyle} p-10 rounded-3xl hidden md:block z-10 animate-float transition-all duration-700 hover:scale-110 hover:shadow-blue-500/20`}>
                  <div className="text-5xl font-black mb-2 text-blue-400 group-hover:scale-110 transition-transform duration-500">15+</div>
                  <div className="text-xs font-bold opacity-70 tracking-widest uppercase">{lang === 'ar' ? 'عام من الخبرة' : 'Years Experience'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 group">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 transition-all duration-500 group-hover:scale-[1.02]">
              {NAV_ITEMS.find(i => i.id === 'team')?.label[lang]}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full transition-all duration-1000 group-hover:w-64"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {APP_CONTENT.team.map((member, idx) => (
              <div key={idx} className={`group p-8 rounded-[3rem] ${glassStyle} transition-all duration-500 hover:bg-white/10 hover:-translate-y-4 hover:border-white/30 hover:shadow-2xl`}>
                <div className="relative mb-8 mx-auto w-full aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl transition-all duration-700 group-hover:border-blue-500/40">
                  <img src={member.img} alt={member.name[lang]} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-black mb-2 transition-all duration-300 group-hover:text-blue-400">{member.name[lang]}</h3>
                <p className="text-blue-400 font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 group-hover:tracking-widest">{member.role[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Online Section */}
      <section id="book" className="py-32 relative scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-[4rem] p-12 md:p-24 ${glassStyle} relative overflow-hidden group/book`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-5 gap-20 relative z-10">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-xs uppercase tracking-widest mb-8">
                  <Calendar size={16} />
                  {lang === 'ar' ? 'التوفر متاح' : 'Availability Open'}
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  {APP_CONTENT.booking.title[lang]}
                </h2>
                <p className="text-xl text-white/50 leading-relaxed mb-12">
                  {APP_CONTENT.booking.subtitle[lang]}
                </p>
                <div className="space-y-6">
                  {APP_CONTENT.booking.services.map((service) => (
                    <div key={service.id} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 transition-all cursor-default">
                      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                      <span className="font-bold text-lg">{service.label[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40">{lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}</label>
                    <input type="text" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-bold" placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Your name'} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40">{lang === 'ar' ? 'الخدمة المطلوبة' : 'Service Type'}</label>
                    <div className="relative">
                      <select className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-bold appearance-none cursor-pointer">
                        {APP_CONTENT.booking.services.map(s => <option key={s.id} value={s.id} className="bg-slate-900">{s.label[lang]}</option>)}
                      </select>
                      <ChevronDown className={`absolute ${isRtl ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 text-white/40 pointer-events-none`} size={20} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40">{lang === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}</label>
                    <input type="date" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-bold [color-scheme:dark]" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40">{lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</label>
                    <input type="tel" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-bold" placeholder="+966" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40">{lang === 'ar' ? 'رسالة إضافية' : 'Additional Message'}</label>
                    <textarea rows={3} className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all font-bold resize-none" placeholder={lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}></textarea>
                  </div>
                  <button className="md:col-span-2 bg-blue-600 text-white py-6 rounded-2xl font-black text-2xl hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4">
                    <Calendar size={28} />
                    {lang === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-16">
            {NAV_ITEMS.find(i => i.id === 'testimonials')?.label[lang]}
          </h2>
          <TestimonialSlider lang={lang} glassStyle={glassStyle} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-5xl md:text-8xl font-black mb-10 text-white transition-all duration-500 hover:scale-[1.02] cursor-default">
                {NAV_ITEMS.find(i => i.id === 'contact')?.label[lang]}
              </h2>
              <p className="text-white/50 text-xl mb-16 max-w-lg leading-relaxed transition-all duration-500 hover:text-white/80">
                {lang === 'ar' ? 'تواصل مع خبراء دار الأفق للارتقاء بأعمالك إلى آفاق جديدة.' : 'Connect with experts to elevate your business to new horizons.'}
              </p>
              <div className="space-y-10">
                <ContactInfo icon={<Phone size={24} />} title={lang === 'ar' ? 'الهاتف' : 'Phone'} value={APP_CONTENT.contact.phone} />
                <ContactInfo icon={<Mail size={24} />} title={lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} value={APP_CONTENT.contact.email} />
                <ContactInfo icon={<MapPin size={24} />} title={lang === 'ar' ? 'الموقع' : 'Location'} value={APP_CONTENT.contact.location[lang]} />
              </div>
            </div>
            <div className={`p-10 md:p-16 rounded-[4rem] ${glassStyle} transition-all duration-700 hover:border-white/30 shadow-2xl group/form`}>
              <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40 group-focus-within/form:text-blue-400 transition-colors">{lang === 'ar' ? 'الاسم' : 'Name'}</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all duration-300 font-bold placeholder:text-white/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40 group-focus-within/form:text-blue-400 transition-colors">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all duration-300 font-bold placeholder:text-white/20" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 group-focus-within/form:text-blue-400 transition-colors">{lang === 'ar' ? 'الرسالة' : 'Message'}</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-all duration-300 font-bold resize-none placeholder:text-white/20"></textarea>
                </div>
                <button className="group relative w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-2xl transition-all duration-500 hover:bg-blue-700 hover:shadow-[0_20px_60px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                  <span className="relative z-10 transition-transform duration-300 group-hover:tracking-widest">{lang === 'ar' ? 'إرسال' : 'Submit'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-16">
            <Logo scrolled={false} />
            <div className="flex flex-wrap justify-center gap-8">
              {SOCIAL_LINKS.map(social => {
                const Icon = iconMap[social.icon];
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] bg-white/5 hover:bg-blue-600 border border-white/10 flex items-center justify-center transition-all duration-500 transform hover:-translate-y-3 hover:rotate-6 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group/social">
                    <Icon size={28} className="transition-all duration-500 group-hover/social:scale-125" />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-[10px] font-black tracking-[0.5em] uppercase opacity-20 transition-opacity duration-500 hover:opacity-50 cursor-default">
                &copy; {new Date().getFullYear()} DAR ALOFOOQ. ALL RIGHTS RESERVED.
              </div>
              <div className="text-[9px] font-bold tracking-[0.1em] opacity-30 mt-2 italic">
                (Website designed and developed by Medhat Khalil)
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Action Button */}
      <a href="https://wa.me/966532875558" target="_blank" rel="noopener noreferrer" 
        className="fixed bottom-12 right-12 w-20 h-20 bg-[#25D366] rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.5)] hover:scale-125 hover:rotate-12 active:scale-90 transition-all z-50 animate-float group/wa">
        <MessageCircle size={44} strokeWidth={2.5} className="transition-transform duration-500 group-hover/wa:scale-110" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-4 border-black/20 animate-ping"></div>
      </a>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-12 left-12 w-16 h-16 rounded-2xl ${glassStyle} flex items-center justify-center transition-all duration-500 z-50 group hover:bg-blue-600 hover:border-blue-500 hover:scale-110 active:scale-90 ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={32} className="transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

      <style>{`
        @keyframes orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10%, 10%) scale(1.1); }
          66% { transform: translate(-5%, 15%) scale(0.9); }
        }
        @keyframes orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15%, -5%) scale(1.1); }
          66% { transform: translate(10%, -10%) scale(0.9); }
        }
        @keyframes orb-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10%, 10%) rotate(90deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0) scale(1.1) rotate(6deg); }
          50% { transform: translateY(-10px) scale(1.1) rotate(6deg); }
        }
        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        .animate-orb-1 { animation: orb-1 20s infinite ease-in-out; }
        .animate-orb-2 { animation: orb-2 25s infinite ease-in-out; }
        .animate-orb-3 { animation: orb-3 30s infinite ease-in-out; }
        .animate-shimmer { animation: shimmer 2s infinite ease-in-out; }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-icon-bounce { animation: icon-bounce 2s infinite ease-in-out; }
        .animate-icon-pulse { animation: icon-pulse 1.5s infinite ease-in-out; }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #020817; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 5px; border: 2px solid #020817; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
        
        .shadow-glow { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
      `}</style>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: any, title: string, value: string }> = ({ icon, title, value }) => (
  <div className="flex items-start gap-6 group cursor-default">
    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
      {icon}
    </div>
    <div className="transition-all duration-500 group-hover:translate-x-2">
      <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1 group-hover:text-blue-400 transition-colors">{title}</div>
      <div className="text-xl font-bold group-hover:text-white transition-colors">{value}</div>
    </div>
  </div>
);

export default App;
