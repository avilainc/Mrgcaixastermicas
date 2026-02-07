# 📊 Guia de Configuração - Analytics

Este guia explica como configurar o Google Analytics 4 e Meta Pixel no site.

## 🎯 Google Analytics 4 (GA4)

### 1. Obter o ID do GA4

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade GA4 (se ainda não tiver)
3. Vá em **Admin** → **Data Streams** → Selecione seu stream web
4. Copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 2. Configurar no Site

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Substitua `G-XXXXXXXXXX` pelo seu ID real.

### 3. Eventos Rastreados

O site já rastreia automaticamente:

- ✅ **PageView** - Visualizações de página
- ✅ **whatsapp_click** - Cliques nos botões WhatsApp (com origem)
- ✅ **phone_click** - Cliques nos botões de telefone
- ✅ **form_submit** - Envios do formulário de contato
- ✅ **quote_request** - Solicitações de orçamento
- ✅ **product_view** - Visualizações de produtos

---

## 📱 Meta Pixel (Facebook Pixel)

### 1. Obter o Pixel ID

1. Acesse [Meta Events Manager](https://business.facebook.com/events_manager/)
2. Selecione seu Pixel ou crie um novo
3. Copie o **Pixel ID** (número de 15-16 dígitos)

### 2. Configurar no Site

Adicione no arquivo `.env.local`:

```bash
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

Substitua pelo seu Pixel ID real.

### 3. Eventos Rastreados

O site já rastreia os seguintes eventos padrão do Facebook:

- ✅ **PageView** - Visualizações de página
- ✅ **Contact** - Cliques em WhatsApp e telefone
- ✅ **Lead** - Envios de formulário e solicitações de orçamento
- ✅ **ViewContent** - Visualizações de produtos

---

## 🚀 Deploy (GitHub Pages)

Para usar essas variáveis de ambiente no GitHub Pages, você precisa:

### Opção 1: Hardcode (Não Recomendado para Produção)

Edite os arquivos diretamente:

**`components/analytics/GoogleAnalytics.tsx`**
```typescript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Seu ID real
```

**`components/analytics/MetaPixel.tsx`**
```typescript
const PIXEL_ID = '123456789012345'; // Seu ID real
```

### Opção 2: GitHub Actions com Secrets (Recomendado)

1. Vá em **Settings** → **Secrets and variables** → **Actions**
2. Adicione os secrets:
   - `GA_ID` = seu Google Analytics ID
   - `META_PIXEL_ID` = seu Meta Pixel ID

3. Modifique `.github/workflows/deploy.yml` para adicionar:

```yaml
- name: Build with Next.js
  env:
    NEXT_PUBLIC_GA_ID: ${{ secrets.GA_ID }}
    NEXT_PUBLIC_META_PIXEL_ID: ${{ secrets.META_PIXEL_ID }}
  run: npm run build
```

---

## ✅ Testar Configuração

### Google Analytics
1. Instale a extensão [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Abra o site e verifique o console do navegador
3. Você deve ver eventos sendo enviados

### Meta Pixel
1. Instale a extensão [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/)
2. Abra o site e clique no ícone da extensão
3. Verá o Pixel carregando e eventos disparando

---

## 📈 Fontes de Conversão Rastreadas

O sistema rastreia a origem de cada conversão:

- `header_desktop` - Botão WhatsApp no header (desktop)
- `header_mobile` - Botão WhatsApp no header (mobile)
- `hero_button` - Botões na seção hero
- `specifications_section` - Botões na tabela de especificações
- `use_case_[nome]` - Botões em cada caso de uso específico

---

## 🔍 Verificar em Tempo Real

### Google Analytics
Acesse: **Reports** → **Realtime** para ver visitantes ao vivo

### Meta Pixel
Acesse: **Events Manager** → **Test Events** para ver eventos em tempo real

---

## 📞 Suporte

Para dúvidas sobre configuração:
- Google Analytics: [Documentação oficial](https://support.google.com/analytics/)
- Meta Pixel: [Documentação oficial](https://www.facebook.com/business/help/952192354843755)
