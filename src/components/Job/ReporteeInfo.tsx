import React from 'react';
import { formatPhoneNumber } from 'utils';
import { FaRegUserCircle } from 'react-icons/fa';

interface Props {
  name: string;
  phoneNumber: string;
}

const ReporteeInfo = ({ name, phoneNumber }: Props) => {
  return (
    <li>
      <FaRegUserCircle size="1.75rem" />
      <div className="job__details-info">
        <h5>Report to</h5>
        <p>
          {name} {formatPhoneNumber(phoneNumber)}
        </p>
      </div>
    </li>
  );
};

export default ReporteeInfo;
