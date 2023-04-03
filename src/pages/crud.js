import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> UTA ICCI - MODIFICACION DE HORARIO </title>
      </Head>
      <ul id="listaTabla" class="inline-flex w-full px-1 pt-2 ">
          <div class="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semana </div>
          <li class="px-4 py-2 -mb-px font-bold text-gray-800 border-b-2 border-blue-400 rounded-t "><a id="default-tab" href="#first">0</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semI">I</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semII">II</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semIII">III</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semIV">IV</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semV">V</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semVI">VI</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semVII">VII</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semIX">IX</a></li>
          <li class="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><a href="#semXI">XI</a></li>
        </ul>
      <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border-4 border-gray-100">
                  {/* <thead class="bg-gray-200 border-b"> */}
                  <thead class="bg-[#284262] border-b border-gray-100 text-white">
                    <tr>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Bloque
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Asignatura
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Grupo
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Profesor
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center border-r border-solid">
                        Sala
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center">
                        Editar
                      </th>
                      <th scope="col" class="text-sm font-bold px-6 py-4 text-center">
                        Eliminar
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-100">
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 1 - 2  (08:00-09:30) </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                        <div>
                          Asignatura
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
                      <td class="text-sm bg-blue-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Editar</a>
                      </td>
                      <td class="text-sm bg-red-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Eliminar</a>
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 3 - 4 (09:40-11:10)</td>
                      <td class="text-sm bg-emerald-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Agregar</a>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-solid border-emerald-900">
                        
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-solid border-emerald-900">
                        
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 5 - 6 (11:20-12:50) </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-emerald-900">
                        @twitter
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
                      <td class="text-sm bg-blue-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Editar</a>
                      </td>
                      <td class="text-sm bg-red-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Eliminar</a>
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 7 - 8 (14:45-16:15) </td>
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
                      <td class="text-sm bg-blue-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Editar</a>
                      </td>
                      <td class="text-sm bg-red-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Eliminar</a>
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 9 - 10 (16:20-17:50)</td>
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
                      <td class="text-sm bg-blue-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Editar</a>
                      </td>
                      <td class="text-sm bg-red-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Eliminar</a>
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 11 - 12 (17:55-19:25)</td>
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
                      <td class="text-sm bg-blue-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Editar</a>
                      </td>
                      <td class="text-sm bg-red-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Eliminar</a>
                      </td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700"> Lunes 13 - 14 (19:30-21:00)</td>
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
                      <td class="text-sm bg-blue-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Editar</a>
                      </td>
                      <td class="text-sm bg-red-500 px-6 py-4 whitespace-nowrap text-center font-thin">
                        <a href="#" class="text-base text-center font-bold text-white hover:text-amber-300 hover:shadow-lg">Eliminar</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Link href="/">
          <a class="item-center text-lg flex justify-center pt-3.5 pb-0 hover:text-xl hover:font-bold ">Volver al horario</a>
          </Link>
        </div>
    </>
  ); 
}
