import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { useState } from "react"
import MissingDataAlert from "@/components/MissingDataAlert"
import { get_data_table } from "@/services/middleware_db"
import FilaSem from "@/components/FilaSem"
import FilaBloques from "@/components/FilaBloques"
import IndicadorDia from "@/components/IndicadorDia"
export default function Home({ bloques }) {

  console.log(bloques)
  const [semestre,setSemestre] = useState(1)
  const [bloquesState, setBloquesState] = useState(bloques !== null)

  return ( 
    <>
      {bloquesState ? <>
        <div className={styles.container}>
          <Head>
            <title> UTA ICCI - HORARIO </title>
          </Head> 
          <FilaSem setSemestre={setSemestre} semestre={semestre}/>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md">
              <table className="min-w-full">
                <IndicadorDia/>
                <tbody className="">
                  <FilaBloques bloques={bloques} semestre={semestre}/>
                </tbody>
              </table>
            </div>
          </div>
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
