// import React from "react";
import "./styles.scss";

// creating an interface with types for
interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ toDo, setToDo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={toDo}
        onChange={(event) => setToDo(event.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
