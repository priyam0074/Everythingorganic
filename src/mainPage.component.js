import React from 'react';
import { render } from 'react-dom';
import HeaderComponent from './header.component.js';
import OfferTemplate from './offerTemplate.component.js';
import CarouselComponent from './carousel.component.js';

export default class MainPageComponent extends React.Component {

    render() {
        return (
            <div>
            <HeaderComponent/>
            <OfferTemplate/>
            <CarouselComponent/>
            </div>
        )
    }
}