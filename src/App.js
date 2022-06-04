import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export function App() {
  console.log("App");
  const [text, setText] = useState("");
  const onChangeText = (e) => setText(e.target.value);
  const [open, setOpen] = useState(false);
  const onClickOpen = () => setOpen(!open);
  console.log(text);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
