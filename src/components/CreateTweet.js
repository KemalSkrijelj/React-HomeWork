import React, {useState} from "react";

function CreateTweet({tweets, setTweets,setTextInput, textInput}){

  //Functions
  function userInputHandler(e) {
    setTextInput(e.target.value)
  }
  function submitTweetHandler(e) {
    e.preventDefault();
    setTweets([...tweets, textInput])
    setTextInput('')
  }
  return(
    <form onSubmit={submitTweetHandler}>
       <textarea
        value={textInput}
        onChange={userInputHandler} 
        cols="50" rows="5"></textarea>
       <button >Submit</button>
       <h1 onClick={() => setTextInput("")}>{textInput}</h1>
    </form>
  )
}

export default CreateTweet