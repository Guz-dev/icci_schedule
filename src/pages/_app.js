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
    <header class="flex justify-between flex-wrap bg-[#284262] p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href='./' class="font-semibold text-xl uppercase">📅 Icci_schedule</a>
      </div>        
      <a href='./login' class="text-sm px-4 py-2 text-white hover:text-amber-300 lg:mt-0">Modificar</a>
    </header>
    <Component {...pageProps} />
  </>
}
