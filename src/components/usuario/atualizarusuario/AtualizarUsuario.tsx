/* eslint-disable @typescript-eslint/no-explicit-any */
import { RotatingLines } from "react-loader-spinner";
import { buscar, atualizar } from "../../../services/Service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";

function AtualizarUsuario() {
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

  async function atualizarUsuario() {
    setIsLoading(true);

    try {
      await atualizar(`/usuarios/${id}`, usuario);
      alert("Usuário atualizado com sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao atualizar o usuário.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
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
      <h1 className="text-3xl sm:text-4xl text-center my-4">Atualizar Usuário</h1>
      <p className="text-center font-semibold mb-4 text-lg">
        Atualize os dados do usuário abaixo:
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between w-full">
        <header className="py-3 px-6 bg-indigo-600 text-white font-bold text-xl sm:text-2xl">
          Usuário
        </header>
        <div className="p-6 sm:p-8 bg-slate-200">
          <label className="block font-semibold">Nome:</label>
          <input
            type="text"
            name="nome"
            value={usuario.nome || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <label className="block font-semibold mt-4">Usuário:</label>
          <input
            type="text"
            name="usuario"
            value={usuario.usuario || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <label className="block font-semibold mt-4">Senha:</label>
          <input
            type="text"
            name="senha"
            value={usuario.senha || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <label className="block font-semibold mt-4">Foto :</label>
          <input
            type="text"
            name="foto"
            value={usuario.foto || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <button
            className="text-white bg-red-500 hover:bg-red-700 w-full py-3 sm:py-2"
            onClick={retornar}
          >
            Cancelar
          </button>
          <button
            className="w-full text-white bg-indigo-500 hover:bg-indigo-700 flex items-center justify-center py-3 sm:py-2"
            onClick={atualizarUsuario}
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
              <span>Atualizar</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AtualizarUsuario;
