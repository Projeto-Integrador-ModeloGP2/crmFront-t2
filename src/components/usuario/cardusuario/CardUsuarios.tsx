import { Link } from 'react-router-dom'

function CardUsuarios() {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-green-400 py-2 px-4 items-center gap-4">
                    <img src='https://i.imgur.com/pK6vSCy.png'
                         className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        Nome do Usuário
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Dados</h4>
                    <p>E-mail: </p>
                    <p>Plano: </p>
                </div>
            </div>
            <div className="flex">
                <Link to='' className='w-full text-white bg-green-400 
                    hover:bg-green-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to='' className='text-white bg-red-500 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardUsuarios