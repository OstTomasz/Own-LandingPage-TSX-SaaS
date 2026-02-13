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
  disabled?: boolean;
}

export const Button = ({
  children,
  type = "button",
  onClick,
  href,
  className,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    className,
    disabled && styles.disabled,
  );

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
        href={disabled ? undefined : href}
        className={buttonClasses}
        onClick={handleClick}
        aria-disabled={disabled}
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
      disabled={disabled}
    >
      {children}
    </button>
  );
};
