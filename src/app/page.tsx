import { ArrowRight, Check, ChevronDown, Tag, MapPin, Zap, Minus } from "lucide-react";
import { SiteHeader, SiteFooter, ActionButton } from "@/components/gitcar/SiteChrome";
import { ContactForm } from "@/components/gitcar/ContactForm";
import { Reveal } from "@/components/gitcar/Reveal";
import { DevicesMockup } from "@/components/gitcar/DevicesMockup";
import { FeatureTabs } from "@/components/gitcar/FeatureTabs";

const comparisons = [
  { before: 'Avaliação "de cabeça", sem saber se a margem fecha.', after: "Avaliação padronizada, com custos previstos antes de fechar a compra." },
  { before: "O mesmo carro cadastrado à mão em cada portal.", after: "Cadastre uma vez e gerencie os anúncios de um só lugar." },
  { before: "Interessado anotado no papel, que ninguém retorna.", after: "Cada cliente com histórico, etapa e próxima ação à vista." },
  { before: "Contrato digitado de novo a cada venda; comissão conferida na calculadora.", after: "Contrato preenchido com os dados da venda e comissão calculada pelas suas regras." },
];

const mobilityItems = [
  { icon: Tag, title: "Negocie com os números na mão", text: "Na frente do cliente ou do vendedor do carro, consulte custo, preço e situação na hora." },
  { icon: MapPin, title: "Fora da loja, no controle", text: "Em uma reunião, no leilão ou viajando, acompanhe estoque, vendas e caixa de onde estiver." },
  { icon: Zap, title: "Sem esperar o computador ligar", text: "O que é importante abre no celular, em segundos, sem depender de uma mesa." },
];

const plans = [
  {
    name: "GitCar Start",
    capacity: "Até 25 veículos",
    price: "249",
    profile: "Para revendas menores que querem sair da planilha e organizar a operação.",
    details: ["Controle de estoque", "Avaliação de veículos", "Controle de serviços", "CRM", "Contratos automáticos", "Comissões", "Gestão financeira", "Acesso pelo celular"],
    excluded: ["Integrador de anúncios"],
  },
  {
    name: "GitCar Pro",
    capacity: "Até 50 veículos",
    price: "449",
    profile: "Para quem quer a gestão completa e anunciar em vários portais sem retrabalho.",
    details: ["Tudo do Start, mais:", "Integrador de anúncios", "Divulgação do estoque centralizada", "Capacidade para até 50 veículos"],
    excluded: [],
  },
  {
    name: "GitCar Premium",
    capacity: "Mais de 50 veículos",
    price: "649",
    profile: "Para estoques grandes e operações com várias pessoas envolvidas.",
    details: ["Tudo do Pro, mais:", "Capacidade para mais de 50 veículos", "Relatórios gerenciais ampliados"],
    excluded: [],
  },
];

