import { ReactNode } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text?: string;
  frontIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "reset" | "button" | "submit" | undefined;
}

const variantStyles = {
  primary: "bg-purple-600 text-offWhite",
  secondary: "bg-purple-300 text-purple-400",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-3 px-6",
};

const defaultStyles = "rounded-md";

export const Button = ({
  variant,
  onClick,
  text,
  endIcon,
  frontIcon,
  size,
  type,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type ?? "button"}
        onClick={onClick}
        className={`${variantStyles[variant]} ${
          sizeStyles[size ?? "md"]
        } ${defaultStyles} flex items-center gap-x-3 font-light cursor-pointer`}
      >
        {frontIcon ?? null}
        {text}
        {endIcon ?? null}
      </button>
    </>
  );
};
