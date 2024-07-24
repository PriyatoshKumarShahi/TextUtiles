
import React, { useState } from 'react'

export const TextForm = (props) => {
  const [text, setText] = useState('');

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to Uppercase', 'Success')
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to Lowercase', 'Success')

  }
  const handleOnChange=(event)=>{
    console.log('clicked');
    setText(event.target.value)
  }
  const handleCopy = ()=>{
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard', 'Success')
  }

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert(' Extra Spaces removed Successfully', 'Success')
}
const speak = ()=>{
  let msg = new 
  SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);

}
const handleCapitalise = ()=>{
  let newText= text.split(" ").map(el=> el.charAt(0).toUpperCase()+el.slice(1)).join(" ");
  setText(newText)
  props.showAlert('First letter Capitalised Successfully', 'Success')
}
const handlePrintClick = ()=>{
  let text = document.getElementById("myBox").innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = text;
  window.print();
  document.body.innerHTML = originalContents;
  props.showAlert('Printed Successfully', 'Success')
}
const replace = ()=>{
  let a=prompt("Find the word to replace");
  let b=prompt("Enter the word to replace with");
  let newText = text.replaceAll(a,b);
  setText(newText);
  props.showAlert('Replaced Successfully', 'Success')
}


  return (
    <>
<div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
<h1 >
  {props.heading}
</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
<button className="btn btn-primary mx-2" onClick={handleCapitalise}>Capitalise the first letter</button>
<button className="btn btn-primary mx-2" onClick={handlePrintClick}>Print</button>
<button className="btn btn-primary mx-2" onClick={replace}>Replace text</button>
</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text : "Enter something in the textbox above to preview it"}</p>
</div>
    </>
  )
} 