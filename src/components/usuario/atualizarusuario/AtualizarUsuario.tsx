/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { atualizar, buscar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";

function AtualizarUsuario() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    // Buscar usuário pelo ID
    async function buscarPorId(id: string) {
        try {
            const response = await buscar(`/usuarios/${id}`, setUsuario);
            console.log('Usuário buscado:', response);
        } catch (error: any) {
            console.error('Erro ao buscar usuário:', error);
            alert('Erro ao buscar o usuário.');
        }
    }

    useEffect(() => {
        if (id) {
            console.log('ID recebido:', id);
            buscarPorId(id);
        }
    }, [id]);

    // Atualizar estado dos inputs
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    // Voltar para a página de clientes
    function retornar() {
        navigate("/cliente");
    }

    // Enviar atualização
    async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const usuarioAtualizado = {
                ...usuario,
                plano: usuario.plano ?? [],
            };

            console.log('Enviando dados para atualização:', usuarioAtualizado);

            await atualizar(`/usuarios/atualizar`, usuarioAtualizado, setUsuario);

            alert('Usuário atualizado com sucesso!');
            retornar();
        } catch (error: any) {
            console.error('Erro ao atualizar usuário:', error);
            alert('Erro ao atualizar o usuário.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">Editar Usuário</h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={atualizarUsuario}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Digite o nome"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="usuario">Nome de Usuário</label>
                    <input
                        type="text"
                        placeholder="Digite o nome de usuário"
                        name="usuario"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.usuario || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        placeholder="Digite a senha"
                        name="senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.senha || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto (URL)</label>
                    <input
                        type="text"
                        placeholder="URL da foto"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-black bg-[#37cf8d] hover:bg-green-700 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                    ) : (
                        <strong>Atualizar</strong>
                    )}
                </button>
            </form>
        </div>
    );
}

export default AtualizarUsuario;
