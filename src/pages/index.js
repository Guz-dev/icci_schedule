import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { useState } from "react"
import Bloque_horario from "@/components/bloque_horario"
import MissingDataAlert from "@/components/MissingDataAlert"
import { get_data_table } from "@/services/middleware_db"
import FilaSem from "@/components/FilaSem"
import FilaBloques from "@/components/FilaBloques"
import IndicadorDia from "@/components/IndicadorDia"
export default function Home({ bloques }) {

  console.log(bloques)
  const tablTh2 = ['Asignatura','Grupo','Profesor','Sala','']
  const [semestre,setSemestre] = useState(1)
  // const tablTh = ['Clave Hora','Lunes','Martes','Miercoles','Jueves','Viernes']
  // const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
  // const { setModal } = useModal()
  // const [selectedIndex, setSelectedIndex] = useState(0)
  // const horas = [['08:00','09:30'],['09:40','11:10'],['11:20','12:50'],['14:45','16:10'],['16:20','17:50'],['17:55','19:25'],['19:30','21:00']]
  // const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

  const [bloquesState, setBloquesState] = useState(bloques !== null)

  return ( 
    <>
      {bloquesState ? <>
        <div className={styles.container}>
          <Head>
            <title> UTA ICCI - HORARIO </title>
          </Head> 
          <FilaSem setSemestre={setSemestre} semestre={semestre}/>
          {/* <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5"> */}
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8"> {/* div que actua como espaciado*/}
            <div className="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md"> {/* el div que contiene la tabla, y actua como borde en el estilo*/}
              <table className="min-w-full">
                <IndicadorDia/>
                <tbody className=""> {/* Contenido */}
                <FilaBloques bloques={bloques} semestre={semestre}/>
                </tbody>
              </table>
            </div>
          </div>
            {/* </div>
          </div> */}

        </div>

      </>
        
        : <MissingDataAlert />
      }
    </>
  )
}

export async function getStaticProps(){
  const { data } = await get_data_table('bloques_horario')
  
  return {
    props:{
      bloques: data
    }
  }
}
