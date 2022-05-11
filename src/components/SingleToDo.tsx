import React, { useEffect, useRef, useState } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { BiUndo } from "react-icons/bi";
import "./styles.scss";

// creating an interface with types for the props
interface Props {
  toDoObject: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

// function component
const SingleToDo = ({ toDoObject, toDos, setToDos }: Props) => {
  // local state to know if the single todo is being edited
  const [editStatus, setEditStatus] = useState<boolean>(false);
  // local state to store the value of the todo
  const [editToDo, setEditToDo] = useState<string>(toDoObject.toDo);

  // useref to set focus on the editing todo input
  const editInputRef = useRef<HTMLInputElement>(null);

  // useEffect to focus on the input to edit the todo whenever the edit status changes
  useEffect(() => {
    editInputRef.current?.focus();
  }, [editStatus]);

  // function to edit a todo
  const handleEdit = () => {
    // change edit status only, if it is not being edited and if it is not done
    if (!editStatus && !toDoObject.isDone) setEditStatus(!editStatus);
  };

  // function to handle cancel editing the todo
  const handleCancel = () => {
    if (editStatus && !toDoObject.isDone) {
      setEditStatus(!editStatus);
      setEditToDo(toDoObject.toDo);
    }
  };

  // function to handle done action
  const handleDone: (id: number) => void = (id: Number) => {
    // my solution to modifie is done using map
    let modifiedToDos: ToDo[] = toDos.map((toDo) =>
      // return the same isDone unless id match the targeted one
      toDo.id === id && !editStatus
        ? { ...toDo, isDone: !toDo.isDone }
        : { ...toDo }
    );
    setToDos(modifiedToDos);
  };

  // function to handle delete a single todo
  const handleDelete: (id: number) => void = function (id: number) {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  // function to handle form submit
  const handleSubmit = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    // todo text is replaced
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, toDo: editToDo } : { ...toDo }
      )
    );
    // end editing
    setEditStatus(!editStatus);
  };

  return (
    <form
      className="todos__single"
      onSubmit={(event) => handleSubmit(event, toDoObject.id)}
    >
      {/* todo text part either span when not done or s (for strike) when done */}
      {editStatus ? (
        <input
          ref={editInputRef}
          type="text"
          name="editToDo"
          id="editToDo"
          className="todos__single--text"
          value={editToDo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEditToDo(event.target.value)
          }
        />
      ) : toDoObject.isDone ? (
        <s className="todos__single--text">{toDoObject.toDo}</s>
      ) : (
        <span className="todos__single--text">{toDoObject.toDo}</span>
      )}
      {/* div for the three icons */}
      <div>
        {editStatus ? (
          <span className="icon" onClick={handleCancel}>
            <BiUndo />
          </span>
        ) : (
          <span className="icon" onClick={handleEdit}>
            <AiFillEdit />
          </span>
        )}
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
