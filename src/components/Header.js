import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() {
        return(
            <Fragment>
                <p className="Company__name">Spotaroom</p>
                
                <nav className="App__menu">
                    <a className="Company-info" href="https://www.spotahome.com/about-us">The company</a><span>-</span>
                    <a className="Working-info" href="https://rent.spotahome.com/work-with-us">How we work</a><span>-</span>
                    <a className="Contact-info" href="https://www.spotahome.com/contact-us">Contact us</a>
                </nav>
            </Fragment>
         );
     }
 }
 
 export default Header;
 
 
