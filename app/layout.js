import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import styles from "./layout.module.css";
import data from '../public/data';
import MobileMenu from "./mobileMenu";

const galleries = Object.entries(data.galleries);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kirill Orekhov",
  description: "Photography portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.sidebar}>
          <Link href="/">
            <div className={styles.title}>Kirill<br/>Orekhov</div>
          </Link>
          {/* <div className={styles.link}><Link href="/">Main</Link></div> */}
          <figure className={styles.projectsGroup}>
            <figcaption className={styles.linkGroupTitle}>Projects</figcaption>
            {galleries.map((e, i) => (
              <div key={i} className={styles.projectsGroupLink}><Link href={`/gallery/${e[0]}`}>&nbsp;&nbsp;{`${e[1].name}`}</Link></div>
            ))} 
          </figure>
          <figure className={styles.otherGroup}>
            {/* <figcaption className={styles.linkGroupTitle}>Other</figcaption> */}
            <div className={styles.otherGroupLink}><Link href="/about">Contact</Link></div>
            <div className={styles.otherGroupLink}><Link href="http://instagram.com" target="_blank">Instagram</Link></div>
            <div className={styles.otherGroupLink}><Link href="https://www.youtube.com/@user-fc8gz1dj8m" target="_blank">Youtube</Link></div>
          </figure>
        </nav>
        <MobileMenu />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}
