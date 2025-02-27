import { Link } from "react-router-dom";
import Usuario from "../../../models/Usuario";
 
interface Props {
  usuarios: Usuario;
}
 
function CardUsuarios({ usuarios }: Props) {
  return (
    <div className='border-slate-900 border
        flex flex-col rounded-2xl overflow-hidden justify-between'>
           
        <div>
            <div className="flex w-full bg-[#37cf8d] py-2 px-4 items-center gap-4">
                <img src={usuarios.foto || 'https://upload.wikimedia.org/wikipedia/pt/b/bb/El_Chavo_Roberto_Bola%C3%B1os.png'}
                     className='h-12 rounded-full' alt="Foto do usuário" />
                <h3 className='text-lg font-bold text-center uppercase'>
                    {usuarios.nome}
                </h3>
            </div>
            <div className='p-4 '>
                <h4 className='text-lg font-semibold uppercase'> <strong>Dados</strong></h4>
                <p> <strong>E-mail: </strong> {usuarios.usuario}</p>
                <p> <strong>Plano:  </strong>{usuarios.plano ? usuarios.plano.nome : "Sem plano"}</p>
            </div>
        </div>
        <div className="flex">
            <Link to=''  className='w-full text-black-100 bg-[#37cf8d] hover:bg-green-700 
            flex items-center justify-center py-2'>
            <button><strong>Editar</strong></button>
            </Link>
            <Link to={`/deletarusuario/${usuarios.id}`}   
            className='text-black-100 bg-red-500 hover:bg-red-700 w-full 
            flex items-center justify-center py-2'>
            <strong>Deletar</strong>
            </Link>
        </div>
    </div>
  );
}
 
export default CardUsuarios;