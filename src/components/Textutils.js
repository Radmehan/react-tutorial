import React, {useState} from 'react'

function Textutils(props) {
    const [text, setText] = useState("Enter your text here ...");
    // text = "new text" //wrong way to change state
    // setText("new text") //correct way to change state

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        // console.log('Upper case cllicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log('Upper case cllicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <>
            <div className='container my-3'>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="text" rows="8"></textarea>
                </div>
            </div>
            <div className="container">
                <button className="btn btn-sm btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-sm btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters in your text. You need {text.split(" ").length*.008} minutes to complete reading the text.</p>
                <h1 className='my-2'>Text Preview</h1>
                <p>{text}</p>
            </div>

        </>
    )
}

export default Textutils
