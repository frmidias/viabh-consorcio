export interface SimulationData {
  nome: string;
  telefone: string;
  cidade: string;
  modalidade: string;
  objetivo: string;
  valorCarta: string;
  parcelaPretendida: string;
  lance: string;
  prazo: string;
  observacoes: string;
}

export interface PartnerConfig {
  whatsapp: string;
  empresa: string;
  consultor: string;
  endereco: string;
}

export interface ModalityItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}
