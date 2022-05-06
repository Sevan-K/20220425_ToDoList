import React from "react";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.scss";

// creating an interface with types for the props
interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

// function component
const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className="container" >
      <ul className="todos">
        {toDos.map((toDoObject) => (
          // returning the single todo component
          <SingleToDo
            key={toDoObject.id}
            toDoObject={toDoObject}
            toDos={toDos}
            setToDos={setToDos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
