// import { useState, useCallback } from "react";
import "./styles.css";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";

// import { ChildArea } from "./ChildArea";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page1DetailA } from "./components/Page1DetailA";
import { Page1DetailB } from "./components/Page1DetailB";

export default function App() {
  console.log("App");
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);
  // const onChangeText = (event) => {
  //   setText(event.target.value);
  // };
  // const onClickShow = (event) => {
  //   setOpen(!open);
  // };

  // const onClickClose = useCallback(() => {
  //   setOpen(false);
  // }, [setOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickShow}>show</button>
      <ChildArea open={open} onClickClose = {onClickClose}/> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          {/* <Route path="detailA" element={<Page1DetailA/>} />
          <Route path="detailB" element={<Page1DetailB/>} /> */}
        </Route>
        <Route path="/page1/detailA" element={<Page1DetailA />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
