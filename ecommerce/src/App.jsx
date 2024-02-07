import { useState } from "react";
import { ToastContainer } from "react-toastify";
//Css
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//Components
import Header from "./layouts/Header";

function App() {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <Header setConfirm={setConfirm} />
      <ToastContainer />
    </>
  );
}

export default App;
