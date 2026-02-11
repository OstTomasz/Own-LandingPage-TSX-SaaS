// src/components/ui/Icon/Icon.tsx
import styles from "./Icon.module.scss";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon = ({ name, className, size = 24 }: IconProps) => {
  return (
    <svg
      className={`${styles.icon} ${className || ""}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <use href={`/icons.svg#icon-${name}`} />
    </svg>
  );
};
