import Footer from "@components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../news/News.module.css";
export default function NewsDetail({ news }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <main>
        <p
          className={`${
            news.tag == "breaking" ? styles.breaking : styles.archive
          }`}
        >
          {news.tag} news
        </p>
        <h3>{news.title}</h3>
        <p> {news.content} </p>
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch(process.env.DATA);
  const newsItems = await res.json();
  const breakingNews = newsItems.filter((news) => news.tag == "breaking");

  const paths = breakingNews.map((news) => ({
    params: { id: news.id.toString() },
  }));

  /*
  console.log(paths)
  [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } }
  ]
  The paths above will be generated at build time
  */

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.DATA}/${params.id}`);
  const news = await res.json();
  return { props: { news } };
}
