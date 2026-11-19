"use client";

import Image from "next/image";
import { Car, Home, Users, BarChart3, Package } from "lucide-react";
import painelImg from "@/assets/painel-gitcar.png";

function CarRow({ name, price, days, status, statusClass }: { name: string; price: string; days: string; status: string; statusClass: string }) {
  return (
    <div className="mb-[5px] flex items-center gap-2 rounded-xl bg-[#152539] p-2 text-[11px]">
      <div className="grid h-[26px] w-[32px] shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#27466e] to-[#1a3150]">
        <Car size={16} className="text-[#7fa6d6]" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-bold leading-tight">{name}</p>
        <p className="text-[9.5px] text-[#8ea3bd]">{price} · {days}</p>
      </div>
      <span className={`whitespace-nowrap rounded-full px-1.5 py-0.5 text-[8px] font-bold ${statusClass}`}>{status}</span>
    </div>
  );
}

export function DevicesMockup() {
  return (
    <div className="relative w-full max-w-[700px] justify-self-end pb-[120px]" aria-hidden="true">
      <div className="laptop">
        <div className="rounded-[22px_22px_8px_8px] border-2 border-[#2b4263] bg-[#0f1c2f] px-[18px] pb-[22px] pt-[18px] shadow-[0_40px_80px_rgba(0,0,0,.45)]">
          <div className="-mt-[10px] mx-auto mb-[7px] h-[7px] w-[7px] rounded-full bg-[#2b4263]" />
          <Image
            src={painelImg}
            alt=""
            className="w-full rounded object-cover object-left-top"
            style={{ aspectRatio: "1600/939" }}
            priority
          />
        </div>
        <div className="-mx-14 h-[18px] rounded-[3px_3px_16px_16px] bg-gradient-to-b from-[#c9d3df] to-[#8d9bad] relative">
          <div className="absolute left-1/2 top-0 h-2 w-[140px] -translate-x-1/2 rounded-b-lg bg-[#7d8b9e]" />
        </div>
      </div>

      <div className="absolute bottom-0 right-[-8px] w-[250px] max-[640px]:w-[150px] max-[640px]:origin-bottom-right">
        <div className="float rotate-[2.5deg] rounded-[34px] border-2 border-[#2b4263] bg-[#0f1c2f] px-[10px] pb-[14px] pt-[12px] shadow-[0_40px_80px_rgba(0,0,0,.55),inset_0_0_0_5px_#14243b]">
          <div className="-mt-3 mx-auto mb-[7px] h-[18px] w-[78px] rounded-b-xl bg-[#0a1424]" />
          <div className="flex items-baseline justify-between px-[7px] pb-[9px] pt-[3px]">
            <span className="font-display text-[15px] font-extrabold">Estoque</span>
            <span className="text-[11px] text-[#8ea3bd]">18 veículos</span>
          </div>
          <div className="flex gap-[5px] px-[5px] pb-[9px]">
            <span className="rounded-full bg-amber px-2 py-[3px] text-[10px] font-bold text-ink">Todos</span>
            <span className="rounded-full bg-[#16263c] px-2 py-[3px] text-[10px] text-[#9fb3cc]">Prontos</span>
            <span className="rounded-full bg-[#16263c] px-2 py-[3px] text-[10px] text-[#9fb3cc]">Em preparo</span>
          </div>
          <CarRow name="Corolla XEi 2021" price="R$ 119.900" days="12 dias" status="Pronto" statusClass="bg-[#14532d] text-[#86efac]" />
          <CarRow name="Onix LT 2020" price="R$ 62.500" days="4 dias" status="Em preparo" statusClass="bg-[#5a3d00] text-[#ffd166]" />
          <CarRow name="Compass Lon..." price="R$ 98.000" days="hoje" status="Avaliação" statusClass="bg-[#1e3a8a] text-[#bcd0ff]" />
          <CarRow name="HB20 Comfort 2..." price="R$ 74.900" days="21 dias" status="Pronto" statusClass="bg-[#14532d] text-[#86efac]" />
          <div className="mt-2 grid grid-cols-2 gap-[7px]">
            <div className="rounded-xl bg-[#152539] px-[10px] py-2 text-[10.5px] text-[#8ea3bd]"><strong className="block text-[15px] text-white">R$ 41 mil</strong>a receber</div>
            <div className="rounded-xl bg-[#152539] px-[10px] py-2 text-[10.5px] text-[#8ea3bd]"><strong className="block text-[15px] text-white">7</strong>negociações</div>
          </div>
          <div className="mt-[10px] flex justify-around border-t border-[#1f3350] pt-[9px]">
            <Home size={18} className="text-amber" />
            <Package size={18} className="text-[#5f7a9c]" />
            <Users size={18} className="text-[#5f7a9c]" />
            <BarChart3 size={18} className="text-[#5f7a9c]" />
          </div>
        </div>
      </div>

      <div className="float absolute bottom-[210px] left-[calc(100%-400px)] flex w-[200px] items-center gap-[10px] rounded-[14px] bg-white p-[10px_13px] text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)] max-[640px]:bottom-6 max-[640px]:left-[-4px] max-[640px]:w-[180px]">
        <div className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-[#dcfce7] text-ok">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"><path d="M6 3.5h8l4 4V20.5H6z M14 3.5v4h4 M9 12h6M9 15.5h6" /></svg>
        </div>
        <div className="text-[12.5px] leading-[1.3]">
          <p className="text-[13.5px] font-bold">Contrato pronto</p>
          <span className="text-muted">Corolla XEi · dados preenchidos</span>
        </div>
      </div>

      <div className="float absolute bottom-[40px] right-[-36px] flex w-[200px] items-center gap-[10px] rounded-[14px] bg-white p-[10px_13px] text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)] max-[640px]:hidden" style={{ animationDelay: "-3s" }}>
        <div className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-amber-soft text-[#b37a00]">
          <Users size={17} />
        </div>
        <div className="text-[12.5px] leading-[1.3]">
          <p className="text-[13.5px] font-bold">Novo interessado</p>
          <span className="text-muted">Onix LT · aguardando retorno</span>
        </div>
      </div>
    </div>
  );
}
