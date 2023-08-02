import { Input } from "@/context/Index";
import React from "react";
import { InputArea } from "./styles";
import { Setter } from "@/data/globalDTO";

interface IPropsType {
  setNumCharacters: Setter<number>;
  setNumCrystals: Setter<number>;
}

const InputAreaComponent = (props: IPropsType) => {
  const onCharacterInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 9;

    if (e.target.value.length > e.target.maxLength)
      e.target.value = String(maxValue);
    if (Number(e.target.value) > maxValue) e.target.value = String(maxValue);
    const enteredValue = parseInt(e.target.value, 10);

    const valueToSet =
      isNaN(enteredValue) || enteredValue > maxValue ? maxValue : enteredValue;

    props.setNumCharacters(valueToSet);
  };

  const onCrstalInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const maxValue = 180;

    if (e.target.value.length > e.target.maxLength)
      e.target.value = String(maxValue);
    if (Number(e.target.value) > maxValue) e.target.value = String(maxValue);
    const enteredValue = parseInt(e.target.value, 10);
    const valueToSet =
      isNaN(enteredValue) || enteredValue > maxValue ? maxValue : enteredValue;
    props.setNumCrystals(valueToSet);
  };
  return (
    <InputArea>
      <div className="input-container">
        <p> How many Characters? (maximum 9)</p>
        <Input
          width="50px"
          height="30"
          center
          type="number"
          maxlength={1}
          onChange={onCharacterInput}
          defaultValue="1"
          border="1px solid var(--dark-020)"
          borderType="all"
        />
      </div>
      <div className="input-container">
        <p> How many Crystals? (maximum 180)</p>
        <Input
          width="50px"
          height="30"
          center
          type="number"
          maxlength={3}
          onChange={onCrstalInput}
          defaultValue="180"
          border="1px solid var(--dark-020)"
          borderType="all"
        />
      </div>
    </InputArea>
  );
};

export default InputAreaComponent;
