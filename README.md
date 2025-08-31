# Galeria — Aniversário 1 ano

Projeto React + Vite + Tailwind com galeria estilo iPhone/Samsung (masonry) e visualização em tela cheia (lightbox).

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode em desenvolvimento:
   ```bash
   npm run dev
   ```
3. Build de produção:
   ```bash
   npm run build
   npm run preview
   ```

## Senha universal
- **Senha:** `liam2711`
- A autenticação é simples (apenas front-end) e salva o estado em `sessionStorage`.

## Suas fotos
- As imagens estão em `public/photos/`.
- Para trocar pelas suas fotos, **apague os placeholders** e coloque seus arquivos `.jpg`, `.jpeg` ou `.png` nessa pasta.
- Atualize o arquivo `public/photos/manifest.json` com os nomes dos arquivos (um por linha no array JSON).

### Dica para criar o manifest automaticamente
Liste os arquivos com um comando (no macOS/Linux):
```bash
ls public/photos | grep -E "\.(jpe?g|png|svg)$" | sed 's#^#/photos/#' | jq -R -s -c 'split("\n")[:-1]'
```
Cole o resultado em `manifest.json`.

## Estilo iPhone/Samsung
- O layout usa `columns-*` (masonry CSS) para efeito semelhante às galerias dos celulares.
- O lightbox permite navegar com teclado (← → Esc).

## Estrutura
- `src/components/Gallery.jsx` — lista as fotos a partir do `manifest.json`.
- `src/components/Lightbox.jsx` — visualização em tela cheia.
- `src/components/Login.jsx` — tela de senha.
