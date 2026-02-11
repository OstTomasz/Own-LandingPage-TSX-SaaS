import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean; // Nowy opcjonalny prop
}

export const Button = ({
  children,
  type = "button",
  onClick,
  href,
  className,
  variant = "primary",
  disabled = false, // Domyślnie false
}: ButtonProps) => {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    className,
    disabled && styles.disabled, // Dodajemy klasę stylu dla stanu disabled
  );

  // Funkcja zabezpieczająca kliknięcia, gdy przycisk jest wyłączony
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={disabled ? undefined : href} // Usuwamy link, gdy disabled
        className={buttonClasses}
        onClick={handleClick}
        aria-disabled={disabled} // A11y: informacja dla czytników ekranu
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled} // Natywny atrybut HTML
    >
      {children}
    </button>
  );
};
