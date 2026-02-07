'use client';

import { useState } from 'react';
import { FaSearch, FaRulerCombined, FaWeight, FaBox, FaWhatsapp } from 'react-icons/fa';

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
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const specifications: Specification[] = [
    {
      litros: 9,
      garrafas: '1 CX DE LATA',
      dimExternas: { h: 20, l: 18, c: 31 },
      dimInternas: { h: 15, l: 21, c: 27 },
      peso: '3 KG',
      valorNormal: 'R$ 225,00',
      valorInox: 'R$ 374,00'
    },
    {
      litros: 15,
      garrafas: '1 CX DE LATA + PET 2L',
      dimExternas: { h: 28, l: 23, c: 41 },
      dimInternas: { h: 22, l: 19, c: 37 },
      peso: '5 KG',
      valorNormal: 'R$ 255,00',
      valorInox: 'R$ 432,00'
    },
    {
      litros: 25,
      garrafas: '2 CXS DE LATA + PET 2L',
      dimExternas: { h: 36, l: 34, c: 45 },
      dimInternas: { h: 26, l: 26, c: 37 },
      peso: '6 KG',
      valorNormal: 'R$ 305,00',
      valorInox: 'R$ 484,00'
    },
    {
      litros: 40,
      garrafas: '16',
      dimExternas: { h: 37, l: 35, c: 66 },
      dimInternas: { h: 26, l: 27, c: 58 },
      peso: '10 KG',
      valorNormal: 'R$ 385,00',
      valorInox: 'R$ 605,00'
    },
    {
      litros: 50,
      garrafas: '20',
      dimExternas: { h: 40, l: 42, c: 67 },
      dimInternas: { h: 28, l: 32, c: 57 },
      peso: '12 KG',
      valorNormal: 'R$ 445,00',
      valorInox: 'R$ 682,00'
    },
    {
      litros: 70,
      garrafas: '40',
      dimExternas: { h: 45, l: 42, c: 77 },
      dimInternas: { h: 33, l: 32, c: 67 },
      peso: '16 KG',
      valorNormal: 'R$ 505,00',
      valorInox: 'R$ 748,00'
    },
    {
      litros: 100,
      garrafas: '60',
      dimExternas: { h: 50, l: 48, c: 80 },
      dimInternas: { h: 38, l: 38, c: 70 },
      peso: '18 KG',
      valorNormal: 'R$ 565,00',
      valorInox: 'R$ 858,00'
    },
    {
      litros: 120,
      garrafas: '80',
      dimExternas: { h: 53, l: 48, c: 85 },
      dimInternas: { h: 42, l: 38, c: 75 },
      peso: '20 KG',
      valorNormal: 'R$ 620,00',
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

  return (
    <section id="especificacoes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tabela de Tamanhos e Capacidades
          </h2>
          <p className="text-xl text-gray-600">
            Especificações técnicas detalhadas de todos os nossos modelos
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

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-md flex items-center gap-3">
            <div className="bg-primary-100 p-3 rounded-lg">
              <FaBox className="text-primary-600 text-2xl" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{specifications.length}</div>
              <div className="text-sm text-gray-600">Tamanhos Disponíveis</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <FaRulerCombined className="text-green-600 text-2xl" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">9L - 380L</div>
              <div className="text-sm text-gray-600">Faixa de Capacidade</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaWeight className="text-orange-600 text-2xl" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3 - 39 KG</div>
              <div className="text-sm text-gray-600">Variação de Peso</div>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Capacidade</th>
                  <th className="px-4 py-4 text-left">Garrafas 600ml</th>
                  <th className="px-4 py-4 text-center" colSpan={3}>Dimensões Externas (cm)</th>
                  <th className="px-4 py-4 text-center" colSpan={3}>Dimensões Internas (cm)</th>
                  <th className="px-4 py-4 text-center">Peso</th>
                  <th className="px-4 py-4 text-center" colSpan={2}>Valores Referência</th>
                </tr>
                <tr className="bg-primary-700">
                  <th className="px-4 py-2 text-left text-sm">Litros</th>
                  <th className="px-4 py-2 text-left text-sm"></th>
                  <th className="px-4 py-2 text-center text-sm">H</th>
                  <th className="px-4 py-2 text-center text-sm">L</th>
                  <th className="px-4 py-2 text-center text-sm">C</th>
                  <th className="px-4 py-2 text-center text-sm">H</th>
                  <th className="px-4 py-2 text-center text-sm">L</th>
                  <th className="px-4 py-2 text-center text-sm">C</th>
                  <th className="px-4 py-2 text-center text-sm">KG</th>
                  <th className="px-4 py-2 text-center text-sm">Normal</th>
                  <th className="px-4 py-2 text-center text-sm">Inox</th>
                </tr>
              </thead>
              <tbody>
                {filteredSpecs.map((spec, index) => (
                  <tr
                    key={index}
                    onClick={() => setSelectedSize(selectedSize === index ? null : index)}
                    className={`border-b border-gray-200 hover:bg-primary-50 cursor-pointer transition-colors ${
                      selectedSize === index ? 'bg-primary-100' : ''
                    }`}
                  >
                    <td className="px-4 py-4 font-bold text-primary-700">{spec.litros}L</td>
                    <td className="px-4 py-4 text-gray-700 text-sm">{spec.garrafas}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{spec.dimExternas.h}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{spec.dimExternas.l}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{spec.dimExternas.c}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{spec.dimInternas.h}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{spec.dimInternas.l}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{spec.dimInternas.c}</td>
                    <td className="px-4 py-4 text-center font-semibold text-gray-900">{spec.peso}</td>
                    <td className="px-4 py-4 text-center font-semibold text-green-600">{spec.valorNormal}</td>
                    <td className="px-4 py-4 text-center font-semibold text-blue-600">{spec.valorInox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {filteredSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-600 text-white p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold">{spec.litros}L</div>
                    <div className="text-sm text-primary-100">{spec.garrafas}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">Peso</div>
                    <div className="text-2xl font-bold">{spec.peso}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Dim. Externas (cm)</div>
                    <div className="font-semibold text-gray-900">
                      {spec.dimExternas.h} × {spec.dimExternas.l} × {spec.dimExternas.c}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Dim. Internas (cm)</div>
                    <div className="font-semibold text-gray-900">
                      {spec.dimInternas.h} × {spec.dimInternas.l} × {spec.dimInternas.c}
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-3 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">Normal</div>
                    <div className="font-bold text-green-600">{spec.valorNormal}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Inox</div>
                    <div className="font-bold text-blue-600">{spec.valorInox}</div>
                  </div>
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
            >
              📞 (17) 99162-2655
            </a>
            <a
              href="https://wa.me/5517991622655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
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
