import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> UTA ICCI - INGRESAR ADMINISTRADOR </title>
      </Head>
      <div class="mx-auto my-36 flex-col h-[600px] w-[600px] border-4 bg-[#284262] bg-opacity-50 text-black shadow-xl border-amber-300 rounded-lg">
        <div class="flex flex-col items-center ">
          <img class="py-3.5" src="logouta.png" alt="Logo UTA"></img>
        </div>
        <div class="my-2 flex justify-center text-xl">
          <div class="font-sans font-bold text-center">Por favor, inicie sesion para administrar el horario.</div>
        </div>
        <div class="flex flex-col items-center">
          <input class="my-2 w-72 border p-2 rounded-3xl bg-[#284262] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="nombre" placeholder="Nombre de usuario" />
          <input class="my-2 w-72 border p-2 rounded-3xl bg-[#284262] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" type="password" placeholder="Contraseña" />
        </div>
        <div class="my-2 flex justify-center">
          <button class="w-40 border p-2 font-sans bg-amber-300 text-xl font-bold border-none hover:bg-yellow-600 py-2.5">Iniciar sesion</button>
        </div>
        <a href="/" class="item-center text-lg flex justify-center pt-3.5 pb-0 hover:text-xl hover:font-bold ">Volver al horario</a>
      </div>
    </>
  );
}
