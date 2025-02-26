import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
                   bg-[#37cf8d] text-black"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            Soluções em Seguros
          </Link>
          <div className="flex gap-4">
            <Link to="/cliente" className="hover:opacity-75">
              Cliente
            </Link>
            <Link to="/planos" className="hover:opacity-75">
              Planos
            </Link>
            <Link to="/integrante" className="hover:opacity-75">
              Sobre Nós
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
