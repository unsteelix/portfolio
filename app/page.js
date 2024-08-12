import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
          src={`/cover.png`}
          width={800}
          height={800}
          alt="main image"
          className={styles.mainImage}
        />
    </main>
  );
}
