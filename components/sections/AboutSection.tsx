import { FaIndustry, FaAward, FaUsers, FaTools } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaIndustry />,
      title: 'Fabricação Industrial',
      description: 'Indústria especializada com processos otimizados e equipamentos de ponta.',
    },
    {
      icon: <FaAward />,
      title: 'Alta Qualidade',
      description: 'Produtos com alta durabilidade e acabamento profissional.',
    },
    {
      icon: <FaUsers />,
      title: 'Atendimento Personalizado',
      description: 'Soluções desenvolvidas de acordo com a necessidade de cada cliente.',
    },
    {
      icon: <FaTools />,
      title: 'Projetos Sob Medida',
      description: 'Desde pequenas demandas até grandes projetos customizados.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a MRG Caixas Térmicas
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A MRG Caixas Térmicas é uma indústria especializada na fabricação de caixas 
            térmicas industriais e comerciais, desenvolvidas de acordo com a necessidade de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Produção com Alta Durabilidade e Isolamento Térmico Eficiente
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Nossos produtos são fabricados com materiais de primeira qualidade, 
              garantindo isolamento térmico eficiente e acabamento profissional que 
              atendem aos mais altos padrões de qualidade do mercado.
            </p>
            <a
              href="#contato"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
