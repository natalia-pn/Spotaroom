import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomCard extends Component {
    render() {
        const { image, description, price, currencySymbol } = this.props;
        
        return(
            <li className="Room-card__container">
                <img className="Room__image" src={image} alt={description}></img>

                <div className="Room-info-action__container">
                    <div className="Room__info">
                        <p className="Room__description">{description}</p>
                        <p className="Room__price">{`${price}${currencySymbol}`}</p>
                    </div>

                    <div className="Button__container">
                        <button type="Button" className="Details__button">More Details</button>
                        <button type="Button" className="Book__button">Book now!</button>
                    </div>
                </div>  
            </li>
        );
    }
}

RoomCard.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.number
}

export default RoomCard;