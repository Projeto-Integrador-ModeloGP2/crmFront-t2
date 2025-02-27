/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import Plano from '../../../models/Plano';

import { deletar } from '../../../services/Service';
 
interface CardPlanosProps {

    plano: Plano;

    atualizaLista: () => void; // Função para atualizar a lista de planos após exclusão

}
 
function CardPlanos({ plano, atualizaLista }: CardPlanosProps) {

    const navigate = useNavigate();
 
    async function handleDelete() {

        if (window.confirm('Tem certeza que deseja deletar este plano?')) {

            try {

                await deletar(`/planos/${plano.id}`);

                alert('Plano deletado com sucesso!');

                atualizaLista(); // Atualiza a lista de planos após a exclusão

            } catch (error) {

                alert('Erro ao deletar o plano.');

            }
        }

    }
 
    return (
<div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
<header className='py-2 px-6 bg-green-800 text-white font-bold text-2xl'>

                {plano.nome}
</header>
<div className='p-8 text-base bg-slate-200 h-full flex flex-col gap-2'>
<p className='p-2 text-2xl bg-slate-200 h-full'>{plano.nome}</p>
<p className='p-2 text-2xl bg-slate-200 h-full'>{plano.descricao}</p>
<p className='p-2 text-2xl bg-slate-200 h-full'>{plano.valor}</p>
<p className='p-2 text-2xl bg-slate-200 h-full'>{plano.vigencia}</p>
<p className='p-2 text-2xl bg-slate-200 h-full'>{plano.franquia}</p>
<p><strong>Status:</strong> {plano.status ? 'Ativo' : 'Inativo'}</p>
</div>
 
            <div className="flex">
<Link to={`/formularioPlano/${plano.id}`} 

                    className='w-full text-slate-100 bg-green-400 hover:bg-green-700 

                        flex items-center justify-center py-2'>
<button>Editar</button>
</Link>
 
                <button onClick={handleDelete} 

                    className='text-slate-100 bg-red-500 hover:bg-red-700 w-full 

                        flex items-center justify-center py-2'>

                    Deletar
</button>
</div>
 
        </div>

    )

}
 
export default CardPlanos;
 