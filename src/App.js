import React, { useState } from "react";
import About from "./Components/About"
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light"); //weather the dark mode is enabled or not
  const [textMode, setTextMode] = useState("Enable");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setTextMode("Disable");
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.transition = "0.5s";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setTextMode("Enable");
      setMode("light");
      document.body.style.transition = "0.5s";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} textMode={textMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Routes>
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
