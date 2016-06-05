import React from 'react';
import moment from 'moment';

const FoodCard = ({image, title, date, description, kcal}) => {
  const day = (moment(date).startOf('day').isSame(moment().startOf('day'))) ? 'today' : '';
  const time = (moment(date).format('h:mm a'));
  return (
    <div className="c-food-card">
      <div className="c-food-card__image" style={{backgroundImage: 'url(' + image + ')'}}>
      </div>
      <div className="c-food-card__text">
        <h1>{title}</h1>
        <p className="c-food-card__date">Eaten {day} at {time}</p>
        <p className="c-food-card__description">{description}</p>
        <p className="c-food-card__kcal">{kcal} <small>kcal</small></p>
      </div>
    </div>
  );
};

export default FoodCard;