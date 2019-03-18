import React, { Component } from 'react';
import './App.css';
import RoomsList from './components/RoomsList';

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
          <RoomsList homecards={homecards}/>
        </main>
      </div>
    );
  }
}

export default App;
