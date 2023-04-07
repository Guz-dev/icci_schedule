import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { getURL } from "next/dist/shared/lib/utils";

export default function Modal({ viewPopup }) {
    return (
        <div class="border-t-4 border-[#17286b]">
          <div>
        <div class="flex flex-col items-center">
          <input class="my-2 w-72 border p-2 bg-[#17286b] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="asignaturaAgregar" placeholder="Nombre de asignatura" />
          <input class="my-2 w-72 border p-2 bg-[#17286b] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="grupoAgregar" placeholder="Grupo" />
          <input class="my-2 w-72 border p-2 bg-[#17286b] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="profesorAgregar" placeholder="Profesor" />
          <input class="my-2 w-72 border p-2 bg-[#17286b] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="salaAgregar" placeholder="Sala" />
        </div>

            <div class="flex flex-col sm:flex-row justify-center items-center">
              <button onClick={() => {viewPopup(false)}} class="p-2 w-32 text-base bg-red-500 p-2 rounded-r text-center font-bold text-white hover:text-amber-300" >Salir</button>
              <button class="p-2 w-32 text-base bg-blue-500 p-2 rounded-l text-center font-bold text-white hover:text-amber-300">Añadir</button>
            </div>
          </div>
        </div>
      );

}