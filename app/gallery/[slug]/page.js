import data from '../../../public/data';
import Image from 'next/image'
import styles from './page.module.css';

export default function Gallery({ params }) {

  const images = data.galleries[params.slug].images;

  return (
    <div className={styles.imageList}>
      {images.map((e, i) => (
        <div key={i} className={styles.imgWrap}>
          <Image
            src={`/images/${e.file}`}
            width={800}
            height={800}
            alt={e.title}
            quality={95}
            sizes="(max-width: 800px) 100vw, (max-width: 1000px) 800px, (max-width: 1200px) 90vw, 70vw"
            className={styles.oneImg}
          />
        </div>
      ))}
    </div>
  );
}