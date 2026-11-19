"use client";

import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type ReactNode, type MouseEvent } from "react";
import logo from "@/assets/brand/logo-gitcar-assinatura.png";
import headerLogo from "@/assets/brand/logo-gitcar.png";

export const WHATSAPP_URL = "https://wa.me/5585987734863";
export const INSTAGRAM_URL = "https://www.instagram.com/gitcar.com.br/";
export const YOUTUBE_URL = "https://youtube.com/@gitcar-b4g";

const nav = [
  { href: "#jornada", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Fale conosco" },
];

function smoothScroll(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}

function InstagramIcon({ size = 27 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ size = 27 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppCta() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg hover:shadow-amber/25">
      Falar conosco
      <ArrowRight size={17} />
    </a>
  );
}

export function ActionButton({ children, href = "#comecar", light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${light ? "bg-white text-brand hover:bg-ice" : "bg-amber text-ink hover:brightness-105 hover:shadow-lg hover:shadow-amber/25"}`;
  return (
    <a href={href} onClick={smoothScroll} className={className}>
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>) {
    smoothScroll(e);
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <a href="#topo" onClick={smoothScroll} aria-label="GitCar, início">
          <Image src={headerLogo} alt="GitCar" priority className="h-auto w-28 object-contain object-left md:w-36" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={smoothScroll}
              className="text-sm font-semibold text-white/70 transition hover:text-amber"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <WhatsAppCta />
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 active:bg-white/15 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="animate-menu-open border-t border-white/10 bg-navy px-4 pb-5 pt-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block rounded-lg px-3 py-3 text-[15px] font-semibold text-white transition-colors active:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3">
            <WhatsAppCta />
          </div>
        </nav>
      )}
    </header>
  );
}

function ZarysLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="110.95 71.61 528.65 518.56" aria-hidden="true">
      <path transform="matrix(1,0,0,-1,577.8773,350.00938)" d="M0 0C17.462 18.846-.436 42.085-13.537 52.884L-142.461-72.599C-143.162-73.282-164.363-53.377-180.03-35.939L-13.425 130.667C-10.769 129.046 59.359 77.074 60.786 21.672 61.723-14.716 42.054-37.319 34.236-45.018 34.234-45.021-69.066-145.889-69.066-145.889-69.066-145.889-106.967-109.321-106.974-109.313Z" fill="#05c3de" />
      <path transform="matrix(1,0,0,-1,446.1242,562.8321)" d="M0 0C-23.368-19.576-48.727-27.344-78.952-23.206-106.224-19.473-119.725-4.417-128.504 3.018L-229.414 104.058C-217.591 117.693-204.932 130.108-191.369 142.262L-86.155 39.537C-63.99 17.373-40.049 38.56-40.05 38.56Z" fill="#f6be00" />
      <path transform="matrix(1,0,0,-1,319.5751,98.95807)" d="M0 0C23.368 19.576 48.727 27.344 78.952 23.206 106.224 19.473 119.725 4.417 128.504-3.018L230.144-104.789 192.02-142.913 86.155-39.537C63.99-17.373 40.049-38.56 40.05-38.56Z" fill="#f6be00" />
      <path transform="matrix(1,0,0,-1,448.5024,541.0487)" d="M0 0-157.043 156.282C-156.744 157.056-118.782 194.757-118.782 194.757L38.252 35.98C38.256 35.976 54.296 18.428 37.289.906 19.61-17.31 0 0 0 0" fill="#f6be00" />
      <path transform="matrix(1,0,0,-1,475.4362,278.03068)" d="M0 0-38.288-38.288-195.575 118.625C-199.988 124.104-203.093 130.355-203.183 137.526-203.307 147.271-198.13 156.685-189.545 161.575-182.49 165.593-172.344 166.911-165.135 162.817-160.569 160.224-157.022 156.215-153.198 152.447Z" fill="#f6be00" />
      <path transform="matrix(1,0,0,-1,183.3559,339.6678)" d="M0 0C-.004 0-31.757 8.216-57.582-18.191-69.161 7.2-72.41 25.756-54.033 48.274-43.849 60.752 73.409 175.134 73.413 175.138 86.726 163.599 98.754 151.284 110.527 137.885 110.526 137.884 9.866 33.5 3.321 27.438-12.088 13.167 0 .019 0 0" fill="#f6be00" />
      <path transform="matrix(1,0,0,-1,233.9289,410.38929)" d="M0 0C4.088 36.65-20.959 56.156-20.96 56.157L96.641 171.225 134.396 133.353C129.029 126.585-.005-.005 0 0" fill="#f6be00" />
      <path transform="matrix(1,0,0,-1,218.0373,401.6761)" d="M0 0C0-25.83-20.939-46.77-46.77-46.77-72.6-46.77-93.539-25.83-93.539 0-93.539 25.83-72.6 46.77-46.77 46.77-20.939 46.77 0 25.83 0 0" fill="#f6be00" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#08121f] px-6 pb-8 pt-12 text-white md:pt-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="shrink-0">
          <Image src={logo} alt="GitCar" className="h-auto w-56 object-contain object-left md:w-72" />
          <div className="mt-5 md:mt-6">
            <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-white/40">
              Acompanhe o GitCar
            </span>
            <div className="mt-3 flex items-center gap-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram do GitCar" className="text-white/60 transition-all duration-200 hover:scale-110 hover:text-amber">
                <InstagramIcon />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube do GitCar" className="text-white/60 transition-all duration-200 hover:scale-110 hover:text-amber">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
        <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-6 text-sm text-white md:gap-8">
          <a href="#jornada" onClick={smoothScroll} className="transition-colors hover:text-amber">Funcionalidades</a>
          <a href="#planos" onClick={smoothScroll} className="transition-colors hover:text-amber">Planos</a>
          <a href="#duvidas" onClick={smoothScroll} className="transition-colors hover:text-amber">Dúvidas</a>
          <a href="#contato" onClick={smoothScroll} className="transition-colors hover:text-amber">Fale conosco</a>
        </nav>
        <a href="https://zarysconsultoria.com.br/" target="_blank" rel="noopener noreferrer" className="group flex shrink-0 items-center gap-3 text-[15px] text-white/70 transition-colors hover:text-white">
          <span>Um produto</span>
          <ZarysLogo className="h-6 w-6 transition-transform group-hover:scale-110" />
          <span className="font-semibold">Zarys Consultoria</span>
        </a>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 md:mt-14 md:pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Zarys Consultoria Ltda · CNPJ 64.817.120/0001-69</p>
            <p>R. Pais Leme, 215, conj. 1713, Pinheiros, São Paulo/SP, CEP 05424-150</p>
          </div>
          <div className="flex gap-4 text-xs text-white/60">
            <a href="#" className="transition-colors hover:text-amber">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-amber">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
