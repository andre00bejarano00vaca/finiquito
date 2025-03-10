"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el router

const Passwor = () => {
  const [contra, setContra] = useState("");
  const router = useRouter();
  

  const handleChange = (e) => {
    setContra(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contra) {
      console.log("❌ Ingresa una contraseña");
      return;
    }

    try {
      const response = await axios.post(
        "/api/auth/login",
        { contra },
        { withCredentials: true } // Necesario para manejar cookies en el navegador
      );
      
      router.push("/");

    } catch (error) {
      console.log("❌ Error:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="grid place-items-center h-screen w-full bg-black text-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="contra"
          value={contra}
          type="text"
          className="text-black p-2 rounded"
          onChange={handleChange}
        />
        <button type="submit" className="bg-white text-black px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Passwor;
