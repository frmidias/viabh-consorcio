import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Modalities from "./components/Modalities";
import { LogosStrip, WhyViaBH, StrategySegment, AuthoritySegment, StepsSegment } from "./components/Features";
import Faq from "./components/Faq";
import { PartnerConfig } from "./types";
import { MessageSquare, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const LOCAL_STORAGE_KEY = "viabh_partner_config";

const DEFAULT_CONFIG: PartnerConfig = {
  whatsapp: "553132458700",
  empresa: "ViaBH Consórcio",
  consultor: "equipe ViaBH",
  endereco: "Av. Barão Homem de Melo, 4454 - Estoril, Belo Horizonte - MG, 30494-270",
};

export default function App() {
  const [config, setConfig] = useState<PartnerConfig>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.whatsapp && (
          parsed.whatsapp.includes("982391077") ||
          parsed.whatsapp.includes("98239") ||
          parsed.whatsapp.includes("932458700") ||
          parsed.whatsapp.includes("34258700") ||
          parsed.whatsapp === "5531932458700" ||
          parsed.whatsapp === "31932458700" ||
          parsed.whatsapp === "932458700" ||
          parsed.whatsapp === "5531982391077" ||
          parsed.whatsapp === "31982391077" ||
          parsed.whatsapp === "982391077"
        )) {
          parsed.whatsapp = "553132458700";
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch (e) {
      console.warn("Could not load config from localStorage", e);
    }
    return DEFAULT_CONFIG;
  });

  const [selectedModalidade, setSelectedModalidade] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search || "";
      if (search.includes("admin=true") || search.includes("config=true")) {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleUpdateConfig = (newConfig: PartnerConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.error("Could not save config to localStorage", e);
    }
  };

  return (
    <div className="min-h-screen bg-transparent font-sans text-neutral-800 flex flex-col selection:bg-brand-red selection:text-white">
      {/* Premium Header/Navigation with customizable drawer settings */}
      <Nav config={config} onUpdateConfig={handleUpdateConfig} isAdmin={isAdmin} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full m-0 p-0" id="topo">
        
        {/* Dynamic Partner Informer Banner if modified to something other than generic defaults */}
        <AnimatePresence>
          {isAdmin && config.whatsapp !== DEFAULT_CONFIG.whatsapp && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-brand-red text-white py-2 px-4 shadow-inner text-center text-xs font-mono font-bold flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>
                Simulador Ativo com WhatsApp Comercial Customizado: +{config.whatsapp} ({config.consultor})
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section with right Simulator card */}
        <Hero config={config} selectedModalidade={selectedModalidade} />

        {/* Logos Strip Section representing Itaú, BB, Santander, Âncora, Roma */}
        <LogosStrip config={config} />

        {/* Why ViaBH Segment */}
        <WhyViaBH config={config} />

        {/* Modalities Catalog Selectors Grid */}
        <Modalities config={config} onSelectModalidade={setSelectedModalidade} />

        {/* When Is It Viable Strategy Segment (Theme Dark) */}
        <StrategySegment config={config} />

        {/* Authority Section (Credentials & Consultant Checklist) */}
        <AuthoritySegment config={config} />

        {/* Steps Chronology Timeline */}
        <StepsSegment config={config} />

        {/* FAQ Toggle Accordeons & Closing CTA Block */}
        <Faq config={config} />

      </main>

      {/* Styled Minimalist Footer Block */}
      <footer className="bg-neutral-950/95 backdrop-blur-md text-neutral-400 py-12 border-t border-neutral-800 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          {/* Top Row: Brand & Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-neutral-800">
            {/* Div 1: Brand Info */}
            <div className="flex flex-col gap-3">
              <span className="font-sans font-black text-sm text-white tracking-tight uppercase">
                {config.empresa}
              </span>
              <p className="leading-relaxed max-w-sm text-neutral-400">
                Consórcio planejado para transformar seus objetivos em conquistas reais, com segurança, economia e orientação especializada.
              </p>
            </div>

            {/* Div 2: Address & Contact */}
            <div className="flex flex-col gap-2 md:items-end md:text-right">
              <span className="font-bold text-white">Contato & Localização</span>
              <p className="leading-relaxed text-neutral-400 max-w-sm">
                {config.endereco}
              </p>
            </div>
          </div>

          {/* Bottom Row / Ribbon: Copyright & Legal + Developer credits side-by-side */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500">
            <div>
              <p className="leading-relaxed text-neutral-500 text-[10px]">
                © {new Date().getFullYear()} {config.empresa}. Todos os direitos reservados.
              </p>
            </div>
            <div>
              <p>
                <span className="text-white font-medium text-[10px]">Desenvolvido por Fernanda Raissinger</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Luxury Floating Quick WhatsApp button */}
      <a
        href={`https://wa.me/${config.whatsapp}?text=Olá! Vim pela página da ${config.empresa} e gostaria de falar com um consultor.`}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-floating-whatsapp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
        title="Falar no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 stroke-[2.5px]" />
        
        {/* Hover label */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-brand-black text-white text-xs font-bold py-1.5 px-3.5 rounded-xl whitespace-nowrap shadow-xl transition-all duration-200 border border-neutral-800">
          WhatsApp Online
        </span>
      </a>
    </div>
  );
}
