# MRG Caixas Térmicas - Website

Site institucional da MRG Caixas Térmicas, desenvolvido com Next.js 14 e TypeScript.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS utilitário
- **React Icons** - Biblioteca de ícones

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn, pnpm ou bun

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:

```bash
cd d:\Projetos\MRGCaixasTermicas
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🏃 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
MRGCaixasTermicas/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Footer.tsx          # Rodapé
│   └── sections/
│       ├── HeroSection.tsx              # Seção hero/banner
│       ├── AboutSection.tsx             # Sobre a empresa
│       ├── ProductsSection.tsx          # Produtos
│       ├── ApplicationsSection.tsx      # Aplicações
│       ├── SpecificationsSection.tsx    # Tamanhos, capacidades e preços
│       └── ContactSection.tsx           # Contato e localização
├── public/                  # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Seções do Site

### 1. Hero Section
- Banner principal com chamada para ação
- Estatísticas da empresa
- Botões de contato (WhatsApp e formulário)

### 2. Sobre
- Informações institucionais
- Diferenciais da empresa
- Características dos produtos

### 3. Produtos
- Materiais disponíveis (Galvanizado, Pintado, Inox, Alumínio)
- Características de cada material
- Informações sobre tamanhos
- Interface interativa com tabs

### 4. Aplicações
- Uso comercial
- Uso industrial
- Transporte e logística

### 5. Tamanhos e Capacidades ⭐ NOVO!
- **Tabela completa** com especificações técnicas
- Capacidades de 9L até 380L
- Dimensões externas e internas detalhadas
- Peso de cada modelo
- **Valores de referência** (Normal e Inox)
- **Busca interativa** por capacidade
- **Produtos especiais**: Caixa de Vinho, Chopeiras
- **Responsivo**: cards para mobile, tabela completa para desktop
- Informações sobre prazo de entrega e condições

### 6. Contato
- Formulário de contato integrado com WhatsApp
- Informações de contato
- Localização com Google Maps
- Horário de atendimento

## 📞 Configurações Importantes

### WhatsApp e Telefone
O número de telefone e WhatsApp já está configurado como: **(17) 99162-2655**

Formato internacional: `5517991622655`

Este número está presente nos seguintes arquivos:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ContactSection.tsx`
- `components/sections/SpecificationsSection.tsx`

### Preços e Especificações
Os valores de referência na seção "Tamanhos e Capacidades" foram baseados na tabela fornecida:
- Valores para materiais normais (galvanizado/pintado)
- Valores para material INOX
- Prazo de entrega: 15 a 20 dias
- Tampa fechada de barril: R$ 40,00 (adicional)

**Nota**: Estes valores são de referência e podem ser atualizados em `components/sections/SpecificationsSection.tsx`

### Informações de Contato
Atualize as informações em:
- `components/Footer.tsx`
- `components/sections/ContactSection.tsx`

### Google Maps
Atualize o embed do mapa em `components/sections/ContactSection.tsx` com o endereço correto.

## 🎨 Personalização de Cores

As cores principais podem ser alteradas em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ...
    900: '#0c4a6e',
  },
}
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🌐 Deploy

### Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório
3. Configure e faça o deploy

### Outros serviços

O projeto pode ser hospedado em qualquer serviço que suporte Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Etc.

## 📄 Licença

© 2026 MRG Caixas Térmicas. Todos os direitos reservados.

## 🤝 Suporte

Para suporte, entre em contato através do site [mrgcaixastermicas.com.br](https://mrgcaixastermicas.com.br)
