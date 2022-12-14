import "./App.css";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [displayState, setDisplayState] = useState(false);
  const [pairState, setPairState] = useState([]);

  return (
    <div>
      <h1 className="title">Pair Maker</h1>
      <Display
        state={state}
        setState={setState}
        displayState={displayState}
        setDisplayState={setDisplayState}
        pairState={pairState}
        setPairState={setPairState}
      />
    </div>
  );
}
export default App;
