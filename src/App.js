import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SpeechRecognizer } from 'react-speech-recognizer-component';
import Speech from 'react-speech';
import { DictateCheckbox } from 'react-dictate-button';
class App extends React.Component{
 constructor(porps){
   super(porps)
   this.state = {isauto:false}
   this.handleStart = this.handleStart.bind(this)
   this.handleStop = this.handleStop.bind(this)
 }
  handleStart(){
    this.setState((state, props) => {
      return {isauto: true};
    });
}


  handleStop(e){
    this.setState((state, props) => {
      return {isauto: false};
    });
}

  render() {
  return (
    <div className="App">
   <header className="App-header">
   <DictateCheckbox
    className="my-dictate-checkbox"
    grammar="#JSGF V1.0; grammar districts; public <district> = Redmond | Bellevue;"
    onDictate={ this.handleDictate }
    onProgress={ this.handleProgress }
  >
    
    Start/stop
  </DictateCheckbox>
      <SpeechRecognizer
        startSpeechRecognition={this.state.isauto}
        onError={this.onError}
        continuous={false}
      >
          {({status, results, formattedResults, transcripts, error}) => {
            return (
              <>
                {transcripts && transcripts.length && <p>{transcripts.join(', ')}</p>}
              </>
            );
          }}
      </SpeechRecognizer>
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
