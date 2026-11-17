"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import { Search, Wrench, Package, Megaphone, Users, FileText, Percent, BarChart3, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  label: string;
  stepLabel: string;
  title: string;
  text: string;
  highlights: string[];
  pill?: string;
}

const steps: Step[] = [
  {
    icon: Search,
    label: "Avaliação",
    stepLabel: "Etapa 1 · Avaliação de veículos",
    title: "Compre sabendo quanto o carro vai render.",
    text: "Registre condições, características e custos previstos de cada veículo que chega. Com avaliações no mesmo padrão, sua equipe compara oportunidades antes de fechar negócio e protege a margem.",
    highlights: ["Avaliações padronizadas para toda a equipe", "Custos previstos e potencial de revenda lado a lado", "Mais argumentos na hora de negociar a compra"],
  },
  {
    icon: Wrench,
    label: "Preparo",
    stepLabel: "Etapa 2 · Controle de serviços",
    title: "Carro parado no pátio é dinheiro parado.",
    text: "Organize manutenção, reparos e preparação de cada veículo em um fluxo que mostra o que já foi feito e o que falta. Menos esquecimento, menos atraso e menos tempo até o carro ir à venda.",
    highlights: ["Serviços e pendências organizados por veículo", "Custo de preparação somado ao custo do carro", "Tempo até o veículo ficar pronto sempre à vista"],
  },
  {
    icon: Package,
    label: "Estoque",
    stepLabel: "Etapa 3 · Controle de estoque",
    title: "Todo o pátio em uma tela.",
    text: "Centralize as informações de todos os veículos e deixe de depender de planilhas e controles separados. Qualquer pessoa da equipe sabe o que está disponível, em que situação e com qual histórico.",
    highlights: ["Situação de cada veículo: em avaliação, em preparo ou pronto", "Entrada, permanência e saída registradas", "Histórico completo de cada carro"],
  },
  {
    icon: Megaphone,
    label: "Anúncios",
    stepLabel: "Etapa 4 · Integrador de anúncios",
    title: "Cadastre uma vez. Anuncie em vários portais.",
    text: "Gerencie os anúncios de forma centralizada e pare de cadastrar e atualizar o mesmo carro em cada site. Vendeu? Atualize em um lugar só. Sua equipe gasta menos tempo digitando e mais tempo atendendo.",
    highlights: ["Divulgação do estoque em vários canais", "Menos cadastro manual repetido", "Informações dos anúncios organizadas em um só lugar"],
    pill: "Planos Pro e Premium",
  },
  {
    icon: Users,
    label: "Clientes",
    stepLabel: "Etapa 5 · CRM",
    title: "Nenhum interessado esquecido.",
    text: "Centralize clientes e interessados, registre cada contato e veja em que etapa está cada negociação. Mesmo quando mais de um vendedor atende, a conversa continua de onde parou.",
    highlights: ["Clientes e interessados em uma base única", "Negociações organizadas por etapa", "Próximas ações sempre visíveis"],
  },
  {
    icon: FileText,
    label: "Contrato",
    stepLabel: "Etapa 6 · Contratos automáticos",
    title: "Fechou negócio? O contrato já está preenchido.",
    text: "Os dados que já estão no sistema preenchem os seus modelos de contrato. Menos digitação, menos risco de divergência entre a negociação e o documento, e mais tempo com o cliente.",
    highlights: ["Seus modelos, preenchidos com os dados da venda", "Documentos padronizados", "Registro organizado de cada negociação"],
  },
  {
    icon: Percent,
    label: "Comissão",
    stepLabel: "Etapa 7 · Comissão de vendedores",
    title: "Comissão clara, sem conferência na calculadora.",
    text: "Configure as regras de comissão da sua revenda e acompanhe o resultado de cada vendedor. O sistema faz a apuração com base nas vendas registradas, e todo mundo sabe quanto tem a receber.",
    highlights: ["Regras de comissão configuradas por você", "Resultado individual de cada vendedor", "Menos conferência manual no fim do mês"],
  },
  {
    icon: BarChart3,
    label: "Financeiro",
    stepLabel: "Etapa 8 · Gestão financeira",
    title: "Os números de cada negócio, sem planilha paralela.",
    text: "Reúna receitas, despesas e compromissos em um só lugar. Acompanhe contas a pagar e a receber, planeje o caixa e decida com base em informação organizada.",
    highlights: ["Contas a pagar e a receber", "Fluxo de caixa sempre visível", "Base para decidir sobre custos, compras e investimentos"],
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + steps.length) % steps.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = steps.length - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
    }
  }, []);

  const current = steps[active];

  return (
    <>
      <div className="relative mb-10 overflow-x-auto" role="tablist" aria-label="Etapas da jornada do veículo">
        <div className="absolute left-[6%] right-[6%] top-7 h-0.5 bg-line" />
        <div className="grid min-w-[720px] grid-cols-8">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={step.label}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${i}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="group relative flex cursor-pointer flex-col items-center gap-2.5 border-0 bg-transparent px-1 text-center"
              >
                <div className={`grid h-14 w-14 place-items-center rounded-full border-2 transition-all duration-200 ${isActive ? "border-navy bg-navy text-amber shadow-[0_0_0_6px_rgba(46,117,189,.15)]" : "border-line bg-white text-muted group-hover:border-brand group-hover:text-brand"}`}>
                  <step.icon size={22} />
                </div>
                <span className={`text-[13px] font-semibold transition-colors ${isActive ? "text-ink" : "text-muted group-hover:text-ink"}`}>
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="grid items-start gap-10 rounded-2xl border border-line bg-white p-6 md:grid-cols-[1.05fr_.95fr] md:gap-12 md:p-10"
      >
        <div>
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[.08em] text-brand">
            {current.stepLabel}
            {current.pill && (
              <span className="rounded-full bg-amber-soft px-2.5 py-1 text-[11px] font-bold normal-case tracking-normal text-[#8a5d00]">
                {current.pill}
              </span>
            )}
          </div>
          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight md:text-[28px]">{current.title}</h3>
          <p className="mt-3.5 leading-relaxed text-muted">{current.text}</p>
        </div>
        <ul className="grid gap-3.5">
          {current.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 rounded-xl bg-card px-4 py-3.5 font-medium">
              <Check size={18} className="mt-0.5 shrink-0 text-ok" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
