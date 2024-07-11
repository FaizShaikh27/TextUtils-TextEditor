import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick=()=>{
        setText(" ");
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }
    const[text,setText]= useState('');
  return (
    <>
    <div className='container' style = {{color: props.mode==='light'?'#333':'#fff'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea  className="form-control" value={text} style = {{backgroundColor: props.mode==='dark'?'#333':'#fff',color: props.mode==='light'?'#333':'#fff' }} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='light'?'#333':'#fff'}}>
        <h2>Your text summary</h2>
        <p>{!text?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to preview it here"}</p>
    </div>
    </>
  
  )
}
