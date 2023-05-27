import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Bloque_horario({ params, bloque }) {
  const tablTh2 = ['Asignatura','Grupo','Profesor','Sala','']

  return (
    <>
      {bloque.bloques_horario.dia == params.dia && bloque.bloques_horario.bloques_horas.inicio == params.hora[0] && (
        <div>
          {/* <div className="text-gray-500 font-medium">{bloque.bloques_horario.ramos.ramo}</div>
          <div className="text-gray-500">
            {bloque.bloques_horario.sala} - Grupo {bloque.bloques_horario.grupo}<br></br>
            {bloque.bloques_horario.profesor} 
          </div> */}
          <table className="min-w-full">
            <thead className="bg-[#17286b] border-b border-gray-100 text-white">
              <tr>
                {tablTh2.map((tabl,index) => {
                  return (
                    <th key={index} scope="col" className="text-sm font-bold px-6 py-4 text-center border-r border-solid">{tabl}</th>)
                })}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                semestre {bloque.semestre} id ramo {bloque.bloques_horario.ramos.ramo}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                  {bloque.bloques_horario.grupo}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                  {bloque.bloques_horario.profesor}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                  {bloque.bloques_horario.sala}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  
  );  
  
}