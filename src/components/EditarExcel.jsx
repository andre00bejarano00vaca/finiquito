"use client";
import { useState } from "react";

export default function EditarExcel() {
  const [mensaje, setMensaje] = useState("");

  const modificarExcel = async () => {
    try {
      // 1️⃣ Llamar a la API en `app/api/modificarExcel/route.js`
      const response = await fetch("/api/modificarExcel");
      if (!response.ok) throw new Error("Error al obtener el archivo");

      // 2️⃣ Convertir la respuesta en Blob
      const blob = await response.blob();

      // 3️⃣ Crear un enlace para descargar el archivo modificado
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "archivo_modificado.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setMensaje("Archivo modificado y descargado.");
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
      setMensaje("Error al modificar el archivo.");
    }
  };

  return (
    <div className="p-4">
      <button onClick={modificarExcel} className="bg-blue-500 text-white p-2 rounded">
        Modificar Excel
      </button>

      {mensaje && <p className="mt-4 text-blue-700">{mensaje}</p>}
    </div>
  );
}
