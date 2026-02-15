import { Icon } from "../Icon/Icon";
import styles from "./CloseBtn.module.scss";

interface CloseButtonProps {
  onClick: () => void;
  className?: string; // Pozwala na dodanie marginu lub pozycjonowania z zewnątrz
  ariaLabel?: string;
  size?: number;
}

export const CloseButton = ({
  onClick,
  className = "",
  ariaLabel = "Close",
  size = 15,
}: CloseButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.closeBtn} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon name="close-btn" size={size} />
    </button>
  );
};
