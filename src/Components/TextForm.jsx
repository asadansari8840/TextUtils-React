import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    const upValue = text.toUpperCase();
    setText(upValue, myValue);
    props.showAlert("Converted to UpperCase ! ", "success");
  };
  const handleLowClick = () => {
    const lowValue = text.toLowerCase();
    setText(lowValue, myValue);
    props.showAlert("Converted to lowerCase ! ", "success");
  };
  const myValue = (event) => {
    setText(event.target.value);
  };
  const clearTextHandler = () => {
    setText("");
    props.showAlert("Text cleared successfully !", "danger");
  };

  return (
    <>
      <div
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        className="container my-4"
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#252525" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            className="form-control"
            id="forText"
            onChange={myValue}
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn mx-2 btn-primary">
          Convert your text to UpperCase
        </button>
        <button onClick={handleLowClick} className="btn mx-2 btn-secondary">
          Convert your text to lowerCase
        </button>
        <button onClick={clearTextHandler} className="btn btn-danger">
          Clear Text
        </button>
      </div>
      <div
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        className="container my-3"
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} minutes is the average time to read
          this paragraph.
        </p>
        <h2>Preview</h2>
        <p
          style={{
            color: props.mode === 'dark' ? "white" : "black",
            backgroundColor: props.mode === 'dark' ? "#252525" : "white",
            border: "2px groove #252525",
            borderRadius:"20px",
            minHeight: "50px",
            overflow: "wrap",
            textOverflow: "revert-layer",
            marginTop: "10px",
            boxShadow: "0 0 15px yellow",
            padding: "10px",
          }}
        >
        {text.length > 0
          ? text
          : "Write something in the textbox to show preview here !"}
      </p>
    </div>
    </>
  );
};

export default TextForm;
