import styles from "./PortfolioCard.module.scss";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  img: string;
  img2x: string;
  imgMid: string;
  imgMid2x: string;
  imgMax: string;
  imgMax2x: string;
}

export const PortfolioCard = ({
  title,
  category,
  description,
  img,
  img2x,
  imgMid,
  imgMid2x,
  imgMax,
  imgMax2x,
}: PortfolioCardProps) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <picture>
          {/* Desktop */}
          <source
            media="(min-width: 1400px)"
            srcSet={`${imgMax} 1x, ${imgMax2x} 2x`}
          />
          {/* Tablet */}
          <source
            media="(min-width: 768px)"
            srcSet={`${imgMid} 1x, ${imgMid2x} 2x`}
          />
          {/* Mobile / Fallback */}
          <img
            src={img}
            srcSet={`${img} 1x, ${img2x} 2x`}
            alt={title}
            className={styles.image}
            loading="lazy"
            width="360"
            height="300"
          />
        </picture>

        <div className={styles.overlay}>
          <p className={styles.overlayText}>{description}</p>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </li>
  );
};
