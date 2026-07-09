import { Sparkles } from "lucide-react";
import { PartnerConfig } from "../types";
import Simulator from "./Simulator";
import { motion } from "motion/react";

interface HeroProps {
  config: PartnerConfig;
  selectedModalidade?: string;
}

export default function Hero({ config, selectedModalidade }: HeroProps) {
  const sendGoalWhatsApp = (goal: string) => {
    const mensagem = `Olá! Vim pela página da ${config.empresa} e tenho interesse em simular: ${goal}. Quero uma orientação sobre opções de consórcio.`;
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-transparent pt-10 pb-20 lg:pt-16 lg:pb-24">
      {/* Background Decorative Grid and Lights */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden opacity-30">
        <div className="absolute -top-40 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(100%_100%_at_top_center,white,rgba(255,255,255,0))]">
          <svg className="absolute inset-0 h-full w-full stroke-brand-red/10" aria-hidden="true">
            <defs>
              <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse" x="50%">
                <path d="M.5 40V.5H40" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-hero)" strokeWidth="0" />
          </svg>
        </div>
      </div>

      <div className="absolute top-20 left-[10%] w-96 h-96 bg-brand-red/[0.02] rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 right-[15%] w-96 h-96 bg-brand-red/[0.02] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-start">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left pt-2 lg:pt-8">
                  {/* Visual Micro-Badge */}
            <div className="inline-flex items-center justify-start">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-brand-red text-neutral-800 hover:text-white text-xs font-sans font-extrabold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md border border-neutral-200 hover:border-brand-red transition-all cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-red group-hover:text-white animate-pulse transition-colors" />
                <span>{config.empresa} • Belo Horizonte</span>
              </motion.div>
            </div>

            {/* Main Title Heading without red underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Planeje sua próxima conquista com consórcio e <span className="text-brand-red relative inline-block">orientação especializada.</span>
            </h1>

            {/* Lead description paragraph */}
            <p className="text-sm sm:text-base md:text-md text-neutral-600 max-w-2xl mr-auto font-sans leading-relaxed">
              Mobilidade elétrica urbana, utilitários elétricos para empresas, veículos Off Road, veículos pesados, máquinas e equipamentos, carros e motos - novos e seminovos, imóveis e serviços.
              <br />
              A ViaBH orienta você na escolha da melhor estratégia para transformar intenção em plano.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <a
                href="#simulacao"
                onClick={(e) => {
                  const element = document.getElementById("simulacao");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    
                    // Add an elegant highlight ring to direct attention
                    element.classList.add("ring-4", "ring-brand-red/30", "scale-[1.02]", "transition-all", "duration-500");
                    setTimeout(() => {
                      element.classList.remove("ring-4", "ring-brand-red/30", "scale-[1.02]");
                    }, 1500);

                    // Focus the first input of the form
                    const input = document.getElementById("sim-nome");
                    if (input) {
                      setTimeout(() => {
                        input.focus();
                      }, 500);
                    }
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-[#b01217] active:scale-98 text-white font-extrabold rounded-full shadow-lg shadow-brand-red/15 hover:shadow-brand-red/25 transition-all text-center cursor-pointer"
              >
                Simular meu consórcio
              </a>

              <button
                onClick={() => sendGoalWhatsApp("entender se consórcio é viável para meu objetivo")}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-brand-red hover:text-white hover:border-brand-red active:scale-98 text-neutral-800 font-bold rounded-full border border-neutral-200 shadow-sm transition-all cursor-pointer hover:shadow-md"
              >
                Entender se é viável
              </button>
            </div>

            {/* Imagem Consórcio solicitada pelo usuário */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 overflow-hidden rounded-2xl border border-neutral-200/60 shadow-sm max-w-full lg:max-w-[580px]"
            >
              <img
                src="https://i.ibb.co/JFB24vNS/Chat-GPT-Image-1-de-jul-de-2026-14-39-25.png"
                alt="Consórcio ViaBH"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain object-center rounded-2xl"
              />
            </motion.div>

          </div>

          {/* Hero Right Column: Direct premium Simulator form matching reference page exactly */}
          <div className="lg:col-span-5 w-full relative">
            <div className="absolute inset-0 bg-brand-red/5 rounded-3xl blur-2xl -z-10 scale-95" />
            <Simulator config={config} initialModalidade={selectedModalidade} />
          </div>

        </div>
      </div>
    </section>
  );
}
