import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useModal } from 'context/ModalContext';
import { get_data_table } from "../../services/middleware_db"; 
import RamosForm from "@/components/RamosForm";
import { isAuthenticated } from "@/services/auth"
import { useRouter } from "next/router";

export default function Home({ ramos }) {


  const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
  const tablTh = ['Id','Ramo','Codigo','Semestre',"Accion"]
  const ramoData = ["id","ramo", "codigo","semestre"]
 
  const { setModal } = useModal()

  const [semestre,setSemestre] = useState(1)
  const [auth,setAuth] = useState(false)

  const router = useRouter();

  let token = null;
  try{
    token = localStorage.getItem("token");
  }
  catch(err){
    console.log("Error al obtener token");    
  }

  isAuthenticated(token).then(res => {
    console.log(res);
    if (res == false) {
      router.push("/login");
    } else{
      setAuth(true);
    }
  })
     

  return (
    <>
      {auth && <>
        <Head>
          <title> UTA ICCI - MODIFICACION DE HORARIO </title>
        </Head>
        <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 ">
          <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
          {semSym.map((sem,index) => {
            return (
              <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button className="border-b-4" style={{ borderColor: index === semestre - 1 ? '#17286b' : ''}} onClick={() => {setSemestre(index+1);}}>{sem}</button></li>
            )
          })}
        </ul>
        <div className="flex flex-col">
          <label className="ml-auto mr-8 w-32 p-2 rounded text-center text-white text-base font-bold cursor-pointer bg-emerald-500 hover:text-amber-300"
            onClick={() => { 
              setModal(
                <div className="flex flex-col justify-center items-center w-[350px] h-[350px] border-amber-400 border-4 rounded-md">
                  <RamosForm />
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
                    {ramos.map((ramo,index) => {
                      if (ramo.semestre===semestre) {
                        return (                        
                          <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            {ramoData.map((data,index) => {
                              return(
                                <td key={index} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900 border-r border-solid border-gray-700">
                                  {ramo[data]}
                                </td>)
                            })}
                            
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
      </>}
    </>
  ); 
}



export async function getStaticProps(){
  const { data } = await get_data_table('ramos')

  return {
    props:{
      ramos: data
    }
  }
}