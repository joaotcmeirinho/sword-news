import React from "react";
import { CSSProperties } from "styled-components";

interface InputTextProps {
  label: string;
  styles: CSSProperties;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ label, styles, onChangeHandler }: InputTextProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input onChange={(e) => onChangeHandler(e)} style={styles} type="text" />
    </div>
  );
};

export default InputText;
