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
    >
      <use xlinkHref={`/icons.svg#icon-${name}`} />
    </svg>
  );
};
