'use client';

import { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp, FaWhatsapp } from 'react-icons/fa';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface Specification {
  litros: number;
  garrafas: string;
  dimExternas: {
    h: number;
    l: number;
    c: number;
  };
  dimInternas: {
    h: number;
    l: number;
    c: number;
  };
  peso: string;
  valorNormal: string;
  valorInox: string;
}

const SpecificationsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const specifications: Specification[] = [
    {
      litros: 9,
      garrafas: '10',
      dimExternas: { h: 27, l: 23, c: 28 },
      dimInternas: { h: 22, l: 18, c: 27 },
      peso: '3,2 KG',
      valorNormal: 'R$ 175,00',
      valorInox: 'R$ 310,00'
    },
    {
      litros: 15,
      garrafas: '12',
      dimExternas: { h: 26, l: 24, c: 34 },
      dimInternas: { h: 21, l: 19, c: 29 },
      peso: '3,5 KG',
      valorNormal: 'R$ 195,00',
      valorInox: 'R$ 345,00'
    },
    {
      litros: 25,
      garrafas: '24',
      dimExternas: { h: 34, l: 27, c: 44 },
      dimInternas: { h: 29, l: 22, c: 39 },
      peso: '5 KG',
      valorNormal: 'R$ 265,00',
      valorInox: 'R$ 415,00'
    },
    {
      litros: 40,
      garrafas: '36',
      dimExternas: { h: 40, l: 34, c: 50 },
      dimInternas: { h: 35, l: 29, c: 45 },
      peso: '8 KG',
      valorNormal: 'R$ 310,00',
      valorInox: 'R$ 500,00'
    },
    {
      litros: 50,
      garrafas: '48',
      dimExternas: { h: 40, l: 40, c: 51 },
      dimInternas: { h: 35, l: 35, c: 46 },
      peso: '9 KG',
      valorNormal: 'R$ 365,00',
      valorInox: 'R$ 555,00'
    },
    {
      litros: 70,
      garrafas: '60',
      dimExternas: { h: 45, l: 41, c: 62 },
      dimInternas: { h: 40, l: 36, c: 57 },
      peso: '13 KG',
      valorNormal: 'R$ 440,00',
      valorInox: 'R$ 665,00'
    },
    {
      litros: 100,
      garrafas: '72',
      dimExternas: { h: 50, l: 46, c: 67 },
      dimInternas: { h: 45, l: 41, c: 62 },
      peso: '14 KG',
      valorNormal: 'R$ 495,00',
      valorInox: 'R$ 750,00'
    },
    {
      litros: 120,
      garrafas: '96',
      dimExternas: { h: 54, l: 46, c: 76 },
      dimInternas: { h: 49, l: 41, c: 71 },
      peso: '17 KG',
      valorNormal: 'R$ 600,00',
      valorInox: 'R$ 935,00'
    },
    {
      litros: 180,
      garrafas: '120',
      dimExternas: { h: 65, l: 55, c: 87 },
      dimInternas: { h: 53, l: 45, c: 77 },
      peso: '22 KG',
      valorNormal: 'R$ 715,00',
      valorInox: 'R$ 1.023,00'
    },
    {
      litros: 250,
      garrafas: '180',
      dimExternas: { h: 70, l: 61, c: 95 },
      dimInternas: { h: 58, l: 51, c: 85 },
      peso: '32 KG',
      valorNormal: 'R$ 835,00',
      valorInox: 'R$ 1.155,00'
    },
    {
      litros: 380,
      garrafas: '240',
      dimExternas: { h: 80, l: 68, c: 107 },
      dimInternas: { h: 68, l: 58, c: 97 },
      peso: '39 KG',
      valorNormal: 'R$ 995,00',
      valorInox: 'R$ 1.350,00'
    },
  ];

  const specialProducts = [
    {
      nome: 'CAIXA DE VINHO',
      tipo: 'VINHO - 2 Garrafas',
      dimExternas: { h: 14, l: 20, c: 40 },
      dimInternas: { h: 12, l: 16, c: 36 },
      peso: '3 KG',
      valorNormal: 'R$ 210,00',
      valorInox: 'R$ 350,00'
    },
    {
      nome: 'CAIXA CHOPP 1 BARRIL',
      tipo: 'C/ ALÇAS - 1 Barril Heineken',
      dimExternas: { h: 24, l: 26, c: 34 },
      dimInternas: { h: 20, l: 22, c: 30 },
      peso: '3,2 KG',
      valorNormal: 'R$ 250,00',
      valorInox: '-'
    },
    {
      nome: 'CAIXA CHOPP 2 BARRIS',
      tipo: 'C/ ALÇAS - 2 Barris Heineken',
      dimExternas: { h: 24, l: 26, c: 55 },
      dimInternas: { h: 20, l: 22, c: 51 },
      peso: '4,5 KG',
      valorNormal: 'R$ 320,00',
      valorInox: '-'
    },
  ];

  const filteredSpecs = specifications.filter(spec =>
    spec.litros.toString().includes(searchTerm) ||
    spec.garrafas.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="especificacoes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tabela de Tamanhos e Capacidades
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o tamanho ideal para sua necessidade
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por litros ou capacidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Simplified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header - Main Info */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{spec.litros}L</div>
                  <div className="text-primary-100 text-lg">
                    Até {spec.garrafas} garrafas
                  </div>
                </div>
              </div>

              {/* Card Body - Prices */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Normal Price */}
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Galvanizado/Pintado</span>
                    <span className="text-xl font-bold text-green-600">{spec.valorNormal}</span>
                  </div>

                  {/* Inox Price */}
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Inox</span>
                    <span className="text-xl font-bold text-blue-600">{spec.valorInox}</span>
                  </div>

                  {/* Expandable Details Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200 border border-primary-200"
                  >
                    <span className="font-medium">
                      {expandedCard === index ? 'Ocultar Detalhes' : 'Ver Detalhes Técnicos'}
                    </span>
                    {expandedCard === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {/* Expanded Technical Details */}
                  {expandedCard === index && (
                    <div className="pt-4 border-t space-y-3 animate-fadeIn">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Dimensões Externas (cm)</div>
                        <div className="font-semibold text-gray-900">
                          A: {spec.dimExternas.h} × L: {spec.dimExternas.l} × C: {spec.dimExternas.c}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Dimensões Internas (cm)</div>
                        <div className="font-semibold text-gray-900">
                          A: {spec.dimInternas.h} × L: {spec.dimInternas.l} × C: {spec.dimInternas.c}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Peso Aproximado</div>
                        <div className="font-semibold text-gray-900">{spec.peso}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Products */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Produtos Especiais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4">
                  <h4 className="font-bold text-lg">{product.nome}</h4>
                  <p className="text-sm text-primary-100">{product.tipo}</p>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dimensões Ext:</span>
                    <span className="font-semibold">{product.dimExternas.h}×{product.dimExternas.l}×{product.dimExternas.c} cm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dimensões Int:</span>
                    <span className="font-semibold">{product.dimInternas.h}×{product.dimInternas.l}×{product.dimInternas.c} cm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Peso:</span>
                    <span className="font-semibold">{product.peso}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">A partir de:</span>
                      <span className="text-xl font-bold text-green-600">{product.valorNormal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Informações Importantes</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>Valores de referência sujeitos a alteração</li>
                  <li>Prazo de entrega: 15 a 20 dias</li>
                  <li>Projetos sob medida: solicite orçamento personalizado</li>
                  <li>Disponível em diversos materiais: Galvanizado, Pintado, Inox e Alumínio</li>
                  <li>Tampa fechada de 1 barril: R$ 40,00 (adicional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Solicite seu Orçamento Personalizado
          </h3>
          <p className="text-gray-600 mb-6">
            Entre em contato para valores atualizados e condições especiais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:17991622655"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              onClick={() => trackPhoneClick('specifications_section')}
            >
              📞 (17) 99162-2655
            </a>
            <a
              href="https://wa.me/5517991622655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              onClick={() => trackWhatsAppClick('specifications_section')}
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
