import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default App;
