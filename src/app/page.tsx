import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/Components/Intro";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Intro></Intro>
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}
