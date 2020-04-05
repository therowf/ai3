import React from 'react';
import logo from './logo.svg';
import './App.css';

import Speech from 'react-speech';

class App extends React.Component{
 constructor(porps){
   super(porps)
   this.state = {isauto:false}
   this.handleStart = this.handleStart.bind(this)
   this.handleStop = this.handleStop.bind(this)
   this.fget = {complete:false, status:false}
 }
  handleStart(){

    this.setState((state, props) => {
      return {isauto: true};
    });
}
refe(){
  setInterval(() => {
    if(this.fget.complete){
      this.handleStop();
      console.log(this.fget.status)
      this.handleStart();
    }
  }, 1000);
}

  handleStop(e){
    this.setState((state, props) => {
      return {isauto: false};
    });
}

componentDidMount(){
  var speechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;

  var recognition = new speechRecognitionConstructor();
      recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
     
  
      var synth = window.speechSynthesis || window.webkitSpeechSynthesis;

      var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
      var utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');
      
      synth.speak(utterance1);
      synth.speak(utterance2);
  
}

  render() {
  return (
    <div className="App">

   <header className="App-header">
   
     
      <button onClick={this.handleStart}>start</button>
      <button onClick={this.handleStop}>stop</button>
      
        <h3 id="nod">AutoSpeeker</h3>
        <Speech text="This will work if you want, but please be wait to get more." />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
