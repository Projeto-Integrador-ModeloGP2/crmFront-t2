import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-[#37cf8d] text-black">
      <div className="container flex justify-between items-center text-lg">
        <Link to="/home" className="text-2xl flex items-center font-bold gap-2">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-10 h-10" 
          />
          Soluções em Seguros
        </Link>
        <div className="flex gap-4 font-bold">
          <Link to="/cliente" className="hover:opacity-75">
            Cliente
          </Link>
          <Link to="/cadastrocliente" className="hover:opacity-75">
            Cadastrar cliente
          </Link>
          <Link to="/planos" className="hover:opacity-75">
            Planos
          </Link>
          <Link to='/cadastrarplano' className='hover:underline'>
          Cadastrar Plano
          </Link>
          <Link to="/integrante" className="hover:opacity-75">
            Sobre Nós
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
