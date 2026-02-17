import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./CloseBtn.module.scss";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
  size?: number;
}

export const CloseButton = ({
  onClick,
  className,
  ariaLabel = "Close",
  size = 15,
}: CloseButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.closeBtn, className)}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon name="close-btn" size={size} />
    </button>
  );
};
