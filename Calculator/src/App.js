/* here we have css module in components
what is css module?
=>CSS Module in React is a way to write CSS that's scoped locally to a specific component, instead of globally affecting the whole app.
for that we have to use css file with same name of component file and what will be the file name
=>button.jsx for that css module file name will be button.module.css */
import Input from "./components/Input";
import "./App.module.css";
import ButtonsField from "./components/ButtonsField";
import { useState } from "react";

function App() {
  let buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
    "c",
  ];
  const [inputVal, setInputVal] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "c") {
      setInputVal("");
    } else if (buttonName === "=") {
      const result = eval(inputVal);
      setInputVal(result);
    } else {
      const newVal = inputVal + buttonName;
      setInputVal(newVal);
    }
  };
  return (
    <>
      <Input inputVal={inputVal} />
      <ButtonsField Data={buttons} onButtonClick={onButtonClick} />
    </>
  );
}
export default App;
