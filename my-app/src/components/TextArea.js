import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpperChange = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handleLowerChange = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };

  const handleCopy = () => {
    let text=document.getElementById("myForm")
    text.select();
    navigator.clipboard.writeText(text);
  }
  const handleClear = () => {
let newtext=""
settext(newtext)  }
  
  const handleExtraClear = () => {
let newText=text.split(/[ ]+/);
settext(newText.join(" "));
}
  


  const onAlternatingCase = () => {
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
        if ((index % 2) === 0) {
            newtext += text[index].toLowerCase()
        }
        else {
            newtext += text[index].toUpperCase()
        }

    }
    settext(newtext)
}

  const handleOnchange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#191935'}}>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="myForm"
          style={{backgroundColor:props.mode==='dark'?'#191935':'white', color: props.mode==='dark'?'white':'#191935'}}
          rows="10"
        ></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperChange}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerChange}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={onAlternatingCase}>
          Alternate Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraClear}>
          Remove Extra Space
        </button>
      </div>

   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#191935'}}>
   <h2>Text Summary</h2>
  <p>{text.split("").length} Words And {text.length} Letters</p>
  <p>{0.008*text.split("").length} Minute read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>

    </>
  );
}
