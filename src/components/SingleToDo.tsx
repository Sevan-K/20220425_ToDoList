import React from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.scss";

// creating an interface with types for the props
interface Props {
  toDoObject: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

// function component
const SingleToDo = ({ toDoObject, toDos, setToDos }: Props) => {
  // function to handle done action
  const handleDone = (id: Number) => {
    // my solution to modifie is done using map
    let modifiedToDos: ToDo[] = toDos.map((toDo) =>
      // return the same isDone unless id match the targeted one
      toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : { ...toDo }
    );
    setToDos(modifiedToDos);
  };

  // function to handle delete a single todo
  const handleDelete = (id: Number) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <form className="todos__single">
      {/* todo text part either span when not done or s (for strike) when done */}
      {toDoObject.isDone ? (
        <s className="todos__single--text">{toDoObject.toDo}</s>
      ) : (
        <span className="todos__single--text">{toDoObject.toDo}</span>
      )}
      {/* div for the three icons */}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(toDoObject.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(toDoObject.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
