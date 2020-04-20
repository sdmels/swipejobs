import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { formatNumber } from 'utils';

interface Props {
  distance: number;
  address: string;
}

const LocationInfo = ({ distance, address }: Props) => {
  const formattedDistance = formatNumber(distance, 1);
  return (
    <li className="border-bottom">
      <FaMapMarkerAlt size="1.75rem" />
      <div className="job__details-info">
        <h5>Location</h5>
        <p className="mb-0">{address}</p>
        <small>{formattedDistance} miles from your search location</small>
      </div>
    </li>
  );
};

export default LocationInfo;
