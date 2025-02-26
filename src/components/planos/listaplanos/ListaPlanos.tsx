import { useEffect, useState } from "react";
import Plano from "../../../models/Plano";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardPlanos from "../cardplanos/CardPlanos";
 
 
function ListaPlanos() {
 
 
    const [planos, setPlanos] = useState<Plano[]>([])
 
    async function buscarPlanos() {
            await buscar('/planos', setPlanos)
    }
 
    useEffect(() => {
        buscarPlanos()    
    }, [planos.length])
   
    return (
        <>
        {planos.length === 0 && (
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
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {planos.map((plano) => (
                            <CardPlanos key={plano.id} plano={plano} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default ListaPlanos;