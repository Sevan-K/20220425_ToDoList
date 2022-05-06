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
  return (
    <form className="todos__single">
      {/* span for the todo text */}
      <span className="todos__single--text">{toDoObject.toDo}</span>
      {/* div for the three icons */}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
