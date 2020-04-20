import React from 'react';
import './Card.scss';

interface Props {
  title: string;
  imageUrl: string;
  info: string;
  id: string;
  address: string;
}

const Card = (props: Props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.imageUrl} alt={`Card image for ${props.id}`} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.info}</p>
        <p className="card-text">{props.address}</p>
        <button className="btn btn-primary">More info</button>
      </div>
    </div>
  );
};

export default Card;
