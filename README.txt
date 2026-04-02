VIRGÍNIA ALMEIDA - SITE ATUALIZADO (COM GOOGLE TAG MANAGER)
===========================================================

NOVIDADES DESTA VERSÃO:
-----------------------
✅ Google Tag Manager (GTM) instalado em ambas as páginas
✅ Pronto para rastreamento de tráfego pago (Google Ads, Facebook Ads, etc.)
✅ Códigos de rastreamento já posicionados corretamente

ARQUIVOS INCLUSOS:
------------------
- index.html (página principal com GTM)
- blog.html (página do blog com GTM)

CONFIGURAÇÃO DO GOOGLE TAG MANAGER:
-----------------------------------

1. CRIAR CONTA NO GTM:
   - Acesse: https://tagmanager.google.com
   - Clique em "Criar Conta"
   - Nome da conta: "Virgínia Almeida"
   - Nome do container: "psivirginialmeida.com.br"
   - Plataforma: "Web"
   - Clique em "Criar"

2. OBTER SEU ID DO GTM:
   Após criar, você verá um código como:
   GTM-XXXXXXX (onde XXXXXXX são letras e números)

   Exemplo real: GTM-5FJX6, GTM-K2HGBR4, etc.

3. SUBSTITUIR NO SITE:
   Abra index.html e blog.html
   Procure por: GTM-XXXXXXX (aparece 2 vezes em cada arquivo)
   Substitua por seu ID real (ex: GTM-ABC1234)

   Locais para substituir:
   - Linha ~10 (código no <head>)
   - Linha ~210 (código no <body>)

4. PUBLICAR NO GTM:
   - No painel do GTM, clique em "Enviar" (Submit)
   - Nome da versão: "Primeira versão"
   - Clique em "Publicar"

TRÁFEGO PAGO - CONFIGURAÇÕES RECOMENDADAS:
------------------------------------------

Após configurar o GTM, você pode adicionar:

1. GOOGLE ADS (AdWords):
   - Tag: Google Ads Conversion Tracking
   - ID de conversão: fornecido pelo Google Ads
   - Rastreia: cliques no WhatsApp, visualizações de página

2. FACEBOOK PIXEL (Meta):
   - Tag: Custom HTML
   - Código do Pixel fornecido pelo Facebook Business
   - Rastreia: PageView, Lead, Contact

3. GOOGLE ANALYTICS 4:
   - Tag: GA4 Configuration
   - ID de medição: G-XXXXXXXXXX
   - Rastreia: todas as interações do site

EVENTOS RECOMENDADOS PARA RASTREAR:
-----------------------------------
- Clique no botão WhatsApp (Hero)
- Clique no botão WhatsApp flutuante
- Clique no CTA final
- Visualização da seção "Sobre Mim"
- Visualização da seção "Especialidades"
- Tempo na página (>30s, >60s)
- Scroll depth (25%, 50%, 75%, 100%)

OUTRAS ALTERAÇÕES DESTA VERSÃO:
-------------------------------
- Navbar removida (conforme solicitado)
- Formulário de contato removido
- Texto sobre burnout na seção "Sobre Mim"
- WhatsApp com mensagem pré-definida: "Oi! Gostaria de marcar uma consulta."
- Espaçamento reduzido entre Hero e About no desktop

COMO USAR:
----------
1. Substitua GTM-XXXXXXX pelo seu ID real em AMBOS os arquivos
2. Substitua o número de telefone: 5581993453835 → número correto
3. Adicione a foto: virginia-almeida-psicologa.jpg
4. Faça upload para o GitHub Pages ou servidor
5. Configure o DNS (Registro.br) conforme instruções anteriores
6. Publique o container no GTM

IMPORTANTE:
-----------
- O GTM só funciona após publicar o container (botão "Enviar")
- O código noscript (iframe) é para usuários com JavaScript desabilitado
- Não remova os códigos comentados (<!-- Google Tag Manager -->)
- Teste no modo "Preview" do GTM antes de publicar

SUPORTE:
--------
Documentação oficial: https://support.google.com/tagmanager
Tutorial de instalação: https://analytics.google.com/analytics/academy/course/5
