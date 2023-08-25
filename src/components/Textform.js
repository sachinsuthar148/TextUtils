import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const toConvertUpper = () => {
    // console.log("upper case button clicked");
    let text1 = text.toUpperCase();
    setText(text1);
  };
  const toConvertLower = () => {
    let text2 = text.toLowerCase();
    setText(text2);
  };
  const toClear = () => {
    let text2 = "";
    setText(text2);
  };

  const toCopy = () => {
    let content=document.getElementById("myBox");
    content.select();
    navigator.clipboard.writeText(content.value);
  }
  const toSpace = () => {
    let content=text.split(/[ ]+/);
    setText(content.join(" "));
  
  }

  const onChangeHandler = (Event) => {
    // console.log("Something added to the text");
    setText(Event.target.value);
  };
  return (
    <>
    <div className="mb-3">
      <h2 className="my-4">{props.heading}</h2>
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        placeholder="enter text here"
        onChange={onChangeHandler}></textarea>
      <button className="btn btn-primary" onClick={toConvertUpper}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-3" onClick={toConvertLower}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2 my-3" onClick={toClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2 my-3" onClick={toCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2 my-3" onClick={toSpace}>
        Remove Extra Space
      </button>
    </div>
    <div className="container">
        <h3>Your text summary...</h3>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  );
}
