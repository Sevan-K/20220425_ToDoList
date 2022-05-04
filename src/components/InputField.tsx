// import React from "react";
import React, { useRef } from "react";
import "./styles.scss";

// creating an interface with types for the props
interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAddToDo: (event: React.FormEvent) => void;
}

// function component
function InputField({ toDo, setToDo, handleAddToDo }: Props) {
  // create a ref for input element using useRef
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input">
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={toDo}
        onChange={(event) => setToDo(event.target.value)}
      />
      <button
        className="input__submit"
        type="submit"
        onClick={(event: React.FormEvent) => {
          // call handle Add toDo function
          handleAddToDo(event);
          // shift the focus of the input box, ? because it may be optionnal
          inputRef.current?.blur();
        }}
      >
        Go
      </button>
    </form>
  );
}

export default InputField;
