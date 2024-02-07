import { useState } from "react";
import { ToastContainer } from "react-toastify";
//Css
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//Components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ScrollToUpButton from "./components/ScrollToUpButton";
function App() {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <Header setConfirm={setConfirm} />
      <Footer />
      <ToastContainer />
      <ScrollToUpButton />
    </>
  );
}

export default App;
