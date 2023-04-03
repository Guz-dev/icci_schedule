import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Modificar from "../components/Modificar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <Head>
        </Head>
        <Modificar></Modificar>
      </div>
    </>
  );
}
