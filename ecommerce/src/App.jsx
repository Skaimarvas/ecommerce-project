import { useState } from "react";
import { ToastContainer } from "react-toastify";

//Css
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//Layouts
import PageContent from "./layouts/PageContent";

//Components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ScrollToUpButton from "./components/ScrollToUpButton";
import Confirm from "./components/Confirm";

function App() {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <Header setConfirm={setConfirm} />
      <PageContent />
      <Footer />
      <ToastContainer />
      <ScrollToUpButton />
      {confirm && <Confirm confirm={confirm} setConfirm={setConfirm} />}
    </>
  );
}

export default App;
