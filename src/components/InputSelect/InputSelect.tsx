import React from "react";

interface InputSelectProps {
  label: string;
  items: string[];
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const InputSelect = ({
  label,
  items,
  onChangeHandler,
  value,
}: InputSelectProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <label>{label}</label>
      <select onChange={onChangeHandler}>
        <option></option>
        {items.map((item, index) => (
          <option selected={value === item || false} key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
