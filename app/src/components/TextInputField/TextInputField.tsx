import React from "react";
import "./TextInputField.scss";

interface TextInputFieldProps {
  name: string;
  placeholder: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  name,
  placeholder,
  onFocus,
  onBlur,
  value,
  handleChange,
  handleReset,
}) => (
  <input
    type="text"
    name={name}
    placeholder={placeholder}
    onFocus={onFocus}
    onBlur={onBlur}
    value={value}
    onChange={handleChange}
    onReset={handleReset}
  />
);
