"use client";

import Image from "next/image";
import { Car, Home, Users, BarChart3, Package } from "lucide-react";
import painelImg from "@/assets/painel-gitcar.png";

function CarRow({ name, price, days, status, statusClass }: { name: string; price: string; days: string; status: string; statusClass: string }) {
  return (
    <div className="mb-[0.7cqw] flex items-center gap-[1cqw] rounded-[1.6cqw] bg-[#152539] p-[1cqw] text-[1.5cqw]">
      <div className="grid h-[3.6cqw] w-[4.4cqw] shrink-0 place-items-center rounded-[1.2cqw] bg-gradient-to-br from-[#27466e] to-[#1a3150]">
        <Car className="h-[2.2cqw] w-[2.2cqw] text-[#7fa6d6]" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[1.5cqw] font-bold leading-tight">{name}</p>
        <p className="text-[1.3cqw] text-[#8ea3bd]">{price} · {days}</p>
      </div>
      <span className={`whitespace-nowrap rounded-full px-[1cqw] py-[0.3cqw] text-[1.1cqw] font-bold ${statusClass}`}>{status}</span>
    </div>
  );
}

export function DevicesMockup() {
  return (
    <div className="flex w-full items-center justify-center lg:justify-end" aria-hidden="true">
      <div className="@container w-full max-w-[600px]">
        <div className="relative pb-[15cqw]">
          <div className="rounded-[3.2cqw] border-2 border-[#2b4263] bg-[#0f1c2f] px-[2.6cqw] pb-[3.2cqw] pt-[2.6cqw] shadow-[0_40px_80px_rgba(0,0,0,.45)]">
            <div className="-mt-[1.4cqw] mx-auto mb-[1cqw] h-[1cqw] w-[1cqw] rounded-full bg-[#2b4263]" />
            <Image
              src={painelImg}
              alt=""
              className="w-full rounded-[0.6cqw] object-cover object-left-top"
              style={{ aspectRatio: "1600/939" }}
              priority
            />
          </div>
          <div className="relative -mx-[4cqw] h-[2.6cqw] rounded-[0.4cqw_0.4cqw_2.3cqw_2.3cqw] bg-gradient-to-b from-[#c9d3df] to-[#8d9bad]">
            <div className="absolute left-1/2 top-0 h-[1.2cqw] w-[20cqw] -translate-x-1/2 rounded-b-[1.2cqw] bg-[#7d8b9e]" />
          </div>

          <div className="float absolute bottom-0 right-[-1cqw] w-[33cqw] rotate-[2.5deg]">
            <div className="relative rounded-[6cqw] bg-gradient-to-b from-[#1c222c] to-[#0a0e16] p-[0.9cqw] shadow-[0_40px_80px_rgba(0,0,0,.55)]">
              <div className="absolute left-[-0.45cqw] top-[20%] h-[7cqw] w-[0.6cqw] rounded-l-[0.6cqw] bg-[#070a10]" />
              <div className="absolute right-[-0.45cqw] top-[26%] h-[9cqw] w-[0.6cqw] rounded-r-[0.6cqw] bg-[#070a10]" />
              <div className="relative overflow-hidden rounded-[5.2cqw] bg-[#0f1c2f] px-[1.6cqw] pb-[1.4cqw] pt-[4.4cqw]">
                <div className="absolute left-1/2 top-[1.6cqw] z-20 h-[2.1cqw] w-[9cqw] -translate-x-1/2 rounded-full bg-black" />
                <div className="flex items-baseline justify-between px-[0.7cqw] pb-[1.2cqw]">
                  <span className="font-display text-[2.4cqw] font-extrabold">Estoque</span>
                  <span className="text-[1.5cqw] text-[#8ea3bd]">18 veículos</span>
                </div>
                <div className="flex gap-[0.7cqw] px-[0.5cqw] pb-[1.2cqw]">
                  <span className="rounded-full bg-amber px-[1.4cqw] py-[0.4cqw] text-[1.4cqw] font-bold text-ink">Todos</span>
                  <span className="rounded-full bg-[#16263c] px-[1.4cqw] py-[0.4cqw] text-[1.4cqw] text-[#9fb3cc]">Prontos</span>
                  <span className="rounded-full bg-[#16263c] px-[1.4cqw] py-[0.4cqw] text-[1.4cqw] text-[#9fb3cc]">Em preparo</span>
                </div>
                <CarRow name="Corolla XEi 2021" price="R$ 119.900" days="12 dias" status="Pronto" statusClass="bg-[#14532d] text-[#86efac]" />
                <CarRow name="Onix LT 2020" price="R$ 62.500" days="4 dias" status="Em preparo" statusClass="bg-[#5a3d00] text-[#ffd166]" />
                <CarRow name="Compass Lon..." price="R$ 98.000" days="hoje" status="Avaliação" statusClass="bg-[#1e3a8a] text-[#bcd0ff]" />
                <CarRow name="HB20 Comfort 2..." price="R$ 74.900" days="21 dias" status="Pronto" statusClass="bg-[#14532d] text-[#86efac]" />
                <div className="mt-[1cqw] grid grid-cols-2 gap-[1cqw]">
                  <div className="rounded-[1.6cqw] bg-[#152539] px-[1.4cqw] py-[1cqw] text-[1.4cqw] text-[#8ea3bd]"><strong className="block text-[2.1cqw] text-white">R$ 41 mil</strong>a receber</div>
                  <div className="rounded-[1.6cqw] bg-[#152539] px-[1.4cqw] py-[1cqw] text-[1.4cqw] text-[#8ea3bd]"><strong className="block text-[2.1cqw] text-white">7</strong>negociações</div>
                </div>
                <div className="mt-[1.4cqw] flex justify-around border-t border-[#1f3350] pt-[1.2cqw]">
                  <Home className="h-[2.6cqw] w-[2.6cqw] text-amber" />
                  <Package className="h-[2.6cqw] w-[2.6cqw] text-[#5f7a9c]" />
                  <Users className="h-[2.6cqw] w-[2.6cqw] text-[#5f7a9c]" />
                  <BarChart3 className="h-[2.6cqw] w-[2.6cqw] text-[#5f7a9c]" />
                </div>
              </div>
            </div>
          </div>

          <div className="float absolute bottom-[30cqw] left-[42cqw] flex w-[27cqw] items-center gap-[1.4cqw] rounded-[2cqw] bg-white px-[1.8cqw] py-[1.4cqw] text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)]">
            <div className="grid h-[4.2cqw] w-[4.2cqw] shrink-0 place-items-center rounded-[1.3cqw] bg-[#dcfce7] text-ok">
              <svg className="h-[2.4cqw] w-[2.4cqw]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"><path d="M6 3.5h8l4 4V20.5H6z M14 3.5v4h4 M9 12h6M9 15.5h6" /></svg>
            </div>
            <div className="text-[1.7cqw] leading-[1.3]">
              <p className="text-[1.9cqw] font-bold">Contrato pronto</p>
              <span className="text-muted">Corolla XEi · dados preenchidos</span>
            </div>
          </div>

          <div className="float absolute bottom-[5cqw] right-[-5cqw] flex w-[27cqw] items-center gap-[1.4cqw] rounded-[2cqw] bg-white px-[1.8cqw] py-[1.4cqw] text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)]" style={{ animationDelay: "-3s" }}>
            <div className="grid h-[4.2cqw] w-[4.2cqw] shrink-0 place-items-center rounded-[1.3cqw] bg-amber-soft text-[#b37a00]">
              <Users className="h-[2.4cqw] w-[2.4cqw]" />
            </div>
            <div className="text-[1.7cqw] leading-[1.3]">
              <p className="text-[1.9cqw] font-bold">Novo interessado</p>
              <span className="text-muted">Onix LT · aguardando retorno</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
