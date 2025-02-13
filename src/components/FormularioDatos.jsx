export default function FormularioDatos() {
    return (
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Datos Generales</h2>
        <form className="grid grid-cols-2 gap-4 text-black">
          <label className="block">
            <span className="text-gray-700">Razón Social</span>
            <input type="text" defaultValue="Empresa Ejemplo S.R.L." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black-500" />
          </label>
          <label className="block">
            <span className="text-gray-700">Domicilio Empresa</span>
            <input type="text" defaultValue="Calle 5 nueva senda" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Nombre Trabajador</span>
            <input type="text" defaultValue="Juan Perez" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Domicilio Trabajador</span>
            <input type="text" defaultValue="av. San martin # 350" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Estado Civil</span>
            <input type="text" defaultValue="Casado" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Fecha de Nacimiento</span>
            <input type="date" defaultValue="1976-06-04" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Profesión</span>
            <input type="text" defaultValue="Ing. Comercial" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Motivo del Retiro</span>
            <input type="text" defaultValue="Despido" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Remuneración Mensual</span>
            <input type="number" defaultValue="8000" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
        </form>
  
        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">Liquidación de la Remuneración</h2>
        <form className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700">Fecha de Inicio</span>
            <input type="date" defaultValue="2015-01-15" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
          <label className="block">
            <span className="text-gray-700">Fecha de Fin</span>
            <input type="date" defaultValue="2018-11-18" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </label>
        </form>
  
        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">Tiempo de Servicio</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-green-200 p-4 rounded-lg text-black">Años: <span className="font-bold text-black">3</span></div>
          <div className="bg-green-200 p-4 rounded-lg text-black">Meses: <span className="font-bold text-black">10</span></div>
          <div className="bg-green-200 p-4 rounded-lg text-black">Días: <span className="font-bold text-black">3</span></div>
        </div>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-black">Remuneracion Ultimos Tres Meses</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-green-200 p-4 rounded-lg text-black">Años: <span className="font-bold text-black">3</span></div>
          <div className="bg-green-200 p-4 rounded-lg text-black">Meses: <span className="font-bold text-black">10</span></div>
          <div className="bg-green-200 p-4 rounded-lg text-black">Días: <span className="font-bold text-black">3</span></div>
        </div>
  
        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Guardar Datos
        </button>
      </div>
    );
  }
  