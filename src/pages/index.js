import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home({ bloques }) {
 // Recuerden cambiar a class -> classname, img -> Image, y a -> Link
  console.log(bloques);
  const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']

  const [semestre,setSemestre] = useState(1)

  const [selectedIndex, setSelectedIndex] = useState(0)


  /* bloques.map((bloque,index)=>{
    return(
      <div key={index}>

      </div>
    )
  }) */
  return (
    <>
      <div className={styles.container}>

        <Head>
          <title> UTA ICCI - HORARIO </title>
        </Head>
        <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 ">
          <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
          {semSym.map((sem,index) => {
            return (
              <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button class="border-b-4" style={{ borderColor: index === selectedIndex ? '#17286b' : ''}} onClick={() => {setSemestre(index+1); setSelectedIndex(index)}}>{sem}</button></li>
            )
          })}

        </ul>
        <Link href="crud" class="pl-10">Ir al crud</Link>
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md">
                <table class="min-w-full">
                  {/* <thead class="bg-gray-200 border-b"> */}
                  <thead class="bg-[#17286b] border-b border-gray-100 text-white">
                    <tr>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Clave hora
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Lunes
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Martes
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Miercoles
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Jueves
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center">
                        Viernes
                      </th>
                    </tr>
                  </thead>
                  <tbody class="">
                    {bloques.map((bloque,index)=>{
                      if (bloque.semestre===semestre) {
                        return (

                          <tr key={index} class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 1 - 2  (08:00-09:30) </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                              <div>
                                {bloque.bloques_horario.ramos.ramo}
                              </div>
                              <div class="text-gray-500">
                                {bloque.bloques_horario.sala} - Grupo {bloque.bloques_horario.grupo}
                              </div>
                              <div class="text-gray-500">
                                {bloque.bloques_horario.profesor}
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                              Otto
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                              @mdo
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                              @mdo
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              @mdo
                            </td>
                          </tr>
                        )
                      }
                    })
                    }
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 3 - 4 (09:40-11:10)</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        Jacob
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        Thornton
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @fat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 5 - 6 (11:20-12:50) </td>
                      <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        Larry
                      </td>              
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @twitter
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 7 - 8 (14:45-16:15) </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        Whitney
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        Austin
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 9 - 10 (16:20-17:50)</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        Ted
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        Obama
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @fat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 11 - 12 (17:55-19:25)</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        Mark
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        Otto
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 13 - 14 (19:30-21:00)</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        Mark
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        Otto
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @mdo
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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

