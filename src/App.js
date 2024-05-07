import React, {useState} from 'react';
//Import components
import TweetList from "./components/TweetList"
import CreateTweet  from './components/CreateTweet';

function App() {
  //State
  const [name, setName] = useState("Kemal")
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "Hello I am Kemal"

  return (
    <div>
       <CreateTweet 
       textInput = {textInput} 
       setTextInput = {setTextInput} 
       tweets= {tweets} 
       setTweets= {setTweets}/>
       <TweetList  name= {name} tweets= {tweets} setTweets= {setTweets}/>
    </div>
  );
}

export default App;
