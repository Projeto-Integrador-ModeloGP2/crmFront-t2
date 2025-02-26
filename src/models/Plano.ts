import Usuario from "./Usuario";

export default interface Plano {
  id: number;
  nome: string;
  descricao: string;
  valor:number;
  franquia: string;
  status: string;
  usuario?: [] | null;

}