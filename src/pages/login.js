import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div class="mx-auto my-16 flex-col w-[350px] border-2 rounded-lg bg-[white] text-black shadow-xl">
        <div class="flex flex-col items-center">
          <img src="logouta.png" alt="Logo UTA" class="m-2 p-2 w-72"></img>
        </div>
        <div class="my-2 flex justify-center">
          <div class="font-sans font-bold text-center text-xl">Inicie sesion para administrar horario</div>
        </div>
        <div class="flex flex-col items-center">
          <input class="my-2 w-72 border p-2" type="email" placeholder="Nombre de usuario" />
          <input class="my-2 w-72 border p-2" type="password" placeholder="Contraseña" />
        </div>
        <div class="mb-2 flex justify-center">
          <button class="my-2 w-72 border rounded bg-[#284262] p-2 font-sans text-amber-300 text-m font-bold hover:bg-[#284260]">Iniciar sesion</button>
        </div>
      </div>
    </>
  );
}
