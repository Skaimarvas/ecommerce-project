import { useState } from "react";
import { ToastContainer } from "react-toastify";
//Css
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//Components
import Header from "./layouts/Header";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <ToastContainer />
    </>
  );
}

export default App;
