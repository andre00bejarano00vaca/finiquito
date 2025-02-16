"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

export default function FormularioDatos() {
  dayjs.extend(duration);

  const [formData, setFormData] = useState({
    razonSocial: "",
    domicilioEmpresa: "",
    NombreTrabajador: "",
    DomicilioTrabajador: "",
    EstadoCivil: "",
    FechadeNacimiento: "",
    Profesión: "",
    MotivodelRetiro: "",
    RemuneraciónMensual: "",
    FechadeInicio: "",
    FechadeFin: "",
  });
  const [fechas, setFechas] = useState({ años: 0, meses: 0, días: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fecha1 = dayjs(formData.FechadeInicio);
    const fecha2 = dayjs(formData.FechadeFin);
  
    if (fecha1.isValid() && fecha2.isValid()) {
      const años = fecha2.diff(fecha1, "year");
      const fechaIntermedia = fecha1.add(años, "year");
      const meses = fecha2.diff(fechaIntermedia, "month");
      const fechaIntermedia2 = fechaIntermedia.add(meses, "month");
      const días = fecha2.diff(fechaIntermedia2, "day");
  
      setFechas({ años, meses, días });
    }
  
    console.log("Estado actualizado:", fechas);
    console.log(formData);
  }, [formData]);
  

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">Datos Generales</h2>
      <form className="grid grid-cols-2 gap-4 text-black">
        <label className="block">
          <span className="text-gray-700">Razón Social</span>
          <input
            name="razonSocial"
            value={formData.razonSocial}
            onChange={handleChange}
            type="text"
            placeholder="Empresa Ejemplo S.R.L."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Domicilio Empresa</span>
          <input
            name="domicilioEmpresa"
            value={formData.domicilioEmpresa}
            onChange={handleChange}
            type="text"
            placeholder="Calle 5 nueva senda"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Nombre Trabajador</span>
          <input
            name="NombreTrabajador"
            value={formData.NombreTrabajador}
            onChange={handleChange}
            type="text"
            placeholder="Juan Perez"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Domicilio Trabajador</span>
          <input
            name="DomicilioTrabajador"
            value={formData.DomicilioTrabajador}
            onChange={handleChange}
            type="text"
            placeholder="av. San martin # 350"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Estado Civil</span>
          <select
            name="EstadoCivil"
            value={formData.EstadoCivil}
            onChange={handleChange}
            id="estadoCivil"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          >
            <option value="Soltero">Soltero(a)</option>
            <option value="Casado">Casado(a)</option>
            <option value="Viudo">Viudo(a)</option>
            <option value="Otros">Otros</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">Fecha de Nacimiento</span>
          <input
            name="FechadeNacimiento"
            value={formData.FechadeNacimiento}
            onChange={handleChange}
            type="date"
            placeholder="1976-06-04"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Profesión</span>
          <input
            name="Profesión"
            value={formData.Profesión}
            onChange={handleChange}
            type="text"
            placeholder="Ing. Comercial"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Motivo del Retiro</span>
          <select
            value={formData.MotivodelRetiro}
            onChange={handleChange}
            name="MotivodelRetiro"
            id="Motivo-del-Retiro"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          >
            <option value="Voluntario">Voluntario</option>
            <option value="Forzoso">Forzoso</option>
            <option value="Conclusión">Conclusión de contrato</option>
            <option value="Incumplimiento">Incumplimiento de contrato</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">Remuneración Mensual</span>
          <input
            name="RemuneraciónMensual"
            value={formData.RemuneraciónMensual}
            onChange={handleChange}
            type="number"
            placeholder="8000"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
      </form>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
        Liquidación de la Remuneración
      </h2>
      <form className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className="text-gray-700">Fecha de Inicio</span>
          <input
            name="FechadeInicio"
            value={formData.FechadeInicio}
            onChange={handleChange}
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Fecha de Fin</span>
          <input
            name="FechadeFin"
            value={formData.FechadeFin}
            onChange={handleChange}
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
      </form>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
        Tiempo de Servicio
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Años: <span className="font-bold text-black">{fechas.años}</span>
        </div>
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Meses: <span className="font-bold text-black">{fechas.meses}</span>
        </div>
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Días: <span className="font-bold text-black">{fechas.días}</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
        Remuneracion Ultimos Tres Meses
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <input type="number" placeholder=""/>
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Mes 1: <span className="font-bold text-black">0</span>
        </div>
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Mes 2: <span className="font-bold text-black">0</span>
        </div>
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Mes 3: <span className="font-bold text-black">0</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Guardar Datos
      </button>
    </div>
  );
}
