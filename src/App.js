import React, { Component } from 'react';
import './styles/App.scss';
import RoomsList from './components/RoomsList';
import Header from './components/Header';
import { getRooms } from './services/RoomsRequest';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homecards: [],
      homePrices: []
    }

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.orderDescendingPrice = this.orderDescendingPrice.bind(this);
  }

  componentDidMount() {
    getRooms() 
      .then(data => {
        const homeResults = data.homecards;

        this.setState({homecards: homeResults})
      })
  }

  handlePriceChange(e) {

    const optionValue = e.currentTarget.value;

    this.orderDescendingPrice();
  }

  orderDescendingPrice() {
    const descendingPrices = this.state.homecards.sort(function(a, b){return b.pricePerMonth-a.pricePerMonth});
   
    this.setState({homecards: descendingPrices});
    console.log(descendingPrices)
  }



  render() {
    const { homecards } = this.state;

    return(
      <div className="App">
        <header className="App__header">
          <Header />

          <div className="Price-filter__container">
            <select className="Price-filter" onChange={this.handlePriceChange}>
                <option className="Price__option" value="Ascending">Ascending</option>
                <option className="Price__option" value="Descending">Descending</option>
              </select>
          </div>
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
