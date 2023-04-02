import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Test({ramos}) {

   

  return (
    <>
        <div className={styles.container}>
            <Head>
                <title>Icci_schedule - Test</title>
            </Head>

            <main className="flex flex-col justify-center">
                {ramos.length == 0 && <p>Loading...</p>}
                {ramos.length > 0 && ramos.map((ramo,index) => (
                    <ramo key={index}>
                        <div className="flex flex-row">
                            <h1>{ramo.ID}</h1>
                            <p>{ramo.Ramo}</p>
                        </div>
                    </ramo>
                ))}
            </main>    
        </div>
    </>
  );
}

export async function getServerSideProps(){
    const response = await fetch('https://icci-schedule.vercel.app/api/semestre_api')
    const { data } = await response.json()
    
    return {
        props: {
            ramos: data
        }
    }
}