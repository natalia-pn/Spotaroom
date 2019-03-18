import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomsList extends Component {
    render() {
        const { homecards } = this.props;
        
        return(
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