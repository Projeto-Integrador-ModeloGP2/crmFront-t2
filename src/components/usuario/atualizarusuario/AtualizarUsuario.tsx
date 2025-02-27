/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
 
    // Função para buscar usuário por ID
    async function buscarPorId(id: string) {
        try {
            const response = await buscar(`/usuarios/${id}`, setUsuario);
            console.log('Usuário buscado:', response); // Verifique a resposta aqui
        } catch (error: any) {
            console.error('Erro ao buscar usuário:', error); // Loga o erro
            alert('Erro ao buscar o usuário.');
        }
    }
 
    useEffect(() => {
        if (id !== undefined) {
            console.log('ID:', id); // Verifique se o ID está correto
            buscarPorId(id);
        }
    }, [id]);
 
    // Função para atualizar o estado dos campos de input
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
 
    // Função de navegação
    function retornar() {
        navigate("/cliente");
    }
 
    // Função de envio para atualizar o usuário
    async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
 
        if (id !== undefined) {
            try {
                // Atualiza o usuário existente
                await atualizar(`/usuarios/${id}`, usuario, setUsuario);
                alert('O Usuário foi atualizado com sucesso!');
            } catch (error: any) {
                console.error('Erro ao atualizar o usuário:', error);
                alert('Erro ao atualizar o usuário.');
            }
        }
 
        setIsLoading(false);
        retornar();  // Retorna à página de usuários
    }
 
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Editar Usuário
            </h1>
 
            <form className="w-1/2 flex flex-col gap-4" onSubmit={atualizarUsuario}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Digite o nome"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.nome || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
 
                <div className="flex flex-col gap-2">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="text"
                        placeholder="Digite a senha"
                        name="senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.senha || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
 
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto</label>
                    <input
                        type="text"
                        placeholder="URL da foto"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={usuario.foto || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
 
                <button
                    className="rounded text-black bg-[#37cf8d] hover:bg-green-700 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
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
            </form>
        </div>
    );
}
 
export default AtualizarUsuario;