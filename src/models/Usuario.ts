import Plano from "./Plano";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  plano?: Plano[] | null;
}