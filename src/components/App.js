import React, { Component } from 'react';
require('./../sass/main.scss');

import FoodCard from './food-card.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <FoodCard
          image="https://pixabay.com/static/uploads/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
          title="Smoked salmon"
          date="2016-06-01T22:17:24.133Z"
          description="Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem!"
          kcal="1367"
        />
      </div>
    );
  }
}
