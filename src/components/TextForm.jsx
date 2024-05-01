import React from 'react'
import { useState } from 'react'




export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');


    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")

    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleClearClick = () => {

        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success")
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied", "success")
    }
     
    const handleExtraSpaces =()=>{
        let newText =text.split( /[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed", "success")
    }

    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'? 'white': '#042743'}}>
                <h3>{props.heading}</h3>

                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? '#042743': 'white',color: props.mode ==='dark'? 'white': 'black'}} id="myBox" rows="8" cols="30"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'? 'white': '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} minutes will require to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    );
}
