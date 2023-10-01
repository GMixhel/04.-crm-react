import { Form, useActionData, useNavigate } from "react-router-dom";
import Formulario from "../componentes/Formulario";
import Error from "../componentes/Error";

export async function action({request}) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  const email = formData.get('email')

  //Validación
  const errores= []
  
  if (Object.values(datos).includes('')) {
    errores.push('todos los campos son obligatorios')
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push('El email no es valido')
  }

  if (Object.keys(errores).length) {
    return errores
  }

  //Retornar datos sin errores

  console.log(errores)
return true
}

const NuevoCliente = () => {
  const errores = useActionData()
  const navigate = useNavigate()
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        LLena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-800 text-white font-blod uppercase py-1 px-3"
        >
          Regresar
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errores?.length && errores.map((error, i) => 
          <Error key={i}>{error}</Error>
        )}
        <Form
          method="post"
        >      
        
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3  uppercase font-bold text-white"
            value="registrar cliente"
          />
        </Form>
      </div>
    </>
  );
}

export default NuevoCliente