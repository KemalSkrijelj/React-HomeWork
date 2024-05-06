import React, {useState} from 'react';
//Import components
import TweetList from "./components/TweetList"
import CreateTweet  from './components/CreateTweet';

function App() {
  const [name, setName] = useState("Kemal")
  const message = "Hello I am Kemal"
  return (
    <div>
       <CreateTweet/>
       <TweetList setName={setName} name= {name} message= {message}/>
    </div>
  );
}

export default App;
