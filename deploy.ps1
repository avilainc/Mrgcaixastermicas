#!/usr/bin/env pwsh

# Script de Deploy - MRG Caixas Térmicas
# Execute este script após criar o repositório no GitHub

Write-Host "🚀 Deploy MRG Caixas Térmicas para GitHub Pages" -ForegroundColor Cyan
Write-Host ""

# Solicitar usuário do GitHub
$githubUser = Read-Host "Digite seu usuário do GitHub"

if ([string]::IsNullOrWhiteSpace($githubUser)) {
    Write-Host "❌ Usuário não pode estar vazio!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Configurando remote..." -ForegroundColor Yellow

# Remover remote anterior se existir
git remote remove origin 2>$null

# Adicionar novo remote
$repoUrl = "https://github.com/$githubUser/mrgcaixastermicas.git"
git remote add origin $repoUrl

Write-Host "✅ Remote configurado: $repoUrl" -ForegroundColor Green
Write-Host ""
Write-Host "📤 Enviando código para GitHub..." -ForegroundColor Yellow

# Fazer push
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deploy iniciado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1️⃣  Acesse: https://github.com/$githubUser/mrgcaixastermicas/settings/pages" -ForegroundColor White
    Write-Host "2️⃣  Em 'Source', selecione 'GitHub Actions'" -ForegroundColor White
    Write-Host "3️⃣  Aguarde o deploy em: https://github.com/$githubUser/mrgcaixastermicas/actions" -ForegroundColor White
    Write-Host "4️⃣  Configure o domínio customizado: mrgcaixastermicas.com.br" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 Veja instruções completas em: DEPLOY.md" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🌐 Seu site estará em: https://$githubUser.github.io/mrgcaixastermicas" -ForegroundColor Green
    Write-Host "🌐 Com domínio: https://mrgcaixastermicas.com.br" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Erro ao fazer push!" -ForegroundColor Red
    Write-Host "💡 Certifique-se de ter criado o repositório no GitHub primeiro" -ForegroundColor Yellow
    Write-Host "💡 Acesse: https://github.com/new" -ForegroundColor Yellow
}
