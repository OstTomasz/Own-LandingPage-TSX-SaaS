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
}

export const Button = ({
  children,
  type = "button",
  onClick,
  href,
  className,
  variant = "primary",
}: ButtonProps) => {
  const buttonClasses = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
