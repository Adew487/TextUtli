import Header from "./components/Header";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [txt, setTxt] = useState("Enable Dark Mode");
  const [txt1, setTxt1] = useState("Enable Green Mode");
  const [alert, setAlert] = useState(null);
  const [clr, setClr] = useState("light");

  const toggleMode1 = () => {
    if (clr === "light") {
      setClr("Green");
      setTxt1("Enable light Mode");
      document.body.style.backgroundColor = "Green";
      document.body.style.color = "white";
    } else {
      setClr("light");
      setTxt1("Enable Green Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const showALert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTxt("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showALert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setTxt("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showALert("Light mode has been enabled", "success");
    }
  };
  return (
    <>

    {/* By Routing */}

      <BrowserRouter>
        <Header
          title="Adeel"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          txt={txt}
          txt1={txt1}
          clr={clr}
        />
        <Alert alert={alert} />
        <div className="container mt-5">
          <Routes>
            <Route
              path="/"
              element={<Textform heading="Enter the text to analyze" />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* Simple */}

      {/* <Header
        title="Adeel"
        mode={mode}
        toggleMode={toggleMode}
        toggleMode1={toggleMode1}
        txt={txt}
        txt1={txt1}
        clr={clr}
      />
      <Alert alert={alert} />
      <div className="container mt-5">
        <Textform heading="Enter the text to analyze" />
      </div>
      <About /> */}
    </>
  );
}

export default App;
