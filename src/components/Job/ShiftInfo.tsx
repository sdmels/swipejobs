import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Shift } from 'models/Jobs';
import { formatDate } from 'utils';

interface Props {
  shifts: Shift[];
}

const ShiftInfo = ({ shifts }: Props) => {
  return (
    <li className="border-bottom">
      <FaCalendarAlt size="1.75rem" />
      <div className="job__details-info">
        <h5>Shift Dates</h5>
        <ul className="sub-listing ">
          {shifts.map((shift: Shift) => (
            <li key={shift.startDate}>{formatDate(shift)}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ShiftInfo;
