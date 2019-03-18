import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoomCard from './RoomCard';

class RoomsList extends Component {
    render() {
        const { homecards } = this.props;
        
        return(
            <ul className="Rooms__list">
                {homecards.map((card, index)=> {
                    return(
                        <RoomCard image={card.photoUrls.homecardHidpi} description={card.title} price={card.pricePerMonth} currencySymbol={card.currencySymbol} index={index}/>
                    )}
                )}
            </ul>

        );
    }
}

RoomsList.propTypes = {
    homecards: PropTypes.array
}

export default RoomsList;