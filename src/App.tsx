import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

// way to declare a function presented in the video (not recommended on React Doc)
const App: React.FC = () => {
  // brackets are used to define a type on a hook
  const [toDo, setToDo] = useState<string>("");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} />
    </div>
  );
};

export default App;
