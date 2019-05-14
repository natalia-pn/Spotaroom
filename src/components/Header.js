import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() {
        return(
            <Fragment>
                <p className="Company__name">Spotaroom</p>
                
                <nav className="App__menu">
                    <a className="Company-info" href="">The company</a><span>-</span>
                    <a className="Working-info" href="">How we work</a><span>-</span>
                    <a className="Contact-info" href="">Contact us</a>
                </nav>
            </Fragment>
         );
     }
 }
 
 export default Header;
 
 
