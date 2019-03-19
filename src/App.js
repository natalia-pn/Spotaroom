import React, { Component } from 'react';
import './styles/App.scss';
import RoomsList from './components/RoomsList';
import Header from './components/Header';
import { getRooms } from './services/RoomsRequest';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homecards: []
    }
  }

  componentDidMount() {
    getRooms() 
      .then(data => {
        const homeResults = data.homecards;

        this.setState({homecards: homeResults})
      })
  }


  render() {

    const { homecards } = this.state;
    return (
      <div className="App">
        <header className="App__header">
         <Header />
        </header>

        <main className="Main-section">
          <div className="Rooms__container">
            <RoomsList homecards={homecards}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
