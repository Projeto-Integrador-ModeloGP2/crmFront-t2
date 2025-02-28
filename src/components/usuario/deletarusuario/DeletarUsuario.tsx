/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../services/Service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";
 
function DeletarUsuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
 
  async function buscarPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao buscar usuário.");
      }
    }
  }
 
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);
 
  async function deletarUsuario() {
    setIsLoading(true);
 
    try {
      await deletar(`/usuarios/${id}`);
      alert("Usuário apagado com sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o usuário.");
      }
    } finally {
      setIsLoading(false);
    }
  }
 
  function retornar() {
    navigate("/cliente");
  }
 
  function handleLogout() {
    alert("Sua sessão expirou. Faça login novamente.");
    navigate("/login");
  }
 
  return (
    <div className="container max-w-lg w-full mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl text-center my-4"><strong>Deletar Conta</strong></h1>
      <p className="text-center font-semibold mb-4 text-lg">
        Você tem certeza de que deseja apagar a sua conta?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-3 px-6 bg-[#37cf8d] text-black font-bold text-xl sm:text-2xl">
        <strong>Dados de Cadastro</strong>
        </header>
        <p className="p-6 sm:p-4 text-lg sm:text-2xl bg-white h-full">
        <strong>Nome:</strong> {usuario.nome}
        </p>
        <p className="p-6 sm:p-4 text-lg sm:text-2xl bg-white h-full">
        <strong>Usuario:</strong> {usuario.usuario}
        </p>
        <div className="flex flex-col sm:flex-row">
          <button
            className="text-black bg-red-500 hover:bg-red-700 w-full py-3 sm:py-2"
            onClick={retornar}
          >
           <strong>Não</strong> 
          </button>
          <button
            className="w-full text-black bg-[#37cf8d] hover:hover:bg-green-700 flex items-center justify-center py-3 sm:py-2"
            onClick={deletarUsuario}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span><strong>Sim</strong></span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default DeletarUsuario;