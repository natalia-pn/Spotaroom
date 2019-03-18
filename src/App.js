import React, { Component } from 'react';
import './App.css';
import { get } from 'https';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homecards: []
    }
  }

  componentDidMount() {
    this.getRooms();
  }

  getRooms() {
     fetch ('/api/homecards')
      .then(response => response.json())
      .then(data => {console.log(data)
        const homeResults = data.homecards;

        this.setState({homecards: homeResults})
      })
  }



 


  render() {

    const { homecards } = this.state;
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
          <ul className="Rooms__list">
            {homecards.map((card, index)=> {
              return(
              <li className="Room-card__container" key={index}>
                <img className="Room__image" src={card.photoUrls.homecardHidpi} alt={card.title}></img>

                <div className="Room__info">
                  <p className="Room__description">{card.title}</p>
                  <p className="Room__price">{`${card.pricePerMonth}€`}</p>
                </div>

                <div className="Button__container">
                  <button type="Button" className="Details__button">More Details</button>
                  <button type="Button" className="Book__button">Book now!</button>
                </div>
              </li>

            )})}
         </ul>
        </main>
      </div>
    );
  }
}

export default App;
