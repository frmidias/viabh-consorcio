import React, { useState, useEffect, FormEvent } from "react";
import { User, Phone, MapPin, Send, HelpCircle, FileText, CheckCircle2 } from "lucide-react";
import { PartnerConfig } from "../types";

interface SimulatorProps {
  config: PartnerConfig;
  initialModalidade?: string;
}

export default function Simulator({ config, initialModalidade }: SimulatorProps) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [modalidade, setModalidade] = useState("Mobilidade elétrica urbana");
  const [objetivo, setObjetivo] = useState("");
  const [valorCarta, setValorCarta] = useState("");
  const [parcelaPretendida, setParcelaPretendida] = useState("");
  const [lance, setLance] = useState("Ainda não sei");
  const [prazo, setPrazo] = useState("Posso me planejar");
  const [observacoes, setObservacoes] = useState("");

  useEffect(() => {
    if (initialModalidade) {
      setModalidade(initialModalidade);
    }
  }, [initialModalidade]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const dataNome = nome || "Ainda não informado";
    const dataTelefone = telefone || "Ainda não informado";
    const dataCidade = cidade || "Ainda não informada";
    const dataObjetivo = objetivo || "Ainda não informado";
    const dataValor = valorCarta || "Ainda não informado";
    const dataParcela = parcelaPretendida || "Ainda não informada";
    const dataLance = lance || "Ainda não informado";
    const dataPrazo = prazo || "Ainda não informado";
    const dataObservacoes = observacoes || "Sem observações adicionais";

    const mensagem = `Olá! Vim pela página da ${config.empresa} e quero fazer uma simulação de consórcio.\n\nNome: ${dataNome}\nTelefone: ${dataTelefone}\nCidade: ${dataCidade}\nModalidade de interesse: ${modalidade}\nBem ou serviço desejado: ${dataObjetivo}\nValor aproximado da carta: ${dataValor}\nParcela que gostaria de pagar: ${dataParcela}\nTenho valor para lance: ${dataLance}\nPrazo/urgência: ${dataPrazo}\nObservações: ${dataObservacoes}\n\nGostaria de receber uma orientação da ${config.consultor}.`;

    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <div id="simulacao" className="bg-white/95 rounded-3xl border border-brand-red/15 shadow-2xl p-6 sm:p-8 relative overflow-hidden max-w-lg mx-auto w-full group/sim backdrop-blur-md">
      {/* Decorative colored top line indicator */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-red" />
      
      {/* Simulator Card Top */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100">
        <div className="relative shrink-0">
          <svg viewBox="0 0 100 100" className="w-12 h-12 select-none pointer-events-none filter drop-shadow-sm">
            <circle cx="50" cy="50" r="46" fill="#121216" />
            <line x1="42.5" y1="26" x2="42.5" y2="74" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <text x="32" y="58" fontFamily="'Times New Roman', Georgia, serif" fontSize="27" fill="#ffffff" textAnchor="middle">V</text>
            <text x="49" y="58" fontFamily="'Times New Roman', Georgia, serif" fontSize="26" fill="#ffffff" letterSpacing="-3.5">BH</text>
          </svg>
        </div>
        <div>
          <h3 className="font-display font-extrabold text-xl text-neutral-900 leading-tight">
            Simule seu consórcio
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Envie as respostas direto para o WhatsApp da ViaBH.
          </p>
        </div>
      </div>

      {/* Simulator Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
        <div>
          <label htmlFor="sim-nome" className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-neutral-500" /> Nome
          </label>
          <input
            id="sim-nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-450 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all"
          />
        </div>

        <div>
          <label htmlFor="sim-telefone" className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-neutral-500" /> Telefone
          </label>
          <input
            id="sim-telefone"
            type="tel"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Ex: (31) 99999-9999"
            className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-450 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all"
          />
        </div>

        <div>
          <label htmlFor="sim-cidade" className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" /> Cidade
          </label>
          <input
            id="sim-cidade"
            type="text"
            required
            value={cidade}
            placeholder="Ex: Belo Horizonte"
            onChange={(e) => setCidade(e.target.value)}
            className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-450 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all"
          />
        </div>

        <div>
          <label htmlFor="sim-modalidade" className="block text-xs font-bold text-neutral-700 mb-1.5">
            Modalidade de interesse
          </label>
          <div className="relative">
            <select
              id="sim-modalidade"
              value={modalidade}
              onChange={(e) => setModalidade(e.target.value)}
              className="w-full text-sm bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all appearance-none cursor-pointer"
            >
              <option value="Mobilidade elétrica urbana" className="bg-white text-neutral-900">Mobilidade elétrica urbana</option>
              <option value="Utilitários elétricos para empresas" className="bg-white text-neutral-900">Utilitários elétricos para empresas</option>
              <option value="Veículos Off Road" className="bg-white text-neutral-900">Veículos Off Road</option>
              <option value="Veículos pesados" className="bg-white text-neutral-900">Veículos pesados</option>
              <option value="Carros e Motos - Novos e Seminovos" className="bg-white text-neutral-900">Carros e Motos - Novos e Seminovos</option>
              <option value="Imóveis" className="bg-white text-neutral-900">Imóveis</option>
              <option value="Serviços" className="bg-white text-neutral-900">Serviços</option>
              <option value="Ainda não sei" className="bg-white text-neutral-900">Ainda não sei</option>
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">▼</span>
          </div>
        </div>

        <div>
          <label htmlFor="sim-objetivo" className="block text-xs font-bold text-neutral-700 mb-1.5">
            Qual bem ou serviço deseja conquistar?
          </label>
          <input
            id="sim-objetivo"
            type="text"
            required
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            placeholder="Ex: utilitário elétrico, móveis planejados, caminhão..."
            className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-450 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sim-valor" className="block text-xs font-bold text-neutral-700 mb-1.5">
              Valor aproximado da carta
            </label>
            <input
              id="sim-valor"
              type="text"
              required
              value={valorCarta}
              onChange={(e) => setValorCarta(e.target.value)}
              placeholder="Ex: R$ 80.000"
              className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-450 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all"
            />
          </div>

          <div>
            <label htmlFor="sim-parcela" className="block text-xs font-bold text-neutral-700 mb-1.5">
              Quanto pretende pagar por mês?
            </label>
            <input
              id="sim-parcela"
              type="text"
              required
              value={parcelaPretendida}
              onChange={(e) => setParcelaPretendida(e.target.value)}
              placeholder="Ex: até R$ 1.500"
              className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-450 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sim-lance" className="block text-xs font-bold text-neutral-700 mb-1.5">
              Você tem valor para lance?
            </label>
            <div className="relative">
              <select
                id="sim-lance"
                value={lance}
                onChange={(e) => setLance(e.target.value)}
                className="w-full text-sm bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all appearance-none cursor-pointer"
              >
                <option value="Ainda não sei" className="bg-white text-neutral-900">Ainda não sei</option>
                <option value="Sim" className="bg-white text-neutral-900">Sim</option>
                <option value="Não" className="bg-white text-neutral-900">Não</option>
                <option value="Quero entender como funciona" className="bg-white text-neutral-900">Quero entender como funciona</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">▼</span>
            </div>
          </div>

          <div>
            <label htmlFor="sim-prazo" className="block text-xs font-bold text-neutral-700 mb-1.5">
              Você precisa com urgência?
            </label>
            <div className="relative">
              <select
                id="sim-prazo"
                value={prazo}
                onChange={(e) => setPrazo(e.target.value)}
                className="w-full text-sm bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all appearance-none cursor-pointer"
              >
                <option value="Posso me planejar" className="bg-white text-neutral-900">Posso me planejar</option>
                <option value="Tenho certa urgência" className="bg-white text-neutral-900">Tenho certa urgência</option>
                <option value="Quero entender a melhor estratégia" className="bg-white text-neutral-900">Quero entender a melhor estratégia</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">▼</span>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="sim-observacoes" className="block text-xs font-bold text-neutral-700 mb-1.5 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-neutral-500" /> Observações
          </label>
          <textarea
            id="sim-observacoes"
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder="Conte algum detalhe importante para o consultor."
            rows={2}
            className="w-full text-sm bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 rounded-xl px-3.5 py-2.5 outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/40 transition-all resize-none animate-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-brand-red hover:bg-[#b01217] text-white font-extrabold text-sm sm:text-base rounded-full shadow-lg shadow-brand-red/20 hover:shadow-brand-red/35 active:translate-y-0.5 transition-all flex items-center justify-center gap-2.5 select-none cursor-pointer mt-2"
        >
          <Send className="w-4 h-4 text-white shrink-0" />
          <span>Enviar simulação pelo WhatsApp</span>
        </button>

        <p className="text-[10px] text-neutral-500 text-center leading-relaxed mt-3">
          A simulação é uma pré-análise. Condições, taxas, prazos e contratação dependem das regras da administradora e do plano escolhido.
        </p>
      </form>
    </div>
  );
}
