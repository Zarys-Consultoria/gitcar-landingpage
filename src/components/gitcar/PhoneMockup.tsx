"use client";

import { Car, Home, Users, BarChart3, Package } from "lucide-react";

function CarRow({ name, price, days, status, statusClass }: { name: string; price: string; days: string; status: string; statusClass: string }) {
  return (
    <div className="mb-2 flex items-center gap-2.5 rounded-[14px] bg-[#152539] p-2.5 text-[13px]">
      <div className="grid h-9 w-11 shrink-0 place-items-center rounded-[9px] bg-gradient-to-br from-[#27466e] to-[#1a3150]">
        <Car size={20} className="text-[#7fa6d6]" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-bold">{name}</p>
        <p className="text-[12px] text-[#8ea3bd]">{price} · {days}</p>
      </div>
      <span className={`whitespace-nowrap rounded-full px-2 py-1 text-[10.5px] font-bold ${statusClass}`}>{status}</span>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative h-[560px] w-full max-w-[480px] justify-self-center" aria-hidden="true">
      <div className="absolute left-1/2 top-0 w-[290px] -translate-x-1/2 rotate-[2.5deg]">
        <div className="float rounded-[38px] border-2 border-[#2b4263] bg-[#0f1c2f] px-3 pb-4 pt-3.5 shadow-[0_40px_80px_rgba(0,0,0,.5),inset_0_0_0_6px_#14243b]">
          <div className="-mt-3.5 mx-auto mb-2 h-5 w-[90px] rounded-b-xl bg-[#0a1424]" />
          <div className="flex items-baseline justify-between px-2 pb-2.5">
            <span className="font-display text-[1.05rem] font-extrabold">Estoque</span>
            <span className="text-[12px] text-[#8ea3bd]">18 veículos</span>
          </div>
          <div className="flex gap-1.5 px-1.5 pb-2.5">
            <span className="rounded-full bg-amber px-2.5 py-1 text-[11px] font-bold text-ink">Todos</span>
            <span className="rounded-full bg-[#16263c] px-2.5 py-1 text-[11px] text-[#9fb3cc]">Prontos</span>
            <span className="rounded-full bg-[#16263c] px-2.5 py-1 text-[11px] text-[#9fb3cc]">Em preparo</span>
          </div>
          <CarRow name="Corolla XEi 2021" price="R$ 119.900" days="12 dias" status="Pronto" statusClass="bg-[#14532d] text-[#86efac]" />
          <CarRow name="Onix LT 2020" price="R$ 62.500" days="4 dias" status="Em preparo" statusClass="bg-[#5a3d00] text-[#ffd166]" />
          <CarRow name="Compass Longitude 2019" price="R$ 98.000" days="hoje" status="Avaliação" statusClass="bg-[#1e3a8a] text-[#bcd0ff]" />
          <CarRow name="HB20 Comfort 2022" price="R$ 74.900" days="21 dias" status="Pronto" statusClass="bg-[#14532d] text-[#86efac]" />
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="rounded-[14px] bg-[#152539] px-3 py-2.5 text-[11.5px] text-[#8ea3bd]"><strong className="block text-[1.05rem] text-white">R$ 41 mil</strong>a receber</div>
            <div className="rounded-[14px] bg-[#152539] px-3 py-2.5 text-[11.5px] text-[#8ea3bd]"><strong className="block text-[1.05rem] text-white">7</strong>negociações</div>
          </div>
          <div className="mt-3 flex justify-around border-t border-[#1f3350] pt-2.5">
            <Home size={20} className="text-amber" />
            <Package size={20} className="text-[#5f7a9c]" />
            <Users size={20} className="text-[#5f7a9c]" />
            <BarChart3 size={20} className="text-[#5f7a9c]" />
          </div>
        </div>
      </div>

      <div className="float absolute -left-7 top-[250px] flex w-[196px] items-center gap-2.5 rounded-[14px] bg-white p-3 text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)]">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#dcfce7] text-ok">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3.5h8l4 4V20.5H6z M14 3.5v4h4 M9 12h6M9 15.5h6" /></svg>
        </div>
        <div className="text-[13px] leading-tight">
          <p className="text-[14px] font-bold">Contrato pronto</p>
          <p className="text-muted">Corolla XEi · dados preenchidos</p>
        </div>
      </div>

      <div className="float absolute -right-7 top-[420px] flex w-[196px] items-center gap-2.5 rounded-[14px] bg-white p-3 text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)]" style={{ animationDelay: "-3s" }}>
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-amber-soft text-[#b37a00]">
          <Users size={18} />
        </div>
        <div className="text-[13px] leading-tight">
          <p className="text-[14px] font-bold">Novo interessado</p>
          <p className="text-muted">Onix LT · aguardando retorno</p>
        </div>
      </div>
    </div>
  );
}
