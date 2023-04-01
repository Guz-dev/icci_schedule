import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Icci_schedule - Home</title>
        </Head>
        <h1>Test App</h1>
      </div>
    </>
  );
}
