import React, { useId } from "react";
import "./input.style.scss";

function InputField({ name, label }) {
  const id = useId();

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} />
    </div>
  );
}

export default InputField;
