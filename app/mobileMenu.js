'use client'
 
import { useState } from 'react'
import styles from "./mobileMenu.module.css";
import Link from 'next/link';
import data from '../public/data';

const galleries = Object.entries(data.galleries);

export default function MobileMenu() {
  let [isVisible, setVisible] = useState(false)
  
  const menuBtn = () => {
    isVisible = isVisible ? setVisible(false) : setVisible(true)
  }


  return (
    <div className={styles.mobileMenu}>
            <div className={isVisible ? styles.visible : styles.invisible}>
                <nav className={styles.menu}>
                    <figure className={styles.projectsGroup}>
                    <figcaption className={styles.linkGroupTitle}>Projects</figcaption>
                    {galleries.map((e, i) => (
                        <div key={i} className={styles.projectsGroupLink} onClick={menuBtn}><Link href={`/gallery/${e[0]}`}>&nbsp;&nbsp;{`${e[1].name}`}</Link></div>
                    ))} 
                    </figure>
                    <figure className={styles.otherGroup}>
                    <div className={styles.otherGroupLink} onClick={menuBtn}><Link href="/about">Contact</Link></div>
                    <div className={styles.otherGroupLink}><Link href="http://instagram.com" target="_blank">Instagram</Link></div>
                    <div className={styles.otherGroupLink}><Link href="https://www.youtube.com/@user-fc8gz1dj8m" target="_blank">Youtube</Link></div>
                    </figure>
                </nav>
            </div>
        <div className={styles.mobileMenuTitle}>
            <div className={styles.mobileTitle}>
              <Link href="/">Kirill Orekhov</Link>
            </div>
            <div className={styles.menuBtn} onClick={menuBtn}>menu</div>
        </div>
    </div>
  )
}