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
    <header class="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl uppercase">📅 Icci_schedule</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a class="">Modificar</a>
        </div>
      </div>
    </header>
    <Component {...pageProps} />
  </>
}
