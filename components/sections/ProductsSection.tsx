'use client';

import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
}

const ProductsSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const materials = [
    {
      name: 'Galvanizadas',
      description: 'Caixas térmicas em chapa galvanizada, ideais para ambientes industriais. Resistência à corrosão e durabilidade excepcional.',
      features: [
        'Alta resistência à corrosão',
        'Excelente relação custo-benefício',
        'Ideal para uso industrial',
        'Longa durabilidade',
      ],
      image: '🛡️',
    },
    {
      name: 'Pintadas',
      description: 'Caixas térmicas com acabamento em pintura eletrostática. Acabamento profissional com ampla variedade de cores.',
      features: [
        'Acabamento profissional',
        'Variedade de cores',
        'Proteção anticorrosiva',
        'Estética personalizada',
      ],
      image: '🎨',
    },
    {
      name: 'Inox',
      description: 'Caixas térmicas em aço inoxidável, perfeitas para ambientes que exigem higiene rigorosa e resistência química.',
      features: [
        'Máxima higiene',
        'Resistência química superior',
        'Fácil limpeza',
        'Durabilidade incomparável',
      ],
      image: '✨',
    },
    {
      name: 'Alumínio',
      description: 'Caixas térmicas em alumínio, leves e com excelente condutividade térmica. Ideais para aplicações específicas.',
      features: [
        'Leveza excepcional',
        'Boa condutividade térmica',
        'Resistente à oxidação',
        'Fácil manuseio',
      ],
      image: '⚡',
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600">
            Fabricamos caixas térmicas em diversos materiais, atendendo diferentes necessidades 
            e aplicações industriais e comerciais.
          </p>
        </div>

        {/* Material Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {materials.map((material, index) => (
            <button
              key={index}
              onClick={() => setSelectedMaterial(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedMaterial === index
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {material.name}
            </button>
          ))}
        </div>

        {/* Selected Material Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center md:text-left">
                {materials[selectedMaterial].image}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Caixas Térmicas {materials[selectedMaterial].name}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {materials[selectedMaterial].description}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Características:
              </h4>
              <ul className="space-y-3">
                {materials[selectedMaterial].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sizes Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📏 Tamanhos Disponíveis
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Modelos padronizados para demandas imediatas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Projetos sob medida conforme necessidade do cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>Desde pequenas até grandes dimensões</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-600 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              💬 Solicite seu Orçamento
            </h3>
            <p className="mb-6">
              Entre em contato para receber uma cotação personalizada 
              para sua necessidade específica.
            </p>
            <a
              href="#contato"
              className="inline-block bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
