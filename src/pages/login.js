import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { authUser } from "@/services/auth"
import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()
  const loginData = ['email', 'password']
  const typeData = ['text', 'password']
  const placeholders = ['Correo', 'Contraseña']
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = Object.fromEntries(new FormData(e.target))
    
    authUser(email, password).then(res => {
      if (res.auth == true) {
        console.log("Login success")
        router.push("/crud/ramos")
      } else {
        console.log("Login failed")
      }
    })
  }
  return (
    <>
      <Head>
        <title> UTA ICCI - INGRESO </title>
      </Head>
      <div className="mx-auto my-16 pt-2flex-col w-[350px] border-2 rounded-lg bg-[white] text-black shadow-xl opacity-80">
        <div className="flex flex-col items-center">
          <Image height={200} width={200} src="/logouta.png" alt="Logo UTA" className="m-2 mb-0 p-2 w-72"></Image>
        </div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>

          {placeholders.map((placeholder,index) => (
            <input key={index} name={loginData[index]} className="my-2 w-72 border p-2 rounded-3xl bg-[#17286b] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none"  type={typeData[index]}
              placeholder={placeholder}/>
          ))}
            
          <div className="flex sm:flex-row justify-center items-center">
            <button className="w-32 text-base bg-blue-500 p-2 rounded-r text-center font-bold text-white hover:text-amber-300 ">Iniciar sesion</button>
          </div>
        </form>
        <Link href="/" className="item-center text-sm flex justify-center pt-2 mb-2 hover:text-base hover:font-bold ">
          Volver al horario
        </Link>
      </div>


    </>
  )
}
