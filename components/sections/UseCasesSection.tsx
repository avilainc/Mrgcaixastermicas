'use client';

import { useState } from 'react';
import { FaUtensils, FaBiking, FaIndustry, FaGlassCheers, FaHospital, FaStore, FaFish, FaIceCream, FaBirthdayCake, FaTruck, FaFlask, FaHamburger } from 'react-icons/fa';

interface UseCase {
  icon: JSX.Element;
  persona: string;
  sector: string;
  problem: string;
  solution: string;
  recommendation: string;
  benefits: string[];
  color: string;
}

const UseCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const useCases: UseCase[] = [
    {
      icon: <FaUtensils />,
      persona: 'Restaurante e Lanchonete',
      sector: 'Alimentação',
      problem: 'Preciso manter bebidas geladas durante todo o expediente sem depender só da geladeira, economizando energia e tendo acesso rápido.',
      solution: 'Caixas térmicas de 70L a 180L mantêm bebidas geladas por horas. Basta adicionar gelo pela manhã e suas bebidas ficam prontas para servir o dia todo, reduzindo a abertura da geladeira e economizando energia.',
      recommendation: 'Recomendado: 70L (40 garrafas), 100L (60 garrafas) ou 180L (120 garrafas)',
      benefits: ['Economia de energia elétrica', 'Acesso rápido às bebidas', 'Menos desgaste da geladeira', 'Bebidas sempre na temperatura ideal'],
      color: 'orange'
    },
    {
      icon: <FaBiking />,
      persona: 'Delivery e Motoboy',
      sector: 'Entregas',
      problem: 'Faço entregas de comida e preciso garantir que os alimentos cheguem na temperatura certa, mas minha mochila térmica comum não aguenta o dia todo.',
      solution: 'Caixas térmicas de 25L a 50L são perfeitas para motos. Feitas sob medida para seu baú, mantêm alimentos quentes ou frios por horas, mesmo no calor intenso ou sol forte.',
      recommendation: 'Recomendado: 25L, 40L ou 50L (sob medida para seu baú)',
      benefits: ['Temperatura garantida nas entregas', 'Durabilidade industrial', 'Sob medida para sua moto', 'Mais gorjetas com qualidade'],
      color: 'blue'
    },
    {
      icon: <FaHospital />,
      persona: 'Farmácia e Clínica',
      sector: 'Saúde',
      problem: 'Preciso transportar medicamentos termolábeis e vacinas mantendo a cadeia de frio rigorosa, com controle de temperatura certificado.',
      solution: 'Caixas térmicas em inox com isolamento hospitalar garantem a temperatura estável por até 24h. Material inox permite higienização completa e atende normas sanitárias da ANVISA.',
      recommendation: 'Recomendado: 15L a 50L em INOX (higienizável)',
      benefits: ['Conformidade com ANVISA', 'Higienização total', 'Segurança da cadeia de frio', 'Durabilidade hospitalar'],
      color: 'green'
    },
    {
      icon: <FaGlassCheers />,
      persona: 'Eventos e Festas',
      sector: 'Eventos',
      problem: 'Organizo eventos e festas, preciso de grande volume de bebidas geladas sem precisar de vários isopores descartáveis que quebram facilmente.',
      solution: 'Caixas de 100L a 380L comportam centenas de bebidas. Com design profissional em alumínio ou pintado, ficam bonitas no evento e podem ser reutilizadas infinitas vezes.',
      recommendation: 'Recomendado: 180L (120 garrafas), 250L (180 garrafas) ou 380L (240 garrafas)',
      benefits: ['Volume para grandes eventos', 'Aparência profissional', 'Reutilizável (economia)','Marca sua empresa'],
      color: 'purple'
    },
    {
      icon: <FaFish />,
      persona: 'Peixaria e Açougue',
      sector: 'Comércio Alimentício',
      problem: 'Preciso manter produtos perecíveis frescos na área de venda, mas não tenho espaço para mais refrigeradores e o consumo de energia já está alto.',
      solution: 'Caixas de 70L a 180L em inox mantêm peixes, carnes e frios na temperatura ideal durante o expediente. Fácil limpeza, higiênicas e com economia de até 70% na energia.',
      recommendation: 'Recomendado: 70L a 180L em INOX (fácil higienização)',
      benefits: ['Higiene impecável (inox)', 'Economia de energia', 'Produtos mais frescos', 'Conformidade sanitária'],
      color: 'cyan'
    },
    {
      icon: <FaIndustry />,
      persona: 'Indústria Alimentícia',
      sector: 'Industrial',
      problem: 'Preciso transportar matéria-prima entre setores da fábrica mantendo temperatura controlada, com durabilidade para uso intenso diário.',
      solution: 'Caixas industriais de 100L a 380L em aço galvanizado suportam uso pesado 24/7. Isolamento reforçado mantém temperatura por até 12h mesmo em ambientes quentes.',
      recommendation: 'Recomendado: 100L a 380L galvanizado (uso industrial)',
      benefits: ['Resistência industrial', 'Uso 24/7 sem desgaste', 'Controle de processo', 'ROI em 6 meses'],
      color: 'gray'
    },
    {
      icon: <FaIceCream />,
      persona: 'Sorveteria e Açaí',
      sector: 'Alimentação',
      problem: 'Vendo sorvete/açaí em eventos externos e feiras, mas o freezer portátil consome muita energia e dependo de tomadas.',
      solution: 'Caixas de 40L a 120L com gelo seco ou gelo comum mantêm sorvetes e açaí congelados por 6-8h sem energia elétrica. Perfeito para feiras, praias e eventos.',
      recommendation: 'Recomendado: 40L, 70L ou 120L (autonomia sem energia)',
      benefits: ['Independência de energia', 'Mobilidade total', 'Baixo investimento', 'Venda em qualquer lugar'],
      color: 'pink'
    },
    {
      icon: <FaTruck />,
      persona: 'Distribuidor e Atacado',
      sector: 'Logística',
      problem: 'Faço distribuição de bebidas e alimentos, mas as caixas de isopor quebram fácil e dão prejuízo. Preciso de algo durável para o dia a dia.',
      solution: 'Caixas de 120L a 380L em material galvanizado ou alumínio são indestrutíveis. Investimento se paga em 3 meses comparado à reposição contínua de isopor.',
      recommendation: 'Recomendado: 180L, 250L ou 380L (alta durabilidade)',
      benefits: ['Durabilidade de anos', 'Economia vs isopor', 'Imagem profissional', 'Menos quebras e perdas'],
      color: 'yellow'
    },
    {
      icon: <FaFlask />,
      persona: 'Laboratório',
      sector: 'Científico',
      problem: 'Transporto amostras biológicas que exigem temperatura controlada constante, com rastreabilidade e segurança.',
      solution: 'Caixas térmicas de 9L a 40L em inox com vedação hermética mantêm temperatura estável. Material inox não contamina e permite desinfecção química completa.',
      recommendation: 'Recomendado: 9L, 15L ou 25L em INOX',
      benefits: ['Segurança das amostras', 'Desinfecção total', 'Temperatura estável', 'Conformidade laboratorial'],
      color: 'indigo'
    },
    {
      icon: <FaBirthdayCake />,
      persona: 'Confeitaria',
      sector: 'Alimentação',
      problem: 'Entrego bolos e doces decorados, mas com o calor eles derretem no transporte. Preciso garantir que cheguem perfeitos.',
      solution: 'Caixas de 25L a 70L sob medida para suas embalagens mantêm temperatura controlada. Seus bolos chegam intactos mesmo em dias de 35°C+.',
      recommendation: 'Recomendado: 25L, 40L ou 70L (sob medida)',
      benefits: ['Decoração intacta', 'Menos reclamações', 'Entregas mais longas', 'Diferencial competitivo'],
      color: 'rose'
    },
    {
      icon: <FaHamburger />,
      persona: 'Food Truck',
      sector: 'Alimentação Móvel',
      problem: 'Meu food truck não tem espaço para geladeira grande, mas preciso manter ingredientes frescos e bebidas geladas o dia todo.',
      solution: 'Caixas de 70L a 180L sob medida para seu espaço substituem geladeiras. Sem consumo de energia, mais espaço útil e ingredientes sempre frescos.',
      recommendation: 'Recomendado: 70L, 100L ou 180L (sob medida)',
      benefits: ['Economia de energia', 'Mais espaço no truck', 'Ingredientes frescos', 'Menos investimento'],
      color: 'red'
    },
    {
      icon: <FaStore />,
      persona: 'Mercado e Conveniência',
      sector: 'Varejo',
      problem: 'Clientes reclamam que as bebidas na prateleira não estão geladas e minha geladeira fica sobrecarregada.',
      solution: 'Caixas expositor de 100L a 250L ficam no salão, mantêm bebidas geladas e atraem clientes. Economia de energia e aumento nas vendas de bebidas.',
      recommendation: 'Recomendado: 100L, 120L ou 180L (expositor)',
      benefits: ['Aumento de vendas', 'Economia de energia', 'Atração visual', 'ROI em 4 meses'],
      color: 'teal'
    },
  ];

  const colorClasses: Record<string, string> = {
    orange: 'from-orange-500 to-orange-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    gray: 'from-gray-600 to-gray-700',
    pink: 'from-pink-500 to-pink-600',
    yellow: 'from-yellow-500 to-yellow-600',
    indigo: 'from-indigo-500 to-indigo-600',
    rose: 'from-rose-500 to-rose-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600',
  };

  return (
    <section id="casos-de-uso" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Reais para o Seu Negócio
          </h2>
          <p className="text-xl text-gray-600">
            Veja como empresas e profissionais como você já estão resolvendo seus desafios 
            de conservação térmica com nossas caixas
          </p>
        </div>

        {/* Sector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCase === index
                  ? `bg-gradient-to-r ${colorClasses[useCase.color]} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{useCase.icon}</span>
              <span className="hidden sm:inline">{useCase.persona}</span>
            </button>
          ))}
        </div>

        {/* Selected Use Case */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r ${colorClasses[useCases[selectedCase].color]} text-white p-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{useCases[selectedCase].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold">{useCases[selectedCase].persona}</h3>
                  <p className="text-white/90 text-lg">{useCases[selectedCase].sector}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-8">
              {/* Problem */}
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">😓</span>
                  <span className="text-xl">O Problema</span>
                </h4>
                <p className="text-red-800 text-lg leading-relaxed">
                  &ldquo;{useCases[selectedCase].problem}&rdquo;
                </p>
              </div>

              {/* Solution */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-xl">Nossa Solução</span>
                </h4>
                <p className="text-green-800 text-lg leading-relaxed mb-4">
                  {useCases[selectedCase].solution}
                </p>
                <div className="bg-green-100 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-green-900">
                    {useCases[selectedCase].recommendation}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-xl">
                  <span className="text-2xl">🎯</span>
                  Benefícios Diretos para Você
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {useCases[selectedCase].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg">
                      <span className="text-blue-500 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center text-white">
                <h4 className="text-2xl font-bold mb-3">
                  Essa é a sua situação?
                </h4>
                <p className="text-primary-50 mb-6 text-lg">
                  Fale com nossos especialistas e receba uma solução personalizada para o seu caso
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                  >
                    Solicitar Orçamento Agora
                  </a>
                  <a
                    href="https://wa.me/5517321656672?text=Olá! Vi o caso de uso de *{useCases[selectedCase].persona}* no site e preciso de uma solução assim."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-xl">💬</span>
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-sm text-gray-700">Setores Atendidos</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-700">Sob Medida</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">15-20</div>
            <div className="text-sm text-gray-700">Dias Entrega</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-sm text-gray-700">Durabilidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
