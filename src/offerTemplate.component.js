import React from 'react';
import { render } from 'react-dom';
import css from '../style/offerTemplate.css';

export default class OfferTemplate extends React.Component {

       
        render() {
            return (
                <div className="templateSpacing">
                   <img src="http://organicshop.in/media/wysiwyg/essential-oils-22.png" className="templateOffers"/>
                   <img src="http://organicshop.in/media/wysiwyg/women-health-small-22.png" className="templateOffers"/>
                   <img src="http://www.organicgarden.co.in/media/wysiwyg/10_new.jpg" className="templateOffers"/>
                </div>
            )
        }
      

}