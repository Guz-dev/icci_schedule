import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { getURL } from "next/dist/shared/lib/utils";

export default function Home() {

  const [color1, changeColor1] = useState(false);
  const [color2, changeColor2] = useState(false);

  function ChangeI(){
    changeColor1(true);
    changeColor2(false);
    console.log(document.getElementById("1"));
  }

  function ChangeII(){
    // changeColor2(current => !current);
    changeColor2(true);
    changeColor1(false);
    console.log(document.getElementById("2"));
  }

  // const [datos, setDatos] = useState([
  //   [1,2,3,4,5],
  //   [6,7,8,9,10],
  //   [11,12,13,14,15],
  //   [16,17,18,19,20],
  //   [21,22,23,24,25],
  //   [26,27,28,29,30],
  //   [31,32,33,34,35]
  // ]);

  return (
    <>
      <div className={styles.container}>

        <Head>
          <title> UTA ICCI - HORARIO </title>
        </Head>
        {/* <h1>Test App</h1> */}
        {/* <select class="rounded rounded-lg p-2">
          <option>Semestre I</option>
          <option>Semestre II</option>
          <option>Semestre III</option>
          <option>Semestre IV</option>
          <option>Semestre V</option>
          <option>Semestre VI</option>
          <option>Semestre VII</option>
          <option>Semestre IX</option>
          <option>Semestre XI</option>
        </select> */}
        <ul id="listaTabla" class="inline-flex w-full px-1 pt-2 ">
          <div class="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semana </div>
          <li class="px-4 py-2 -mb-px font-bold text-gray-800 border-b-2 border-blue-400 rounded-t hover:bg-gray-300"><a id="default-tab" href="#first">0</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semI">I</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semII">II</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semIII">III</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semIV">IV</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semV">V</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semVI">VI</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semVII">VII</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semIX">IX</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300"><a href="#semXI">XI</a></li>
        </ul>
        <a href="crud" class="pl-10">Ir al crud</a>
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
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> 1 - 2  (08:00-09:30) </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        <div>
                          Asignatura
                        </div>
                        <div class="text-gray-500">
                          Sala - Grupo
                        </div>
                        <div class="text-gray-500">
                          Profesor
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

        {/* Testeo */}
        <h1> TESTEO </h1>
        <ul id="listaTabla" class="inline-flex w-full px-1 pt-2 ">
          <div class="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semana </div>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300 "><a href="#semI" id="1"><button class="border-b-4" style={{ borderColor: color1 ? '#17286b' : '', color: color1 ? 'black' : ''}}
          onClick={ ChangeI }>I</button></a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60 hover:bg-gray-300 "><a href="#semII" id="2"><button class="border-b-4" style={{ borderColor: color2 ? '#17286b': '', color: color2 ? 'black' : ''}}
          onClick={ ChangeII }>II</button></a></li>
        </ul>
      </div>       
    </>
  
  
  );

  
  
}


