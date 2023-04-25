import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authUser } from "@/services/auth";
import { useRouter } from "next/router"

export default function Home() {

  let router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));
    console.log(email, password);
    if (authUser(email, password) === true) {
      console.log("Login success");
      router.push("/crud/ramos");
    } else {
      console.log("Login failed");
    }


  }

  const inputsForm = ["email", "password"]

  return (
    <>
      <Head>
        <title> UTA ICCI - INGRESO </title>
      </Head>
      <div class="mx-auto my-16 pt-2flex-col w-[350px] border-2 rounded-lg bg-[white] text-black shadow-xl opacity-80">
        <div class="flex flex-col items-center">
          <Image height={200} width={200} src="/logouta.png" alt="Logo UTA" className="m-2 mb-0 p-2 w-72"></Image>
        </div>
        <div class="my-2 flex justify-center">
          <div class="font-sans font-bold text-center text-lg">Inicie sesion<div class="text-base">para administrar el horario</div></div>
        </div>
        <div class="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center">
            {inputsForm.map((input,index) => (
              <input key={input+index}
                class="my-2 w-72 border p-2 rounded-3xl bg-[#17286b] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg border-none" 
                type={input} name={input} placeholder={input[0].toUpperCase() + input.slice(1)} 
              />
            ))}
            <div class="mt-2 flex justify-center">
              <button class="cursor-pointer w-72 text-center border rounded bg-[#17286b] p-2 font-sans text-amber-300 text-m font-bold hover:bg-amber-300 hover:text-black hover:delay-75">Iniciar sesion</button>
            </div>
          </form>
        </div>
        <Link href="/" class="item-center text-sm flex justify-center pt-2 mb-2 hover:text-base hover:font-bold ">
          Volver al horario
        </Link>
      </div>


    </>
  );
}
