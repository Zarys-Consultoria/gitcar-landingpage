# GitCar Landing Page

Site institucional do **GitCar**, o sistema de **gestão e anúncios para revendas de veículos** do
grupo Zarys. A landing page apresenta o produto, as funcionalidades e os planos, permitindo que o
visitante entre em contato ou contrate o sistema.

## Páginas

- **`/` (home):** hero, proposta de valor ("Hoje × Com GitCar"), funcionalidades em 8 etapas (abas),
  uso pelo celular, como começar, planos, perguntas frequentes, formulário de contato e chamada final
  para cadastro.

## Stack

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4:** um único projeto, renderizado no
  servidor em build time.
- **Export estático:** `output: "export"` gera HTML, CSS e JS estáticos em `dist/` (um `index.html`
  por rota), ideal para hospedagem estática e bom para SEO. O site funciona sem servidor Node.
- **Server Components por padrão:** `"use client"` apenas nos componentes que precisam de interação
  (cabeçalho/menu, abas de funcionalidades, formulário e animações de scroll). Todo o conteúdo é
  renderizado no HTML.
- **Animações de entrada em CSS:** um `IntersectionObserver` leve apenas adiciona a classe que dispara
  a animação (`fade-up`). Não há animação feita em JavaScript, e o conteúdo continua visível caso o JS
  falhe (progressive enhancement via `<noscript>`).
- **lucide-react** para ícones e **next/font** (Inter e Manrope) com `display: swap`.

## Pré-requisitos

- **Node.js 20+**

## Como rodar localmente (desenvolvimento)

```bash
npm install
npm run dev
```

A aplicação sobe em **http://localhost:3000**.

## Build estático e preview de produção

```bash
npm run build
npx serve dist -l 3005
```

O preview sobe em **http://localhost:3005**. O conteúdo de `dist/` é totalmente estático e corresponde
ao que deve ser publicado em produção.

## Scripts

- `npm run dev`: ambiente de desenvolvimento (`http://localhost:3000`)
- `npm run build`: gera o site estático em `dist/`
- `npm run lint`: ESLint
- `npm run format`: Prettier

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # layout raiz, metadados/SEO, fontes
│   ├── globals.css         # Tailwind v4 (@theme) e animações
│   └── page.tsx            # home
├── assets/brand/           # logos
└── components/gitcar/
    ├── SiteChrome.tsx       # cabeçalho e rodapé (client)
    ├── Reveal.tsx           # wrapper de animação de entrada (client)
    ├── PhoneMockup.tsx      # mock do app no celular (hero)
    ├── FeatureTabs.tsx      # abas de funcionalidades (client)
    └── ContactForm.tsx      # formulário de contato (client)
public/
├── robots.txt
└── sitemap.xml
```

## SEO

- `robots.txt` e `sitemap.xml` em `public/`.
- Meta tags completas no `layout.tsx`: `title` (com template), `description`, `keywords`, Open Graph,
  Twitter card e `canonical` por página.
- Páginas pré-renderizadas como HTML estático.
