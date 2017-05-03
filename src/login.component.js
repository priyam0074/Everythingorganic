import React from 'react';
import { render } from 'react-dom';
import css from '../style/mainPage.css';


export default class LoginComponent extends React.Component {
 

	render() {
		
		return (
			<div className="headerMain">
    <header className="headerAlign">
        <div className="headerItems">
            <div id="blockAlignment">
                <img src="../image/organic.jpg" className="imageLogo" alt="everythingOrganic" />
                <div className="logoText text-left"> Everything
                    <span><small>Organic</small></span>
                </div>
            </div>
            <div className="navAlignment">
             <a href = "#" className="subItems"> fruits </a>
                   
            </div>
            <div className="navAlignment">
             <a href = "#" className="subItems"> vegetables </a>
                   
            </div>
            <div className="navAlignment">
             <a href = "#" className="subItems"> cosmetics </a>
                   
            </div>
            <div className="searchBox">
            <input type="text" placeholder="search"/>
            <a className="searchIcon">
            <span className="fa fa-search" aria-hidden="true">
            </span></a>
            </div>

            <div className="loginIcon">
             <span className="fa fa-user" aria-hidden="true"></span> 
            </div>
            <div className="chartIcon">
            <span className="fa fa-cart-arrow-down" aria-hidden="true"></span>
            </div>
        </div>

    </header>
</div>)
	}
}