import styles from './page.module.css'
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.content}>
      <Image
          src="/images/me.png"
          width={500}
          height={500}
          alt="Me"
          className={styles.img}
        />
      <div className={styles.info}>
        <div className={styles.infoTitle}>About Me</div>
        <div className={styles.infoText}>It&apos;s never too late to take a shitty photos.</div>
        <div className={styles.infoText}>But I&apos;ll try...</div>
        <br/>
        <div className={styles.infoText}>Mail: unsteelix@yandex.ru / unsteelix@gmail.com</div>
        <div className={styles.infoText}>Telegram: @unsteelix</div>
        <div className={styles.infoText}>Instagram: soon</div>
      </div>
    </div>
  );
}
