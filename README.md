# GitCar Landing Page

Site institucional do **GitCar**, o sistema de **gestão e anúncios para revendas de veículos** do
grupo Zarys. A landing page apresenta o produto, as funcionalidades e os planos, permitindo que o
visitante entre em contato ou contrate o sistema.

## Páginas

- **`/` (home):** hero, proposta de valor ("Hoje × Com GitCar"), funcionalidades em 8 etapas (abas),
  uso pelo celular, como começar, planos, perguntas frequentes, formulário de contato e chamada final
  para cadastro.

## Stack

- **HTML, CSS e JavaScript puros:** um único arquivo `index.html`, sem framework, sem build e sem
  dependências. Basta abrir no navegador ou publicar em qualquer hospedagem estática.
- **Google Fonts:** títulos em **Saira** (expandida, peso 700–800) e texto corrido em **Figtree**.
- **Ícones:** SVG inline como `<symbol>`, usados com `<use href="#i-...">`. Sem biblioteca de ícones.
- **Responsivo:** pontos de quebra em 980 px e 720 px.

## Como rodar localmente

Basta abrir o `index.html` no navegador. Para servir via HTTP (melhor para testar fontes e CORS):

```bash
npx serve . -l 3000
```

A página abre em **http://localhost:3000**.

## Estrutura do projeto

```
├── index.html                       # página única
├── README.md
└── assets/
    ├── css/style.css                # todos os estilos
    ├── js/main.js                   # abas de funcionalidades + formulário
    └── img/
        ├── logo-gitcar.png          # logo branca (cabeçalho)
        └── logo-gitcar-assinatura.png  # logo branca com assinatura (rodapé)
```

## SEO

- Meta tags de `title` e `description` no `<head>`.
- Tags Open Graph e favicon preparadas para descomentar quando os assets estiverem prontos.
