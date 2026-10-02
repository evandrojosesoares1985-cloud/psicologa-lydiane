# Lydiane A. Procópio — Psicóloga Clínica

Landing page profissional em React, Vite e Tailwind CSS.

- Produção: https://lydiane-procopio.pages.dev/
- CRP: 06/188503
- WhatsApp: https://wa.me/5519995222316

## Desenvolvimento e validação

Instale as dependências com `npm ci` e inicie com `npm run dev`.

Antes de publicar, execute `npm run lint` e `npm run build`.
Para conferir o build local, use `npm run preview`.

## Identidade visual e imagens

Os arquivos oficiais em `public/brand/` devem ser preservados, sem redesenho,
recoloração ou distorção. A paleta está definida em `src/index.css`.
Os títulos usam Cormorant Garamond; a interface e os textos usam Inter.

As fotos PNG originais são preservadas em `public/images/lydiane/`.
A página utiliza cópias WebP otimizadas, nas mesmas dimensões, para reduzir
o carregamento. Ao trocar uma foto, atualize também sua versão WebP.

## Publicação

O projeto existente na Cloudflare Pages está conectado ao GitHub.
O push para `main` dispara a publicação automática. A saída do build é `dist/`.
Não é necessário criar outra hospedagem ou alterar os domínios.

Não envie credenciais, tokens, arquivos de ambiente, ZIPs ou arquivos temporários.

## Compartilhamento

O título, a descrição, o canonical e os metadados sociais estão em `index.html`.
A imagem de compartilhamento usa temporariamente a logo oficial.
