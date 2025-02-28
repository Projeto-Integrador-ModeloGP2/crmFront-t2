/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Plano from "../../../models/Plano";
import { deletar } from "../../../services/Service";

interface CardPlanosProps {
  plano: Plano;

  atualizaLista: () => void; // Função para atualizar a lista de planos após exclusão
}

function CardPlanos({ plano, atualizaLista }: CardPlanosProps) {
  async function handleDelete() {
    if (window.confirm("Tem certeza que deseja deletar este plano?")) {
      try {
        await deletar(`/planos/${plano.id}`);

        alert("Plano deletado com sucesso!");

        atualizaLista(); // Atualiza a lista de planos após a exclusão
      } catch (error) {
        alert("Erro ao deletar o plano.");
      }
    }
  }

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-[#37cf8d] text-black font-bold text-2xl">
        {plano.nome}
      </header>
      <div className="p-8 text-base bg-white h-full flex flex-col gap-2">
        <p className="p-2 text-1xl bg-white h-full">
          <strong>Descrição:</strong> {plano.descricao}
        </p>
        <p className="p-2 text-1xl bg-white h-full">
          <strong>Valor (R$):</strong> {plano.valor}
        </p>
        <p className="p-2 text-1xl bg-white h-full">
          <strong>Vigência:</strong> {plano.vigencia}
        </p>
        <p className="p-2 text-1xl bg-white h-full">
          <strong>Franquia (R$):</strong> {plano.franquia}
        </p>
        <p className="p-2 text-1xl bg-white h-full">
          <strong>Status:</strong> {plano.status ? "Ativo" : "Inativo"}
        </p>
      </div>

      <div className="flex">
        <Link
          to={`/editarplano/${plano.id}`}
          className="w-full text-black-100 bg-[#37cf8d] hover:bg-green-700 

                        flex items-center justify-center py-2"
        >
          <button>
            <strong>Editar</strong>
          </button>
        </Link>

        <button
          onClick={handleDelete}
          className="text-black-100 bg-red-500 hover:bg-red-700 w-full 

                        flex items-center justify-center py-2"
        >
          <strong>Deletar</strong>
        </button>
      </div>
    </div>
  );
}

export default CardPlanos;
