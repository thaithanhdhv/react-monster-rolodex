import React from 'react';

export const Card = (props) => (
  <div className="card-item">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
    <h3>{props.monster.name}</h3>
  </div>
);
