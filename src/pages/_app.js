import '@/styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function App({ Component, pageProps }) {
  return <>
    <Head>
        <title>Icci_Schedule</title>
        <meta name="description" content="icci_schedule - check your schedule" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header class="flex justify-between flex-wrap bg-[#17286b] p-2 pb-0">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Image height={300} width={300} class="py-3.5 pr-2" src="/logo_web_uta.png" alt="Logo alt UTA"></Image>
        </Link>
        {/* <img class="py-3.5 pr-2" src="logo_web_uta.png" alt="Logo alt UTA"></img> */}
        <div class="mx-auto flex w-[200px] px-6 "> ING. COMPUTACIÓN E INFORMÁTICA. AÑO 2023 </div>
      </div> 
      <div class="flex items-center text-white mr-6">    
        <span class="font-semibold text-xl uppercase">📅 Icci_schedule</span>
      </div>
      <Link href="login" class=" px-4 py-2 self-center text-white mr-6 hover:text-amber-300 hover:delay-75 hover:border-yellow-300 font-bold lg:mt-0 rounded-full border-2 border-amber-300 ">MODIFICAR
      </Link>
{/* =======
    <header class="flex justify-between flex-wrap bg-[#284262] p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href='./' class="font-semibold text-xl uppercase">Icci_schedule</a>
      </div>        
      <a href='./login' class="text-sm px-4 py-2 text-white hover:text-amber-300 lg:mt-0">Modificar</a>
>>>>>>> 9699e69a29bc5982e74e0264526431feb9c0ed6a */}
    </header>
    <Component {...pageProps} />
  </>
}
