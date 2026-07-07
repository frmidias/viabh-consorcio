import React, { useState, FormEvent } from "react";
import { Settings, X, Menu, Phone, Shield, MapPin, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PartnerConfig } from "../types";

interface NavProps {
  config: PartnerConfig;
  onUpdateConfig: (newConfig: PartnerConfig) => void;
  isAdmin?: boolean;
}

export default function Nav({ config, onUpdateConfig, isAdmin = false }: NavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Local state for form customization
  const [whatsapp, setWhatsapp] = useState(config.whatsapp);
  const [consultor, setConsultor] = useState(config.consultor);
  const [empresa, setEmpresa] = useState(config.empresa);
  const [endereco, setEndereco] = useState(config.endereco);
  const [showSavedToast, setShowSavedToast] = useState(false);

  React.useEffect(() => {
    setWhatsapp(config.whatsapp);
  }, [config.whatsapp]);

  React.useEffect(() => {
    setConsultor(config.consultor);
    setEmpresa(config.empresa);
    setEndereco(config.endereco);
  }, [config.consultor, config.empresa, config.endereco]);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    onUpdateConfig({
      whatsapp: whatsapp.replace(/\D/g, ""), // clean non-digits
      empresa,
      consultor,
      endereco,
    });
    setIsDrawerOpen(false);
    setShowSavedToast(true);
    setTimeout(() => {
      setShowSavedToast(false);
    }, 3000);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-brand-red/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo Component */}
            <a href="#topo" className="flex items-center gap-3.5 group">
              <div className="relative transition-transform duration-300 group-hover:scale-[1.02] flex items-center gap-3.5">
                <img 
                  src="https://i.ibb.co/hJyc2nVY/Design-sem-nome-2.png" 
                  alt="Logo ViaBH" 
                  className="max-h-[54px] sm:max-h-[64px] w-auto object-contain select-none pointer-events-none"
                  style={{ maxWidth: "220px", height: "auto" }}
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col justify-center select-none font-sans">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-900 tracking-tight leading-none">ViaBH</span>
                    <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-red tracking-tight leading-none">Consórcio</span>
                  </div>
                  <span className="font-sans text-[10px] sm:text-[11px] md:text-[11.5px] lg:text-[12.5px] font-bold text-neutral-500 uppercase tracking-[0.2em] leading-none mt-1.5">
                    REPRESENTANTE AUTORIZADO
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold text-neutral-600">
              <a href="#modalidades" className="hover:text-brand-red transition-colors">Objetivo</a>
              <a href="#estrategia" className="hover:text-brand-red transition-colors">Por Que ViaBH</a>
              <a href="#autoridade" className="hover:text-brand-red transition-colors">Autoridade</a>
              <a href="#faq" className="hover:text-brand-red transition-colors">Dúvidas</a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {isAdmin && (
                <button 
                  onClick={() => setIsDrawerOpen(true)}
                  className="flex items-center gap-2 p-2.5 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors border border-neutral-200"
                  title="Configurações de Integrador"
                  id="btn-settings"
                >
                  <Settings className="w-4 h-4 animate-spin-hover" />
                  <span className="text-xs font-mono font-bold">Configurar WhatsApp</span>
                </button>
              )}

              <a 
                href={`https://wa.me/${config.whatsapp}?text=Olá! Vim pela página da ${config.empresa} e gostaria de falar com um consultor.`}
                target="_blank"
                rel="noreferrer"
                id="btn-consultant"
                className="px-5 py-2.5 rounded-full border border-neutral-200 text-sm font-bold text-neutral-800 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all hover:scale-[1.02]"
              >
                Falar com Consultor
              </a>
              
              <a 
                href="#simulacao"
                id="btn-nav-simulate"
                onClick={(e) => {
                  e.preventDefault();
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
                className="px-6 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-extrabold rounded-full shadow-lg shadow-brand-red/20 transition-all hover:-translate-y-0.5"
              >
                Simular Agora
              </a>
            </div>

            {/* Mobile Actions Button Controls */}
            <div className="flex md:hidden items-center gap-2">
              {isAdmin && (
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 border border-neutral-200"
                  aria-label="Settings"
                  id="btn-mobile-settings"
                >
                  <Settings className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-800"
                aria-label="Menu"
                id="btn-mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-xl shadow-2xl px-4 py-6 absolute w-full left-0 right-0 z-50 space-y-4"
            >
              <div className="flex flex-col gap-4 font-sans font-bold text-neutral-800">
                <a 
                  href="#modalidades" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 border-b border-neutral-100 block hover:text-brand-red"
                >
                  Objetivo de Consórcio
                </a>
                <a 
                  href="#estrategia" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 border-b border-neutral-100 block hover:text-brand-red"
                >
                  Diferenciais de Estratégia
                </a>
                <a 
                  href="#autoridade" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 border-b border-neutral-100 block hover:text-brand-red"
                >
                  Administradoras & Credibilidade
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 block hover:text-brand-red"
                >
                  Dúvidas Frequentes
                </a>
                
                <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
                  <a 
                    href="#simulacao"
                    id="btn-mobile-simulate"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      const element = document.getElementById("simulacao");
                      if (element) {
                        setTimeout(() => {
                           element.scrollIntoView({ behavior: "smooth" });
                           element.classList.add("ring-4", "ring-brand-red/30", "scale-[1.02]", "transition-all", "duration-500");
                           setTimeout(() => {
                             element.classList.remove("ring-4", "ring-brand-red/30", "scale-[1.02]");
                           }, 1500);

                           const input = document.getElementById("sim-nome");
                           if (input) {
                             setTimeout(() => {
                               input.focus();
                             }, 500);
                           }
                        }, 100);
                      }
                    }}
                    className="w-full py-3 bg-brand-red text-white font-extrabold rounded-xl shadow-md text-center"
                  >
                    Fazer Simulação Premium
                  </a>
                  <a 
                    href={`https://wa.me/${config.whatsapp}?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor%20da%20ViaBH.`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    id="btn-mobile-chat"
                    className="w-full py-3 border border-neutral-200 text-center font-bold text-neutral-700 bg-neutral-50 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all group"
                  >
                    <Phone className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" /> Falar com Consultor
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Admin Panel Configuration Side Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-neutral-900 z-50 pointer-events-auto"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto px-6 py-8 flex flex-col border-l border-neutral-200"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-brand-red" />
                  <h2 className="font-display font-extrabold text-xl text-neutral-950">Configuração do Link</h2>
                </div>
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-neutral-150 rounded-full text-neutral-500"
                  id="btn-close-drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 mb-6 text-xs text-neutral-600 space-y-2 text-left">
                <p className="font-semibold text-neutral-950 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-brand-red" /> Configurações Persistentes
                </p>
                <p>Altere os dados de destino para que todos os botões e formulários do aplicativo disparem diretamente para o WhatsApp e dados da sua imobiliária/consultoria.</p>
              </div>

              <form onSubmit={handleSave} className="space-y-5 flex-1 text-left">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    WhatsApp do Corretor / Empresa
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-neutral-450 text-sm font-semibold font-mono">+</span>
                    <input 
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="5531999999999"
                      className="w-full pl-7 pr-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 focus:outline-none font-semibold text-sm"
                    />
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-1">Insira apenas números com código de país e DDD (ex: 5531999999999)</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Consultor Respondente
                  </label>
                  <input 
                    type="text"
                    value={consultor}
                    onChange={(e) => setConsultor(e.target.value)}
                    placeholder="equipe ViaBH"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 focus:outline-none font-semibold text-sm"
                  />
                  <p className="text-[10px] text-neutral-500 mt-1">Nome exibido na saudação do chat do WhatsApp</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Nome da Empresa
                  </label>
                  <input 
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="ViaBH Consórcio"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 focus:outline-none font-semibold text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Endereço Comercial
                  </label>
                  <textarea 
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    rows={3}
                    placeholder="Av. Barão Homem de Melo, 4454 - Estoril, Belo Horizonte - MG, 30494-270"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10 focus:outline-none font-semibold text-sm"
                  />
                  <p className="text-[10px] text-neutral-500 mt-1">Exibido no rodapé e blocos de autoridade local.</p>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      // restore default configuration
                      setWhatsapp("553132458700");
                      setConsultor("equipe ViaBH");
                      setEmpresa("ViaBH Consórcio");
                      setEndereco("Av. Barão Homem de Melo, 4454 - Estoril, Belo Horizonte - MG, 30494-270");
                    }}
                    className="px-4 py-2.5 border border-neutral-200 hover:bg-neutral-50 rounded-xl text-xs font-bold text-neutral-600 transition-colors"
                  >
                    Restaurar Padrão
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl text-xs font-black transition-colors"
                    id="btn-save-drawer"
                  >
                    Salvar Dados
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Save Toast Notification */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-neutral-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-neutral-800"
          >
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-3 h-3 text-white stroke-[3px]" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-white animate-none">Configurações Salvas!</p>
              <p className="text-[10px] text-neutral-400">Pronto para simular para +{config.whatsapp}.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
