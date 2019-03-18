import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <p className="Company__name">Spotaroom</p>
          <nav className="App__menu">
            <a className="Company-info" href="">The company</a>
            <a className="Working-info" href="">How we work</a>
            <a className="Contact-info" href="">Contact us</a>
          </nav>
        </header>

        <main className="Main-section">
          <div className="Room-card__container">
            <img className="Room__image"></img>

            <div className="Room__info">
              <p className="Room__description"></p>
              <p className="Room__price"></p>
            </div>

            <div className="Button__container">
              <button type="Button" className="Details__button">More Details</button>
              <button type="Button" className="Book__button">Book now!</button>
            </div>
          
          </div>
        </main>
      </div>
    );
  }
}

export default App;
