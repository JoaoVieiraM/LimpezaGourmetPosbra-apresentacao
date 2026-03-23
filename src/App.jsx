import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowUpRight, Menu, X } from 'lucide-react';
import './App.css';

import logoImg from './assets/logodourada.png';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';

function App() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo cursor-pointer" onClick={() => scrollToSection('home')}>
           <img src={logoImg} alt="Limpeza Gourmet Logo" className="logo-img" />
           <span className="logo-text serif">Limpeza Gourmet</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} color="#C9A24D" /> : <Menu size={32} color="#C9A24D" />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('sobre')}>Sobre a Excelência</li>
          <li onClick={() => scrollToSection('solucoes')}>Soluções</li>
          <li onClick={() => scrollToSection('contato')}>Contato</li>
          <li className="mobile-cta">
             <button className="gold-btn btn-small" onClick={() => window.open('https://wa.me/5511917477832?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Premium!', '_blank')}>Orçamento</button>
          </li>
        </ul>
        <button className="gold-btn btn-small desktop-cta" onClick={() => window.open('https://wa.me/5511917477832?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Premium!', '_blank')}>Orçamento</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div style={{ y: yHero }} className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title serif"
          >
            excelência<br/>técnica.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-subtitle"
          >
            A parceria essencial para arquitetura e engenharia.<br/>
            Redefinindo a pureza no pós-obra.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-stats"
          >
            <div className="stat">
              <span className="stat-num serif">+100h</span>
              <span className="stat-label">Treinamento<br/>Especializado</span>
            </div>
            <div className="stat">
              <span className="stat-num serif">100%</span>
              <span className="stat-label">Garantia de<br/>Satisfação</span>
            </div>
            <button className="circle-btn" onClick={() => scrollToSection('sobre')} aria-label="Ir para Sobre">
              <ArrowUpRight size={28} />
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hero-image-wrapper"
        >
           <img src={img3} alt="Limpeza Fina" className="hero-image" />
           <div className="badge"><Sparkles size={20}/> Limpeza Fina</div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            Metodologia Bermuda & UK • Química Avançada • Staff Certificado • Acabamento Fino • Metodologia Bermuda & UK • Química Avançada • Staff Certificado • Acabamento Fino •
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about-section">
        <div className="about-bg-text serif">sobre. sobre. sobre.</div>
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="about-image-wrapper"
          >
             <img src={img1} alt="Sobre nosso padrão" className="about-image" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="about-text"
          >
            <h2 className="serif">Elevando o Padrão da Entrega Final</h2>
            <p>
              Compreendemos que a conclusão de um projeto arquitetônico ou de engenharia de alto padrão 
              exige um acabamento impecável. Nossa expertise vai além da limpeza convencional, posicionando-nos 
              como seu parceiro estratégico para garantir que cada detalhe de sua obra seja entregue com a 
              perfeição que seus clientes e seu renome exigem.
            </p>
            <ul className="benefits-list">
              <li><CheckCircle2 color="var(--color-gold)"/> Remoção minuciosa de resíduos técnica internacional</li>
              <li><CheckCircle2 color="var(--color-gold)"/> Produtos biodegradáveis de padrão europeu</li>
              <li><CheckCircle2 color="var(--color-gold)"/> Proteção em mármores, metais e estofados</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="solucoes" className="services-section">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="services-title serif"
        >soluções.</motion.h2>
        <div className="services-grid">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="service-card large"
            style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
           >
             <div className="service-card-content">
               <h3>Pós-Obra Premium</h3>
               <p>Remoção de resíduos e proteção essencial para empreendimentos de alto padrão após o término da obra.</p>
             </div>
           </motion.div>
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="service-card medium"
            style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
           >
             <div className="service-card-content">
               <h3>Facilities Executive</h3>
               <p>Gestão de nível executivo para residências e escritórios corporativos premium.</p>
             </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ delay: 0.5 }}
             className="service-card medium"
             style={{ backgroundImage: `url(${img5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
           >
             <div className="service-card-content">
               <h3>Revitalização Nobre</h3>
               <p>Restauro especializado para mármores, metais, lustres e estofados valiosos.</p>
             </div>
           </motion.div>
        </div>
      </section>
      
      {/* Footer / CTA */}
      <footer id="contato" className="footer">
        <div className="footer-content">
           <div className="footer-cta">
             <h2 className="serif">Auditoria Pós-Limpeza.</h2>
             <p>Qualidade comprovada no detalhe.</p>
           </div>
           <a href="https://wa.me/5511917477832?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Premium!" target="_blank" rel="noreferrer">
             <button className="gold-btn">Solicitação de Orçamento</button>
           </a>
        </div>
        <div className="footer-bottom">
           <span>© 2026 Limpeza Gourmet | Premium Excellence</span>
           <div className="footer-links">
             <a href="https://wa.me/5511917477832?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20Premium!" target="_blank" rel="noreferrer">Orçamento</a>
             <a href="https://www.limpezagourmet.com.br/higienizacao" target="_blank" rel="noreferrer">Higienização de Estofados</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
