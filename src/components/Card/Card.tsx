import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  title: string;
  imageUrl: string;
  info: string;
  id: string;
  address: string;
}

const Card = (props: Props) => {
  const history = useHistory();

  const { title, imageUrl, info, id, address } = props;

  const handleClick = () => {
    history.push(`/job/${id}`);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={imageUrl} alt={`job type for ${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{info}</p>
        <p className="card-text">{address}</p>
        <button className="btn btn-primary" onClick={handleClick}>
          More info
        </button>
      </div>
    </div>
  );
};

export default Card;
