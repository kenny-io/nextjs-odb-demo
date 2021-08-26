import Head from "next/head";
import Footer from "@components/Footer";
import Link from "next/link";

import styles from "../pages/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Breaking News 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href={`/news`}>
          <button type="button" className={styles.button}>
            <a>
              <h2>Read Our News 🚀</h2>
            </a>
          </button>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
