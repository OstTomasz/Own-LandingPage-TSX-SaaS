import type { ReactNode, MouseEvent } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
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
  const commonProps = {
    className: clsx(
      styles.button,
      styles[variant],
      disabled && styles.disabled,
      className,
    ),
    onClick: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    },
  };

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        {...commonProps}
        role="button"
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} {...commonProps}>
      {children}
    </button>
  );
};
