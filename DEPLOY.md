# Guia de Deploy - GitHub Pages

## 📋 Pré-requisitos

1. Conta no GitHub
2. Git instalado
3. Domínio mrgcaixastermicas.com.br configurado

## 🚀 Passo a Passo para Deploy

### 1️⃣ Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `mrgcaixastermicas`
3. Deixe como **Público**
4. **NÃO** inicialize com README, .gitignore ou license
5. Clique em "Create repository"

### 2️⃣ Inicializar Git e Fazer Push

Execute os comandos abaixo no terminal (PowerShell):

```powershell
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - MRG Caixas Térmicas"

# Adicionar o remote (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/mrgcaixastermicas.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Source: **GitHub Actions**
4. O deploy será automático após o push

### 4️⃣ Configurar Domínio Customizado

#### No GitHub:

1. Ainda em **Settings > Pages**
2. Em **Custom domain**, digite: `mrgcaixastermicas.com.br`
3. Clique em **Save**
4. Marque a opção **Enforce HTTPS** (aguarde alguns minutos)

#### No Registro.br (ou seu provedor DNS):

Configure os seguintes registros DNS:

**Para domínio raiz (mrgcaixastermicas.com.br):**

Tipo A - Adicione os 4 IPs do GitHub:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Para www (www.mrgcaixastermicas.com.br):**

Tipo CNAME:
```
SEU_USUARIO.github.io
```

**Exemplo no Registro.br:**

1. Acesse [registro.br](https://registro.br)
2. Faça login
3. Vá em "Meus Domínios"
4. Selecione mrgcaixastermicas.com.br
5. Clique em "Editar Zona"
6. Adicione os registros:

```
@       3600    IN    A       185.199.108.153
@       3600    IN    A       185.199.109.153
@       3600    IN    A       185.199.110.153
@       3600    IN    A       185.199.111.153
www     3600    IN    CNAME   SEU_USUARIO.github.io.
```

### 5️⃣ Verificar Deploy

1. Após o push, vá em **Actions** no seu repositório
2. Aguarde o workflow "Deploy to GitHub Pages" finalizar (2-5 minutos)
3. Acesse https://mrgcaixastermicas.com.br

⚠️ **Nota**: A propagação do DNS pode levar de 10 minutos a 48 horas

## 🔄 Atualizações Futuras

Para atualizar o site após mudanças:

```powershell
git add .
git commit -m "Descrição da atualização"
git push
```

O deploy será automático!

## ✅ Checklist

- [ ] Repositório criado no GitHub
- [ ] Código enviado com `git push`
- [ ] GitHub Pages configurado (Source: GitHub Actions)
- [ ] Workflow executado com sucesso (verificar na aba Actions)
- [ ] Domínio customizado configurado no GitHub
- [ ] Registros DNS configurados no Registro.br
- [ ] HTTPS ativado
- [ ] Site acessível em https://mrgcaixastermicas.com.br

## 🆘 Problemas Comuns

### Build falha no GitHub Actions
- Verifique na aba Actions o erro específico
- Certifique-se que todas as dependências estão no package.json

### Domínio não funciona
- Aguarde até 48h para propagação do DNS
- Verifique se os registros A e CNAME estão corretos
- Use [dnschecker.org](https://dnschecker.org) para verificar propagação

### HTTPS não ativa
- Aguarde alguns minutos após configurar o domínio
- Desmarque e marque novamente a opção "Enforce HTTPS"

## 📞 Suporte

Em caso de dúvidas, consulte:
- [Documentação GitHub Pages](https://docs.github.com/pages)
- [Configurar domínio customizado](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
