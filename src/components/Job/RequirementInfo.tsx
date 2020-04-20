import React from 'react';
import { FaTools } from 'react-icons/fa';

interface Props {
  requirements: string[];
}

const RequirementInfo = ({ requirements }: Props) => {
  return (
    <li className="border-bottom">
      <FaTools size="1.75rem" />
      <div className="job__details-info">
        <h5>Requirement</h5>
        <ul className="sub-listing">
          {requirements.map((requirement: string, index: number) => (
            <li className=" list-type" key={index}>
              {requirement}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default RequirementInfo;
