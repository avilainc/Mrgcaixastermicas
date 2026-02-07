import { FaIndustry, FaStore, FaTruck } from 'react-icons/fa';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: <FaStore />,
      title: 'Uso Comercial',
      description: 'Caixas térmicas para estabelecimentos comerciais, restaurantes, lanchonetes e padarias.',
      examples: [
        'Conservação de alimentos',
        'Delivery e transporte',
        'Armazenamento em estabelecimentos',
        'Eventos e catering',
      ],
    },
    {
      icon: <FaIndustry />,
      title: 'Uso Industrial',
      description: 'Soluções robustas para indústrias que necessitam de conservação térmica em seus processos.',
      examples: [
        'Controle de temperatura de processos',
        'Armazenamento industrial',
        'Laboratórios',
        'Indústria química e farmacêutica',
      ],
    },
    {
      icon: <FaTruck />,
      title: 'Transporte',
      description: 'Caixas térmicas especialmente desenvolvidas para transporte e logística de produtos.',
      examples: [
        'Transporte de alimentos',
        'Logística refrigerada',
        'Delivery de produtos sensíveis',
        'Distribuição comercial',
      ],
    },
  ];

  return (
    <section id="aplicacoes" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aplicações
          </h2>
          <p className="text-xl text-gray-600">
            Nossas caixas térmicas atendem diversos segmentos, oferecendo soluções 
            eficientes para conservação térmica em diferentes contextos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-3xl mb-6">
                {app.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {app.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {app.description}
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                  Exemplos de uso:
                </p>
                <ul className="space-y-2">
                  {app.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary-600 font-bold mt-1">→</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Não encontrou sua aplicação?
          </h3>
          <p className="text-xl mb-8 text-primary-50">
            Entre em contato conosco! Desenvolvemos projetos sob medida para atender 
            necessidades específicas de cada cliente.
          </p>
          <a
            href="#contato"
            className="inline-block bg-white text-primary-700 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Solicitar Projeto Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
