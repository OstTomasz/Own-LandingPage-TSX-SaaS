import clsx from "clsx";
import styles from "./Icon.module.scss";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon = ({ name, className, size = 24 }: IconProps) => {
  return (
    <svg
      className={clsx(styles.icon, className)}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false" // Zapobiega focusowaniu ikony w IE/Edge (lepsze A11y)
    >
      {/* Dynamiczne ścieżki do sprite'ów są super wydajne */}
      <use href={`/icons.svg#icon-${name}`} />
    </svg>
  );
};
