import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "primary", disabled = false, className }) => {
  return (
    <button
      className={`btn ${type} ${disabled ? "disabled" : ""} ${className ? className : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
