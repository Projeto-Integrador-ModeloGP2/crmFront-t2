import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-[#37cf8d] text-black">
      <div className="container flex justify-between items-center text-lg">
        <Link to="/home" className="text-4xl flex items-center font-bold gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          Soluções em Seguros
        </Link>
        <div className="flex gap-4 font-bold">
          <Link to="/cliente" className="hover:opacity-65">
            Cliente
          </Link>
          <Link to="/cadastrarusuario" className="hover:opacity-65">
            Cadastrar Cliente 
          </Link>
          <Link to="/planos" className="hover:opacity-65">
            Planos
          </Link>

          <Link to="/cadastrarplano" className="hover:opacity-65">
            Cadastrar Plano
          </Link>
          <Link to="/sobrenos" className="hover:opacity-65">
            Sobre Nós
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
