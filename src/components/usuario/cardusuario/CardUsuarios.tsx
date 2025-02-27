import { Link } from "react-router-dom";
import Usuario from "../../../models/Usuario";

interface Props {
  usuarios: Usuario;
}

function CardUsuarios({ usuarios }: Props) {
  return (
    <div className='border-slate-900 border 
        flex flex-col rounded overflow-hidden justify-between'>
            
        <div>
            <div className="flex w-full bg-green-400 py-2 px-4 items-center gap-4">
                <img src={usuarios.foto || 'https://upload.wikimedia.org/wikipedia/pt/b/bb/El_Chavo_Roberto_Bola%C3%B1os.png'}
                     className='h-12 rounded-full' alt="Foto do usuário" />
                <h3 className='text-lg font-bold text-center uppercase'>
                    {usuarios.nome}
                </h3>
            </div>
            <div className='p-4 '>
                <h4 className='text-lg font-semibold uppercase'>Dados</h4>
                <p>E-mail: {usuarios.usuario}</p>
                <p>Plano: {usuarios.plano ? usuarios.plano.nome : "Sem plano"}</p>
            </div>
        </div>
        <div className="flex">
            <Link to='' className='w-full text-white bg-green-400 
                hover:bg-green-700 flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>
            <Link to='' className='text-white bg-red-500 
                hover:bg-red-700 w-full flex items-center justify-center'>
                <button>Deletar</button>
            </Link>
        </div>
    </div>
  );
}

export default CardUsuarios;
