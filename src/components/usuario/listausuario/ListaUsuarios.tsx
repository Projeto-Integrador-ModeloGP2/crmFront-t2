import { useEffect, useState } from "react";
import Usuario from "../../../models/Usuario";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardUsuarios from "../cardusuario/CardUsuarios";
 
function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
 
  async function getUsuarios() {
    try {
      await buscar("/usuarios/all", setUsuarios);
    } catch (error) {
      console.error("Erro ao buscar os usuários:", error);
    }
  }
 
  useEffect(() => {
    getUsuarios();
  }, []);
 
  return (
<>
      {usuarios.length === 0 && (
<DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
<div className="flex justify-center w-full my-4">
<div className="container flex flex-col mx-2">
<div
            className="container mx-auto my-4
                        grid grid-cols-1 md:grid-cols-2
                        lg:grid-cols-3 gap-4"
>
            {usuarios.map((usuario) => (
<CardUsuarios
                key={usuario.id}
                usuarios={usuario}
              />
            ))}
</div>
</div>
</div>
</>
  );
}
 
export default ListaUsuarios;
 