const faqs = [
  { q: "Consigo usar o GitCar pelo celular?", a: "Sim. O acesso pelo celular está incluído em todos os planos, para você acompanhar estoque, clientes e financeiro de onde estiver." },
  { q: "Posso mudar de plano depois?", a: "Pode. Comece pelo plano que cabe no seu estoque hoje e mude quando a revenda crescer." },
  { q: "Em quais portais o integrador publica os anúncios?", a: "Os portais disponíveis dependem das integrações ativas no GitCar. Entre em contato para conferir os canais que você usa. O integrador está disponível nos planos Pro e Premium." },
  { q: "Os contratos já saem prontos para assinar?", a: "O GitCar preenche os seus modelos de contrato com os dados cadastrados na venda. A geração depende dos modelos e campos configurados, e recomendamos sempre revisar o documento antes da assinatura." },
  { q: "Como as comissões são calculadas?", a: "Pelas regras de comissão que você configura para a sua revenda, com base nas vendas registradas no sistema." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section id="topo" className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_85%_10%,#1d4b86_0%,transparent_60%),linear-gradient(var(--color-navy),var(--color-navy))] px-6 pb-24 pt-36 text-white md:pb-32 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(180deg,#000_30%,transparent_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <div className="mb-5 h-[5px] w-[56px] rounded-full bg-amber" />
            <h1 className="max-w-[720px] font-display text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              A tecnologia por trás da <span className="text-amber">sua revenda</span>
            </h1>
            <p className="mt-6 max-w-[500px] text-base leading-relaxed text-white/65 md:text-[19px]">
              Sistema de gestão e anúncios para revendas de veículos: da avaliação à venda, no computador e no celular.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
              <ActionButton href="#comecar">Começar teste grátis</ActionButton>
              <a href="#jornada" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:bg-white/15 md:px-7 md:py-3.5">
                Ver como funciona
                <ChevronDown size={17} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#9fb3cc] md:mt-12 md:gap-8">
              <span className="flex items-center gap-2"><Check size={16} className="text-amber" />Planos a partir de R$ 249/mês</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-amber" />Para revendas de todos os tamanhos</span>
            </div>
          </Reveal>
          <DevicesMockup />
        </div>
      </section>

      {/* ANTES x DEPOIS */}
      <section id="vantagens" className="bg-white px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-[680px]">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.2em] text-brand"><span className="inline-block h-0.5 w-6 rounded-full bg-amber" />Por que GitCar</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Menos planilha. <span className="text-brand">Mais carro vendido.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:mt-5 md:text-lg">
              A rotina de uma revenda está espalhada em cadernos, planilhas, portais e grupos de mensagem. O GitCar junta tudo e tira o trabalho repetido do caminho.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3.5 md:mt-14">
            {comparisons.map((row, i) => (
              <Reveal key={row.before} delay={i * 80}>
                <div className="grid items-stretch gap-0 md:grid-cols-[1fr_56px_1fr]">
                  <div className="flex flex-col rounded-2xl border border-line bg-card p-5">
                    <span className="text-[11px] font-bold uppercase tracking-[.06em] text-[#8a97a8]">Hoje</span>
                    <p className="mt-1 text-muted">{row.before}</p>
                  </div>
                  <div className="hidden place-items-center text-brand md:grid">
                    <ArrowRight size={22} />
                  </div>
                  <div className="mt-1.5 flex flex-col rounded-2xl border border-brand/20 bg-ice p-5 md:mt-0">
                    <span className="text-[11px] font-bold uppercase tracking-[.06em] text-brand">Com GitCar</span>
                    <p className="mt-1">{row.after}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="jornada" className="border-y border-line bg-surface px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-xl md:mb-14">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.2em] text-brand"><span className="inline-block h-0.5 w-6 rounded-full bg-amber" />Funcionalidades</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Acompanhe cada carro do começo ao fim.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:mt-5 md:text-lg">
              Da avaliação ao dinheiro no caixa, cada etapa tem o seu lugar no GitCar. Toque em uma etapa para ver como ela funciona.
            </p>
          </Reveal>
          <FeatureTabs />
        </div>
      </section>

      {/* MOBILIDADE */}
      <section className="bg-white px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-[680px] md:mb-14">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.2em] text-brand"><span className="inline-block h-0.5 w-6 rounded-full bg-amber" />No celular</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Gerir a revenda não precisa prender você na loja.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:mt-5 md:text-lg">
              As informações que importam ficam no seu bolso, na hora em que você precisa decidir.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {mobilityItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} as="article">
                <div className="group h-full cursor-default rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] active:translate-y-0 md:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-ice text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-extrabold transition-colors group-hover:text-brand">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO COMEÇAR */}
      <section className="bg-ink px-6 py-16 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-[680px] md:mb-14">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.2em] text-white/50"><span className="inline-block h-0.5 w-6 rounded-full bg-amber" />Como começar</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Sua revenda no GitCar em três passos.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:mt-5 md:text-lg">
              Você testa com os seus próprios carros, na sua rotina, antes de decidir.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Crie sua conta", text: "Escolha o plano que cabe no tamanho do seu estoque e comece o teste grátis." },
              { title: "Cadastre os primeiros veículos", text: "Coloque no sistema os carros que estão no pátio hoje e convide sua equipe." },
              { title: "Veja a operação funcionando", text: "Acompanhe estoque, clientes e caixa pelo celular e sinta a diferença no dia a dia." },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[.06] p-6 transition-all duration-200 hover:border-brand/30 hover:bg-white/10 md:p-7">
                  <span className="mb-4 block font-display text-4xl font-extrabold text-amber transition-transform duration-200 group-hover:scale-110">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="bg-white px-6 py-16 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">Planos</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
              Um plano para cada tamanho de estoque.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted md:mt-4 md:text-lg">
              Todos os planos incluem a gestão completa da revenda. Comece pelo que cabe hoje e mude quando crescer.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:mt-14 md:gap-5 lg:grid-cols-3">
            {plans.map((plan, i) => {
              const isPro = i === 1;
              return (
                <Reveal key={plan.name} delay={i * 100} as="article">
                  <div className={`flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 md:p-8 ${isPro ? "border-navy bg-navy text-white shadow-2xl shadow-navy/25 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(11,33,64,.4)] active:translate-y-0 lg:-translate-y-3 lg:hover:-translate-y-4" : "border-line hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[var(--shadow-soft)] active:translate-y-0"}`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-extrabold md:text-[22px]">{plan.name}</h3>
                      {isPro && <span className="rounded-full bg-amber px-3 py-1 text-[11px] font-bold text-ink">Recomendado</span>}
                    </div>
                    <p className={`mt-1 text-sm font-medium ${isPro ? "text-white/60" : "text-muted"}`}>{plan.capacity}</p>
                    <p className={`mt-3 text-sm leading-relaxed ${isPro ? "text-white/70" : "text-muted"}`}>{plan.profile}</p>
                    <p className="mt-5 font-display text-4xl font-extrabold md:mt-6 md:text-[40px]">
                      R$ {plan.price}
                      <span className={`text-base font-medium ${isPro ? "text-white/65" : "text-muted"}`}>/mês</span>
                    </p>
                    <ul className="mt-5 flex-1 space-y-3 border-t border-current/15 pt-5 md:mt-6 md:space-y-3.5 md:pt-6">
                      {plan.details.map((detail) => (
                        <li key={detail} className={`flex items-center gap-2.5 text-sm ${detail.startsWith("Tudo") ? "font-bold" : ""}`}>
                          <Check size={18} className={isPro ? "text-amber" : "text-brand"} />
                          {detail}
                        </li>
                      ))}
                      {plan.excluded.map((item) => (
                        <li key={item} className={`flex items-center gap-2.5 text-sm ${isPro ? "text-white/40" : "text-muted"}`}>
                          <Minus size={18} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contato"
                      className={`mt-7 flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 md:mt-8 md:py-3.5 ${isPro ? "bg-amber text-ink hover:shadow-lg hover:shadow-amber/20" : "bg-ice text-brand hover:bg-brand/10"}`}
                    >
                      Falar com um especialista
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8 text-center md:mt-10">
            <p className="text-sm text-muted">
              Ficou em dúvida sobre o plano certo?{" "}
              <a href="#contato" className="font-bold text-brand transition-colors hover:text-brand-dark">Fale com nosso time</a> e a gente ajuda você a escolher.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="bg-surface px-6 py-16 md:py-32">
        <div className="mx-auto max-w-[820px]">
          <Reveal className="mb-10 text-center md:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">Dúvidas</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">Perguntas frequentes</h2>
          </Reveal>
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group border-b border-line">
                <summary className="relative cursor-pointer list-none py-5 pr-10 text-base font-bold transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown size={18} className="absolute right-1 top-1/2 -translate-y-1/2 text-brand transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="faq-answer"><div><p className="max-w-[44em] pb-5 text-muted">{faq.a}</p></div></div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FALE CONOSCO */}
      <section id="contato" className="border-t border-line bg-card px-6 py-16 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
            <Reveal>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">Fale conosco</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:mt-5 md:text-5xl">
                  Prefere conversar antes de testar?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:mt-5 md:text-lg">
                  Deixe seus dados e nosso time entra em contato para entender a sua revenda e tirar suas dúvidas.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Descubra qual plano combina com o tamanho do seu estoque",
                    "Confira se o integrador atende aos portais que você usa",
                    "Tire dúvidas sobre funcionalidades, contratos e comissões",
                    "Tenha ajuda para dar os primeiros passos no GitCar",
                  ].map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="comecar" className="relative overflow-hidden bg-gradient-to-b from-navy to-[#0d2a50] px-6 py-16 text-white md:py-28">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand/[.15] blur-[80px]" />
        <Reveal className="relative mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Comece hoje a gerir sua revenda de um jeito <span className="text-amber">mais simples</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-base leading-relaxed text-white/60 md:mt-6 md:text-[17px]">
            Crie sua conta, cadastre os primeiros veículos e veja o GitCar funcionando na sua operação.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-9">
            <a href="#planos" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/25">
              Conhecer os planos
              <ArrowRight size={17} />
            </a>
            <a href="#contato" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:bg-white/15">
              Falar com nosso time
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
