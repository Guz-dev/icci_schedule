import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
        <title>Icci_Schedule</title>
        <meta name="description" content="icci_schedule - check your schedule" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header class="flex justify-between flex-wrap bg-[#17286b] p-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="/"><img class="py-3.5 pr-2" src="logo_web_uta.png" alt="Logo alt UTA"></img></a>
        {/* <img class="py-3.5 pr-2" src="logo_web_uta.png" alt="Logo alt UTA"></img> */}
        <div class="mx-auto flex w-[150px] px-2 "> DEPTO.ING.COMPUTACIÓN E INFORMÁTICA </div>
      </div> 
      <div class="flex items-center text-white mr-6">    
        <span class="font-semibold  self-center text-xl uppercase">📅 Icci_schedule</span>
      </div>
      <a href='login' class=" px-4 py-2 self-center text-white mr-6 hover:text-blue-200 hover:bg-amber-600 hover:delay-75 hover:opacity-80 font-bold lg:mt-0 rounded-full border-2 border-amber-300 ">MODIFICAR</a>
    </header>
    <Component {...pageProps} />
  </>
}
