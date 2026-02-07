'use client';

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { trackWhatsAppClick, trackQuoteRequest } from '@/lib/analytics';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Caixas Térmicas Sob Medida para Sua Necessidade
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-50">
            Fabricação de caixas térmicas industriais e comerciais com alta durabilidade, 
            isolamento térmico eficiente e acabamento profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              onClick={() => trackQuoteRequest('hero_button')}
            >
              Solicitar Orçamento
            </a>
            <a
              href="https://wa.me/5517991622655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              onClick={() => trackWhatsAppClick('hero_button')}
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">431</div>
              <div className="text-primary-100">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">⭐⭐⭐</div>
              <div className="text-primary-100">3 Avaliações</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">14</div>
              <div className="text-primary-100">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Sob Medida</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
