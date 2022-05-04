import React from "react";
import { ToDo } from "../model";
import "./styles.scss";

// creating an interface with types for the props
interface Props {
  toDos: ToDo[];
  setToDo?: React.SetStateAction<ToDo[]>;
}

// function component
const ToDoList: React.FC<Props> = ({ toDos }) => {
  return (
    <ul className="todos">
      {toDos.map((toDo) => (
        <li key={toDo.id}>{toDo.toDo} </li>
      ))}
    </ul>
  );
};

export default ToDoList;
