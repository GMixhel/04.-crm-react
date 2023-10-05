import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()

    return (
      <div className="space-y-8">
        <h1 className="font-black text-4xl text-blue-900">CRM Clientes</h1>
        <p className="mt-3">Hubo un error</p>
        <p className="mt-3">{error.statusText || error.message}</p>
      </div>
    );
}