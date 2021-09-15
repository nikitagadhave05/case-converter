import React, { useState } from "react";
export default function TextForm(props) {

  const [text, setText] = useState("");
  let upperBtn = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  let lowerBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  let clearBtn = () => {
    let newText = "";
    setText(newText);
  };
  let reverseBtn = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  let clearSpaceBtn = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  let copyBtn = () => {
    let txtArea = document.getElementById("textarea");
    txtArea.select();
    navigator.clipboard.writeText(txtArea.value);
  };
  let changeMethod = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h4 className="my-1" style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.title}
        </h4>
        <textarea
          className="form-control my-2"
          value={text}
          onChange={changeMethod}
          id="textarea"
          rows="7"
          style={{ backgroundColor: props.mode === "dark" ? "rgb(35 38 42)" : "white", color: props.mode === "dark" ? "white" : "#2a2d30" }}
        ></textarea>
      </div>
      <div className="container">
        <button className="btn mybtn mx-2 my-2"  style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}} onClick={upperBtn}><i class="fa fa-arrow-up mx-2"></i>
          Click to Uppercase
        </button>
        <button className="btn mybtn mx-2 my-2" style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}} onClick={lowerBtn}><i class="fa fa-arrow-down mx-2"></i>
          Click to Lowercase
        </button>
        <button className="btn mybtn  mx-2 my-2" style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}} onClick={clearBtn}><i class="fa fa-times mx-2"></i>
          Clear
        </button>
        <button className="btn mybtn mx-2 my-2" style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}} onClick={reverseBtn}><i class="fa fa-retweet mx-2"></i>
          Reverse
        </button>
        <button className="btn mybtn mx-2 my-2" style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}} onClick={clearSpaceBtn}><i class="fa fa-eraser mx-2"></i>
          Remove Extra Spaces
        </button>
        <button className="btn mybtn mx-2 my-2" style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}} onClick={copyBtn}><i class="fa fa-paste mx-2"></i>
          Copy Text to Clipboard
        </button>

        <div
          className="my-1"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <p>
            {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.
          </p>
        </div>

        <div className="card text-white preview mb-2" style={{ backgroundColor: props.mode === "dark" ? "rgba(122,120,119,1)" : "rgb(50, 44, 99)", color: "white"}}>
          <div className="card-header"> See Preview</div>
          <div className="card-body">
            <p className="card-text">{text}</p>
          </div>
        </div>
        <div
          className="my-1"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <p>
            {0.008 * text.split(" ").length} <small> minutes to read</small>
          </p>
        </div>
      </div>
    </>
  );
}
