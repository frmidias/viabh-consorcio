import { MapPin, Trophy, ShieldAlert, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { PartnerConfig } from "../types";

interface SectionProps {
  config: PartnerConfig;
}

export function LogosStrip({ config }: SectionProps) {
  const representativeBrands = [
    { name: "Itaú", logo: "https://i.ibb.co/C5SL3Bsz/Logo-Itau-Consorcios.jpg", fullName: "Itaú Consórcios", scaleClass: "scale-[1.10] sm:scale-[1.15] group-hover:scale-[1.20] sm:group-hover:scale-[1.25]" },
    { name: "BB", logo: "https://i.ibb.co/TMrD0g6V/Logo-BB-Conso-rcios.jpg", fullName: "BB Consórcios", scaleClass: "scale-[0.90] sm:scale-[0.95] group-hover:scale-[1.00] sm:group-hover:scale-[1.05]" },
    { name: "Santander", logo: "https://i.ibb.co/JRB8sRtk/Logo-Sabntander.jpg", fullName: "Santander Consórcios", scaleClass: "scale-[0.90] sm:scale-[0.95] group-hover:scale-[1.00] sm:group-hover:scale-[1.05]" },
    { name: "Âncora", logo: "https://i.ibb.co/m5QgPcNL/Design-sem-nome-1.png", fullName: "Âncora Consórcio", scaleClass: "scale-[1.40] sm:scale-[1.50] group-hover:scale-[1.65] sm:group-hover:scale-[1.75]" },
    { name: "Roma", logo: "https://i.ibb.co/B24WvCDg/Design-sem-nome-3.png", fullName: "Roma Consórcio", scaleClass: "scale-[1.30] sm:scale-[1.40] group-hover:scale-[1.55] sm:group-hover:scale-[1.65]" }
  ];

  const handleAction = () => {
    const mensagem = `Olá! Vim pela página da ${config.empresa} e gostaria de conhecer as opções de administradoras e grupos disponíveis de consórcio.`;
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <section className="py-16 bg-transparent border-y border-neutral-200 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 text-left">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/15 text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider rounded-full mb-3 shadow-sm shadow-brand-red/5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Administradoras Parceiras
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-tight">
              ViaBH Consórcio: Representante Credenciado
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl font-medium">
              Trabalhamos com opções de consórcio por meio de instituições e administradoras reconhecidas no mercado.
            </p>
          </div>
          <button 
            onClick={handleAction}
            className="inline-flex py-3.5 px-7 bg-white hover:bg-brand-red text-neutral-800 hover:text-white border border-neutral-300 hover:border-brand-red text-xs font-extrabold rounded-full text-center shrink-0 self-start transition-all duration-200 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(215,25,32,0.2)] active:scale-95"
          >
            Conhecer opções
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {representativeBrands.map((b, i) => {
            const handleBrandAction = () => {
              const mensagem = `Olá! Vim pela página da ${config.empresa} e gostaria de conhecer as opções de consórcio da administradora ${b.name}.`;
              window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensagem)}`, "_blank");
            };
            
            return (
              <button 
                key={i} 
                onClick={handleBrandAction}
                className="w-full bg-neutral-50/50 hover:bg-white aspect-[3/4] p-4 sm:p-5 rounded-2xl border border-neutral-200 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(215,25,32,0.1)] flex items-center justify-center group hover:-translate-y-1.5 hover:border-brand-red/35 transition-all duration-300 cursor-pointer outline-none select-none active:scale-98 relative overflow-hidden"
              >
                {/* Accent top color bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-brand-red transition-colors duration-300" />
                
                {/* Container for logo (centered inside the vertical card) */}
                <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 bg-white rounded-xl border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
                  <img 
                    src={b.logo} 
                    alt={`Logo ${b.name}`} 
                    className={`max-h-full max-w-full object-contain select-none pointer-events-none transition-transform duration-300 ${b.scaleClass || ""}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyViaBH({ config }: SectionProps) {
  const benefits = [
    {
      num: "1",
      title: "Clareza antes de contratar",
      desc: "Você entende as reais possibilidades, regras de lance e cuidados antes de decidir."
    },
    {
      num: "2",
      title: "Planejamento financeiro",
      desc: "Escolha uma carta e uma parcela coerentes com seu momento e orçamento diário."
    },
    {
      num: "3",
      title: "Estratégia de lance",
      desc: "O consultor avalia os históricos de contemplações para ver se há sentido em ofertas de lances."
    },
    {
      num: "4",
      title: "Opções para vários objetivos",
      desc: "Mobilidade, trabalho, frota, lazer, carros e motos novos e seminovos, imóveis, serviços, reforma e eventos."
    }
  ];

  return (
    <section id="estrategia" className="pt-8 pb-20 lg:pt-10 lg:pb-24 bg-transparent border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-4 text-xs font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/5 border border-brand-red/10 px-3.5 py-1.5 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200 cursor-pointer">
            Por que a ViaBH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-neutral-950">
            Consórcio não é só contratar uma carta. É escolher uma estratégia.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Com atendimento consultivo, a ViaBH entende seu objetivo, sua capacidade mensal, possibilidade de lance e o tipo de bem ou serviço que você quer conquistar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div 
              key={b.num} 
              className="bg-white hover:bg-neutral-950 p-6 rounded-3xl border border-neutral-200 hover:border-neutral-900 space-y-4 shadow-md hover:shadow-xl transition-all duration-300 text-left flex flex-col group/benefit cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-full bg-brand-red text-white font-display font-black text-sm flex items-center justify-center font-extrabold pb-0.5 shadow-sm shadow-brand-red/20">
                {b.num}
              </div>
              <h3 className="font-display font-extrabold text-base text-neutral-950 group-hover/benefit:text-white transition-colors duration-300 leading-snug">{b.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 group-hover/benefit:text-neutral-300 leading-relaxed font-sans flex-1 transition-colors duration-300">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function StrategySegment({ config }: SectionProps) {
  const strategies = [
    {
      step: "1",
      title: "Quando você pode se planejar",
      desc: "É indicado para quem não precisa do bem ou serviço imediatamente e quer organizar a conquista."
    },
    {
      step: "2",
      title: "Quando quer evitar financiamento caro",
      desc: "Não há juros de financiamento, mas existem taxa de administração e regras contratuais."
    },
    {
      step: "3",
      title: "Quando quer uma estratégia de lance",
      desc: "O lance pode ajudar a tentar antecipar a contemplação, conforme regras do grupo e disponibilidade de recursos."
    }
  ];

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-24 bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-900">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-6 text-xs font-mono font-bold text-white uppercase tracking-widest bg-white/5 border border-white px-3.5 py-1.5 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200 cursor-pointer">
            Quando é viável?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight text-white">
            Consórcio é estratégia, não impulso.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Ele tende a fazer mais sentido quando existe planejamento, tempo para aguardar contemplação e desejo de evitar juros tradicionais de financiamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {strategies.map((st) => (
            <div 
              key={st.step}
              className="bg-neutral-900/60 hover:bg-white p-8 rounded-3xl border border-neutral-850 hover:border-brand-red/35 space-y-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group/strategy cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center font-display font-extrabold text-white text-base transition-colors duration-150">
                {st.step}
              </div>
              <h3 className="font-display font-extrabold text-lg text-white group-hover/strategy:text-neutral-950 transition-colors duration-300 leading-tight tracking-tight">{st.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400 group-hover/strategy:text-neutral-600 leading-relaxed font-sans flex-1 transition-colors duration-300">{st.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function AuthoritySegment({ config }: SectionProps) {
  const checklist = [
    { t: "Objetivo", d: "Qual bem ou serviço você quer conquistar." },
    { t: "Carta de crédito", d: "Valor aproximado necessário para sua intenção." },
    { t: "Parcela ideal", d: "Quanto cabe no seu orçamento mensal." },
    { t: "Lance", d: "Se existe estratégia para tentar antecipar." },
    { t: "Prazo", d: "Se você pode se planejar ou tem urgência." },
    { t: "Administradora", d: "Qual opção faz mais sentido para a contratação." }
  ];

  const handleContact = () => {
    const mensagem = `Olá! Vim pela página da ${config.empresa} e gostaria de receber um atendimento consultivo personalizado para simular meu consórcio.`;
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <section id="autoridade" className="py-20 lg:py-24 bg-transparent border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Card 1: Left */}
          <div className="lg:col-span-5 bg-white text-neutral-900 rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative transition-transform duration-300 flex items-center gap-3">
                  <img 
                     src="https://i.ibb.co/hJyc2nVY/Design-sem-nome-2.png" 
                     alt="Logo ViaBH" 
                     className="max-h-[64px] sm:max-h-[72px] w-auto object-contain select-none pointer-events-none"
                     style={{ maxWidth: "240px", height: "auto" }}
                     referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col justify-center select-none font-sans">
                    <div className="flex items-baseline gap-1">
                      <span className="font-sans font-extrabold text-xl sm:text-2xl text-neutral-950 tracking-tight leading-none">ViaBH</span>
                      <span className="font-sans font-extrabold text-xl sm:text-2xl text-brand-red tracking-tight leading-none">Consórcio</span>
                    </div>
                    <span className="font-sans text-[11px] sm:text-[12px] font-bold text-neutral-500 uppercase tracking-[0.2em] leading-normal mt-1.5 block">
                      REPRESENTANTE AUTORIZADO
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-705 leading-relaxed font-sans">
                <strong>Representante autorizado para orientar sua escolha com clareza, segurança e atendimento próximo.</strong>
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Atendimento em Belo Horizonte, com foco em consórcio para mobilidade, veículos, empresas e serviços.
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <div className="space-y-2 text-neutral-700 font-sans">
                  <p className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed"><strong className="text-neutral-900">Endereço:</strong> {config.endereco}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <span className="text-[11px] sm:text-[12px] font-mono uppercase text-neutral-500 font-bold block tracking-wider mb-3">Administradoras Parceiras</span>
                  <div className="grid grid-cols-5 gap-2 sm:gap-4 items-center w-full justify-items-center bg-neutral-50 p-2 sm:p-4 rounded-xl border border-neutral-200">
                    <div className="h-16 sm:h-24 w-full flex items-center justify-center cursor-pointer group overflow-visible">
                      <img 
                        src="https://i.ibb.co/C5SL3Bsz/Logo-Itau-Consorcios.jpg" 
                        alt="Logo Itaú" 
                        className="h-full max-h-12 sm:max-h-16 w-auto object-contain select-none pointer-events-none scale-100 group-hover:scale-130 transition-transform duration-300 rounded" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="h-16 sm:h-24 w-full flex items-center justify-center cursor-pointer group overflow-visible">
                      <img 
                        src="https://i.ibb.co/TMrD0g6V/Logo-BB-Conso-rcios.jpg" 
                        alt="Logo BB Consórcios" 
                        className="h-full max-h-12 sm:max-h-16 w-auto object-contain select-none pointer-events-none scale-100 group-hover:scale-130 transition-transform duration-300 rounded" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="h-16 sm:h-24 w-full flex items-center justify-center cursor-pointer group overflow-visible">
                      <img 
                        src="https://i.ibb.co/JRB8sRtk/Logo-Sabntander.jpg" 
                        alt="Logo Santander" 
                        className="h-full max-h-12 sm:max-h-16 w-auto object-contain select-none pointer-events-none scale-100 group-hover:scale-130 transition-transform duration-300 rounded" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="h-16 sm:h-24 w-full flex items-center justify-center cursor-pointer group overflow-visible">
                      <img 
                        src="https://i.ibb.co/m5QgPcNL/Design-sem-nome-1.png" 
                        alt="Logo Âncora Consórcios" 
                        className="h-full max-h-16 sm:max-h-24 w-auto object-contain select-none pointer-events-none scale-[1.50] sm:scale-[1.70] group-hover:scale-[1.90] sm:group-hover:scale-[2.10] transition-transform duration-300" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="h-16 sm:h-24 w-full flex items-center justify-center cursor-pointer group overflow-visible">
                      <img 
                        src="https://i.ibb.co/B24WvCDg/Design-sem-nome-3.png" 
                        alt="Logo Consórcio Roma" 
                        className="h-full max-h-16 sm:max-h-24 w-auto object-contain select-none pointer-events-none scale-120 group-hover:scale-[1.60] sm:group-hover:scale-[1.70] transition-transform duration-300" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 w-full">
              <button 
                onClick={handleContact}
                className="w-full py-4 bg-brand-red text-white text-xs font-black rounded-full text-center hover:bg-[#b01217] hover:shadow-md transition-all active:translate-y-0.5 block cursor-pointer uppercase tracking-widest"
              >
                FALAR COM VIABH CONSÓRCIO
              </button>
            </div>
          </div>

          {/* Card 2: Right */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-center">
            <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest block font-bold">Avaliação Consultiva</span>
            <h3 className="font-display font-extrabold text-2xl text-neutral-950 mt-1 mb-6 leading-tight">
              O que o consultor avalia com você?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklist.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-neutral-50/60 hover:bg-brand-red p-4.5 rounded-2xl border border-neutral-200 hover:border-brand-red shadow-sm hover:shadow-md transition-all duration-300 group/item cursor-pointer"
                >
                  <h4 className="font-display font-extrabold text-sm text-neutral-950 group-hover/item:text-white flex items-center gap-2 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-brand-red group-hover/item:bg-white rounded-full shrink-0 transition-colors duration-300" />
                    {item.t}
                  </h4>
                  <p className="text-xs text-neutral-600 group-hover/item:text-red-100 mt-1 leading-relaxed font-sans transition-colors duration-300">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export function StepsSegment({ config }: SectionProps) {
  const steps = [
    { title: "Escolha a modalidade", p: "Mobilidade elétrica urbana, empresa, pesados, carros e motos, imóveis ou serviços." },
    { title: "Informe o valor", p: "Defina a carta aproximada e a parcela desejada." },
    { title: "Converse com o consultor", p: "A ViaBH entende seu perfil e orienta as opções." },
    { title: "Analise a estratégia", p: "Veja regras, taxas, prazos, lance e condições do plano." },
    { title: "Contrate com clareza", p: "Só avance quando entender o que faz sentido para você." }
  ];

  return (
    <section className="pt-16 pb-24 lg:pt-20 lg:pb-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
         <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-4 text-xs font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/5 border border-brand-red/10 px-3.5 py-1.5 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200 cursor-pointer">
            Passo a passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight leading-tight text-neutral-950">
            Da intenção à simulação em poucos minutos.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative text-left">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-neutral-50 hover:bg-white p-6 rounded-3xl border border-neutral-200 hover:border-brand-red/35 space-y-4 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col group cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-display font-black text-sm font-extrabold pb-0.5 shadow-sm transition-all duration-150">
                {idx + 1}
              </div>
              <h3 className="font-display font-extrabold text-sm sm:text-base text-neutral-950 group-hover:text-brand-red transition-colors duration-150">{s.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 group-hover:text-neutral-700 leading-relaxed font-sans flex-1 transition-colors duration-150">{s.p}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
