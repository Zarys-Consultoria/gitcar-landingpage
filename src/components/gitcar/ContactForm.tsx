"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/FORM_ID";

function phoneMask(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [phone, setPhone] = useState("");
  const [canal, setCanal] = useState("WhatsApp");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const errs: Record<string, boolean> = {};
    if (!data.get("nome")) errs.nome = true;
    const tel = (data.get("telefone") as string).replace(/\D/g, "");
    if (tel.length < 10) errs.telefone = true;
    const email = data.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = true;
    if (canal === "E-mail" && !email) errs.email = true;
    if (!data.get("revenda")) errs.revenda = true;
    if (!data.get("estoque")) errs.estoque = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem("site") as HTMLInputElement)?.value) return;
    if (!validate(form)) return;
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ok/10 text-ok">
          <Check size={32} />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold">Recebemos seus dados!</h3>
        <p className="mt-2 text-muted">Nosso time vai falar com você em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-7 shadow-lg md:p-9">
      <h3 className="font-display text-xl font-bold">Peça um contato</h3>
      <p className="mt-1 text-sm text-muted">Leva menos de um minuto. Campos com * são obrigatórios.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Seu nome" name="nome" required error={errors.nome} msg="Informe seu nome." autoComplete="name" />
        <Field
          label="WhatsApp / telefone"
          name="telefone"
          required
          error={errors.telefone}
          msg="Informe um telefone com DDD."
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(85) 90000-0000"
          value={phone}
          onChange={(v) => setPhone(phoneMask(v))}
        />
        <Field label="E-mail" name="email" optional error={errors.email} msg={canal === "E-mail" ? "Preencha o e-mail para contato." : "Confira o e-mail."} type="email" autoComplete="email" />
        <Field label="Nome da revenda" name="revenda" required error={errors.revenda} msg="Informe o nome da revenda." autoComplete="organization" />
        <Field label="Cidade / UF" name="cidade" optional autoComplete="address-level2" placeholder="Fortaleza / CE" />
        <div>
          <label className="mb-1 block text-sm font-semibold">
            Veículos em estoque <span className="text-brand">*</span>
          </label>
          <select name="estoque" required className={`w-full rounded-lg border ${errors.estoque ? "border-red-400" : "border-line"} bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-1 focus:ring-brand/30`}>
            <option value="">Selecione</option>
            <option>Até 25</option>
            <option>De 26 a 50</option>
            <option>Mais de 50</option>
          </select>
          {errors.estoque && <span className="mt-1 block text-xs text-red-500">Escolha uma opção.</span>}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="mb-2 text-sm font-semibold">Como prefere ser contatado?</legend>
          <div className="flex gap-4">
            {["WhatsApp", "Ligação", "E-mail"].map((opt) => (
              <label key={opt} className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${canal === opt ? "border-brand bg-brand/5 text-brand" : "border-line text-muted hover:border-brand/30"}`}>
                <input type="radio" name="canal" value={opt} checked={canal === opt} onChange={() => setCanal(opt)} className="sr-only" />
                <span className={`h-3.5 w-3.5 rounded-full border-2 ${canal === opt ? "border-brand bg-brand" : "border-line"}`} />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-semibold">
            Quer adiantar algo? <span className="text-xs font-normal text-muted">(opcional)</span>
          </label>
          <textarea name="mensagem" rows={3} placeholder="Ex.: quero saber se o integrador publica nos portais que uso." className="w-full resize-y rounded-lg border border-line px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-1 focus:ring-brand/30" />
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label>Não preencha<input name="site" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {sendError && <p className="mt-3 text-sm text-red-500">Não conseguimos enviar agora. Tente de novo em alguns instantes.</p>}

      <button type="submit" disabled={sending} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg hover:shadow-amber/25 disabled:opacity-60">
        {sending ? "Enviando..." : "Quero que entrem em contato"}
        <ArrowRight size={17} />
      </button>
      <p className="mt-3 text-center text-xs text-muted">Usamos seus dados apenas para entrar em contato sobre o GitCar.</p>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
  error?: boolean;
  msg?: string;
  type?: string;
  inputMode?: "tel" | "email" | "text";
  autoComplete?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
}

function Field({ label, name, required, optional, error, msg, type = "text", inputMode, autoComplete, placeholder, value, onChange }: FieldProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold">
        {label} {required && <span className="text-brand">*</span>}
        {optional && <span className="text-xs font-normal text-muted">(opcional)</span>}
      </label>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={`w-full rounded-lg border ${error ? "border-red-400" : "border-line"} px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-1 focus:ring-brand/30`}
      />
      {error && msg && <span className="mt-1 block text-xs text-red-500">{msg}</span>}
    </div>
  );
}
