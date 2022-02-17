import React from 'react';
import { Card } from '../card/card.component';

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.length === 0 && <h3>Not find monster</h3>}
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
