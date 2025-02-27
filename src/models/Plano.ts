import Usuario from "./Usuario";

export default interface Plano {
  id: number;
  nome: string;
  descricao: string;
  valor: string;
  vigencia: string;
  franquia: string;
  status?: boolean;
  seguradora?:{} | null;
  usuario?: string | null;

}