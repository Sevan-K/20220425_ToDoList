import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";

// way to declare a function presented in the video (not recommended on React Doc)
const App: React.FC = () => {
  // brackets are used to define a type on a hook
  const [toDo, setToDo] = useState<string>("");
  // state to contain all the todos
  const [toDos, setToDos] = useState<ToDo[]>([]);

  // function to add the todos
  const handleAddToDo = (event: React.FormEvent) => {
    // preventing default page reload
    event.preventDefault();
    // if the todo from input filed is not empty
    if (toDo) {
      // fill todos array
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo("");
    }
  };

  // afficher la liste des todos dans la console quand c'est nécessaire.
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAddToDo={handleAddToDo} />
      <ToDoList toDos={toDos} />
    </div>
  );
};

export default App;
