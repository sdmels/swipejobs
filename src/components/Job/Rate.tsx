import React from 'react';
import { formatNumber, formatAmount } from 'utils';

interface Props {
  distance: number;
  wage: number;
}

const Rate = ({ distance, wage }: Props) => {
  const formattedDistance = formatNumber(distance, 1);
  const formattedWage = formatAmount(wage / 100);
  return (
    <div className="bg-secondary d-flex mt-3">
      <div className="col-md-6 pt-2 pb-2">
        <small className="text-light">Distance</small>
        <p className="h5 text-white">{formattedDistance} miles</p>
      </div>
      <div className="col-md-6 text-right  pt-2 pb-2">
        <small className="text-light">Hourly Rate</small>
        <p className="h5 text-white">
          <sup>$</sup>
          {formattedWage}
        </p>
      </div>
    </div>
  );
};

export default Rate;
