import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import "./InputForm.css";
type inputValue = string;

const InputForm = () => {
  const [inputValue, setInputValue] = useState<inputValue>("");
  const { searchCountryName } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCountryName(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form className="formElement" onSubmit={handleSubmit}>
        <input
          placeholder="Enter Country"
          type="text"
          onChange={handleChange}
          value={inputValue}
        ></input>
        <button disabled={inputValue === ""}>Search the Region</button>
      </form>
    </>
  );
};

export default InputForm;
