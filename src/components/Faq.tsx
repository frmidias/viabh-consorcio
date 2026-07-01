import { useState } from "react";
import { ChevronRight, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PartnerConfig } from "../types";

interface FaqProps {
  config: PartnerConfig;
}

export default function Faq({ config }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Consórcio tem juros?",
      a: "Não há juros de financiamento. Porém, existem taxa de administração e outras condições previstas em contrato, conforme a administradora e o plano."
    },
    {
      q: "A contemplação é garantida?",
      a: "Sim. No consórcio, todos os participantes ativos serão contemplados até o final do grupo, conforme as regras do contrato.\n\nO que não é possível garantir é quando a contemplação vai acontecer, pois ela pode ocorrer por sorteio ou por lance, de acordo com as regras do grupo e a disponibilidade de recursos.\nPor isso, não existe promessa de contemplação imediata ou em uma data específica.\n\nNo entanto, existem formas de buscar a antecipação da contemplação por meio de estratégias de lance e simulações personalizadas.\nO consultor poderá analisar seu perfil, seu objetivo e as condições do grupo para orientar a melhor estratégia possível dentro das regras do consórcio."
    },
    {
      q: "Posso usar o consórcio para serviços?",
      a: "Sim, dependendo da administradora e da categoria contratada. Pode envolver viagens, intercâmbios, educação, saúde, estética, reformas, construções, festas e eventos."
    },
    {
      q: "É indicado para quem tem urgência?",
      a: "Geralmente o consórcio faz mais sentido para quem pode se planejar. Se há urgência, o consultor pode avaliar se estratégia de lance faz sentido."
    }
  ];

  return (
    <section id="faq" className="pt-8 pb-20 lg:pt-10 lg:pb-24 bg-transparent scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="inline-block mb-3 text-xs font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/5 border border-brand-red/10 px-3.5 py-1.5 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200 cursor-pointer">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 leading-tight tracking-tight">
            O que você precisa saber antes de simular.
          </h2>
        </div>

        {/* Custom Interactive FAQ list */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-brand-red/5 border-brand-red/30 shadow-xs" 
                    : "bg-white border-neutral-200 hover:border-brand-red/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer outline-none group select-none"
                >
                  <span className={`font-display font-bold text-sm sm:text-base leading-snug transition-colors ${
                    isOpen ? "text-brand-red font-extrabold" : "text-neutral-900 group-hover:text-brand-red/95"
                  }`}>
                    {item.q}
                  </span>
                  
                  {/* Rotating chevron indicator */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-neutral-200 transition-all ${
                    isOpen ? "rotate-90 bg-brand-red text-white border-brand-red" : "bg-neutral-50 text-neutral-600"
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                </button>

                {/* Animated expandable body height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed border-t border-neutral-100 text-left whitespace-pre-line">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Final CTA Container Block */}
        <div className="mt-16 bg-gradient-to-br from-brand-red to-brand-red-dark border border-brand-red-dark/10 text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden text-center max-w-3xl mx-auto">
          {/* subtle flare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Quer saber se o consórcio é viável para você?
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto">
                Fale com a ViaBH Consórcios e receba uma orientação personalizada para seu objetivo, orçamento e momento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a 
                href="#simulacao"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-brand-red-dark hover:bg-neutral-50 active:scale-98 font-black text-sm rounded-full shadow-lg transition-all"
              >
                Simular agora
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
