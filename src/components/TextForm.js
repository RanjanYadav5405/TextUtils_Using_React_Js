import React, {useState} from 'react'


export default function TextForm(props) {
    

    const handleUpClick= () =>{
        //console.log("Uppercase was clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase!","success")
    }
    const handlelowClick= () =>{
      //console.log("Uppercase was clicked")
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert("converted to lowercase!","success")
  }
  const handleClearClick= () =>{
    //console.log("Uppercase was clicked")
    let newtext=" ";
    setText(newtext)
    props.showAlert("text cleared","success")
}
const handleSentenceCase= () =>{
  //console.log("Uppercase was clicked")
   const lower = text.toLowerCase();
   const newtext = lower.charAt(0).toUpperCase() + lower.slice(1);
  setText(newtext);
  props.showAlert("converted to sentencecase!","success")
}
// const toTitleCase= () =>{
//   //console.log("Uppercase was clicked")
//   let newtext=text.toLowerCase().split('').map((text) =>text.charAt(0).toUpperCase() + text.slice(1)). join();
//   setText(newtext)
// }


    const handleOnChange= (event) =>{
       // console.log("On change");
        setText(event.target.value);
    }
    const[text,setText]=useState(" ")

    //text="new text"; //wrong way to change the state
    // setText("new text");//correct way to change the state


  return (
    <>
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3" >
      <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert into Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>convert into Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleSentenceCase}>convert into SentenceCase</button>
    {/* <button className="btn btn-primary mx-2" onClick={toTitleCase}>convert into TitleCase</button> */}
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className='conatiner my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h3>Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=> {return element.length !==0}).length}  words and {text.split(/\s/).join('').length} characters
</p> 
      <p>{0.008* text.split(" ").filter((element)=> {return element.length !==0}).length} minute read</p> 
      <h3>preview</h3> 
      <p>{text.length>0?text:"Enter Something in your textbox"}</p>

    </div>
    </>
  )
}
