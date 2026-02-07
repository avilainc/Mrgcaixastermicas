import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MRG Caixas Térmicas</h3>
            <p className="text-sm leading-relaxed">
              Indústria especializada na fabricação de caixas térmicas industriais e comerciais, 
              desenvolvidas de acordo com a necessidade de cada cliente.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5517321656672"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-primary-400 transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-primary-400 transition-colors">
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a href="#casos-de-uso" className="hover:text-primary-400 transition-colors">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#especificacoes" className="hover:text-primary-400 transition-colors">
                  Tamanhos e Preços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span>
                  Av. Otáviano Fava, nº 9560<br />
                  São José do Rio Preto – SP<br />
                  CEP: 15086-010
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-400" />
                <a href="tel:1732165672" className="hover:text-primary-400">(17) 3216-5672</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:contato@mrgcaixastermicas.com.br" className="hover:text-primary-400">contato@mrgcaixastermicas.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} MRG Caixas Térmicas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
