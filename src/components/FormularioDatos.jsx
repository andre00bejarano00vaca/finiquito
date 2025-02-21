"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export default function FormularioDatos() {

  const [formData, setFormData] = useState({
    razonSocial: "",
    domicilioEmpresa: "",
    nombreTrabajador: "",
    domicilioTrabajador: "",
    estadoCivil: "",
    fechaNacimiento: "",
    profesion: "",
    motivoRetiro: "",
    remuneracionMensual: "",
    fechaInicio: "",
    fechaFin: "",
  });
  const [fechas, setFechas] = useState({ años: 0, meses: 0, días: 0 });
  const [meses, setMeses] = useState({
    mes1: 0,
    mes2: 0,
    mes3: 0,
    promedio: 0,
    totales: 0,
  });
  const [fechaMes,setFechaMes] = useState({
    fechaMes1: "",
    fechaMes2: "",
    fechaMes3: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setMeses((prevFormData) => ({
      ...prevFormData,
      [name]: value === "" ? 0 : Number(value),
    }));
  };

  const handleChange3 = (e) =>{
    const { name, value } = e.target;
    setFechaMes((prevFormData) => ({
      ...prevFormData,
      [name]: value ,
    }));
  };

  useEffect(() => {
    const fecha1 = dayjs(formData.fechaInicio);
    const fecha2 = dayjs(formData.fechaFin);

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
  }, [formData.fechaInicio, formData.fechaFin]);
  

  useEffect(() => {
    const { mes1, mes2, mes3 } = meses;
  
    if (mes1 > 0 && mes2 > 0 && mes3 > 0) {
      const promedio = ((mes1 + mes2 + mes3) / 3).toFixed(2);
      const totales = mes1 + mes2 + mes3;
  
      setMeses((prev) => ({ ...prev, promedio: Number(promedio), totales }));
    }
  }, [meses.mes1, meses.mes2, meses.mes3]);
  

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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
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
            name="nombreTrabajador"
            value={formData.nombreTrabajador}
            onChange={handleChange}
            type="text"
            placeholder="Juan Perez"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Domicilio Trabajador</span>
          <input
            name="domicilioTrabajador"
            value={formData.domicilioTrabajador}
            onChange={handleChange}
            type="text"
            placeholder="av. San martin # 350"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Estado Civil</span>
          <select
            name="estadoCivil"
            value={formData.estadoCivil}
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
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            type="date"
            placeholder="1976-06-04"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">profesion</span>
          <input
            name="profesion"
            value={formData.profesion}
            onChange={handleChange}
            type="text"
            placeholder="Ing. Comercial"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Motivo del Retiro</span>
          <select
            value={formData.motivoRetiro}
            onChange={handleChange}
            name="motivoRetiro"
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
            name="remuneracionMensual"
            value={formData.remuneracionMensual}
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
            name="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange}
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Fecha de Fin</span>
          <input
            name="fechaFin"
            value={formData.fechaFin}
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

      {/* ESTA PARTE SE ENCRGA DE LAS FECHAS */}
      <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
        Remuneracion Ultimos Tres Meses
      </h2>
      <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3  gap-4 text-center">
        <div>
          <label className="block">
            <span className="text-gray-700">Antepenultimo mes</span>
            <input
              name="fechaMes1"
              value={fechaMes.fechaMes1}
              onChange={handleChange3}
              type="date"
              className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
            />
          </label>
          <input
            name="mes1"
            value={meses.mes1}
            onChange={handleChange2}
            type="number"
            placeholder="Mes 1:"
            className="bg-green-200 w-full !bg-green-200 p-4 rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Penultimo mes</span>
            <input
              name="fechaMes2"
              value={fechaMes.fechaMes2}
              onChange={handleChange3}
              type="date"
              className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
            />
          </label>
          <input
            name="mes2"
            value={meses.mes2}
            onChange={handleChange2}
            type="number"
            placeholder="Mes 2:"
            className="bg-green-200 w-full !bg-green-200 p-4 rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Ultimo mes</span>
            <input
              name="fechaMes3"
              value={fechaMes.fechaMes3}
              onChange={handleChange3}
              type="date"
              className="mt-1 mb-1 block w-full rounded-md border-gray-300 shadow-sm text-black"
              placeholder="14-02-2025"
            />
          </label>
          <input
            name="mes3"
            value={meses.mes3}
            onChange={handleChange2}
            type="number"
            placeholder="Mes 3:"
            className="bg-green-200 w-full !bg-green-200 p-4 rounded-lg text-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center m-5">
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Promedio:{" "}
          <span className="font-bold text-black">{meses.promedio}</span>
        </div>
        <div className="bg-green-200 p-4 rounded-lg text-black">
          Totales: <span className="font-bold text-black">{meses.totales}</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-black">
        Total Remuneración Promedio Indemnizable
      </h2>
      <p className="text-2xl font-bold mt-6 mb-4 text-black">
        Indemnización  por tiempo de trabajo</p>
        <div className="grid grid-cols-3 grid-rows-3 text-center m-5">
          {/*RESULTADO DE AÑO*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          <span className="font-bold text-black">{fechas.años}</span>
        </div>
          {/*TEXTO DE AÑO*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          AÑOS 
        </div>
          {/*CALCULO DE AÑO*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          Promedio:{" "}
          <span className="font-bold text-black">{(meses.promedio)*(fechas.años)}</span>
        </div>
          {/*RESULTADO DE MESES*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          <span className="font-bold text-black">{fechas.meses}</span>
        </div>
          {/*TEXTO DE MESES*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          MESES
        </div>
          {/*CALCULO DE MESES*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
           <span className="font-bold text-black">{(meses.promedio /12).toFixed(2) *(fechas.meses)}</span>
        </div>
          {/*RESULTADO DE DIAS*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          <span className="font-bold text-black">{fechas.días}</span>
        </div>
          {/*TEXTO DE DIAS*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          DIAS
        </div>
          {/*RESULTADO DE DIAS*/}
        <div className="bg-green-200 p-4 border-2 border-black text-black">
          Promedio:{" "}
          <span className="font-bold text-black">{(meses.promedio / 360).toFixed(2)*(fechas.días)}</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Guardar Datos
      </button>
    </div>
  );
}
