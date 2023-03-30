import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from '../components/Header'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <Head>
          <Header></Header>
        </Head>
        <h1>Test App</h1>
      </div>
    </>
  );
}
