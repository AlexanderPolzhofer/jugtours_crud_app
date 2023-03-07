import React, { Children } from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  design?: "edit" | "delete";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  design,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`button ${design ? design : ""}`}
  >
    {label}
  </button>
);
