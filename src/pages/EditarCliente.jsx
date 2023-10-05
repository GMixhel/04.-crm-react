import { obtenerCliente } from "../Data/clientes"


export async function loader({params}) {
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    
    console.log(cliente)

    return cliente
}



const EditarCliente = () => {
  return (
    <div>
      Editar
    </div>
  )
}

export default EditarCliente
