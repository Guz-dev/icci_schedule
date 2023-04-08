import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Test({bloques}) {
  return (
    <>
      <div className={styles.container}>

        <Head>
          <title> UTA ICCI - TEST API</title>
        </Head>

        {bloques.map((bloque,index) => (
            <div key={index}>
                {bloque.id_ramos}
            </div>
        ))}
        
      </div>       
    </>
  
  
  );  
  
}

export async function getStaticProps(){

    const { data } = await fetch('https://icci-schedule.vercel.app/api/semestre_api')
                        .then(res => {                            
                            return res.json()
                        })
    
    return {
        props:{
            bloques: data
        }
    }
}


