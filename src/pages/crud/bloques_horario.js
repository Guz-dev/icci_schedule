import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useModal } from 'context/ModalContext';

export default function Home({ bloques }) {

  const dias = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'
  ]

  const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
  const tablTh = ['Bloque','Dia','Asignatura','Grupo','Profesor','Sala','']
  const bloqueData = ["Nombre de asignatura", "Grupo", "Profesor", "Sala"]

  const { setModal } = useModal()

  const [semestre,setSemestre] = useState(1)
 
  const [name,setName] = useState(null)
  const [day,setDay] = useState(null)
  const [subject,setSubject] = useState(null)
  const [group,setGroup] = useState(null)
  const [teacher,setTeacher] = useState(null)
  const [room,setRoom] = useState(null)

  //console.log(bloques);
  
  return (
    <>
      <Head>
        <title> UTA ICCI - MODIFICACION DE HORARIO </title>
      </Head>
      <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 ">
          <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
          {semSym.map((sem,index) => {
            return (
              <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button class="border-b-4" style={{ borderColor: index === semestre -1  ? '#17286b' : ''}} onClick={() => {setSemestre(index+1); setSelectedIndex(index)}}>{sem}</button></li>
            )
          })}
      </ul>
      <div className="flex flex-col">
        <label className="ml-auto mr-8 w-32 p-2 rounded text-center text-white text-base font-bold cursor-pointer bg-emerald-500 hover:text-amber-300"
          onClick={() => { 
          setModal(
            <div className="flex flex-col justify-center items-center w-[350px] h-[350px] border-amber-400 border-4 rounded-md">
              {bloqueData.map((placeholder, index) => (
                <input key={index} className="my-2 w-72 border p-2 bg-[#17286b] hover:bg-[#27356b] px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="text"
                  placeholder={placeholder}/>
              ))}
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <button onClick={()=> console.log("agrego")} className="p-2 w-32 text-base bg-blue-500 rounded-l text-center font-bold text-white hover:text-amber-300">Añadir</button>
                <button onClick={() => {setModal(false)}} className="w-32 text-base bg-red-500 p-2 rounded-r text-center font-bold text-white hover:text-amber-300 ">Salir</button>
              </div>
            </div>)}}
        >Agregar</label>
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md">
              <table className="min-w-full">
                {/* <thead className="bg-gray-200 border-b"> */}
                <thead className="bg-[#17286b] border-b border-gray-100 text-white">
                  <tr>
                  {tablTh.map((tabl,index) => {
                    return (
                    <th key={index} scope="col" className="text-sm font-bold px-6 py-4 text-center border-r border-solid">{tabl}</th>)
                  })}
                  </tr>
                </thead>
                <tbody className="bg-gray-100">
                  {bloques.map((bloque,index) => {
                    if (bloque.semestre===semestre) {
                      return (  
                        <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900 border-r border-solid border-gray-700">
                            {bloque.bloques_horario.bloques_horas.inicio} - {bloque.bloques_horario.bloques_horas.termino} 
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900 border-r border-solid border-gray-700">
                            {bloque.bloques_horario.dia}
                          </td>
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
                          <td className="text-sm px-6 py-4 whitespace-nowrap text-center font-thin">
                            <a href="#" className="text-base bg-blue-500 p-2 rounded-l text-center font-bold text-white hover:text-amber-300">Editar</a>
                            <a href="#" className="text-base bg-red-500 p-2 rounded-r text-center font-bold text-white hover:text-amber-300">Eliminar</a>
                          </td>
                        </tr>
                      );
                    }    
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Link href="/" className="item-center text-lg flex justify-center pt-3.5 pb-0 hover:text-xl hover:font-bold ">
          Volver al horario
        </Link>
      </div>
    </>
  ); 
}



export async function getStaticProps(){

  const { data } = await fetch('https://icci-schedule.vercel.app/api/semestre_api')
      .then((res) => {            
      return res.json()
    })
  return {
    props:{
        bloques: data
    }
  }
}