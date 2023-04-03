import React from "react";
import { CSSProperties } from "styled-components";

interface InputTextProps {
  label: string;
  styles?: CSSProperties;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
}

const InputText = ({
  label,
  styles,
  onChangeHandler,
  value,
  type = "text",
}: InputTextProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChangeHandler(e)}
        style={styles}
        type={type}
      />
    </div>
  );
};

export default InputText;
