"use client";

import { useState } from "react";

export default function ToggleSwitch({ enabled, setEnabled }) {
  return (
     <button
        onClick={() => setEnabled(!enabled)}
        className={`${enabled ? "bg-blue-600" : "bg-gray-300"} 
          relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
      >
        <span
          className={`${enabled ? "translate-x-6" : "translate-x-1"} 
            inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </button>
  );
}
