import React from 'react';
import { render } from 'react-dom';
import css from '../style/mainPage.css';


export default class LoginComponent extends React.Component {
 

	render() {
		
		return (
			<div className="headerMain">
				<header className = "headerAlign">
					<div className = "headerItems" >
						<div>
							<img src= "../image/organic.jpg" className="imageLogo" alt="everythingOrganic"/>
							<div className="logoText text-left"> Everything 
								<span><small>Organic</small></span>
							</div>

							</div>
						</div>
					
					</header>
				</div>)
	}
}