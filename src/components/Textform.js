import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Textform(props) {
  //   const [text, setText] = useState("Enter text here");  //for practice
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("uppercase hit" + text); // for testing in console
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Adeel");
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              // id="myBox"
              value={text}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
        <Button variant="secondary" onClick={handleUpClick}>
          Convert to Uppercase
        </Button>
        <Button
          variant="Primary"
          onClick={handleLoClick}
          className="ms-2 btn-primary"
        >
          Convert to Lowercase
        </Button>

        <Button variant="secondary" onClick={handleClClick} className="ms-2">
          Clear Text
        </Button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.length === 0 ? "0" : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
