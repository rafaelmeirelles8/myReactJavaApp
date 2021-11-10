import React, { Component } from 'react';
import MyApp from './components/myReactApplication/myReactApplication';
import './App.css';
import './bootstrap.css';
 
class App extends Component {

  render() {
    return (
      <div className="App">
        {/*<Counter />*/} 
        <MyApp />               
      </div>
    );
  }
}




/*class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        <h1>My world!</h1>
        <FirstComponent title={"First Component"}/>
        <SecondComponent title={"Second Component"}/>        
      </div>
    );
  }
}*/

export default App;