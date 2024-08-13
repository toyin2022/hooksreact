import Navbar from "./Navbar";
import Button from "./Button";
import { useState } from "react";
import myGif from "./assets/loadd.gif";
import { ImSpinner } from "react-icons/im";

import Load from "./assets/loading.json";

const App = () => {
  const [bgcolor, setbgcolor] = useState("white");
  const [loading, setloading] = useState(false);
  const changeToBlue = () => {
    setbgcolor("blue");
  };
  const changeToRed = () => {
    setbgcolor("red");
  };
  const handleLoading = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  return (
    <div>
      <Navbar
        bgcolor={bgcolor}
        textcolor={bgcolor === "black" ? "white" : "black"}
      />
      <Button label="Blue" color="blue" onClick={changeToBlue} />
      <Button label="Red" color="red" onClick={changeToRed} />
      <Button
        label="Yellow"
        color="yellow"
        onClick={() => setbgcolor("yellow")}
      />
      <Button label="Green" color="green" onClick={() => setbgcolor("green")} />
      <Button label="Black" color="black" onClick={() => setbgcolor("black")} />
      <button
        style={{ backgroundColor: "orange" }}
        className="btn"
        onClick={handleLoading}
      >
        load
        {loading ? (
          <img width={20} src={myGif} alt="" className="spinner" />
        ) : (
          ""
        )}
      </button>
      {/* {loading ? <img src={myGif} alt="" /> : <p>No loader</p>} */}
    </div>
  );
};

export default App;
