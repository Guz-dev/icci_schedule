import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Bloque_horario({ params }) {
    return (
        <>
            Hola {params.hora[0]} {params.dia}
            

            
            {/* {bloque.bloques_horario.dia == dias[j] && (
            <div>
                <div className="font-medium">{bloque.bloques_horario.ramos.ramo}</div>
                <div className="text-gray-500">
                {bloque.bloques_horario.sala} - Grupo {bloque.bloques_horario.grupo}<br></br>
                {bloque.bloques_horario.profesor} {bloque.bloques_horario.dia}
                </div>
            </div>
            )} */}
        </>
      
      );  
      
    }