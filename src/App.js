import { useState, useCallback } from "react";
import "./styles.css";

import { ChildArea } from "./ChildArea";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickShow = (event) => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="App">
      {/* <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickShow}>show</button>
      <ChildArea open={open} onClickClose = {onClickClose}/> */}
      <Home />
      <Page1 />
      <Page2 />
    </div>
  );
}
