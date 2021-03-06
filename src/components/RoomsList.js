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
                        <RoomCard 
                            key={index}
                            image={card.photoUrls.homecardHidpi} 
                            description={card.title} 
                            price={card.pricePerMonth} 
                            currencySymbol={card.currencySymbol} 
                        />
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