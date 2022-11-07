import './App.css';
import { useState,useEffect } from 'react';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';

function App() {

  const [message, setMessage] = useState("Hello World.");
  const [hello, setHello] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    
  }, [message]);

  const changeMessage = () => {
    if(hello){
      setMessage("Hello World.");
      setHello(false);
    }else{
      setMessage("Bye World.");
      setHello(true);
    }
  }

  return (
    <div className="App"> 
      <UseState
        label="State Message: "
        text={message}
      />
      <UseEffect
        counter={count}
      />
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}

export default App;
