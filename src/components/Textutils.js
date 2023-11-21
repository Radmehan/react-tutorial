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
            </div>

        </>
    )
}

export default Textutils
