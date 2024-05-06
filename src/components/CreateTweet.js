import React, {useState} from "react";

function CreateTweet(){
  //State
  const [textInput, setTextInput] = useState("");
  //Functions
  function userInputHandler(e) {
    setTextInput(e.target.value)
  }
  return(
    <form>
       <textarea
        value={textInput}
        onChange={userInputHandler} 
        cols="50" rows="5"></textarea>
       <button>Submit</button>
       <h1 onClick={() => setTextInput("")}>{textInput}</h1>
    </form>
  )
}

export default CreateTweet