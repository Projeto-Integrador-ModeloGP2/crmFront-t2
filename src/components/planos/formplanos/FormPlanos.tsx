/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Plano from "../../../models/Plano";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
 
function FormPlano() {
 
    const navigate = useNavigate();
 
    const [plano, setPlano] = useState<Plano>({
        id: 0,
        nome: '',
        descricao: '',
        valor: '',
        vigencia: '',
        franquia: '',
        status: false,
        seguradora: {
            id: 0
        }
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
 
    const { id } = useParams<{ id: string }>();
 
    async function buscarPorId(id: string) {
        try {
            await buscar(`/planos/${id}`, setPlano)
        } catch (error: any) {
            console.error("Erro ao buscar o plano:", error);
        }
    }
 
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])
 
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPlano({
            ...plano,
            seguradora: {
                id: 1
            },
            [e.target.name]: e.target.value
        })
    }
 
    // function atualizarSeguradora(e: ChangeEvent<HTMLInputElement>) {
    //     setPlano({
    //         ...plano,
    //         seguradora: {
    //          id: 1
    //         },
    //         [e.target.name]: e.target.value
    //     })
    // }
 
    function retornar() {
        navigate("/planos")
    }
 
    async function gerarNovoPlano(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
 
        // Validação dos campos obrigatórios
        if (
            plano.nome.trim() === '' ||
            plano.descricao.trim() === '' ||
            plano.valor.trim() === '' ||
            plano.vigencia.trim() === '' ||
            plano.franquia.trim() === '' 
        ) {
            alert('Por favor, preencha todos os campos obrigatórios.')
            setIsLoading(false)
            return
        }
 
        // Validação do tamanho do campo valor
        if (plano.valor.length < 4 || plano.valor.length > 10) {
            alert('O campo "valor" deve ter entre 4 e 10 caracteres.')
            setIsLoading(false)
            return
        }
 
        if (id !== undefined) {
            try {
                await atualizar(`/planos`, plano, setPlano)
                alert('O Plano foi atualizado com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar o plano.')
            }
        } else {
            try {
                await cadastrar(`/planos`, plano, setPlano)
                alert('O Plano foi cadastrado com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar o plano.')
            }
        }
 
        setIsLoading(false)
        retornar()
    }
 
    return (
<div className="container flex flex-col items-center justify-center mx-auto">
<h1 className="text-4xl text-center my-8">
                {id === undefined ?<strong>Cadastrar Plano</strong> : <strong>Editar Plano</strong>}
</h1>
 
            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoPlano}>
                {/* Nome */}
<div className="flex flex-col gap-2">
<label htmlFor="nome"><strong>Nome*</strong></label>
<input
                        type="text"
                        placeholder="Digite o nome do plano"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                    />
</div>
 
                {/* Descrição */}
<div className="flex flex-col gap-2">
<label htmlFor="descricao"><strong>Descrição*</strong></label>
<input
                        type="text"
                        placeholder="Descreva o plano"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                    />
</div>
 
                {/* Valor */}
<div className="flex flex-col gap-2">
<label htmlFor="valor"><strong>Valor* (entre 4 e 10 caracteres)</strong></label>
<input
                        type="text"
                        placeholder="Valor do plano"
                        name='valor'
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={4}
                        maxLength={10}
                    />
</div>
 
                {/* Vigência */}
<div className="flex flex-col gap-2">
<label htmlFor="vigencia"><strong>Vigência*</strong></label>
<input
                        type="text"
                        placeholder="Vigência do plano"
                        name='vigencia'
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.vigencia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                    />
</div>
 
                {/* Franquia */}
<div className="flex flex-col gap-2">
<label htmlFor="franquia"><strong>Franquia*</strong></label>
<input
                        type="text"
                        placeholder="Franquia do plano"
                        name='franquia'
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.franquia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                    />
</div>
 
                {/* Status */}
<div className="flex flex-col gap-2">
<label htmlFor="status"><strong>Status Ativo / Inativo</strong></label>
<input
                        type="checkbox"
                        name='status'
                        checked={plano.status}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPlano({ ...plano, status: e.target.checked })
                        }}
                    />
</div>
 
                {/* Seguradora */}
{/* <div className="flex flex-col gap-2">
<label htmlFor="seguradoraId">ID da Seguradora*</label>
<input
                        type="number"
                        placeholder="Informe o ID da seguradora"
                        name='id'
                        className="border-2 border-slate-700 rounded p-2"
                        value={plano.seguradora.id}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarSeguradora(e)}
                        required
                    />
</div> */}
 
                <button
                    className="rounded text-black bg-[#37cf8d]
                               hover:bg-green-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
            <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
<span>{id === undefined ? <strong>Cadastrar</strong> : <strong>Atualizar</strong>}</span>
                    }
</button>
</form>
</div>
    );
}
 
export default FormPlano;