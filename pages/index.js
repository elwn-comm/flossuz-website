import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uzbek Developers Consortium</title>
        <meta name="description" content="Uzbek Developers Consortium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/sample.png"
          height={128}
          width={128}
          alt="Just a sample logo"
        />

        <h1 className={styles.title}>Tez orada!</h1>

        <p className={styles.description}>
          Texnologiya hamjamiyatlari uchun standartlarni belgilash orqali
          rivojlantirish sari...
        </p>
      </main>
    </div>
  );
}
