import React, { Component } from 'react';
import logo from './logo.svg';
import Travel from './Travel.js';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">My Trips</h1>
      </header>
      <Travel
          destination="Madrid"
          country="Spain"
          photo="https://assets3.thrillist.com/v1/image/2699171/size/gn-gift_guide_variable_c.jpg"
          distance="2000"
        />

      <Travel
          destination="Kyoto"
          country="Japan"
          photo="https://dw8stlw9qt0iz.cloudfront.net/mBR3l0mmM8ADfLpZOClXcgr9t1w=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/eb770df9-213b-4be4-cab7-84240f970ab7.jpg"
          distance="10.000"
        />
    </div>
    );
  }
}

export default App;
