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
      focusable="false"
    >
      <use href={`/icons.svg#icon-${name}`} />
    </svg>
  );
};
