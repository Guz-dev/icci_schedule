import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { useEffect, useState, useRef } from "react"
import Bloque_horario from "@/components/bloque_horario"
import MissingDataAlert from "@/components/MissingDataAlert"
import { get_data_table } from "@/services/middleware_db"
import io from "socket.io-client"

let socket
export default function Home({ bloques }) {

  //console.log(bloques);
  const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
  const tablTh = ['Clave Hora','Lunes','Martes','Miercoles','Jueves','Viernes']

  const horas = [['08:00','09:30'],['09:40','11:10'],['11:20','12:50'],['14:45','16:10'],['16:20','17:50'],['17:55','19:25'],['19:30','21:00']]
  const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

  const [semestre,setSemestre] = useState(1)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [bloquesState, setBloquesState] = useState(bloques !== null)
  const [messagebox, setMessagebox] = useState(false)

  const [username, setUsername] = useState(null)
  const [message, setMessage] = useState("")
  const [allMessages, setAllMessages] = useState([])

  const socketCreated = useRef(false)
  /* 
  const socketInitializer = () => {
    fetch("/api/socket")

    socket = io() 

    socket.on ("recieve-message", (data) => {
      console.log(data)
      setAllMessages((pre) => [...pre, data])
    })

    socket.on("connect", () => {
      console.log("Connected")
      console.log(socket.id)
    })

    socket.on("disconnect", () => {
      console.log("Disconnected")
    })

  }
  
  useEffect(() => {
    if(!socketCreated.current) {
      socketInitializer()
      socketCreated.current = true
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    socket.emit("send-message", {
      username,
      message
    })
  }  */

  return ( 
    <>

      {/* <div className="flex absolute justify-end items-end w-full h-4/5 ">
        <button className="w-12 h-12 bg-black text-white rounded-full cursor-pointer hover:bg-gray-700" onClick={() => setMessagebox(!messagebox)}>^</button>
      </div>
      {messagebox && 
      <div className="flex absolute justify-end w-full h-3/4">
        <div className="flex justify-end items-end w-6/12 h-1/12 p-2 bg-gray-200">
          <div className="flex flex-col items-center">
            <label className="text-black w-2/3 text-center">Usuario</label>
            <input name="name" className="w-2/3 bg-gray-800 text-white" onChange={(e) => {setUsername(e.target.value)}}></input>
          </div>


          {username && <div className="flex flex-col w-full bg-gray-800 rounded">
            <label className="w-full text-center text-2xl p-2">Messages</label>
            {allMessages.map(({ username, message},i) =>(
              <p key={i} className="text-white text-2xl p-2">
                {username} : {message}
              </p>
            ))}
            <form onSubmit={handleSubmit}>
              <input className="bg-gray-800 text-2xl p-2 border-white border-t-2" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </form>
          </div>
          }

          
        </div>
      </div>} */}

      {bloquesState ? <>
        <div className={styles.container}>

          <Head>
            <title> UTA ICCI - HORARIO </title>
          </Head>
          <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 ">
            <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
            {semSym.map((sem,index) => {
              return (
                <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button className="border-b-4" style={{ borderColor: index === selectedIndex ? '#17286b' : ''}} onClick={() => {setSemestre(index+1); setSelectedIndex(index)}}>{sem}</button></li>
              )
            })}
          
          </ul>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md">
                  <table className="min-w-full">
                    <thead className="bg-[#17286b] border-b border-gray-100 text-white">
                      <tr>
                        {tablTh.map((tabl,index) => {
                          return (
                            <th key={index} scope="col" className="text-sm font-bold px-6 py-4 text-center border-r border-solid">{tabl}</th>)
                        })}
                      </tr>
                    </thead>
                  
                    <tbody className="">
                      {horas.map((hora,index) => {
                        return(
                          <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700">
                              {hora[0]} - {hora[1]}
                            </td>

                            {dias.map((dia, index) => {
                              return (
                                <td key={index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                                  {bloques.map((bloque, index) => {
                                    if (bloque.semestre === semestre) {
                                      return (
                                        <div key={index}>
                                          <Bloque_horario params={{semestre,hora,dia}} bloque={bloque} />
                                        </div>
                                      )
                                    }
                                  })}
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
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
