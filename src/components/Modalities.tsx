import { Zap, Truck, Compass, ShieldAlert, Car, Home, Sparkles, ArrowRight } from "lucide-react";
import { PartnerConfig } from "../types";

interface ModalitiesProps {
  config: PartnerConfig;
  onSelectModalidade: (modalidadeName: string) => void;
}

export default function Modalities({ config, onSelectModalidade }: ModalitiesProps) {
  const modalities = [
    {
      key: "Mobilidade elétrica urbana",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 select-none pointer-events-none transition-transform group-hover:scale-110">
          <defs>
            <filter id="scooter-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1.2" stdDeviation="1" floodColor="#000000" floodOpacity="0.15" />
            </filter>
          </defs>
          <g filter="url(#scooter-shadow)">
            {/* Rear tire */}
            <circle cx="26" cy="67" r="13" fill="#111111" />
            <circle cx="26" cy="67" r="8" fill="#FFFFFF" />
            <circle cx="26" cy="67" r="4" fill="#111111" />

            {/* Front tire */}
            <circle cx="78" cy="67" r="10" fill="#111111" />
            <circle cx="78" cy="67" r="6" fill="#FFFFFF" />
            <circle cx="78" cy="67" r="3" fill="#111111" />

            {/* Rear fender (black) */}
            <path d="M 13,67 C 13,59 18,54 21,52" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Motor cover / kickstand (grey) */}
            <path d="M 26,67 L 40,67 C 42,67 43,65 41,63 L 34,63" stroke="#8E9AA6" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Front fork & handlebars */}
            <path d="M 78,67 L 74,58 C 73,56 72,55 74,53" stroke="#8E9AA6" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Steering column / Handle bar */}
            <path d="M 66,41 C 65,39 63,35 60,32" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 62,34 L 57,37" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Mirror */}
            <circle cx="63" cy="27" r="3" fill="#111111" />
            <path d="M 61,32 L 63,29" stroke="#111111" strokeWidth="1.5" />

            {/* Red Main body shell */}
            <path d="M 21,52 C 20,49 23,46 29,46 C 37,46 43,51 43,57 C 42,62 31,64 26,62 Z" fill="#E53E3E" />
            {/* Front shield panel - Red */}
            <path d="M 60,40 C 60,40 68,44 71,51 C 73,54 77,57 82,57 C 78,62 70,66 65,66 C 63,60 59,48 60,40 Z" fill="#E53E3E" />
            {/* Step-through floor frame linking back to front */}
            <path d="M 39,58 C 45,64 58,65 67,61" stroke="#E53E3E" strokeWidth="7.5" strokeLinecap="round" fill="none" />
            {/* Floorboard rubber overlay mat (black) */}
            <path d="M 43,58 L 60,58" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

            {/* Black Seat */}
            <path d="M 24,46 C 26,45 34,45 42,46 C 45,46 48,47 48,51 C 48,53 45,54 44,54 C 38,54 36,58 35,58 L 24,58 Z" fill="#111111" />

            {/* Backrest (Sissy bar) */}
            <path d="M 20,46 L 20,38" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="17.5" y="32" width="5" height="8" rx="1.5" fill="#111111" />

            {/* Lightning bolt badge on the rear body */}
            <circle cx="33" cy="54" r="7.5" fill="#F6E05E" />
            <path d="M 33,50 L 30,55 L 33,55 L 32,58 L 36,53 L 33,53 Z" fill="#E53E3E" stroke="#E53E3E" strokeWidth="0.5" strokeLinejoin="round" />
          </g>
        </svg>
      ),
      title: "Mobilidade elétrica urbana",
      desc: "Para quem busca uma solução prática, moderna e econômica para deslocamento urbano.",
      bullets: ["Scooters e motos elétricas", "Bicicletas elétricas e triciclos"]
    },
    {
      key: "Utilitários elétricos para empresas",
      icon: "🚚",
      title: "Utilitários elétricos para empresas",
      desc: "Para negócios que precisam modernizar operação, entrega, logística ou deslocamento interno.",
      bullets: ["Utilitários elétricos", "Frota para entregas e operação", "Soluções para reduzir custo operacional"]
    },
    {
      key: "Veículos Off Road",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 select-none pointer-events-none transition-transform group-hover:scale-110" fill="none" stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Cabin / Roll-cage Frame structure */}
          <path d="M 32,28 L 58,30 L 72,41" />
          <path d="M 32,28 L 28,39" />
          <path d="M 49,29 L 51,39" />

          {/* Side panels & Body contour */}
          <path d="M 21,39 L 28,39 C 33,42 38,46 48,46 C 54,46 58,42 61,39 L 77,41 L 81,45 L 75,47 L 62,54 L 38,54 Z" />

          {/* Front nose highlight lines */}
          <path d="M 61,39 L 68,43 L 73,43" />

          {/* Rear body panel tail */}
          <path d="M 16,41 C 16,41 18,39 21,39" />

          {/* Detailed Shock Absorbers (springs inside the structure) */}
          <line x1="31" y1="44" x2="35" y2="50" />
          <line x1="68" y1="44" x2="64" y2="50" />

          {/* Rear Wheel (Left) */}
          <g strokeWidth="2.8">
            <circle cx="27" cy="56" r="11" />
            <circle cx="27" cy="56" r="5.5" />
          </g>

          {/* Front Wheel (Right) */}
          <g strokeWidth="2.8">
            <circle cx="70" cy="56" r="11" />
            <circle cx="70" cy="56" r="5.5" />
          </g>
        </svg>
      ),
      title: "Veículos Off Road",
      desc: "Para lazer, trabalho rural, turismo, condomínios, fazendas ou áreas externas.",
      bullets: ["Quadriciclos e UTVs", "Veículos elétricos de aventura", "Uso rural, lazer ou operação"]
    },
    {
      key: "Veículos pesados",
      icon: "🚛",
      title: "Veículos pesados",
      desc: "Para transporte, carga, operação logística, crescimento de frota ou expansão empresarial.",
      bullets: ["Caminhões e veículos de carga", "Máquinas e equipamentos", "Estrutura para operação e transporte"]
    },
    {
      key: "Carros e Motos - Novos e Seminovos",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 select-none pointer-events-none transition-transform group-hover:scale-110">
          <g className="fill-current text-neutral-800 group-hover:text-white transition-colors duration-300">
            {/* Main Car Silhouette Body */}
            <path d="M 12,52
                     C 12,49 13.5,47.5 17,47.5
                     C 21,47.5 28,42 39,39.5
                     C 50,37 60,39 67.5,43.5
                     C 72,46.5 81,47.5 86.5,50
                     C 88.5,51 88.5,53.5 86.5,54.5
                     C 84.5,55.5 81.5,55.5 78,55.5
                     L 78.5,54.5
                     C 78,48 70,48 69.5,54.5
                     L 31,54.5
                     C 30.5,48 22.5,48 22,54.5
                     L 16,54.5
                     C 13,54.5 12,54 12,52 Z" />
            
            {/* Windows Cutout */}
            <path d="M 28.5,46 
                     C 31.5,43.5 35,41.5 44,41
                     L 44,46 Z" 
                  className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            
            <path d="M 45.5,46
                     L 45.5,41
                     C 51.5,41.2 57.5,42.5 61,44.5
                     C 62.5,45.5 63.5,46 63.5,46 Z" 
                  className="fill-white group-hover:fill-brand-red transition-colors duration-300" />

            {/* Mirror */}
            <path d="M 58.5,46.5 C 58,46.5 57,45.5 58,44.8 C 59,44.5 59.5,46 59,46.5 Z" />

            {/* Rear Taillight slice */}
            <path d="M 12.5,48.5 C 14.5,48.5 16,49.2 17,50.2 C 15,50.2 13.5,49.5 12.5,48.5 Z" 
                  className="fill-white group-hover:fill-brand-red transition-colors duration-300" />

            {/* Front Headlight slice */}
            <path d="M 78.5,50.5 C 81.5,51.5 84.5,52.5 86.5,51.5 C 84,53 80,52.5 78.5,50.5 Z" 
                  className="fill-white group-hover:fill-brand-red transition-colors duration-300" />

            {/* Wheels */}
            {/* Left/Rear Wheel */}
            <circle cx="26.2" cy="54.5" r="8" />
            <circle cx="26.2" cy="54.5" r="4.5" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="26.2" cy="54.5" r="2" />

            {/* Right/Front Wheel */}
            <circle cx="73.8" cy="54.5" r="8" />
            <circle cx="73.8" cy="54.5" r="4.5" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="73.8" cy="54.5" r="2" />
          </g>
        </svg>
      ),
      title: "Carros e Motos - Novos e Seminovos",
      desc: "Para quem deseja comprar ou trocar carro ou moto.\nNovo ou seminovo com mais planejamento financeiro.",
      bullets: ["Carros novos e seminovos", "Motos novas e seminovas"]
    },
    {
      key: "Imóveis",
      icon: "🏠",
      title: "Imóveis",
      desc: "Para planejar a compra do imóvel próprio, seja casa, apartamento, sala comercial ou terreno.",
      bullets: ["Casa ou apartamento", "Terreno", "Imóvel residencial ou comercial"]
    },
    {
      key: "Serviços",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 select-none pointer-events-none transition-transform group-hover:scale-110">
          <g className="transition-colors duration-300">
            {/* Upper/Far Wing (swept back) */}
            <path 
              d="M 55,45 L 33,33 L 40,33 L 57,45 Z" 
              className="fill-[#111111] group-hover:fill-white/80 transition-colors duration-300"
            />
            
            {/* Horizontal Stabilizer (tail wing) */}
            <path 
              d="M 21,50.5 L 10,48.5 L 12,47 L 23,49.5 Z" 
              className="fill-[#111111] group-hover:fill-white transition-colors duration-300"
            />

            {/* Blue Upper Fuselage & Vertical Tail */}
            <path 
              d="M 25,46.5 L 80,45 C 84,45 88,47 91.5,50 C 91.5,51.5 90,52.3 87,52.5 L 18,52.5 C 16,50.5 15,48.5 15,46.5 C 15,46.2 11,36 9,33 C 9,33 13,33 15,33 C 15,33 18,40 25,46.5 Z" 
              className="fill-[#1D70B8] group-hover:fill-white transition-colors duration-300"
            />

            {/* Black Lower Fuselage */}
            <path 
              d="M 87,52.5 C 84,55.5 80,56 70,56 L 24,56 C 20,56 18,54.5 18,52.5 Z" 
              className="fill-[#111111] group-hover:fill-white transition-colors duration-300"
            />

            {/* Passenger Doors & Windows */}
            {/* Door front */}
            <rect 
              x="33" 
              y="47.2" 
              width="1.8" 
              height="3.8" 
              rx="0.5" 
              className="fill-white group-hover:fill-brand-red transition-colors duration-300" 
            />
            {/* Door rear */}
            <rect 
              x="78" 
              y="47.2" 
              width="1.8" 
              height="3.8" 
              rx="0.5" 
              className="fill-white group-hover:fill-brand-red transition-colors duration-300" 
            />
            {/* Cockpit Window */}
            <path 
              d="M 83,47.5 Q 86,47.8 87.5,49 L 85,49.5 Z" 
              className="fill-white group-hover:fill-brand-red transition-colors duration-300" 
            />
            {/* Circular Passenger Windows */}
            <circle cx="40" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="44" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="48" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="52" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="56" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="60" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="64" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="68" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="72" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />
            <circle cx="76" cy="49" r="1.1" className="fill-white group-hover:fill-brand-red transition-colors duration-300" />

            {/* Near/Main Wing (swept back) */}
            <path 
              d="M 61,52.5 L 31,67 L 36,67 L 62.5,52.5 Z" 
              className="fill-[#111111] group-hover:fill-white transition-colors duration-300"
            />
          </g>
        </svg>
      ),
      title: "Serviços",
      desc: "Para realizar projetos pessoais, familiares ou profissionais de forma planejada.",
      bullets: ["Viagens, intercâmbios e educação", "Saúde, estética e odontologia", "Construções, reformas, festas e eventos"]
    }
  ];

  const handleSimulateClick = (title: string) => {
    onSelectModalidade(title);
    const element = document.getElementById("simulacao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        const selectElement = document.getElementById("sim-modalidade");
        if (selectElement) {
          (selectElement as HTMLSelectElement).focus();
        }
      }, 600);
    } else {
      const topo = document.getElementById("topo");
      if (topo) {
        topo.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="modalidades" className="pt-8 pb-20 lg:pt-10 lg:pb-24 bg-transparent text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-4 text-xs font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/5 border border-brand-red/10 px-3.5 py-1.5 rounded-full hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200 cursor-pointer">
            Escolha seu objetivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-neutral-950">
            Qual conquista você quer planejar?
          </h2>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center animate-fade-in">
          {modalities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 border border-neutral-200 hover:border-brand-red/35 hover:shadow-brand-red/10 shadow-md hover:shadow-xl transition-all flex flex-col hover:-translate-y-1 text-left relative group font-sans"
            >
              {/* Modality Icon */}
              <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center text-2xl mb-6 shrink-0 font-extrabold shadow-sm transition-colors group-hover:bg-brand-red group-hover:text-white">
                <span className="flex items-center justify-center">{item.icon}</span>
              </div>

              {/* Modality Title */}
              <h3 className="font-display font-extrabold text-xl text-neutral-950 leading-tight tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>

              {/* Modality Desc */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-sans flex-1 whitespace-pre-line">
                {item.desc}
              </p>

              {/* Modality Bullet items */}
              <ul className="space-y-2 mb-8 pt-4 border-t border-neutral-100 list-disc list-inside text-xs sm:text-sm text-neutral-600 font-sans">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-tight text-neutral-700">
                    <span className="relative -left-1 text-neutral-600">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Modality Action button */}
              <button
                onClick={() => handleSimulateClick(item.title)}
                className="w-full py-3.5 bg-brand-red hover:bg-[#b01217] text-white text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-98"
              >
                <span>Simular {item.title === "Serviços" ? "serviços" : item.title === "Imóveis" ? "imóvel" : item.title === "Veículos Off Road" ? "off-road" : item.title === "Utilitários elétricos para empresas" ? "utilitário elétrico" : item.title === "Carros e Motos - Novos e Seminovos" ? "carros e motos" : item.title}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
