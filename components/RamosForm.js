import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { insertRamo } from "@/pages/api/middleware_api";
import { useModal } from "context/ModalContext";

export default function RamosForm({ params }) {
    const ramoData = ["id","ramo", "codigo","semestre"]

    const placeholders = ["Id","Ramo","Codigo","Semestre"]
    const { setModal } = useModal()

    const [id,setId] = useState(0)
    const [ramo,setRamo] = useState("")
    const [codigo,setCodigo] = useState("")
    const [semestre,setSemestre] = useState(1)

    return (
        <>      
            <input onChange={(e) => {setId(e.target.value); console.log(id)}} className="my-2 w-72 border p-2 bg-[#17286b] hover:bg-[#27356b] px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="text"
            placeholder={placeholders[0]}/>
   
            <input onChange={(e) => {setRamo(e.target.value); console.log(ramo)}} className="my-2 w-72 border p-2 bg-[#17286b] hover:bg-[#27356b] px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="text"
            placeholder={placeholders[1]}/>

            <input onChange={(e) => {setCodigo(e.target.value); console.log(codigo)}} className="my-2 w-72 border p-2 bg-[#17286b] hover:bg-[#27356b] px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="text"
            placeholder={placeholders[2]}/>

            <input onChange={(e) => {setSemestre(e.target.value); console.log(semestre)}} className="my-2 w-72 border p-2 bg-[#17286b] hover:bg-[#27356b] px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="text"
            placeholder={placeholders[3]}/>

            <div className="flex flex-col sm:flex-row justify-center items-center">
                <button onClick={() => insertRamo(id,ramo,codigo,semestre)} className="p-2 w-32 text-base bg-blue-500 rounded-l text-center font-bold text-white hover:text-amber-300">Añadir</button>
                <button onClick={() => setModal(false)} className="w-32 text-base bg-red-500 p-2 rounded-r text-center font-bold text-white hover:text-amber-300 ">Salir</button>
            </div>
        </>
      
      );  
      
    }